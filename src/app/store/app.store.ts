import * as itemList from './item-list/item-list.reducer';
import * as stepList from './step-list/step-list.reducer';

import { handleException } from './meta/exceptions-handler.meta-reducer';

export interface AppState {
    itemList: itemList.ItemListState;
    stepList: stepList.StepListState;
}

export const reducers = {
    itemList: handleException(itemList.itemListReducer),
    stepList: stepList.stepReducer
};
