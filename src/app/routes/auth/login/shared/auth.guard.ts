import { ActivatedRoute, CanActivateChild, Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { User } from './user.model';

@Injectable()
export class AuthGuard implements CanActivateChild, CanActivate {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivateChild(route, state);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user: User = this.getData('user');
    if(user===null || !user.isAuthenticated) {
      this.router.navigate(['/login'])
    }
    return user.isAuthenticated;
  }

  getData(key: string | null): any {
    if (localStorage.getItem('user') === null || localStorage.getItem('user') === undefined) {
      return null;
    }
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  setData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

}
