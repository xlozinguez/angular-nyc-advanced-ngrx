import * as itemList from './item-list/item-list.reducer';

export const storeModules = {
    'itemList': itemList
};

export interface AppState {
    itemList: itemList.ItemListState;
}

export const reducers = {
    itemList: itemList.itemListReducer
};
