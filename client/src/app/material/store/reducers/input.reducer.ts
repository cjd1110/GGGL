import * as InputActions from './../actions/input.action';
import {Input} from '../model/input.model';

export interface InputState {
  readonly isLack: boolean;
  readonly input: Input;
}

export const initialState: InputState = {
  isLack: false,
  input: null
};

export function reducer(state: InputState = initialState, action: InputActions.Actions) {
  switch (action.type) {
    case InputActions.ADD_INPUT:
      return {...state, input: action.payload};
    default:
      return state;
  }
}
