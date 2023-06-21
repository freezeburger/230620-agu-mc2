import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiNavbarComponent } from './ui-navbar/ui-navbar.component';
import { UiCardComponent } from './ui-card/ui-card.component';



@NgModule({
  declarations: [
    UiNavbarComponent,
    UiCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiNavbarComponent,
    UiCardComponent
  ]
})
export class UiModule { }
