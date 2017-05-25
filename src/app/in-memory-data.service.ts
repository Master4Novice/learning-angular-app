import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let events = [
      { eventId: 1001, eventName: 'Birthday' },
      { eventId: 1002, eventName: 'Marriage' },
      { eventId: 1003, eventName: 'New Year Party' },
      { eventId: 1004, eventName: 'Tea Party' },
      { eventId: 1005, eventName: 'Project Party' },
      { eventId: 1006, eventName: 'Greh Pravesh' }
    ];
    return {events};
  }
}
