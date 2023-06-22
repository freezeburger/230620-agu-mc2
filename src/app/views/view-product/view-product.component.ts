import { Component, QueryList, ViewChildren } from '@angular/core';
import { AbstractViewComponent } from '../abstract-view/abstract-view.component';
import { ImgZoomDirective } from 'src/app/ui/directives/img-zoom.directive';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent  extends AbstractViewComponent {
  userSelectedImage = ''

  @ViewChildren(ImgZoomDirective) zoomables!:QueryList<ImgZoomDirective>;

  ngAfterViewInit(){
    this.zoomables.forEach( (z,i)  =>
    setTimeout( () => z.zoomIn(), 2000 * (i + 1) )
    )
  }

  images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/301',
    'https://picsum.photos/200/302',
    'https://picsum.photos/200/303'
  ]

  onSelection( url:string ){
    this.userSelectedImage = url;
  }
}
