import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInputsComponent } from './filter-inputs.component';

describe('FilterInputsComponent', () => {
  let component: FilterInputsComponent;
  let fixture: ComponentFixture<FilterInputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterInputsComponent]
    });
    fixture = TestBed.createComponent(FilterInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
