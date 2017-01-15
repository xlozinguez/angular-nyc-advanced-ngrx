import * as itemList from './item-list/item-list.reducer';
import * as stepList from './step-list/step-list.reducer';

export interface AppState {
    itemList: itemList.ItemListState;
    stepList: stepList.StepListState;
}

export const reducers = {
    itemList: itemList.itemListReducer,
    stepList: stepList.stepReducer
};
