import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  isExpanded = false;

  isShowingAdministrativeOptions = false;

  photoSize = 40;

  title = '';

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.router.events.subscribe(value => {
      this.setTitleDescriptionByRoute();
    });
  }

  ngOnInit(): void {
      this.setTitleDescriptionByRoute();
  }

  setTitleDescriptionByRoute(): void {
      if (this.router.url.includes('products')) {
          if (this.router.url.includes('edit')) {
              this.title = 'Administrativo - Editar Produto';
          } else if (this.router.url.includes('new')) {
              this.title = 'Administrativo - Novo Produto';
          } else {
              this.title = 'Administrativo - Produtos';
          }
      } else {
          this.title = 'Home';
      }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
