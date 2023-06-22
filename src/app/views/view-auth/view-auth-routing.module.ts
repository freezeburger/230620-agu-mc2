import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAuthComponent } from './view-auth.component';

const routes: Routes = [
  {
    path: '',
    component: ViewAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewAuthRoutingModule { }
