import * as React from 'react'
import './login.component.scss';
import CommonForm from '../common/form/form.component';
import {ReactiveForm} from '../common/models/reactive-form.model';

export default function LoginPage () {
    const formFields: ReactiveForm = {
        login: '',
        password: ''
    };

    return (
        <div className="container">
            <div className="row">
                <div className="centered-ox">
                    <CommonForm formFields={formFields}/>
                </div>
            </div>
        </div>
    )
}
