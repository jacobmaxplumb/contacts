import { Card, CardContent, CardHeader } from '@material-ui/core';
import { connect } from 'react-redux';

const ContactForm = (props) => {
    console.log(props);
    return (
        <Card>
            <CardHeader title="Add Contact"/>
            <CardContent>
                stuff
            </CardContent>
        </Card>
    );
}

const mapStateToProps = state => {
    return {
        currentContact: state.currentContact
    }
}

export default connect(mapStateToProps, {})(ContactForm);