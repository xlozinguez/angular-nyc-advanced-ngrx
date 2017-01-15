import { StepListState } from './step-list.reducer';

/**
 * [getStepList returns an observable of the list of steps]
 * @param {StepListState|Observable} [state] an observable to the steps store state
 * @return {Array<Array<any>>|Observable} an observable to the list of steps of the sort
 */
export const getStepList = (state: StepListState) => state.steps;
