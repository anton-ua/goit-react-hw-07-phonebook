import { connect } from "react-redux";
import ContactsList from "./ContactsList";
import { getContacts, getFilter } from "../../redux/selector";

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
  filter: getFilter(state),
});

export default connect(mapStateToProps)(ContactsList);
