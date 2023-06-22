import { Directive, ElementRef, Host, HostBinding, HostListener, ViewChild } from '@angular/core';
import { UiImageComponent } from '../ui-image/ui-image.component';
import { UiCardComponent } from '../ui-card/ui-card.component';

@Directive({
  selector: 'app-ui-image[appImgZoom]'
})
export class ImgZoomDirective {

  /*
  @HostBinding('style.display') display = 'inline-block';
  @HostBinding('style.transition') transition = 'transform 0.4s ease';
  @HostBinding('style.transform') transform = 'scale(1)';
  */

  constructor(
    @Host() private uiImage: UiImageComponent,
    private el:ElementRef
  ) {
    // console.log(uiImage)
  }

  ngAfterViewInit(){
    // console.log(this.el)
    // this.el.nativeElement.querySelector('img').src = 'https://www.activacapital.com/images/stories/logo/Logo_Arche.jpg'
    // this.uiImage.imageElement.src = 'https://www.activacapital.com/images/stories/logo/Logo_Arche.jpg'

    this.uiImage.imageElement.nativeElement.style.transform = 'scale(1)';
    this.uiImage.imageElement.nativeElement.style.transition = 'transform 0.4s ease';

  }

  @HostListener('mouseenter')
  zoomIn(){
    // this.transform = 'scale(1.2)';
    this.uiImage.imageElement.nativeElement.style.transform = 'scale(1.5)';
  }

  @HostListener('mouseleave')
  zoomOut(){
    // this.transform = 'scale(1)';
    this.uiImage.imageElement.nativeElement.style.transform = 'scale(1)';
  }


}
