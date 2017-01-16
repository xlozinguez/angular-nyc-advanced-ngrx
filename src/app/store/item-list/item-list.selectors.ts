import { ItemListState } from './item-list.reducer';

/**
 * [getItemList returns an observable of the list of items]
 * @param {ItemListState|Observable} [state] an observable to the itemList store state
 * @return {Array<Number>|Observable} an observable to the list of item
 */
export const getItemList = (state: ItemListState) => state.items;
