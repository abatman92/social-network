import dialogStyles from "../../../styles/dialogs-parts/dialogStyles.module.css";
import ContactItem from './contact';

function Contacts(props) {
  const dialogs = props.user.reduce((acc, item) => {
    return [...acc, <ContactItem name={item.name} id={item.id}/>]
  },[]);
    return <div className={dialogStyles.items}>{dialogs}</div>;
}



export default Contacts;