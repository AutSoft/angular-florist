import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { PlantsComponent } from './plants/plants.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'categories',
        component: ProductsListComponent,
        children: [
          {
            path: '',
            component: CategoriesComponent
          },
          {
            path: ':catId',
            component: PlantsComponent
          }
        ]
      },
      {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
