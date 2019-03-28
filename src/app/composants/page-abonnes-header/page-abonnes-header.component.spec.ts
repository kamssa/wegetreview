import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAbonnesHeaderComponent } from './page-abonnes-header.component';

describe('PageAbonnesHeaderComponent', () => {
  let component: PageAbonnesHeaderComponent;
  let fixture: ComponentFixture<PageAbonnesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAbonnesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAbonnesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
