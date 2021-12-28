import axios from "axios"
import { act } from "react-dom/test-utils";

const SET_USER_DATA = 'SET_USER_DATA',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET-USERS',
    SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
    SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT',
    TOGGLE_LOADING = 'TOGGLE_LOADING'



let initialState = {
    id:null,
    login:null,
    email:null,
    isLoading: true,
    isAuth: false

}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        } 
        default:
            return state
    }
}

export const setAuthUserData = (id,login, email) =>
    ({ type: SET_USER_DATA, data:{
        id,
        login,
        email
    } });

export default authReducer;