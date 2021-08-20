export const DELETE_CONTACT = 'Delete Contact';
export const UPDATE_NAME = 'Update Name';
export const UPDATE_NUMBER = 'Update Number';
export const ADD_CONTACT = 'Add Contact';

export const deleteContactAction = index => {
    return {type: DELETE_CONTACT, index}
}

export const updateNameAction = text => {
    console.log('hit here');
    return {type: UPDATE_NAME, text}
}

export const updateNumberAction = text => {
    return {type: UPDATE_NUMBER, text}
}

export const addContactAction = () => {
    return {type: ADD_CONTACT}
}