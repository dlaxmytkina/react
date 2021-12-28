const UPDATE_NEW_MESSAGE_BODY ='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE ='SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    
     if(action.type === UPDATE_NEW_MESSAGE_BODY){
        return {
            ...state,
            newMessageText: action.body
        } 
   
    }else if(action.type === SEND_MESSAGE){
        let message = {id:6 , message: state.newMessageText}
        return {
            ...state,
            newMessageText: "",
            messagesData: [...state.messagesData, message]
        }
    }
    return state
}

export const  sendMessegeActionReator = () =>
({type: SEND_MESSAGE })
export const  updateNewMessageBodyActionReator = (body) =>
({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;