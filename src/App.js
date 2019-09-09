import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MapContainer from './components/MapContainer';
import AnimalSightings from './components/AnimalSightings'
import SightingForm from './components/SightingForm'
import MapSearch from './components/MapSearch'
import NavBar from './components/NavBar'
import { Container, Row, Col } from 'react-bootstrap';
import AddSearchModal from './components/AddSearchModal'


class App extends React.Component {
  state = {
    animalSightings: [],
    searchForm: [],
    markers: []
  };
  
  componentDidMount() {
    fetch('http://localhost:3000/sightings')
    .then(response => response.json())
    .then(sightings => this.setState({
      
      animalSightings: sightings
    }))
  };
  
  addSighting = (...sighting) => {
    const arr = sighting
    fetch('http//localhost:3000/sightings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        animal: this.state.animal,
        location: this.state.location,
        date: this.state.date,
        time: this.state.time,
        note: this.state.note,
        user_id: this.state.user_id
      })
    })
  };
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.addSighting()
  }
  
  
  render() {
    console.log('location', this.state.animalSightings.map(sighting => {
     return sighting 
    }));
    return (
      <div>
        {/* <React.Fragment>
          <Router> */}
            <NavBar />
          
            {/* <MapContainer />  */}
            
              <AddSearchModal />
              {/* <SightingForm 
                handleChange={this.handleChange} 
                addSighting={this.addSighting}
              />  */}
            
            {/* <Switch> */}
            {/* <MapSearch /> */}
            
            {/* <AnimalSightings 
              animalSightings={this.state.animalSightings}
            /> */}
            
            {/* </Switch>
          </Router>
        </React.Fragment> */}
        
      </div>
    )
  }
}

export default App;
