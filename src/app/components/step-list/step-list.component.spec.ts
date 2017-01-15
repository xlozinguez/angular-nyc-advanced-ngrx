import { TestBed } from '@angular/core/testing';

import { StepListContainer } from './stepList.container';

describe('StepListContainer', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [StepListContainer]
        });
    });

    it('should display title', () => {
        let fixture = TestBed.createComponent(StepListContainer);
        let header = fixture.nativeElement.querySelector('h1');

        expect(header.textContent).toEqual("Let's get sorting!");
    });
});
