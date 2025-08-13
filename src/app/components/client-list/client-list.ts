import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { ClientService } from '../../services/client';
import { Client } from '../../models/client';

@Component({
 selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-list.html',
  styleUrls: ['./client-list.scss']
})
export class ClientList {
  clients: Client[] = [];
  form = { name: '', email: '', phone: '', company: '', notes: '' };

  constructor(private clientSvc: ClientService) {
    this.refresh();
  }

  refresh() {
    this.clients = this.clientSvc.getAll();
  }

  addClient() {
    if (!this.form.name.trim() || !this.form.email.trim()) {
      alert('Name and Email are required');
      return;
    }

    this.clientSvc.add({
      name: this.form.name.trim(),
      email: this.form.email.trim(),
      phone: this.form.phone.trim(),
      company: this.form.company.trim(),
      notes: this.form.notes.trim()
    });

    this.form = { name: '', email: '', phone: '', company: '', notes: '' };
    this.refresh();
  }

  remove(id: number) {
    if (confirm('Delete this client?')) {
      this.clientSvc.remove(id);
      this.refresh();
    }
  }
}