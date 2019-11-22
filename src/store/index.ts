import {createStore, combineReducers, Store, Reducer, compose} from 'redux';
import {reducer as user} from '@store/User';
import {reducer as legals} from '@store/Legals';
import {User} from '@store/User/types';
import {Legal} from '@store/Legals/types';

export interface rootReducerType {
  user: User,
  legals: Legal[],
}

export const rootReducer: Reducer<rootReducerType> = combineReducers({
  user,
  legals,
});

const enhancers = [];
const devToolsExtension = (window as any)['__REDUX_DEVTOOLS_EXTENSION__'];

if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const store: Store = createStore(rootReducer, compose(...enhancers));

export default store;
