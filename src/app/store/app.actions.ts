import { Action } from '@ngrx/store';
import { Response } from '@angular/http';

import { type } from './utils';

export const ActionTypes = {
    RESET: type('[App] Reset'),
    EXCEPTION: type('[App] Exception Raised')
};

export class ResetAction implements Action {
    public type: string = ActionTypes.RESET;
    constructor(public payload: any) { };
}

export class ExceptionAction implements Action {
    public type: string = ActionTypes.EXCEPTION;
    constructor(public payload: any) { };
}

export type Actions
    = ResetAction
    | ExceptionAction;
