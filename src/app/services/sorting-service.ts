// https://khan4019.github.io/front-end-Interview-Questions/sort.html

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../store/app.store';

import * as stepListActions from '../store/step-list/step-list.actions';

import * as appSelectors from '../store/app.selectors';

import { SortType } from '../models/sort-type.model';

@Injectable()
export class SortingService {
    items$: Observable<Array<Number>>;
    items: Array<Number>;
    sortType$: Observable<SortType>;
    sortType: SortType;

    constructor(private store: Store<AppState>) {
        this.items$ = this.store.select(appSelectors.getItemList);
        this.items$.subscribe((items) => { this.items = items; });

        this.sortType$ = this.store.select(appSelectors.getSortType);
        this.sortType$.subscribe((type) => { this.sortType = type; });
    }

    sort() {
        // Dispatch first step with original list
        this.store.dispatch(new stepListActions.StartSortAction(this.items));

        switch (this.sortType) {
            case 'bubble':
                this.bubbleSort(this.items);
                break;
            case 'selection':
                this.selectionSort(this.items);
                break;
            case 'insertion':
                this.insertionSort(this.items);
                break;
            case 'merge':
                // this.mergeSort(this.items);
                break;
            case 'quick':
                // this.quickSort(this.items, 0, this.items.length);
                break;
            case 'heap':
                // this.heapSort(this.items);
                break;
            default:
                break;
        }

    }

    _swapIndices(array, i, j) {
        let newArray = array.slice();
        newArray[i] = array[j];
        newArray[j] = array[i];
        this.store.dispatch(new stepListActions.AddStepAction(newArray));
        return newArray;
    }

    bubbleSort(arr): Array<Number> {
        let len = arr.length;
        for (let i = len - 1; i >= 0; i--) {
            for (let j = 1; j <= i; j++) {
                if (Number(arr[j - 1]) > Number(arr[j])) {
                    arr = this._swapIndices(arr, j, j - 1);
                }
            }
        }
        return arr;
    };

    selectionSort(arr): Array<Number> {
        let minIdx, temp,
            len = arr.length;

        for (let i = 0; i < len; i++) {
            minIdx = i;
            for (let j = i + 1; j < len; j++) {
                if (Number(arr[j]) < Number(arr[minIdx])) {
                    minIdx = j;
                }
            }
            arr = this._swapIndices(arr, i, minIdx);
        }
        return arr;
    };

    _insert(toInsert, arr): Array<Number> {
        for (let i = 0; i < arr.length; i++) {
            if (Number(toInsert) < Number(arr[i])) {
                return arr.splice(i, 0, toInsert);
            }
            return [...arr, toInsert];
        }
    }

    insertionSort(arr): Array<Number> {
        let len = arr.length;
        let newArr = [];

        for (let i = 1; i < len; i++) {
            newArr = this._insert(arr[i - 1], arr[i]);
            this.store.dispatch(new stepListActions.AddStepAction(newArr));
        }

        return arr;
    };

    mergeSort(arr): Array<Number> {
        let len = arr.length;
        if (len < 2)
            return arr;
        let mid = Math.floor(len / 2),
            left = arr.slice(0, mid),
            right = arr.slice(mid);
        // send left and right to the mergeSort to broke it down into pieces
        // then merge those
        let newArr = this._merge(this.mergeSort(left), this.mergeSort(right));
        this.store.dispatch(new stepListActions.AddStepAction(newArr));
        return newArr;
    };

    _merge(left, right): Array<Number> {
        let result = [],
            lLen = left.length,
            rLen = right.length,
            l = 0,
            r = 0;
        while (l < lLen && r < rLen) {
            if (Number(left[l]) < Number(right[r])) {
                result.push(left[l++]);
            }
            else {
                result.push(right[r++]);
            }
        }
        // remaining part needs to be addred to the result
        return result.concat(left.slice(l)).concat(right.slice(r));
    };

    quickSort(arr, left, right): Array<Number> {
        this.store.dispatch(new stepListActions.AddStepAction(arr));

        let len = arr.length,
            pivot,
            partitionIndex;


        if (left < right) {
            pivot = right;
            partitionIndex = this._partition(arr, pivot, left, right);

            // sort left and right
            this.quickSort(arr, left, partitionIndex - 1);
            this.quickSort(arr, partitionIndex + 1, right);
        }
        return arr;
    };

    _partition(arr, pivot, left, right): any {
        let pivotValue = arr[pivot],
            partitionIndex = left;

        for (let i = left; i < right; i++) {
            if (arr[i] < pivotValue) {
                this._swapIndices(arr, i, partitionIndex);
                partitionIndex++;
            }
        }
        this._swapIndices(arr, right, partitionIndex);
        return partitionIndex;
    };

    heapSort(arr): Array<Number> {
        let len = arr.length,
            end = len - 1;

        this._heapify(arr, len);

        while (end > 0) {
            this._swapIndices(arr, end--, 0);
            this._siftDown(arr, 0, end);
        }
        return arr;
    };


    _heapify(arr, len): void {
        // break the array into root + two sides, to create tree (heap)
        let mid = Math.floor((len - 2) / 2);
        while (mid >= 0) {
            this._siftDown(arr, mid--, len - 1);
        }
    };

    _siftDown(arr, start, end): Array<Number> {
        let root = start,
            child = root * 2 + 1,
            toSwap = root;
        while (child <= end) {
            if (Number(arr[toSwap]) < Number(arr[child])) {
                this._swapIndices(arr, toSwap, child);
            }
            if (child + 1 <= end && Number(arr[toSwap]) < Number(arr[child + 1])) {
                this._swapIndices(arr, toSwap, child + 1);
            }
            if (toSwap !== root) {
                this._swapIndices(arr, root, toSwap);
                root = toSwap;
            }
            else {
                return;
            }
            toSwap = root;
            child = root * 2 + 1;
        }
    };
}
