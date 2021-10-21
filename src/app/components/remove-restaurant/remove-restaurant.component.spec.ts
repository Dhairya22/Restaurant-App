import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRestaurantComponent } from './remove-restaurant.component';

describe('RemoveRestaurantComponent', () => {
  let component: RemoveRestaurantComponent;
  let fixture: ComponentFixture<RemoveRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
