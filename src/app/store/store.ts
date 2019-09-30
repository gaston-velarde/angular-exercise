import { IProfile } from '../classes/profile';
import { IPROFILES } from '../classes/profile-mock';
import { ADD_PROFILE, TOGGLE_NOTE_FORM_SHOW, REMOVE_PROFILE} from './actions';

export interface IAppState {
    profiles: IProfile[];
    isNoteFormShown: boolean;
}

export const INITIAL_STATE: IAppState = {
    profiles: IPROFILES,
    isNoteFormShown: false
};

export function rootReducer(state, action) {
    switch (action.type) {
        case ADD_PROFILE:
          action.profile.id = state.profiles.length + 1;
          return Object.assign({}, state, {
              profiles: state.profiles.concat(Object.assign ({}, action.profile))
          });

        case REMOVE_PROFILE:
          return Object.assign({}, state, {
              profiles: state.profiles.filter(t => t.id !== action.id)
          });

        case TOGGLE_NOTE_FORM_SHOW:
          return Object.assign({}, state, {
            isNoteFormShown: !state.isNoteFormShown
          });
    }
    return state;
}