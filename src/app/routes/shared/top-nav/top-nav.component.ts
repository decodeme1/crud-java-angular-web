import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  isExpanded = false;

  photoSize = 40;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
