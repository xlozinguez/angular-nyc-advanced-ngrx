import { Action } from '@ngrx/store';
import { Response } from '@angular/http';

import { type } from '../utils';

export const ActionTypes = {
    ADD_SORT_STEP: type('[Sort Step List] New Sort Step')
};

export class AddStepAction implements Action {
    public type: string = ActionTypes.ADD_SORT_STEP;
    constructor(public payload: any) { };
}

export type Actions
    = AddStepAction;
