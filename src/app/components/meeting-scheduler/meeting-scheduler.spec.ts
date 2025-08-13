import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingScheduler } from './meeting-scheduler';

describe('MeetingScheduler', () => {
  let component: MeetingScheduler;
  let fixture: ComponentFixture<MeetingScheduler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingScheduler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingScheduler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
