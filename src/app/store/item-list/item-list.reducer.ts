/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as itemListActions from './item-list.actions';

export interface ItemListState {
    items: Array<Number>;
};

export const initialState: ItemListState = {
    items: []
};

export function itemListReducer(state = initialState, action: itemListActions.Actions): ItemListState {
    switch (action.type) {

        case itemListActions.ActionTypes.DB_LOAD_ITEMS_SUCCESS: {
            const items = action.payload;
            return Object.assign({}, state, { items });
        }

        case itemListActions.ActionTypes.RESET_ITEM_LIST: {
            return Object.assign({}, state, initialState);
        }

        case itemListActions.ActionTypes.REMOVE_ITEM: {
            const index = action.payload;
            return Object.assign({}, state, {
                items: [
                    ...state.items.slice(0, index),
                    ...state.items.slice(index + 1)
                ]
            });
        }

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
