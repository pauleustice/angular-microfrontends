import { createSelector } from '@ngrx/store';

import { UiState } from './ui.reducer';

export const selectUiState = (state) => {
  return state.ui;
};

export const selectTitle = createSelector(
  selectUiState,
  (uiState: UiState) => uiState.title,
);
