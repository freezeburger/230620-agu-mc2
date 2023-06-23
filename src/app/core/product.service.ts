import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { Product } from './interfaces/products';
import { PresenterService } from './presenter.service';
import { ProcessScope } from './enums/process-scope';
import { ProcessType } from './enums/process-type';


@Injectable()
export class ProductService {

  private readonly URL = "https://dummyjson.com/products/search?q=";
  private http = inject(HttpClient);

  public products$ = new BehaviorSubject<Product[]>([]);

  constructor(
    private presenterService:PresenterService
  ) {
    // this.search('phone');

    this.presenterService.process$
      .pipe(
        filter( request => request.scope === ProcessScope.PRODUCT ),
        filter( request => request.type === ProcessType.READ ),
      )
      .subscribe(
        request => this.search(request.payload)
      )

  }

  public search(query:string){
    this.http
        .get<{products:Product[]}>(this.URL + query)
        .subscribe( data =>{

          this.products$.next(data.products);

          this.presenterService.execute({
            scope:ProcessScope.PRODUCT,
            type:ProcessType.UPDATE,
            payload:data.products
          })

        })
  }

}
