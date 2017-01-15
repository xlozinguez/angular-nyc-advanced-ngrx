// https://khan4019.github.io/front-end-Interview-Questions/sort.html

import { Injectable } from '@angular/core';

@Injectable()
export class SortingService {

    constructor() { }

    bubbleSort(arr): Array<any> {
        let len = arr.length;
        for (let i = len - 1; i >= 0; i--) {
            for (let j = 1; j <= i; j++) {
                if (arr[j - 1] > arr[j]) {
                    let temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    };

    selectionSort(arr): Array<any> {
        let minIdx, temp,
            len = arr.length;

        for (let i = 0; i < len; i++) {
            minIdx = i;
            for (let j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
        return arr;
    };

    insertionSort(arr): Array<any> {
        let i, len = arr.length, el, j;

        for (i = 1; i < len; i++) {
            el = arr[i];
            j = i;

            while (j > 0 && arr[j - 1] > el) {
                arr[j] = arr[j - 1];
                j--;
            }

            arr[j] = el;
        }

        return arr;
    };

    mergeSort(arr): Array<any> {
        let len = arr.length;
        if (len < 2)
            return arr;
        let mid = Math.floor(len / 2),
            left = arr.slice(0, mid),
            right = arr.slice(mid);
        // send left and right to the mergeSort to broke it down into pieces
        // then merge those
        return this._merge(this.mergeSort(left), this.mergeSort(right));
    };

    _merge(left, right): Array<any> {
        let result = [],
            lLen = left.length,
            rLen = right.length,
            l = 0,
            r = 0;
        while (l < lLen && r < rLen) {
            if (left[l] < right[r]) {
                result.push(left[l++]);
            }
            else {
                result.push(right[r++]);
            }
        }
        // remaining part needs to be addred to the result
        return result.concat(left.slice(l)).concat(right.slice(r));
    };

    quickSort(arr, left, right): Array<any> {
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
                this._swap(arr, i, partitionIndex);
                partitionIndex++;
            }
        }
        this._swap(arr, right, partitionIndex);
        return partitionIndex;
    };

    _swap(arr, i, j): void {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };

    heapSort(arr): Array<any> {
        let len = arr.length,
            end = len - 1;

        this._heapify(arr, len);

        while (end > 0) {
            this._swap(arr, end--, 0);
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

    _siftDown(arr, start, end): Array<any> {
        let root = start,
            child = root * 2 + 1,
            toSwap = root;
        while (child <= end) {
            if (arr[toSwap] < arr[child]) {
                this._swap(arr, toSwap, child);
            }
            if (child + 1 <= end && arr[toSwap] < arr[child + 1]) {
                this._swap(arr, toSwap, child + 1);
            }
            if (toSwap !== root) {
                this._swap(arr, root, toSwap);
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
