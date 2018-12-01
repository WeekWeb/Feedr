import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBarFilter'
})
export class SearchBarFilterPipe implements PipeTransform {

  transform(events: any, term: any, type: any): any {
    if(type !== undefined && type !== ""){
      events = events.filter((event) => event.typeOfFood.toLowerCase().includes(type.toLowerCase()));
    }
    if(term === undefined) return events;

    return events.filter((event) => {
      return  event.name.toLowerCase().includes(term.toLowerCase()) ||
              event.description.toLowerCase().includes(term.toLowerCase()) ||
              event.timeOfEvent.includes(term) ||
              event.location.toLowerCase().includes(term.toLowerCase()) ||
              event.typeOfFood.toLowerCase().include(term.toLowerCase());
    });
  }

}
