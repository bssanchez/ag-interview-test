import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate',
  pure: false
})
export class PaginatePipe implements PipeTransform {

  /**
   * Return list of paginate array, set to 10 itemsd per page
   * @param list array
   * @param page number
   */
  transform(list: any, page: number): any {
    return list.slice((page * 10), ((page * 10) + 10));
  }

}
