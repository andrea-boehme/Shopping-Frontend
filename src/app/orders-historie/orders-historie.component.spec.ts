import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersHistorieComponent } from './orders-historie.component';

describe('OrdersHistorieComponent', () => {
  let component: OrdersHistorieComponent;
  let fixture: ComponentFixture<OrdersHistorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersHistorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersHistorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
