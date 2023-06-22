import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewAuthRoutingModule } from './view-auth-routing.module';
import { ViewAuthComponent } from './view-auth.component';


@NgModule({
  declarations: [
    ViewAuthComponent
  ],
  imports: [
    CommonModule,
    ViewAuthRoutingModule
  ],
  exports: [
    ViewAuthComponent
  ]
})
export class ViewAuthModule { }
