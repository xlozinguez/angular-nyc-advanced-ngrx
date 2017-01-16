import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { rootReducer } from '../store';

import { SortingService } from '../services/sorting-service';

import { AppComponent } from '../components/app.component';
import { SortPickComponent } from '../components/sort-pick/sort-pick.component';
import { AddItemComponent } from '../components/add-item/add-item.component';
import { ItemListComponent } from '../components/item-list/item-list.component';

import { StepListModule } from '../components/step-list/step-list.module';

import { AppEffects } from '../store/app.effects';

@NgModule({
    declarations: [
        AppComponent,
        SortPickComponent,
        AddItemComponent,
        ItemListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        StoreModule.provideStore(rootReducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        StepListModule,
        EffectsModule.run(AppEffects)
    ],
    providers: [SortingService],
    bootstrap: [AppComponent]
})
export class MainModule { }
