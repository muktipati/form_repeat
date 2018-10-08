import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() layout;
  pageInfo;
  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private titleService: Title
  ) {
      this
      .router.events.
      filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
          while (route.firstChild) route = route.firstChild;
          
          return route;

      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
          this.titleService.setTitle(event['title']);
          this.pageInfo = event;
          console.log("routeee", this.pageInfo);
      });
  }
  ngOnInit() { }
}
