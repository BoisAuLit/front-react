import { createSelector } from 'reselect';

const selectColor = state => state.color;

export const selectColors = createSelector(
  [selectColor], //
  color => color.colors
);
