import { createStore } from "redux";

const initalState = {
    contacts: [{name: 'Jacob', phoneNumber: '123-123-1234'}],
    currentContact: {name: '', phoneNumber: ''}
}

const reducer = (state = initalState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());