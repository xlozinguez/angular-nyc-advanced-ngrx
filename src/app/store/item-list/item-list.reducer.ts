/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { Observable } from 'rxjs/Observable';

import * as itemListActions from './item-List.actions';

export interface ItemListState {
    items: Array<any>;
};

export const initialState: ItemListState = {
    items: []
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
