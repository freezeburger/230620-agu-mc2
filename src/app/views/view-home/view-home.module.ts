import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewHomeRoutingModule } from './view-home-routing.module';
import { UiModule } from '../../ui/ui.module';
import { ViewHomeComponent } from './view-home.component';
import { AbstractViewComponent } from '../abstract-view/abstract-view.component';


@NgModule({
  declarations: [
    ViewHomeComponent
  ],
  imports: [
    CommonModule,
    ViewHomeRoutingModule,
    UiModule,
    AbstractViewComponent
  ]
})
export class ViewHomeModule { }
