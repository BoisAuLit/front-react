import ColorActionTypes from './color.types';

const INITIAL_STATE = {
  colors: Array(10).fill('')
};

function rotate(arr, numberOfShifts) {
  let deletedArray = arr.splice(arr.length - numberOfShifts);
  for (let i = 0; i < deletedArray.length; i++) {
    arr.splice(i, 0, deletedArray[i]);
  }

  return arr;
}

function getNewColors(oldColors, newColor) {
  oldColors = rotate(oldColors, 1);
  oldColors[0] = newColor;
  return [...oldColors];
}

const colorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ColorActionTypes.ENQUEUE_COLOR:
      return {
        ...state,
        colors: getNewColors(state.colors, action.payload)
      };
    default:
      return state;
  }
};

export default colorReducer;
