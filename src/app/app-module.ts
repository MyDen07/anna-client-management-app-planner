import { FormsModule } from '@angular/forms';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ClientList } from './components/client-list/client-list';
import { MeetingScheduler } from './components/meeting-scheduler/meeting-scheduler';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClientList,
    MeetingScheduler
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
