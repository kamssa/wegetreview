import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEspaceComponent } from './single-espace.component';

describe('SingleEspaceComponent', () => {
  let component: SingleEspaceComponent;
  let fixture: ComponentFixture<SingleEspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
