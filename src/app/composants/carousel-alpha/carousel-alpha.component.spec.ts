import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAlphaComponent } from './carousel-alpha.component';

describe('CarouselAlphaComponent', () => {
  let component: CarouselAlphaComponent;
  let fixture: ComponentFixture<CarouselAlphaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselAlphaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
