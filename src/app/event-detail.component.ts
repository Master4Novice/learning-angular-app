import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';


import { Event } from './event';
import { EventService } from './event.service';


@Component({
  selector: 'event-detail',
  templateUrl: './eventDetail.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit{
    event: Event;
    constructor(
       private eventService: EventService,
       private route: ActivatedRoute,
       private location: Location) {}
       goBack(): void {
            this.location.back();
       }       
       ngOnInit(): void {
           this.route.params
           .switchMap((params: Params) => this.eventService.getEvent(+params['eventId']))
           .subscribe(event => this.event = event);
       }
       
}
