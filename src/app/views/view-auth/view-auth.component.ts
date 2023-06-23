import { Component } from '@angular/core';
import { AbstractViewComponent } from '../abstract-view/abstract-view.component';
import { ProcessScope } from 'src/app/core/enums/process-scope';
import { ProcessType } from 'src/app/core/enums/process-type';

@Component({
  selector: 'app-view-auth',
  templateUrl: './view-auth.component.html',
  styleUrls: ['./view-auth.component.scss']
})
export class ViewAuthComponent extends AbstractViewComponent {


  constructor() {
    super()

    this.presenter.execute({
      scope: ProcessScope.AUTH,
      type: ProcessType.READ,
      payload: null
    })

  }

}
