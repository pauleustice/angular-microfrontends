import { createReducer, on } from '@ngrx/store';

import * as HostActions from './ui.actions';

export interface UiState {
  title: string;
}

export const initialState: UiState = {
  title: 'Micro-frontends in Angular',
};

export const uiReducer = createReducer(
  initialState,
  on(HostActions.updateTitle, (state, { title }) => ({ ...state, title }))
);
