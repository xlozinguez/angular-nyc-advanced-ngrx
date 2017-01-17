import { StepListState } from './step-list.reducer';

/**
 * [getStepList returns an observable of the list of steps]
 * @param {StepListState|Observable} [state] an observable to the steps store state
 * @return {Array<Array<Number>>|Observable} an observable to the list of steps of the sort
 */
export const getStepList = (state: StepListState) => state.steps;

/**
 * [getSortType returns an observable of the selected sort type]
 * @param {StepListState|Observable} [state] an observable to the steps store state
 * @return {SortType|Observable} an observable to the selected sort type
 */
export const getSortType = (state: StepListState) => state.sortType;

/**
 * [getStepCount returns an observable of the total count of steps]
 * @param {StepListState|Observable} [state] an observable to the steps store state
 * @return {Number|Observable} an observable to the total count of steps
 */
export const getStepCount = (state: StepListState) => {
    return state.steps.length;
};
