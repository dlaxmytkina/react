import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";



let store = {

    _state: {
        messagesPage: {
            dialogsData: [
                { id: 1, name: "Andrey" },
                { id: 2, name: "Diana" },
                { id: 3, name: "Dima" },
                { id: 4, name: "Alex" },
                { id: 5, name: "Nikol" },
            ],
            messagesData: [
                { id: 1, message: "Hello" },
                { id: 2, message: "WoW" },
                { id: 3, message: "Yasssss" },
                { id: 4, message: "Oy" },
                { id: 5, message: "Pop" },
            ],
            newMessageText: ''

        },
        profilePage: {
            postsData: [
                { id: 1, text: "Hello guys", likesCount: 3 },
                { id: 2, text: "Now ", likesCount: 3 },
                { id: 3, text: "Post three ", likesCount: 3 },
                { id: 4, text: "How are you", likesCount: 3 },
                { id: 5, text: "What is love", likesCount: 3 },
            ],
            newPostText: "hello",
        }
    },

    _callSubscriber() {
        console.log('state chanched!');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
       this._callSubscriber(this._state);
    }



}








export default store;
window.store = store;