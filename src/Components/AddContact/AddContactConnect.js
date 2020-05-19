import { connect } from "react-redux";
import AddContact from "./AddContact";
import { postContact } from "../../redux/contactsOperations";
import { getContacts } from "../../redux/selector";

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  postContact: (contact) => dispatch(postContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
