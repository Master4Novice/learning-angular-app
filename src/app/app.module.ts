import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './event-detail.component';
import { EventService } from './event.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [AppComponent,DashboardComponent,EventDetailComponent,EventsComponent],
  imports: [BrowserModule,FormsModule,HttpModule,InMemoryWebApiModule.forRoot(InMemoryDataService),AppRoutingModule],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
