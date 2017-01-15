/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as stepListActions from './step-list.actions';

export interface StepListState {
    steps: Array<Array<any>>;
};

export const initialState: StepListState = {
    steps: [
        ['1', '13', '8', '3', '6', '5', '12', '10', '2', '4', '7']
    ]
};

export function stepReducer(state = initialState, action: stepListActions.Actions): StepListState {
    switch (action.type) {

        case stepListActions.ActionTypes.ADD_SORT_STEP: {
            const step = action.payload;
            return Object.assign({}, state, {
                steps: [ ...state.steps, step ]
            });
        }

        default: {
            return state;
        }
    }
}
