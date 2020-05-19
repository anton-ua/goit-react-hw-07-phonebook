import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import TransitionListItem from "../../Transition/TransitionListItem.module.css";
import ContactsItemConnect from "../ContactsItem/ContactsItemConnect";

const filterContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactsList = ({ contacts, filter }) => {
  const filteredContacts = filter ? filterContacts(contacts, filter) : contacts;

  return (
    <TransitionGroup component="ul">
      {filteredContacts.map(({ name, number, id }) => (
        <CSSTransition
          timeout={250}
          unmountOnExit
          key={id}
          classNames={TransitionListItem}
        >
          <ContactsItemConnect name={name} number={number} id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};
