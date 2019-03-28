import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLastInscritComponent } from './single-last-inscrit.component';

describe('SingleLastInscritComponent', () => {
  let component: SingleLastInscritComponent;
  let fixture: ComponentFixture<SingleLastInscritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleLastInscritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLastInscritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
