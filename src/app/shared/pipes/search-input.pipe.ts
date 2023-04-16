import { Pipe, PipeTransform } from '@angular/core';
import { Imovie } from '../models/movie';

@Pipe({
  name: 'searchInput'
})
export class SearchInputPipe implements PipeTransform {

  transform(value: Imovie[], searchInput: string) {
    // console.log(searchInput);


    if (!value) {
      return []
    }
    if (!searchInput) {
      return value
    }

    let filterArray = value.filter(e => {
      return e.title.toLowerCase().startsWith(searchInput.toLowerCase())
    })

    return filterArray

  }

}
