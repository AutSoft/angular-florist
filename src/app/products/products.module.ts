import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { PlantsComponent } from './plants/plants.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdIconModule, MdOptionModule, MdSelectModule, MdSlideToggleModule
} from '@angular/material';
import { CategoryService } from './categories.service';
import { PlantsService } from './plants.service';
import { ProductsFilterComponent } from './products-filter/products-filter.component';
import { FormsModule } from '@angular/forms';
import { CategoryPipe } from './category.pipe';
import { PlantsPipe } from './plants.pipe';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FlexLayoutModule,
    MdCardModule,
    MdSlideToggleModule,
    MdButtonModule,
    MdIconModule,
    MdCheckboxModule,
    FormsModule,
    MdSelectModule
  ],
  declarations: [
    ProductsComponent, ProductsListComponent, CategoriesComponent, PlantsComponent, ProductsFilterComponent,
    CategoryPipe, PlantsPipe],
  providers: [CategoryService, PlantsService]
})
export class ProductsModule {
}
