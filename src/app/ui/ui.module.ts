import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiNavbarComponent } from './ui-navbar/ui-navbar.component';
import { UiCardComponent } from './ui-card/ui-card.component';
import { UiImageComponent } from './ui-image/ui-image.component';
import { ImgOverlayDirective } from './directives/img-overlay.directive';
import { ImgZoomDirective } from './directives/img-zoom.directive';



@NgModule({
  declarations: [
    UiNavbarComponent,
    UiCardComponent,
    UiImageComponent,
    ImgOverlayDirective,
    ImgZoomDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiNavbarComponent,
    UiCardComponent,
    UiImageComponent,
    ImgOverlayDirective,
    ImgZoomDirective
  ]
})
export class UiModule { }
