import ContactsItem from "./ContactsItem";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contactsOperations";

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactsItem);
