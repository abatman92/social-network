import dialogStyles from '../../../styles/dialogs-parts/dialogStyles.module.css'

const Message = (props) => {
    return <div className={dialogStyles.message}>{props.message}</div>;
}

export default Message