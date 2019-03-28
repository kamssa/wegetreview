import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaniereAccueilComponent } from './baniere-accueil.component';

describe('BaniereAccueilComponent', () => {
  let component: BaniereAccueilComponent;
  let fixture: ComponentFixture<BaniereAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaniereAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaniereAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
