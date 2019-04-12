import { Pipe, PipeTransform } from "@angular/core";
/*
  - FilterPipe help us to filter related values in data table. 
  - @params items
  - @params args
  */
@Pipe({ name: "filterByIssueCount" })
export class FilterPipe implements PipeTransform {
  transform(items: any[], args: Object): any {
    if (!items || !args) {
      return items;
    }
    return items.filter(item => item["Issue count"] === args);
  }
}
