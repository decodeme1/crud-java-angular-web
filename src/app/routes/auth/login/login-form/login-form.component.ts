import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../shared/user.model';
import {NotificationService} from '../../../shared/notification/shared/notification.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user = new User();

  constructor(private notificationService: NotificationService, private router: Router) {}

  ngOnInit(): void {
  }


  login(): void {
    if (localStorage.getItem('user') !== null || localStorage.getItem('user') !== undefined) {
      localStorage.removeItem('user');
    }
    if (this.user.username === null || this.user.password === null || this.user.username === '' || this.user.password === '') {
      this.notificationService.showNotification('Todos os campos devem ser preenchidos.', 'alert');
    } else if (this.user.username === 'admin' && this.user.password === 'admin') {
      this.user.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/administrative']);
    } else {
      this.notificationService.showNotification('Usuário e/ou senha inválido.', 'error');
    }
  }

}
