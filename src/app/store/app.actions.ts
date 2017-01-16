import { Action } from '@ngrx/store';
import { Response } from '@angular/http';

import { type } from './utils';

export const ActionTypes = {
    RESET: type('[App] Reset')
};

export class ResetAction implements Action {
    public type: string = ActionTypes.RESET;
    constructor(public payload: any) { };
}

export type Actions
    = ResetAction;
