import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {ProductFilterDTO} from '../../shared/product-filter.dto';
import {Product} from '../../shared/product-model';
import {DepartmentService} from '../../shared/department.service';
import {ProductService} from '../../shared/product.service';
import {MatDialog} from '@angular/material/dialog';
import {NotificationService} from 'src/app/routes/shared/notification/shared/notification.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {

    itemToDelete = 0;

    productFilter = new ProductFilterDTO();

    productList: any[] = [];

    departmentList: any[] = [];

    displayedColumns: string[] = ['Código', 'Descrição', 'Departamento', 'Preço', 'Status', 'Ações'];

    @ViewChild('confirmationDialog', {static: false}) confirmationDialogTemplate: any;

    dataSource = new MatTableDataSource<Product>(this.productList);
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private departmentService: DepartmentService,
                private productService: ProductService,
                private dialog: MatDialog,
                private notificationService: NotificationService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.departmentService.findAll().subscribe(departments => this.departmentList.push(...departments));
        this.productService.findAll().subscribe(products => {
            this.productList.push(...products);
            this.dataSource.data = products;
        });
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    clear(): void {
        this.productFilter = new ProductFilterDTO();
        this.search();
    }

    search(): void {
        if (this.productFilter.code === null && this.productFilter.description === null && this.productFilter.departmentId === null ) {
            this.productService.findAll().subscribe(products => {
                this.productList.push(...products);
                this.dataSource.data = products;
            });
        }else {
            this.productService.findByFilter(this.getFormattedFilters()).subscribe(products => {
                this.productList = products;
                this.dataSource.data = products;
            });
        }
    }

    delete(): void {
        const product = this.productList.find(p => this.itemToDelete === p.id);
        product.enabled = false;
        this.dialog.closeAll();
        this.productService.save(product).subscribe(p => {
            this.notificationService.showNotification('registro excluído com sucesso!', 'success');
            this.search();
        });
    }

    openDialog(id: number): void {
        this.itemToDelete = id;
        this.dialog.open(this.confirmationDialogTemplate, {});
    }

    navigateToEdit(id: number): void {
        this.router.navigate([`/administrative/products/edit/${id}`]);
    }

    getFormattedFilters(): ProductFilterDTO {
        if (this.productFilter.description === '') {
            this.productFilter.description = null;
        }
        if (this.productFilter.code === '') {
            this.productFilter.code = null;
        }
        return this.productFilter;
    }
}
