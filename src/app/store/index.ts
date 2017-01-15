import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { AppState, reducers } from './app.store';

const DEV_REDUCERS = [ storeFreeze ];

const appReducer: ActionReducer<AppState> = compose(...DEV_REDUCERS, combineReducers)(reducers);

export function rootReducer(state: any, action: any) {
    return appReducer(state, action);
}
