import { NavLink } from "react-router-dom";
import dialogStyles from "../../../styles/dialogs-parts/dialogStyles.module.css";

const ContactItem = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <NavLink to={path} className={dialogStyles.item}>
      {props.name}
    </NavLink>
  );
};

export default ContactItem;
