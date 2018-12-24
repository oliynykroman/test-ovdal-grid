import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KompetencerDetailComponent } from './kompetencer-detail.component';

describe('KompetencerDetailComponent', () => {
  let component: KompetencerDetailComponent;
  let fixture: ComponentFixture<KompetencerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KompetencerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KompetencerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
