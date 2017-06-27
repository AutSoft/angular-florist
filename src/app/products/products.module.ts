import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { PlantsComponent } from './plants/plants.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsComponent, ProductsListComponent, CategoriesComponent, PlantsComponent]
})
export class ProductsModule {
}
