import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAbonneImmoComponent } from './single-abonne-immo.component';

describe('SingleAbonneImmoComponent', () => {
  let component: SingleAbonneImmoComponent;
  let fixture: ComponentFixture<SingleAbonneImmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAbonneImmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAbonneImmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
