import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren:()=> import('./views/view-home/view-home.module').then(m => m.ViewHomeModule)
    ,title:'Homepage'
  },
  {
    path: 'auth',
    loadChildren:()=> import('./views/view-auth/view-auth.module').then(m => m.ViewAuthModule)
    ,title:'Connection'
  },
  {
    path: 'product',
    loadChildren:()=> import('./views/view-product/view-product.module').then(m => m.ViewProductModule)
    ,title:'Product'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
