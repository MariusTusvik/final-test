import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingTestComponent } from './routing-test.component';

describe('RoutingTestComponent', () => {
  let component: RoutingTestComponent;
  let fixture: ComponentFixture<RoutingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
