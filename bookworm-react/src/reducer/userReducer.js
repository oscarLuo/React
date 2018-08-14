export default function user(state = {}, actions) {
    switch (actions.type) {
        case 'USER_LOGGED_IN': 
            return actions.user;    
        default: return state;
    }
}