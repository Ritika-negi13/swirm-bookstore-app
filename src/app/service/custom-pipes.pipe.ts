
import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], query: string): any[] {
    if (!query) return items;
    return items.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }
}
 