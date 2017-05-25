import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Event } from './event';

@Injectable()
export class EventService {

  private eventsUrl = 'api/events';  // URL to web api
  constructor(private http: Http) { }
  getEvents(): Promise<Event[]> {
    return this.http.get(this.eventsUrl)
               .toPromise()
               .then(response => response.json().data as Event[])
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
  getEvent(eventId: number): Promise<Event> {
 		const url = `${this.eventsUrl}/${eventId}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Event)
      .catch(this.handleError); 
  
  }
   
  getEventsSlowly(): Promise<Event[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getEvents()), 2000);
  });
}
  
}