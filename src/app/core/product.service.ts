import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product{
  id:number;
  title:string;
  description:string;
  thumbnail:string;
}

@Injectable()
export class ProductService {

  private readonly URL = '';
  private http = inject(HttpClient);

  public products$ = new BehaviorSubject<Product[]>([]);

  constructor() {
    this.search('phone');
  }

  public search(query:string){
    this.http.get<{products:Product[]}>(this.URL + query).subscribe( data => this.products$.next(data.products))
  }

}
