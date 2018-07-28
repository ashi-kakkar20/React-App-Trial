import React from 'react';
import './FbAppComp.css'

const InputComponent = (props) =>
{
    return (
        <div class="div" >
        <table>
         <tr> 
        <label> Id: {props.Id} </label>
        </tr>
        <tr> 
        <label> Name: {props.name} </label>
        </tr> 
        <tr> 
        <label> Age:  {props.Age} </label>
        </tr> 
        <tr> 
        <label> Address: {props.address} , {props.city} ,{props.States}  </label>
        </tr> 
        <tr> 
        <label> EmailAddress: {props.emailaddress} </label>
        </tr> 
        <tr> 
        <label> Telephone No: {props.telephone} </label>
        </tr> 
        </table>
        </div>
    );
}

export default InputComponent;