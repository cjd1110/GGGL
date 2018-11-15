import {Action} from '@ngrx/store';
import {Input} from '../model/input.model';

export const ADD_INPUT = '[INPUT] Add';
export const REMOVE_INPUT = '[INPUT] Remove';

export class AddInput implements Action {
  readonly type = ADD_INPUT;

  constructor(public payload: Input) {
  }
}

export class RemoveInput implements Action {
  readonly type = REMOVE_INPUT;

  constructor(public payload: number) {
  }
}

export type Actions = AddInput | RemoveInput;

