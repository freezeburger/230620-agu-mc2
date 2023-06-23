import { Component, Inject, QueryList, ViewChildren } from '@angular/core';
import { AbstractViewComponent } from '../abstract-view/abstract-view.component';
import { Product } from '../../core/interfaces/products';
import { ProductService } from 'src/app/core/product.service';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent  extends AbstractViewComponent {

  userInputValue = '';

  constructor(
    @Inject(ProductService) public productService:ProductService
  ){
    super()
  }

  public products:Product[]=[
    {
      id:1,
      title:'Title 1',
      description:'Description 1',
      thumbnail:'https://picsum.photos/200/300'
    },
    {
      id:2,
      title:'Title 2',
      description:'Description 2',
      thumbnail:'https://picsum.photos/200/302'
    },
    {
      id:1,
      title:'Title 3',
      description:'Description 3',
      thumbnail:'https://picsum.photos/200/303'
    }
  ];
  /*
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
  */
}
