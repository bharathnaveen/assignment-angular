import { Pipe, PipeTransform } from '@angular/core';
import { FileUpload } from '../app.model';
/*
  - FilterPipe help us to filter related values in data table. 
  - @params items
  - @params field
  - @params value
  */
@Pipe({ name: 'filterByIssueCount' })
export class FilterPipe implements PipeTransform {
  transform(items: FileUpload[], field: string, value: string): any {
    if (!items || !field) {
      return items;
    }
    return items.filter(item => item['Issue count'] === field);
  }
}
