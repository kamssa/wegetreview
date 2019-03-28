import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePartenaireComponent } from './single-partenaire.component';

describe('SinglePartenaireComponent', () => {
  let component: SinglePartenaireComponent;
  let fixture: ComponentFixture<SinglePartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
