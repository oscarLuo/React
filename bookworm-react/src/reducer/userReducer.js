import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_FETCHED} from '../types/types';
export default function user(state = {loaded: false}, actions) {
    switch (actions.type) {
        case USER_LOGGED_IN: 
            return actions.user;    
        case USER_LOGGED_OUT:
            return {loaded: true};
        case USER_FETCHED:
            return {...state, ...actions.user, loaded: true};
        default: return state;
    }
}