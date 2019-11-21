import {createStore, combineReducers, Store, Reducer, compose} from 'redux';
import {reducer as user} from './User';
import {User} from '@store/User/types';

export interface rootReducerType {
  user: User,
}

export const rootReducer: Reducer<rootReducerType> = combineReducers({
  user,
});

const enhancers = [];
const devToolsExtension = (window as any)['__REDUX_DEVTOOLS_EXTENSION__'];

if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const store: Store = createStore(rootReducer, compose(...enhancers));

export default store;
