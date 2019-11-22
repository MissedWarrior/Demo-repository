import {Reducer} from 'redux';
import {Legal} from '@store/Legals/types';
import {REMOVE_LEGAL, LegalActions} from './actionTypes';

const initialState: Legal[] = [
  {
    id: 1,
    name: 'Timur Glazkov',
    description: 'The best sniper in da world',
    email: 'glaz@r6.com',
    number: '+7 (999) 123-45-67',
    location: 'Somewhere in Russia',
  },
  {
    id: 2,
    name: 'Goose',
    description: 'The best scout in the... Honk!',
    email: 'honk@honk.honk',
    location: 'Everywhere',
    number: 'Just honk'
  },
];

const reducer: Reducer<Legal[], LegalActions> = (state: Legal[] = initialState, action: LegalActions) => {
  switch (action.type) {
    case REMOVE_LEGAL: {
      const legal = state.find(item => item.id === action.id);

      if (legal) {
        const index = state.indexOf(legal);

        return state.slice(0, index).concat(state.slice(index + 1));
      }

      return state;
    }
    default: {
      return state;
    }
  }
};

export {reducer};
