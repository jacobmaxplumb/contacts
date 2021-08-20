import { Button, Card, CardActions, CardContent, CardHeader, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { addContactAction, updateNameAction, updateNumberAction } from '../actions/contacts.actions'

const ContactForm = (props) => {
    console.log(props);
    return (
        <Card>
            <CardHeader title="Add Contact" />
            <CardContent>
                <TextField 
                    style={{ width: '100%', marginBottom: '10px' }} 
                    variant="outlined" label="Name" 
                    value={props.currentContact.name} 
                    onChange={(e) => props.updateNameAction(e.target.value)} />
                <TextField 
                    style={{ width: '100%' }} 
                    variant="outlined" 
                    label="Number" 
                    value={props.currentContact.phoneNumber} 
                    onChange={(e) => props.updateNumberAction(e.target.value)} />
            </CardContent>
            <CardActions style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button variant="contained" color="primary" onClick={() => props.addContactAction()}>
                    Submit
                </Button>
            </CardActions>
        </Card>
    );
}

const mapStateToProps = state => {
    return {
        currentContact: state.currentContact
    }
}

export default connect(mapStateToProps, { addContactAction, updateNameAction, updateNumberAction })(ContactForm);