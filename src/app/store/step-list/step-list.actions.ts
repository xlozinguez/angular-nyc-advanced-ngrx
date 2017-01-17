import { Action } from '@ngrx/store';
import { Response } from '@angular/http';

import { type } from '../utils';

export const ActionTypes = {
    SELECT_SORT_TYPE: type('[Sort Step List] Sort Type Selected'),
    RESET_STEP_LIST: type('[Sort Step List] Reset Step List'),
    START_SORT: type('[Sort Step List] Start New Sort'),
    ADD_SORT_STEP: type('[Sort Step List] New Sort Step')
};

export class SelectSortTypeAction implements Action {
    public type: string = ActionTypes.SELECT_SORT_TYPE;
    constructor(public payload: any) { };
}

export class ResetStepListAction implements Action {
    public type: string = ActionTypes.RESET_STEP_LIST;
    constructor(public payload: any) { };
}

export class StartSortAction implements Action {
    public type: string = ActionTypes.START_SORT;
    constructor(public payload: any) { };
}

export class AddStepAction implements Action {
    public type: string = ActionTypes.ADD_SORT_STEP;
    constructor(public payload: any) { };
}

export type Actions
    = SelectSortTypeAction
    | ResetStepListAction
    | StartSortAction
    | AddStepAction;
