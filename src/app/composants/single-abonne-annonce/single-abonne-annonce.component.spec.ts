import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAbonneAnnonceComponent } from './single-abonne-annonce.component';

describe('SingleAbonneAnnonceComponent', () => {
  let component: SingleAbonneAnnonceComponent;
  let fixture: ComponentFixture<SingleAbonneAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAbonneAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAbonneAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
