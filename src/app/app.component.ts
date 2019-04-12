import { Component } from "@angular/core";
import * as Papa from "papaparse";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  dataList: [];
  issueCount: string;
  /*
  - UploadFile method will import .csv format file from local machine,
  - and parse the content using papaparse package and which it convert into JSON format. 
  - @params files
  */
  uploadFile(files: File[]) {
    if (files[0]) {
      Papa.parse(files[0], {
        header: true,
        skipEmptyLines: true,
        complete: (result: any) => {
          this.dataList = result.data;
        }
      });
    }
  }
}
