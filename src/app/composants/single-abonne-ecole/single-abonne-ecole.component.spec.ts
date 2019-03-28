import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAbonneEcoleComponent } from './single-abonne-ecole.component';

describe('SingleAbonneEcoleComponent', () => {
  let component: SingleAbonneEcoleComponent;
  let fixture: ComponentFixture<SingleAbonneEcoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAbonneEcoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAbonneEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
