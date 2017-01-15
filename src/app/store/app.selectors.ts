import { createSelector } from 'reselect';
import { AppState } from './app.store';

import * as itemListSelectors from './item-list/item-list.selectors';
import * as stepListSelectors from './step-list/step-list.selectors';

/**
 * [getStepListState returns an observable of the StepList state]
 * @param {AppState|Observable} [state] an observable to the app store state
 * @return {StepListState|Observable} an observable to the StepList store state
 */
export const getStepListState = (state: AppState) => state.stepList;

/**
 * [getStepList returns an observable of the list of items]
 * @param  {StepListState|Observable} an observable of the StepList store state
 * @param  {StepList|Observable} an observable of the list of steps
 * @return {StepList|Observable} an observable of the list of steps
 */
export const getStepList = createSelector(getStepListState, stepListSelectors.getStepList);


/**
 * [getItemListState returns an observable of the ItemList state]
 * @param {AppState|Observable} [state] an observable to the app store state
 * @return {ItemListState|Observable} an observable to the ItemList store state
 */
export const getItemListState = (state: AppState) => state.itemList;

/**
 * [getItemList returns an observable of the list of items]
 * @param  {ItemListState|Observable} an observable of the ItemList store state
 * @param  {ItemList|Observable} an observable of the list of items
 * @return {ItemList|Observable} an observable of the list of items
 */
export const getItemList = createSelector(getItemListState, itemListSelectors.getItemList);
