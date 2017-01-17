import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../store/app.store';

import * as appSelectors from '../../store/app.selectors';
import * as itemListActions from '../../store/item-list/item-list.actions';

@Component({
    selector: 'item-list',
    template: `
        <div class=item-list>
            <span *ngIf="!(items$ | async).length">No items to sort!</span>
            <ul *ngIf="(items$ | async).length" class="items">
                <li class="item"
                    *ngFor="let item of items$ | async; let i = index;"
                    (dblclick)="removeItem(i)">{{ item }}</li>
            </ul>
        </div>
    `,
    styleUrls: ['./item-list.css']
})
export class ItemListComponent {
    items$: Observable<Array<Number>>;

    constructor(
        private store: Store<AppState>
    ) {
        this.items$ = this.store.select(appSelectors.getItemList);
    }

    removeItem(index: Number) {
        this.store.dispatch(new itemListActions.RemoveItemAction(index));
    }
}
