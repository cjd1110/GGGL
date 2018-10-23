import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent implements OnInit {

  @Input() type: string = 'lol';

  constructor() { }

  ngOnInit() {
  }

}
