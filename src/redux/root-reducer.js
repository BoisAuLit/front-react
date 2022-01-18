import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import colorReducer from './colors/color.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['color']
};

const rootReducer = combineReducers({
  color: colorReducer
});

export default persistReducer(persistConfig, rootReducer);
