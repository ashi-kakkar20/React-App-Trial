import React from 'react';
import './FbAppComp.css'

const InputComponent = (props) =>
{
    return (
        <div class="div" onClick={props.ChangeHandler}>
        <div>
        <label> Id: {props.Id} </label>
        </div>
        <div>
        <label> Name: {props.name} </label>
        </div>
        <div>
        <label> Age:  {props.Age} </label>
        </div>
        <div>
        <label> Address: {props.address}  </label>
        </div>
        <div>
        <label> EmailAddress: {props.emailaddress} </label>
        </div>
        <div>
        <label> Telephone No: {props.telephone} </label>
        </div>
        </div>
    );
}

export default InputComponent;