import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './FBAppComponent/FbAppComponent'
import InputComponent from './FBAppComponent/InputComponent'

class App extends Component {

state={ data:[
        {    id: "1",
             name:"Ashina Kakkar",
             Age:25,
             address : {
             lane: "B4/330 Nethravati Block NGV Kormangala",
             city:"Bengaluru",
             state:"Karnataka"
                       },
             EmailAddress:"kakkarashina@gmail.com",
             Telephone:"+91 9611541182"
        }
      ]
}


 render() {
    return (
      <div className="App">
        <HeaderComponent Header="Welcome to My React App..!!!" />
        <InputComponent  Id={(this.state.data)[0].id}
        name={(this.state.data)[0].name}
        Age={(this.state.data)[0].Age}
        address={(this.state.data)[0].address.lane}
        city={(this.state.data)[0].address.city}
        States={(this.state.data)[0].address.state}
        emailaddress={(this.state.data)[0].EmailAddress}
        telephone={(this.state.data)[0].Telephone}
        />
        <InputComponent  Id={"2"}
        name={"Loveleen Popli"}
        Age={25}
        address={(this.state.data)[0].address.lane}
        city={(this.state.data)[0].address.city}
        States={(this.state.data)[0].address.state}
        emailaddress={"loveleen.popli@gmail.com"}
        telephone={"+91 7845362714"}
        />

        <InputComponent  Id={"3"}
        name={"Anupam Jagatdeo"}
        Age={26}
        address={(this.state.data)[0].address.lane}
        city={(this.state.data)[0].address.city}
        States={(this.state.data)[0].address.state}
        emailaddress={"anupam.jagatdeo@gmail.com"}
        telephone={"+91 810499669"}
        />

        <InputComponent  Id={"4"}
        name={"Shivani Goswami"}
        Age={26}
        address={(this.state.data)[0].address.lane}
        city={(this.state.data)[0].address.city}
        States={(this.state.data)[0].address.state}
        emailaddress={"shivani.goswami@gmail.com"}
        telephone={"+91 9734545723"}
        />

      </div>
    );
  }
}

export default App;
