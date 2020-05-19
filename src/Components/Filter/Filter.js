import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import TransitionFilter from "../../Transition/TransitionFilter.module.css";

const Filter = ({ contacts, filter, handleFilter }) => (
  <CSSTransition
    classNames={TransitionFilter}
    timeout={250}
    unmountOnExit
    in={contacts.length > 1}
  >
    <div>
      <p>Find contact by name:</p>
      <input
        placeholder="Find..."
        value={filter}
        onChange={(e) => handleFilter(e.target.value)}
      />
    </div>
  </CSSTransition>
);

export default Filter;

Filter.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
