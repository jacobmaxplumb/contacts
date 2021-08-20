import { Button, Card, CardContent, CardHeader } from '@material-ui/core'
import { connect } from 'react-redux';

const ContactList = (props) => {
    console.log(props);
    return (
        <Card>
            <CardHeader title="Contacts"/>
            <CardContent>
                {props.contacts.map((contact, index) => (
                    <Card key={index}>
                        <CardContent>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <div>{contact.name}</div>
                                <div>{contact.phoneNumber}</div>
                                <Button variant="contained" color="secondary">Delete</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </CardContent>
        </Card>
    );
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps, {})(ContactList);