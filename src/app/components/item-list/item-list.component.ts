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
            <span *ngIf="!items.length">No items to sort!</span>
            <ul *ngIf="items.length" class="items">
                <li class="item"
                    *ngFor="let item of items"
                    (click)="removeItem(item)">{{ item }}</li>
            </ul>
        </div>
    `,
    styleUrls: ['./item-list.css']
})
export class ItemListComponent {
    items$: Observable<Array<Number>>;
    items: Array<Number>;

    constructor(
        private store: Store<AppState>
    ) {
        this.items$ = this.store.select(appSelectors.getItemList);
        this.items$.subscribe((items) => { this.items = items; });
    }

    removeItem(item: any) {
        this.store.dispatch(new itemListActions.RemoveItemAction(item));
    }
}
