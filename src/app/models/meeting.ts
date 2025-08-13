export interface Meeting {
  id: number;
  clientId: number;
  title: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  mode: 'In-Person' | 'Online' | 'Phone';
  location?: string;
  meetingLink?: string;
  status: 'Scheduled' | 'Cancelled' | 'Completed';
}