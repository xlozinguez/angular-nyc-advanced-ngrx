/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as itemListActions from './item-list.actions';

export interface ItemListState {
    items: Array<any>;
};

export const initialState: ItemListState = {
    items: ['1', '13', '8', '3', '6', '5', '12', '10', '2', '4', '7']
};

export function itemListReducer(state = initialState, action: itemListActions.Actions): ItemListState {
    switch (action.type) {

        case itemListActions.ActionTypes.ADD_ITEM: {
            const item = action.payload;
            return Object.assign({}, state, {
                items: [ ...state.items, item ]
            });
        }

        default: {
            return state;
        }
    }
}
