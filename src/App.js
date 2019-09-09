import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MapContainer from './components/MapContainer';
import AnimalSightings from './components/AnimalSightings'
import SightingForm from './components/SightingForm'
import MapSearch from './components/MapSearch'
import NavBar from './components/NavBar'

class App extends React.Component {
  state = {
    animalSightings: [],
    searchForm: []
  };

  componentDidMount() {
    fetch('http://localhost:3000/sightings')
      .then(response => response.json())
      .then(sightings => this.setState({
          animalSightings: sightings
      }))
  };

  addSighting = (...sighting) => {
    fetch('http//localhost:3000/sightings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        animal: sighting.animal,
        location: sighting.location,
        date: sighting.date,
        time: sighting.time,
        note: sighting.note,
        user_id: sighting.user_id
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
  }


render() {
    return (
      <div>
        {/* <React.Fragment>
          <Router> */}
            <NavBar />
            {/* <Switch> */}
            {/* <MapSearch /> */}
            {/* <MapContainer /> */}
            <AnimalSightings 
              animalSightings={this.state.animalSightings}
            />
            <SightingForm 
              handleChange={this.handleChange} 
              addSighting={this.addSighting}
            />
            {/* </Switch>
          </Router>
        </React.Fragment> */}
      </div>
    )
  }
}

export default App;
