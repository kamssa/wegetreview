import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoliBoutonComponent } from './joli-bouton.component';

describe('JoliBoutonComponent', () => {
  let component: JoliBoutonComponent;
  let fixture: ComponentFixture<JoliBoutonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoliBoutonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoliBoutonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
