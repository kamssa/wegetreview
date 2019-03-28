import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEcoleComponent } from './profile-ecole.component';

describe('ProfileEcoleComponent', () => {
  let component: ProfileEcoleComponent;
  let fixture: ComponentFixture<ProfileEcoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEcoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
