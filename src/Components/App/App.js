import React, { Component } from "react";
import styles from "./App.module.css";
import AddContactConnect from "../AddContact/AddContactConnect";
import ContactsListConnect from "../ContactsList/ContactsListConnect";
import FilterConnect from "../Filter/FilterConnect";
import { connect } from "react-redux";
import { fetchContacts } from "../../redux/contactsOperations";
import PropTypes from "prop-types";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={styles.container}>
        <AddContactConnect />
        <FilterConnect />
        <ContactsListConnect />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchContacts: fetchContacts,
};

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  fetchContacts: PropTypes.func.isRequired,
};
