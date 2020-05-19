import Axios from "axios";
import {
  getContactsStart,
  getContactsSucess,
  getContactsError,
  postContactStart,
  postContactSuccess,
  postContactError,
  deleteContactStart,
  deleteContactSuccess,
  deleteContactError,
} from "./contactsActions";

export const fetchContacts = () => (dispatch) => {
  dispatch(getContactsStart());

  Axios.get("http://localhost:8686/contacts")
    .then(({ data }) => dispatch(getContactsSucess(data)))
    .catch((error) => dispatch(getContactsError(error)));
};

export const postContact = (contact) => (dispatch) => {
  dispatch(postContactStart());

  Axios.post("http://localhost:8686/contacts", contact)
    .then(({ data }) => dispatch(postContactSuccess(data)))
    .catch((error) => dispatch(postContactError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactStart());

  Axios.delete(`http://localhost:8686/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};
