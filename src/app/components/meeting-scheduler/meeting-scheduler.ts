import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { ClientService } from '../../services/client';
import { MeetingService } from '../../services/meeting';
import { Client } from '../../models/client';
import { Meeting } from '../../models/meeting';

@Component({
  selector: 'app-meeting-scheduler',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meeting-scheduler.html',
  styleUrls: ['./meeting-scheduler.scss']
})
export class MeetingScheduler {
  clients: Client[] = [];
  meetings: Meeting[] = [];
  form = {
    clientId: '',
    title: '',
    date: '',
    time: '',
    mode: 'In-Person',
    location: '',
    meetingLink: ''
  };

  constructor(private clientSvc: ClientService, private meetingSvc: MeetingService) {
    this.clients = this.clientSvc.getAll();
    this.refresh();
  }

  refresh() {
    this.meetings = this.meetingSvc.getAll();
  }

  createMeeting() {
    if (!this.form.clientId || !this.form.title || !this.form.date || !this.form.time) {
      alert('Client, Title, Date and Time are required');
      return;
    }
    const clientIdNum = Number(this.form.clientId);
    this.meetingSvc.add({
      clientId: clientIdNum,
      title: this.form.title.trim(),
      date: this.form.date,
      time: this.form.time,
      mode: this.form.mode as any,
      location: this.form.mode === 'In-Person' ? this.form.location.trim() : '',
      meetingLink: this.form.mode === 'Online' ? this.form.meetingLink.trim() : ''
    });
    this.form = { clientId: '', title: '', date: '', time: '', mode: 'In-Person', location: '', meetingLink: '' };
    this.refresh();
  }

  cancel(id: number) {
    if (confirm('Cancel this meeting?')) {
      this.meetingSvc.cancel(id);
      this.refresh();
    }
  }
}