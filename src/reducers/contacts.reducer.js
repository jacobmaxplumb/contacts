import { createStore } from "redux";
import { DELETE_CONTACT, UPDATE_NAME, UPDATE_NUMBER, ADD_CONTACT } from "../actions/contacts.actions";

const initalState = {
    contacts: [{name: 'Jacob', phoneNumber: '123-123-1234'}],
    currentContact: {name: '', phoneNumber: ''}
}

// functions to handle actions
const deleteContact = (state, action) => {
    const contacts = [...state.contacts];
    contacts.splice(action.index, 1);
    return {
        ...state,
        contacts
    }
}

const updateName = (state, action) => {
    const contact = {...state.currentContact, name: action.text};
    return {...state, currentContact: contact}
}

const updateNumber = (state, action) => {
    const contact = {...state.currentContact, phoneNumber: action.text};
    return {...state, currentContact: contact}
}

const addContact = (state) => {
    const contacts = [...state.contacts, state.currentContact];
    return {...state, currentContact: initalState.currentContact, contacts}
}

const reducer = (state = initalState, action) => {
    switch(action.type) {
        case DELETE_CONTACT:
            return deleteContact(state, action);
        case UPDATE_NAME:
            return updateName(state, action);
        case UPDATE_NUMBER:
            return updateNumber(state, action);
        case ADD_CONTACT:
            return addContact(state);
        default:
            return state;
    }
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());