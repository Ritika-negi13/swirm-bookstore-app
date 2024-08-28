import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  currentPath: string = '';

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentPath = this.router.url;
  }
}
