import ColorActionTypes from './color.types';

export const enqueColor = newColor => ({
  type: ColorActionTypes.ENQUEUE_COLOR,
  payload: newColor
});
