import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientList } from './components/client-list/client-list';
import { MeetingScheduler } from './components/meeting-scheduler/meeting-scheduler';

const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients', component: ClientList },
  { path: 'meetings', component: MeetingScheduler },
  { path: '**', redirectTo: 'clients' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}