import { Component, OnInit } from '@angular/core';
import { Filter } from '../models/filter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  filterChanged(filterObject: Filter) {
    const url = this.router.url.split('?')[0];
    this.router.navigate([url], {queryParams: filterObject});
  }
}
