import { Component, Inject } from '@angular/core';
import { PresenterService } from 'src/app/core/presenter.service';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss']
})
export class ViewHomeComponent {


  constructor(
    @Inject(PresenterService) public presenter:PresenterService
  ){
    console.log(this.presenter)
  }

}
