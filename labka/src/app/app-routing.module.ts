import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from '../app/product-list/product-list.component';
import { ProductItemComponent } from '../app/product-item/product-item.component';
import { RootComponent } from '../app/root/root.component';

const routes: Routes = [
  {path:'', redirectTo:'/categories',pathMatch:'full'},
  {path:'categories',component:RootComponent},
  {path:'categories/:categoryId/products',component:ProductListComponent},
  {path:'categories/:categoryId/products/:productId',component:ProductItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
