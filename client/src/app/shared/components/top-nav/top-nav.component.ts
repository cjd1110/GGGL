import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatButtonToggleGroup} from "@angular/material";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit, AfterViewInit {
  toolbarColor: string;
  type: string;
  imgUrl: string;

  @ViewChild('group') group : MatButtonToggleGroup;
  @Output() outputType = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.changeButton();
    this.cdr.detectChanges();
  }

  clickAccount() {

  }

  changeImage() {
    switch(this.type) {
      case 'lol':
        this.imgUrl = './assets/lol.jpg';
        break;
      case 'switch':
        this.imgUrl = './assets/switch.jpg';
        break;
      case 'ps4':
        this.imgUrl = './assets/ps4.jpg';
        break;
    }
  }

  changeButton() {
    this.type = this.group.value;
    this.changeImage();
    this.setOutputType();
  }

  setOutputType() {
    this.outputType.emit(this.type);
  }
}
