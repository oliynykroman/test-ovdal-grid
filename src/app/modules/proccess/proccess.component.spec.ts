import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProccessComponent } from './proccess.component';

describe('ProccessComponent', () => {
  let component: ProccessComponent;
  let fixture: ComponentFixture<ProccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
