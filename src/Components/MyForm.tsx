import React from 'react';
import { Formik, Field} from 'formik';
import { Card, CardHeader,Button } from '@material-ui/core';
import { MyField } from '../Containers/MyField';
import '../App.css';



interface Values {
    userName: string;
    password: string;
 };

interface Props {
    onSubmit: (values: Values) => void;

};

 const MyForm: React.FC<Props> = ({onSubmit}) => {
    return (
        <Formik initialValues={{userName:'', password:''}} onSubmit={(values) => {
            onSubmit(values)
        }}>
            {({values}) => (
                <div className="body">
                <Card className="formContainer">
                    <CardHeader className="MuiCardHeader-root" title="Sign Up" titleTypographyProps={{variant:'h4' }}/>
                    <div className="formContentContainer">
                    <div>
                    <Field className="formInput" name= "userName" placeholder="User Name" component={MyField} />
                    </div>
                    <div>
                    <Field className="formInput" name= "password" placeholder="Password" component={MyField} />
                    </div>
                    <Button 
                    className="MuiButton-root"
                    disabled={values.userName === '' && values.password === ''}
                    aria-disabled={false}
                    href="https://reactjs.org"
                    target="_self"
                    onClick={()=>{alert('Welcome To ReactJS')}}
                    > Login </Button>
                    <Button></Button>
                        </div>
                    </Card>
                    </div>
            )}
        </Formik>
    );
 };

export default MyForm;
