import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate',
  pure: false
})
export class PaginatePipe implements PipeTransform {
  transform(list: any, page: number): any {
    return list.slice((page * 10), ((page * 10) + 10));
  }

}
