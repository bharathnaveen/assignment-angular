import { Component } from '@angular/core';
import * as Papa from 'papaparse';
import { FileUpload } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataList: FileUpload[] = [];
  issueCount: string;
  displayAlert: boolean = false;
  /*
  - UploadFile method will import .csv format file from local machine,
  - and parse the content using papaparse package and which it convert into JSON format. 
  - @params files
  */
  uploadFile(file: File[]) {
    if (file[0]) {
      Papa.parse(file[0], {
        header: true,
        skipEmptyLines: true,
        complete: (result: any) => {
          if (result.meta.fields[2] !== 'Issue count') {
            this.displayAlert = true;
            this.dataList = [];
          } else {
            this.displayAlert = false;
            this.dataList = result.data;
          }
        }
      });
    }
  }
}
