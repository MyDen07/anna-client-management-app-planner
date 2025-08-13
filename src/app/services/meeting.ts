import { Injectable } from '@angular/core';
import { Meeting } from '../models/meeting';

const LS_KEY = 'anna_meetings_v1';

@Injectable({ providedIn: 'root' })
export class MeetingService {
  private meetings: Meeting[] = [];

  constructor() {
    const saved = localStorage.getItem(LS_KEY);
    this.meetings = saved ? JSON.parse(saved) as Meeting[] : [];
  }

  private persist() {
    localStorage.setItem(LS_KEY, JSON.stringify(this.meetings));
  }

  getAll(): Meeting[] {
    return [...this.meetings];
  }

  add(meeting: Omit<Meeting, 'id' | 'status'>): Meeting {
    const id = this.meetings.length ? Math.max(...this.meetings.map(m => m.id)) + 1 : 1;
    const newMeeting: Meeting = { id, status: 'Scheduled', ...meeting };
    this.meetings.push(newMeeting);
    this.persist();
    return newMeeting;
  }

  cancel(id: number): void {
    this.meetings = this.meetings.map(m =>
      m.id === id ? { ...m, status: 'Cancelled' } : m
    );
    this.persist();
  }
}