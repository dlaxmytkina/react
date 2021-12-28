import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import UsersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage:  dialogsReducer,
    usersPages: UsersReducer,
    auth: authReducer
       
});

let store = createStore(reducers);
window.store = store;
export default store;