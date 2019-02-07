import {Component, OnInit} from '@angular/core';
import {animationFrameScheduler, concat, defer, fromEvent, interval, merge, Observable, of} from 'rxjs';
import {RequestOptions} from "@angular/http";

@Component({
  selector: 'app-lol-news',
  templateUrl: './lol-news.component.html',
  styleUrls: ['./lol-news.component.scss']
})
export class LolNewsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
