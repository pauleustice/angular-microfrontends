import { createAction, props } from '@ngrx/store';

export const updateTitle = createAction(
  '[UI] Update Title',
  props<{ title: string; }>()
);
