/* tslint:disable: member-ordering */
import { Action } from '@ngrx/store';
import { Response } from '@angular/http';

import { type } from '../utils';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
    ADD_ITEM: type('[Item List] Adding New Item')
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class AddItemAction implements Action {
    public type: string = ActionTypes.ADD_ITEM;
    constructor(public payload: any) { };
}

export type Actions
    = AddItemAction;
