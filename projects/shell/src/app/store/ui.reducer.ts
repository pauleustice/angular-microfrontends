import { createReducer, on } from '@ngrx/store';

import * as ShellActions from './ui.actions';

export interface UiState {
  title: string;
}

export const initialState: UiState = {
  title: 'Micro-frontends in Angular',
};

export const uiReducer = createReducer(
  initialState,
  on(ShellActions.updateTitle, (state, { title }) => ({ ...state, title }))
);
