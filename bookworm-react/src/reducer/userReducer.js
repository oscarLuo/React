import { USER_LOGGED_IN, USER_LOGGED_OUT} from '../types/types';
export default function user(state = {}, actions) {
    switch (actions.type) {
        case USER_LOGGED_IN: 
            return actions.user;    
        case USER_LOGGED_OUT:
            return {};
        default: return state;
    }
}