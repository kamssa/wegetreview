import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAbonneSpecialComponent } from './single-abonne-special.component';

describe('SingleAbonneSpecialComponent', () => {
  let component: SingleAbonneSpecialComponent;
  let fixture: ComponentFixture<SingleAbonneSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAbonneSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAbonneSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
