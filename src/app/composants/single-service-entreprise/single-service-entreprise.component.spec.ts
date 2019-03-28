import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleServiceEntrepriseComponent } from './single-service-entreprise.component';

describe('SingleServiceEntrepriseComponent', () => {
  let component: SingleServiceEntrepriseComponent;
  let fixture: ComponentFixture<SingleServiceEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleServiceEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleServiceEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
