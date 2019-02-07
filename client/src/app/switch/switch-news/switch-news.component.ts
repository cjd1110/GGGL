import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-news',
  templateUrl: './switch-news.component.html',
  styleUrls: ['./switch-news.component.scss']
})
export class SwitchNewsComponent implements OnInit {
  public flag: boolean;
  constructor() { }

  ngOnInit() {
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      this.flag = true;
      console.log('file ', fileList);


      // let formData:FormData = new FormData();
      // formData.append('uploadFile', file, file.name);
      // let headers = new Headers();
      /** In Angular 5, including the header Content-Type can invalidate your request */
      // headers.append('Content-Type', 'multipart/form-data');
      // headers.append('Accept', 'application/json');
      // let options = new RequestOptions({ headers: headers });
      // this.http.post(`${this.apiEndPoint}`, formData, options)
      //   .map(res => res.json())
      //   .catch(error => Observable.throw(error))
      //   .subscribe(
      //     data => console.log('success'),
      //     error => console.log(error)
      //   )
    }
  }
}
