import { Component, Directive, inject } from '@angular/core';
import { PresenterService } from 'src/app/core/presenter.service';

@Directive({
  selector: 'app-abstract-view',
  standalone:true
})
export class AbstractViewComponent {
  public presenter = inject(PresenterService);

  ngOnInit(){
    console.log(this.presenter)
  }

  show(){
    console.log('SHOW')
  }
}
