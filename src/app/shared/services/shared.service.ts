import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
  }

  filterArrayById(array: any, id: string): any[] {
    return array.filter((item: any) => item.id !== id);
  }

  mapArrayById(array: any, item: any): any[] {
    return array.map((el: any) => el.id === item.id ? item : el);
  }
}

