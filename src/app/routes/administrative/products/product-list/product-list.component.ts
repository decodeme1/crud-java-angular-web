import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {ProductFilterDTO} from '../../shared/product-filter.dto';
import {Product} from '../../shared/product-model';
import {DepartmentService} from '../../shared/department.service';
import {ProductService} from '../../shared/product.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from 'src/app/routes/shared/notification/shared/notification.service';
import { Router } from '@angular/router';

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
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  clear(): void {
    this.productFilter = new ProductFilterDTO();
  }

  search(): void {
    console.log(this.productFilter);
    this.productService.findByFilter(this.productFilter).subscribe(products => {
      this.productList = products;
      this.dataSource.paginator = this.paginator;
    })
  }

  delete(): void {
    let product = this.productList.find(p => this.itemToDelete === p.id);
    product.enabled = false;
    this.productService.save(product).subscribe(p => {
      this.notificationService.showNotification('registro excluído com sucesso!', 'success');
      this.router.navigate(['/administrative']);
    });
  }

  openDialog(id: number):void {
    this.itemToDelete = id;
    this.dialog.open(this.confirmationDialogTemplate, {

    })
  }
}
