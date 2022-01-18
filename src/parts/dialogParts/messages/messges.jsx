import dialogStyles from '../../../styles/dialogs-parts/dialogStyles.module.css'
import Message from './message';

function Messages(props) {
  const messages = props.messageArr.map((item) => {
    return <Message message={item.message} />;
  });

  return <div className={dialogStyles.messages}>{messages}</div>;
}


export default Messages