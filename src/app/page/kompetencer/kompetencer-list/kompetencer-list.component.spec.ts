import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KompetencerListComponent } from './kompetencer-list.component';

describe('KompetencerListComponent', () => {
  let component: KompetencerListComponent;
  let fixture: ComponentFixture<KompetencerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KompetencerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KompetencerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
