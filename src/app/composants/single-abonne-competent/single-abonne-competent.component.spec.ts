import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAbonneCompetentComponent } from './single-abonne-competent.component';

describe('SingleAbonneCompetentComponent', () => {
  let component: SingleAbonneCompetentComponent;
  let fixture: ComponentFixture<SingleAbonneCompetentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAbonneCompetentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAbonneCompetentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
