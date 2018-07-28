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
        },
        {
          id: "2",
          name:"Loveleen popli",
          Age:25,
          address : {
          lane: "BTM Layout",
          city:"Bengaluru",
          state:"Karnataka"
                    },
          EmailAddress:"Loveleen.Popli@gmail.com",
          Telephone:"+91 984512875"


        },
        {
           id: "3",
             name:"Anupam Jagatdeo",
             Age:26,
             address : {
             lane: "Mantri Celestia Nanakramguda",
             city:"Hyderabad",
             state:"Telangana"
                       },
             EmailAddress:"anupam.jagatdeo@gmail.com",
             Telephone:"+91 8105499669"
        },
        {
          id: "4",
          name:"Shivani Goswami",
          Age:25,
          address : {
          lane: "BTM Layout near Udupi Garden",
          city:"Bengaluru",
          state:"Karnataka"
                    },
          EmailAddress:"shivani.goswami@gmail.com",
          Telephone:"+91 7894586231"
        }
      ]
}


 render() {
    return (
      <div className="App">
        <HeaderComponent Header="Welcome to My React App..!!!" />
        {
          this.state.data.map(eachData => {
            return(
             <InputComponent  Id={eachData.id}
             name={eachData.name}
             Age={eachData.Age}
             address={eachData.address.lane}
             city={eachData.address.city}
             States={eachData.address.state}
             emailaddress={eachData.EmailAddress}
             telephone={eachData.Telephone}
                  />
            );
           })
          
        }
        
        

      </div>
    );
  }
}

export default App;
