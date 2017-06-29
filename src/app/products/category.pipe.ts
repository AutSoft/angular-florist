import { Pipe, PipeTransform } from '@angular/core';
import { Category } from './models/category';

@Pipe({name: 'categoryPipe'})
export class CategoryPipe implements PipeTransform {
  transform(categories: Category[]) {
    if (!categories) {
      return [];
    }
    return categories.filter(category => category.plantsCount > 0);
  }

}
