import { Action } from '@ngrx/store';
import { Response } from '@angular/http';

import { type } from '../utils';

export const ActionTypes = {
    RESET_ITEM_LIST:        type('[Item List] Reset Item List'),
    ADD_ITEM:               type('[Item List] Adding New Item'),
    ADD_ITEM_SUCCESS:       type('[Item List] Adding New Item Success'),
    ADD_ITEM_FAIL:          type('[Item List] Adding New Item Fail'),
    REMOVE_ITEM:            type('[Item List] Remove Item'),
    REMOVE_ITEM_SUCCESS:    type('[Item List] Remove Item Success'),
    REMOVE_ITEM_FAIL:       type('[Item List] Remove Item Fail'),
    DB_LOAD_ITEMS:          type('[Item List] Db Load'),
    DB_LOAD_ITEMS_SUCCESS:  type('[Item List] Db Load Item Success'),
    DB_LOAD_ITEMS_FAIL:     type('[Item List] Db Load Item Fail')
};

export class ResetItemListAction implements Action {
    public type: string = ActionTypes.RESET_ITEM_LIST;
    constructor(public payload: any) { };
}

export class AddItemAction implements Action {
    public type: string = ActionTypes.ADD_ITEM;
    constructor(public payload: Number) { };
}

export class AddItemSuccessAction implements Action {
    public type: string = ActionTypes.ADD_ITEM_SUCCESS;
    constructor(public payload: any) { };
}

export class AddItemFailAction implements Action {
    public type: string = ActionTypes.ADD_ITEM_FAIL;
    constructor(public payload: any) { };
}

export class RemoveItemAction implements Action {
    public type: string = ActionTypes.REMOVE_ITEM;
    constructor(public payload: Number) { };
}

export class RemoveItemSuccessAction implements Action {
    public type: string = ActionTypes.REMOVE_ITEM_SUCCESS;
    constructor(public payload: any) { };
}

export class RemoveItemFailAction implements Action {
    public type: string = ActionTypes.REMOVE_ITEM_FAIL;
    constructor(public payload: any) { };
}

export class LoadItemsAction implements Action {
    public type: string = ActionTypes.DB_LOAD_ITEMS;
    constructor(public payload: any) { };
}

export class LoadItemsSuccessAction implements Action {
    public type: string = ActionTypes.DB_LOAD_ITEMS_SUCCESS;
    constructor(public payload: Number[]) { };
}

export class LoadItemsFailAction implements Action {
    public type: string = ActionTypes.DB_LOAD_ITEMS_FAIL;
    constructor(public payload: any) { };
}

export type Actions
    = ResetItemListAction
    | AddItemAction
    | AddItemSuccessAction
    | AddItemFailAction
    | RemoveItemAction
    | RemoveItemSuccessAction
    | RemoveItemFailAction
    | LoadItemsAction
    | LoadItemsSuccessAction
    | LoadItemsFailAction;
