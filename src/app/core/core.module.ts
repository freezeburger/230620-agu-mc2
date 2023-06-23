import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresenterService } from './presenter.service';
import { ProductService } from './product.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    PresenterService,
    ProductService
  ]
})
export class CoreModule {
  productService = inject(ProductService);
}
