/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as stepListActions from './step-list.actions';

import { SortType } from '../../models/sort-type.model';

export interface StepListState {
    steps: Array<Array<Number>>;
    sortType: SortType;
};

export const initialState: StepListState = {
    steps: [],
    sortType: 'bubble'
};

export function stepReducer(state = initialState, action: stepListActions.Actions): StepListState {
    switch (action.type) {

        case stepListActions.ActionTypes.SELECT_SORT_TYPE: {
            const sort = action.payload;
            return Object.assign({}, state, { sortType: sort });
        }

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
