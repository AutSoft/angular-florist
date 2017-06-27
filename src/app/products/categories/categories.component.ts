import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      categories => this.categories = categories,
      () => {}
    );
  }

}
