import { Card, CardContent, CardHeader } from '@material-ui/core'
import { connect } from 'react-redux';

const ContactList = (props) => {
    console.log(props);
    return (
        <Card>
            <CardHeader title="Contacts"/>
            <CardContent>
                stuff
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