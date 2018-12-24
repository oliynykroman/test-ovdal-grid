import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KompetencerItemComponent } from './kompetencer-item.component';

describe('KompetencerItemComponent', () => {
  let component: KompetencerItemComponent;
  let fixture: ComponentFixture<KompetencerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KompetencerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KompetencerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
