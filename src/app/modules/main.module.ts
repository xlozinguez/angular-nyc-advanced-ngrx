import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { rootReducer } from '../store';

import { SortingService } from '../services/sort-service';

import { AppComponent } from '../components/app.component';
import { StepListModule } from '../components/step-list/step-list.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.provideStore(rootReducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        StepListModule
    ],
    providers: [SortingService],
    bootstrap: [AppComponent]
})
export class MainModule { }
