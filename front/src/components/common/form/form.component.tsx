import * as React from 'react'
import './form.component.scss'
import {ChangeEvent, FormEvent} from 'react';
import { ReactiveForm } from '../models/reactive-form.model';

export default function CommonForm (props: {formFields:ReactiveForm}) {
    let [state, setState] = React.useState(props.formFields);

    function sentCredentials (e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        return
    }

    function onFormChange (e: ChangeEvent<HTMLInputElement>): void {
        setState({[e.target.name]: e.target.value});

        return
    }

    return (
        <form onSubmit={(e) => sentCredentials (e)}>
            <label>
                login
                <input type="text" name="login" value={state.login || ''} onChange={(e) => onFormChange(e)} />
            </label>
            <label>
                password
                <input type="text" name="password" value={state.password || ''} onChange={(e) => onFormChange(e)} />
            </label>
            <button>submit</button>
        </form>);
}
