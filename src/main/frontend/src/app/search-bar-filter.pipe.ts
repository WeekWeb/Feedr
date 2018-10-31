import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBarFilter'
})
export class SearchBarFilterPipe implements PipeTransform {

  transform(events: any, term: any): any {
    if(term === undefined) return events;

    return events.filter((event) => {
      return  event.name.toLowerCase().includes(term.toLowerCase()) ||
              event.description.toLowerCase().includes(term.toLowerCase()) ||
              event.date.includes(term) ||
              event.address.toLowerCase().includes(term.toLowerCase());
    });
  }

}
