
import { connect } from "react-redux";
import { sendMessegeActionReator, updateNewMessageBodyActionReator } from "../../redux/dialog-reducer";

import Dialogs from "./dialogs";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        updateMessageBody: (body) =>{
        
    dispatch(updateNewMessageBodyActionReator(body))
    },
    sendMessage: ()=>{
    dispatch(sendMessegeActionReator());
    }
    }
    

}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogContainer;