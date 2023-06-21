import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { Process } from './interfaces/process';
import { ApplicationState } from './interfaces/application-state';
import { ProcessResponse, ProcessResponseType } from './interfaces/process-response';

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

    this.process$.next(request);

    return of({type:ProcessResponseType.ACCEPTED,process:request})

  }
}
