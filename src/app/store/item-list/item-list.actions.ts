import { Action } from '@ngrx/store';
import { Response } from '@angular/http';

import { type } from '../utils';

export const ActionTypes = {
    RESET_ITEM_LIST: type('[Item List] Reset Item List'),
    ADD_ITEM: type('[Item List] Adding New Item'),
    REMOVE_ITEM: type('[Item List] Remove Item')
};

export class ResetItemListAction implements Action {
    public type: string = ActionTypes.RESET_ITEM_LIST;
    constructor(public payload: any) { };
}

export class AddItemAction implements Action {
    public type: string = ActionTypes.ADD_ITEM;
    constructor(public payload: any) { };
}

export class RemoveItemAction implements Action {
    public type: string = ActionTypes.REMOVE_ITEM;
    constructor(public payload: any) { };
}

export type Actions
    = ResetItemListAction
    | AddItemAction
    | RemoveItemAction;
