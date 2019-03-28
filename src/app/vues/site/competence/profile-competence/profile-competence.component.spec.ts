import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCompetenceComponent } from './profile-competence.component';

describe('ProfileCompetenceComponent', () => {
  let component: ProfileCompetenceComponent;
  let fixture: ComponentFixture<ProfileCompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
