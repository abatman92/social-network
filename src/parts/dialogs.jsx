import dialogsStyles from '../styles/dialogs-parts/dialogsPage.module.css'
import Contacts from './dialogParts/contacts/contacts';
import Messages from './dialogParts/messages/messges';

function Dialogs(props) {
    return (
        <div className={`content ${dialogsStyles.dialogs}`}>
            <Contacts user={props.data.user} />
            <Messages messageArr={props.data.messageArr} />
        </div>
    )
}



export default Dialogs;