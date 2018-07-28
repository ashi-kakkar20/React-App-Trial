import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './FBAppComponent/FbAppComponent'
import InputComponent from './FBAppComponent/InputComponent'

class App extends Component {

state={ data:[
        {    id: "",
             name:"Ashina Kakkar",
             Age:0,
             address : {
             lane: "",
             city:"",
             state:""
                       },
             EmailAddress:"",
             Telephone:""
        }
      ]
}

TextChangeHandler = (event) => 
{
  this.setState({
    data : event.target.value
  })
}
 render() {
    return (
      <div className="App">
        <HeaderComponent Header="Welcome to My React App..!!!" />
        <InputComponent ChangeHandler={this.TextChangeHandler} Id={this.state.data.map(
          (data) => {
             return data.id;
          }
        )}  />
      </div>
    );
  }
}

export default App;
