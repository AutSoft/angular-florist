import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { PlantsComponent } from './plants/plants.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule } from '@angular/material';
import { CategoryService } from './categories.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FlexLayoutModule,
    MdCardModule
  ],
  declarations: [ProductsComponent, ProductsListComponent, CategoriesComponent, PlantsComponent],
  providers: [CategoryService]
})
export class ProductsModule {
}
