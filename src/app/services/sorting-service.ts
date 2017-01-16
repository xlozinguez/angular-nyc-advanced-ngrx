// https://khan4019.github.io/front-end-Interview-Questions/sort.html

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../store/app.store';

import * as stepListActions from '../store/step-list/step-list.actions';

import * as appSelectors from '../store/app.selectors';

@Injectable()
export class SortingService {
    items$: Observable<Array<Number>>;
    items: Array<Number>;

    constructor(private store: Store<AppState>) {
        this.items$ = this.store.select(appSelectors.getItemList);
        this.items$.subscribe((items) => { this.items = items; });
    }

    _swapIndices(array, i, j) {
        let newArray = array.slice();
        newArray[i] = array[j];
        newArray[j] = array[i];
        return newArray;
    }

    bubbleSort() {
        let arr = this.items;
        this.store.dispatch(new stepListActions.StartSortAction(arr));
        let len = arr.length;
        for (let i = len - 1; i >= 0; i--) {
            for (let j = 1; j <= i; j++) {
                if (Number(arr[j - 1]) > Number(arr[j])) {
                    arr = this._swapIndices(arr, j, j - 1);
                    this.store.dispatch(new stepListActions.AddStepAction(arr));
                }
            }
        }
    };

    selectionSort() {
        let arr = this.items;
        this.store.dispatch(new stepListActions.StartSortAction(arr));
        let minIdx, temp,
            len = arr.length;

        for (let i = 0; i < len; i++) {
            minIdx = i;
            for (let j = i + 1; j < len; j++) {
                if (Number(arr[j]) < Number(arr[minIdx])) {
                    minIdx = j;
                }
            }
            arr = this._swapIndices(this.items, i, minIdx);
            this.store.dispatch(new stepListActions.AddStepAction(arr));
        }
    };

    // insertionSort(arr): Array<Number> {
    //     let i, len = arr.length, el, j;
    //
    //     for (i = 1; i < len; i++) {
    //         el = arr[i];
    //         j = i;
    //
    //         while (j > 0 && arr[j - 1] > el) {
    //             arr[j] = arr[j - 1];
    //             j--;
    //         }
    //
    //         arr[j] = el;
    //     }
    //
    //     return arr;
    // };
    //
    // mergeSort(arr): Array<Number> {
    //     let len = arr.length;
    //     if (len < 2)
    //         return arr;
    //     let mid = Math.floor(len / 2),
    //         left = arr.slice(0, mid),
    //         right = arr.slice(mid);
    //     // send left and right to the mergeSort to broke it down into pieces
    //     // then merge those
    //     return this._merge(this.mergeSort(left), this.mergeSort(right));
    // };
    //
    // _merge(left, right): Array<Number> {
    //     let result = [],
    //         lLen = left.length,
    //         rLen = right.length,
    //         l = 0,
    //         r = 0;
    //     while (l < lLen && r < rLen) {
    //         if (left[l] < right[r]) {
    //             result.push(left[l++]);
    //         }
    //         else {
    //             result.push(right[r++]);
    //         }
    //     }
    //     // remaining part needs to be addred to the result
    //     return result.concat(left.slice(l)).concat(right.slice(r));
    // };
    //
    // quickSort(arr, left, right): Array<Number> {
    //     let len = arr.length,
    //         pivot,
    //         partitionIndex;
    //
    //
    //     if (left < right) {
    //         pivot = right;
    //         partitionIndex = this._partition(arr, pivot, left, right);
    //
    //         // sort left and right
    //         this.quickSort(arr, left, partitionIndex - 1);
    //         this.quickSort(arr, partitionIndex + 1, right);
    //     }
    //     return arr;
    // };
    //
    // _partition(arr, pivot, left, right): any {
    //     let pivotValue = arr[pivot],
    //         partitionIndex = left;
    //
    //     for (let i = left; i < right; i++) {
    //         if (arr[i] < pivotValue) {
    //             this._swap(arr, i, partitionIndex);
    //             partitionIndex++;
    //         }
    //     }
    //     this._swap(arr, right, partitionIndex);
    //     return partitionIndex;
    // };
    //
    // _swap(arr, i, j): void {
    //     let temp = arr[i];
    //     arr[i] = arr[j];
    //     arr[j] = temp;
    // };
    //
    // heapSort(arr): Array<Number> {
    //     let len = arr.length,
    //         end = len - 1;
    //
    //     this._heapify(arr, len);
    //
    //     while (end > 0) {
    //         this._swap(arr, end--, 0);
    //         this._siftDown(arr, 0, end);
    //     }
    //     return arr;
    // };
    //
    //
    // _heapify(arr, len): void {
    //     // break the array into root + two sides, to create tree (heap)
    //     let mid = Math.floor((len - 2) / 2);
    //     while (mid >= 0) {
    //         this._siftDown(arr, mid--, len - 1);
    //     }
    // };
    //
    // _siftDown(arr, start, end): Array<Number> {
    //     let root = start,
    //         child = root * 2 + 1,
    //         toSwap = root;
    //     while (child <= end) {
    //         if (arr[toSwap] < arr[child]) {
    //             this._swap(arr, toSwap, child);
    //         }
    //         if (child + 1 <= end && arr[toSwap] < arr[child + 1]) {
    //             this._swap(arr, toSwap, child + 1);
    //         }
    //         if (toSwap !== root) {
    //             this._swap(arr, root, toSwap);
    //             root = toSwap;
    //         }
    //         else {
    //             return;
    //         }
    //         toSwap = root;
    //         child = root * 2 + 1;
    //     }
    // };
}
