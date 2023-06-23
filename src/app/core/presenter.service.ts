import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { Process } from './interfaces/process';
import { ApplicationState } from './interfaces/application-state';
import { ProcessResponse, ProcessResponseType } from './interfaces/process-response';
import { ProcessType } from './enums/process-type';
import { ProcessScope } from './enums/process-scope';

@Injectable()
export class PresenterService {

  public state$ = new BehaviorSubject<ApplicationState>({
    online:true,
    products:[]
  });

  public process$ = new Subject<Process>();

  /**
   * @param request - The object describing the action
   * @returns
   *
   * @example
   *
   *  public presenter = inject(PresenterService);
   *
   *  this.presenter.execute({type:..., scope:... payload:...})
   */
  public execute( request:Process ):Observable<ProcessResponse>{

    console.table(request);

    this.process$.next(request);

    if(request.type === ProcessType.UPDATE && request.scope === ProcessScope.PRODUCT){
      this.state$.next(
        { ...this.state$.value, products:request.payload }
      );
    }

    return of({type:ProcessResponseType.ACCEPTED,process:request})

  }
}
