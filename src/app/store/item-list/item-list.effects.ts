/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Database } from '@ngrx/db';
import { Observable } from 'rxjs/Observable';

import * as itemListActions from './item-list.actions';

// NOTE regarding @ngrx/db:
// It would be preferable to store objects instead of array of numbers
// In the following, there is a lot of composition using map which could be
// avoided if the element were objects instead

@Injectable()
export class ItemListEffects {
    constructor(private actions$: Actions, private db: Database) { }

    /**
     * This effect does not yield any actions back to the store. Set
     * `dispatch` to false to hint to @ngrx/effects that it should
     * ignore any elements of this effect stream.
     *
     * The `defer` observable accepts an observable factory function
     * that is called when the observable is subscribed to.
     * Wrapping the database open call in `defer` makes
     * effect easier to test.
     */
    @Effect({ dispatch: false })
    openDB$: Observable<any> = Observable.defer(() => {
        return this.db.open('advanced_ngrx_app');
    });

    /**
     * This effect makes use of the `startWith` operator to trigger
     * the effect immediately on startup.
     */
    @Effect()
    loadItemList$: Observable<Action> = this.actions$
        .ofType(itemListActions.ActionTypes.DB_LOAD_ITEMS)
        .startWith(new itemListActions.LoadItemsAction(null))
        .switchMap(() =>
            this.db.query('items')
                .toArray()
                .map((db_items: Array<any>) => db_items.map((db_item: any) => Number(db_item.value)))
                .map((items: Number[]) => new itemListActions.LoadItemsSuccessAction(items))
                .catch(error => Observable.of(new itemListActions.LoadItemsFailAction(error)))
        );

    @Effect()
    addItemToList$: Observable<Action> = this.actions$
        .ofType(itemListActions.ActionTypes.ADD_ITEM)
        .map((action: itemListActions.AddItemAction) => action.payload)
        .mergeMap(item =>
            this.db.insert('items', [{ value: item }])
                .map(() => new itemListActions.AddItemSuccessAction(item))
                .catch(() => Observable.of(new itemListActions.AddItemFailAction(item)))
        );


    @Effect()
    removeItemFromList$: Observable<Action> = this.actions$
        .ofType(itemListActions.ActionTypes.REMOVE_ITEM)
        .map((action: itemListActions.RemoveItemAction) => action.payload)
        .mergeMap(item_index =>
            this.db.query('items')
                .toArray()
                .map((DbItems: Array<any>) => DbItems[Number(item_index)])
                .mergeMap(db_item =>
                    this.db.executeWrite('items', 'delete', [db_item.id])
                        .map(() => new itemListActions.RemoveItemSuccessAction(null))
                        .catch(() => Observable.of(new itemListActions.RemoveItemFailAction(null))
                        )
                )
        );


    @Effect()
    resetItemList$: Observable<Action> = this.actions$
        .ofType(itemListActions.ActionTypes.RESET_ITEM_LIST)
        .map((action: itemListActions.RemoveItemAction) => action.payload)
        .mergeMap(item_index =>
            this.db.query('items')
                .toArray()
                .map((DbItems: Array<any>) => DbItems[Number(item_index)])
                .mergeMap(db_item =>
                    this.db.executeWrite('items', 'delete', [db_item.id])
                        .map(() => new itemListActions.RemoveItemSuccessAction(null))
                        .catch(() => Observable.of(new itemListActions.RemoveItemFailAction(null))
                        )
                )
        );
}
