import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubZoneComponent } from './pub-zone.component';

describe('PubZoneComponent', () => {
  let component: PubZoneComponent;
  let fixture: ComponentFixture<PubZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
