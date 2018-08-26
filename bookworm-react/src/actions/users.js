import api from "../service/api";
import { userLoggedIn } from "./auth";
import { USER_FETCHED } from '../types/types';

export const signup = data => dispatch => {
  return api.user.signup(data).then(user => {
    localStorage.bookwormJWT = user.token;
    dispatch(userLoggedIn(user));
  });
}
export const userFetched = user => ({
  type : USER_FETCHED,
  user
})

export const fetchCurrentUser = () => dispatch => {
  return  api.user.fetchCurrentUser()
             .then(user => dispatch(userFetched(user)));
}