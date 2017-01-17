import * as appActions from '../app.actions';
import * as itemListActions from '../item-list/item-list.actions';

export const handleException = (reducer: Function) => {
    return function(state, action) {
        if (action.type === itemListActions.ActionTypes.DB_LOAD_ITEMS_FAIL) {
            console.log('Indexed Db load failed :/');
        }
        return reducer(state, action);
    };
};
