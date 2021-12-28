import { NavLink } from "react-router-dom"
import { sendMessegeActionReator, updateNewMessageBodyActionReator } from "../../redux/dialog-reducer";
import c from "./Dialogs.module.css"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={c.dialog} >
            <NavLink to={path} activeClassName={c.activeLink}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    
    let  dialogs = props.dialogs;
    let dialogElement = dialogs.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElement = dialogs.messagesData.map(m => <Message message={m.message} />);
    let newMessageBody = dialogs.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateMessageBody(body);
    }
    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                {dialogElement}

            </div>
            <div className="messages">
                <div> {messageElement}</div>
                <div>
                    <div>
                        <textarea placeholder="Enter message"
                            value={newMessageBody} onChange={onNewMessageChange}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick} >Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
