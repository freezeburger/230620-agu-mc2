import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProductRoutingModule } from './view-product-routing.module';
import { ViewProductComponent } from './view-product.component';
import { UiModule } from 'src/app/ui/ui.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ViewProductRoutingModule,
    FormsModule,
    UiModule
  ]
})
export class ViewProductModule { }
