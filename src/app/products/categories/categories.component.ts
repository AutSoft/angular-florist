import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.switchMap(params => this.categoryService.getCategories(params))
      .subscribe(categories => this.categories = categories, () => {});
  }

}
