import Filter from "./Filter";
import { connect } from "react-redux";
import * as contactsActions from "../../redux/contactsActions";
import { getContacts, getFilter } from "../../redux/selector";

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
  filter: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (filter) => dispatch(contactsActions.filterContact(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
