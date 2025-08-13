import { Injectable } from '@angular/core';
import { Client } from '../models/client';

const LS_KEY = 'anna_clients_v1';

@Injectable({ providedIn: 'root' })
export class ClientService {
  private clients: Client[] = [];

  constructor() {
    const saved = localStorage.getItem(LS_KEY);
    this.clients = saved ? JSON.parse(saved) : [];
  }

  private persist() {
    localStorage.setItem(LS_KEY, JSON.stringify(this.clients));
  }

  getAll() {
    return [...this.clients];
  }

  add(client: Omit<Client, 'id'>) {
    const id = this.clients.length ? Math.max(...this.clients.map(c => c.id)) + 1 : 1;
    const newClient: Client = { id, ...client };
    this.clients.push(newClient);
    this.persist();
    return newClient;
  }

  remove(id: number) {
    this.clients = this.clients.filter(c => c.id !== id);
    this.persist();
  }
}