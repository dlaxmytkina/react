import axios from "axios"
import { act } from "react-dom/test-utils";

const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET-USERS',
    SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
    SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT',
    TOGGLE_LOADING = 'TOGGLE_LOADING'



let initialState = {

    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isLoading: true,
    followingInProgress: false

}


const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }

        } case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        } case SET_USERS: {

            return {
                ...state,
                users: [...action.users]
            }
        } case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        } case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUserCount: action.totalCount
            }
        } case TOGGLE_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

export const follow = (userId) =>
    ({ type: FOLLOW, userId });
export const unfollow = (userId) =>
    ({ type: UNFOLLOW, userId });

export const setUsers = (users) =>

    ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) =>

    ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) =>

    ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const isLoading = (isLoading) =>

    ({ type: TOGGLE_LOADING, isLoading });


export default UsersReducer;