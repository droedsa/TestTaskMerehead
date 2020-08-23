import React from 'react';
import {Field, reduxForm} from "redux-form";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import {maxLengthCreator, required} from "../../validator/formValidator";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import './userDetails.css'

let maxLengthName = maxLengthCreator(15)
let maxLengthSurname = maxLengthCreator(15)
let maxLengthDesc = maxLengthCreator(50)

const renderNameField = ({input, meta, ...custom}) => {
    return <FormControl style={{marginBottom: 20}} fullWidth>
        <TextField
            error={meta.touched && meta.error !== undefined}
            helperText={meta.touched ? meta.error : null}
            label='First name'
            {...input} {...custom}/>
    </FormControl>
}

const renderSecondNameField = ({input, meta, ...custom}) => {
    return <FormControl style={{marginBottom: 20}} fullWidth>
        <TextField
            error={meta.touched && meta.error !== undefined}
            helperText={meta.touched ? meta.error : null}
            label='Second name'
            {...input} {...custom}/>
    </FormControl>
}

const renderDescField = ({input, meta, ...custom}) => {
    return <FormControl style={{marginBottom: 20}} fullWidth>
        <TextField
            error={meta.touched && meta.error !== undefined}
            helperText={meta.touched ? meta.error : null}
            label='Second name'
            {...input} {...custom}/>
    </FormControl>
}

const UserDetails = ({handleSubmit, deleteUser, initialValues, closeWindow}) => {
    return (
        <div className={'user-desc-container'}>
            <Card className={'user-desc-container__card'}>
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <FormControl fullWidth>
                            <Field name="name" component={renderNameField} type="text"
                                   validate={[maxLengthName, required]}/>
                            <Field name="surname" component={renderSecondNameField} type="text"
                                   validate={[maxLengthSurname, required]}/>
                            <Field name="desc" component={renderDescField} type="text"
                                   validate={[maxLengthDesc, required]}/>
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        <Button type='submit' color="secondary" variant='contained'>
                            Save
                        </Button>
                        {
                            initialValues === undefined ? null :
                                <Button onClick={() => deleteUser(initialValues.id)} type='button' color="secondary"
                                        variant='contained'>
                                    Delete
                                </Button>
                        }
                        <Button type='button' onClick={() => closeWindow()} color="primary" variant='contained'>
                            Close
                        </Button>
                    </CardActions>
                </form>
            </Card>
        </div>
    );
};

const FormUser = reduxForm({
    form: 'user-info'
})(UserDetails);

export default FormUser;
