import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealersComponent } from './dealers.component';

describe('DealersComponent', () => {
  let component: DealersComponent;
  let fixture: ComponentFixture<DealersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealersComponent]
    });
    fixture = TestBed.createComponent(DealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
