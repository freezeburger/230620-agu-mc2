import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProductRoutingModule } from './view-product-routing.module';
import { ViewProductComponent } from './view-product.component';
import { UiModule } from 'src/app/ui/ui.module';


@NgModule({
  declarations: [
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ViewProductRoutingModule,
    UiModule
  ]
})
export class ViewProductModule { }
