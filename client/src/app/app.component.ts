import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  type: string = 'lol';

  constructor(private cdr : ChangeDetectorRef) {

  }

  setType(type) {
    this.type = type;
    this.cdr.detectChanges();
  }
}
