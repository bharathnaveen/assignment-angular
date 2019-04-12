import { Pipe, PipeTransform } from '@angular/core';
/*
  - KeysPipe used to Transform the key values in a array which bind the data in HTML Template. 
  - @params value
  */
@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value): any {
    const keys = [];
    for (const key in value) {
      keys.push(key);
    }
    return keys;
  }
}
