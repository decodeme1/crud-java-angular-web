import {Component, OnInit} from '@angular/core';
import {Product} from '../../shared/product-model';
import {ActivatedRoute, Router} from '@angular/router';
import { DepartmentService } from '../../shared/department.service';
import { ProductService } from '../../shared/product.service';
import { NotificationService } from 'src/app/routes/shared/notification/shared/notification.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  isAdding = false;

  product = new Product();

  departmentList: any[] = [];

  constructor(private router: Router, private departmentService: DepartmentService, private productService: ProductService, private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.isAdding = this.router.url.includes('new');
    this.departmentService.findAll().subscribe(departments => this.departmentList.push(...departments));
  }

  save(): void {
    if(this.product.code === '' || this.product.code === undefined || this.product.description === '' || this.product.description === undefined ||
    this.product.price === 0 || this.product.code === undefined || this.product.department === null || this.product.department === undefined) {
      this.notificationService.showNotification("Dados incompletos!", 'alert');
    } else {
      try {
        this.productService.save(this.product).subscribe(product => {})
        this.notificationService.showNotification("Dados salvos com sucesso!", 'success');
        this.router.navigate(['/administrative'])
      } catch (error) {
        this.notificationService.showNotification("Ocorreu um erro inesperado!", 'error');
      }
    }
  }

  delete(): void {

  }
}
