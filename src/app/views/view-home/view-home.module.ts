import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewHomeRoutingModule } from './view-home-routing.module';
import { UiModule } from '../../ui/ui.module';
import { ViewHomeComponent } from './view-home.component';


@NgModule({
  declarations: [
    ViewHomeComponent
  ],
  imports: [
    CommonModule,
    ViewHomeRoutingModule,
    UiModule
  ]
})
export class ViewHomeModule { }
