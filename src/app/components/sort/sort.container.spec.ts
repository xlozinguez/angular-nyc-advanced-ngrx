import { TestBed } from '@angular/core/testing';

import { SortContainer } from './sort.container';

describe('SortContainer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortContainer]
    });
  });

  it('should display title', () => {
    let fixture = TestBed.createComponent(SortContainer);
    let header = fixture.nativeElement.querySelector('h1');

    expect(header.textContent).toEqual("Let's get sorting!");
  });
});
