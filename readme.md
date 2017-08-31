# Advanced Recipes using @ngrx

This project illustrates how to leverage @ngrx add-ons:
- [@ngrx/store-devtools](https://github.com/ngrx/store-devtools): module to be able to leverage the [Redux Devtools Extension](http://zalmoxisus.github.io/redux-devtools-extension/)
- [reselect](https://github.com/reactjs/reselect): a simple selector library for Redux (actually implemented for react - reusability! yay!)
- [@ngrx/effects](https://github.com/ngrx/effects): library to handle side effects when actions are dispatched
- [@ngrx/db](https://github.com/ngrx/db): RxJS powered IndexedDB for Angular 2 apps

## Presentation
- [Slides](https://docs.google.com/presentation/d/1XaxzW2qfvqergHNOaGLlFnr3gDX0LebH6NGT5mU6slU/edit?usp=sharing)
- Video (Soon!)

## App Overview

The goal of the app is to demonstrate the different steps sorting algorithms go through to complete.

You first enter the number you would like to sort, then you select the sorting algorithm and hit 'Sort!' :tada:.

![Bubble Sort Example](/docs/bubbleSort.gif)

To go further into the @ngrx add ons usage, please refer to the presentation section.

## Install

```shell
    $ git clone git@github.com:xlozinguez/angular-nyc-advanced-ngrx.git
    $ cd angular-nyc-advanced-ngrx
    $ npm install
```

## Run

```shell
    $ npm start
```

Then go to [localhost:3000](http://localhost:3000)

## Concept

This app is split between two different store:
- [item-list](/src/app/store/item-list): list of items to be sorted
- [step-list](/src/app/store/step-list): the list of steps taken during the sort
