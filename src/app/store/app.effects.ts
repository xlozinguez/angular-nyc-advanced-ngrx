/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as appActions from './app.actions.ts';
import * as stepListActions from './step-list/step-list.actions';
import * as itemListActions from './item-list/item-list.actions';

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions
    ) { }

    @Effect()
    resetItemList$: Observable<Action> = this.actions$
        .ofType(itemListActions.ActionTypes.RESET_ITEM_LIST)
        .map(action => action.payload)
        .mergeMap((payload) => Observable.of(new stepListActions.ResetStepListAction(null)));
}
