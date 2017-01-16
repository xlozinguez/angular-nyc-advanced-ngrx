/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as stepListActions from './step-list.actions';

export interface StepListState {
    steps: Array<Array<Number>>;
};

export const initialState: StepListState = {
    steps: []
};

export function stepReducer(state = initialState, action: stepListActions.Actions): StepListState {
    switch (action.type) {

        case stepListActions.ActionTypes.RESET_STEP_LIST: {
            return Object.assign({}, state, initialState);
        }

        case stepListActions.ActionTypes.START_SORT: {
            const step = action.payload;
            return Object.assign({}, state, { steps: [step] });
        }

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
