import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepListComponent } from './step-list.component';
import { StepComponent } from './step/step.component';
import { StepItemListComponent } from './step-item-list/step-item-list.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        StepListComponent,
        StepComponent,
        StepItemListComponent
    ],
    exports: [StepListComponent]
})
export class StepListModule { }
