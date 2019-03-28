import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoosterProfilComponent } from './booster-profil.component';

describe('BoosterProfilComponent', () => {
  let component: BoosterProfilComponent;
  let fixture: ComponentFixture<BoosterProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoosterProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoosterProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
