import { combineReducers } from 'redux';
import trendReducer from './trendReducer';
import selectReducer from './selectReducer';
import rssReducer from './rssReducer';
import authReducer from './authReducer';

const allReducers = combineReducers({
  trends: trendReducer,
  selected: selectReducer,
  feed: rssReducer,
  auth: authReducer
});

export default allReducers;
