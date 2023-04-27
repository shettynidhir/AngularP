import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisprevComponent } from './disprev.component';

describe('DisprevComponent', () => {
  let component: DisprevComponent;
  let fixture: ComponentFixture<DisprevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisprevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisprevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
