import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrancesTableComponent } from './brances-table.component';

describe('BrancesTableComponent', () => {
  let component: BrancesTableComponent;
  let fixture: ComponentFixture<BrancesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrancesTableComponent]
    });
    fixture = TestBed.createComponent(BrancesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
