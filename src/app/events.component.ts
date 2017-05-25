import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from './event';
import { EventService } from './event.service';


@Component({
  selector: 'my-events',
  templateUrl: './events.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventService]
})




export class EventsComponent implements OnInit{
  title = 'Event Selling';
  events : Event[];
  selectedEvent: Event;
  
  constructor(private router: Router,private eventService: EventService) { }
  
  getEvents(): void {
    this.eventService.getEvents().then(events => this.events = events);
  }
  
  ngOnInit(): void {
    this.getEvents();
  }
  
  onSelect(event: Event): void {
    this.selectedEvent = event;
  }
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedEvent.eventId]);
  }
}
