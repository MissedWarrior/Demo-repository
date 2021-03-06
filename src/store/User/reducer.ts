import {SET_USER} from './actionTypes';
import {User} from './types';
import {Reducer} from 'redux';

const initialState: User = {
  name: '',
  email: '',
  isLoggedIn: false,
};

const reducer: Reducer<User> = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        name: 'Fedya',
        email: 'fedya@lipt-soft.ru',
        isLoggedIn: true,
      }
    }
    default: {
      return state;
    }
  }
};

export {reducer};
