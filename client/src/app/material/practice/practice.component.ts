import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Input} from '../store/model/input.model';
import {InputState} from '../store/reducers/input.reducer';
import {Store} from '@ngrx/store';
import * as InputActions from './../store/actions/input.action';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit, AfterViewInit {
  input: Input;

  constructor(private store: Store<InputState>) {
  }

  ngOnInit() {
    this.store.select('input').subscribe(res => {
      this.input = res['input'];
    });
  }

  ngAfterViewInit() {

  }

  addInputText(name: string, description: string) {
    this.store.dispatch(new InputActions.AddInput({name: name, description: description}));
  }

}
