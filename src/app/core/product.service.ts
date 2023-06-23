import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './interfaces/products';


@Injectable()
export class ProductService {

  private readonly URL = "https://dummyjson.com/products/search?q=";
  private http = inject(HttpClient);

  public products$ = new BehaviorSubject<Product[]>([]);

  constructor() {
    this.search('phone');
  }

  public search(query:string){
    this.http.get<{products:Product[]}>(this.URL + query).subscribe( data => this.products$.next(data.products))
  }

}
