import { Directive, Host, HostBinding, HostListener } from '@angular/core';
import { UiImageComponent } from '../ui-image/ui-image.component';

@Directive({
  selector: 'app-ui-image[appImgZoom]'
})
export class ImgZoomDirective {

  @HostBinding('style.display') display = 'inline-block';
  @HostBinding('style.transition') transition = 'transform 0.4s ease';
  @HostBinding('style.transform') transform = 'scale(1)';

  @HostListener('mouseenter')
  zoomIn(){
    this.transform = 'scale(1.2)';
  }

  @HostListener('mouseleave')
  zoomOut(){
    this.transform = 'scale(1)';
  }

  constructor(
    @Host() uiImage: UiImageComponent
  ) {
    console.log(uiImage)
  }

}
