import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacktabComponent } from './feedbacktab.component';

describe('FeedbacktabComponent', () => {
  let component: FeedbacktabComponent;
  let fixture: ComponentFixture<FeedbacktabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbacktabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbacktabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
