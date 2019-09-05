import React from 'react';
import './App.css';
import MapContainer from './components/MapContainer';
import AnimalSightings from './components/AnimalSightings'
import SightingForm from './components/SightingForm'

class App extends React.Component {
  state = {
    animalSightings: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/sightings')
      .then(response => response.json())
      .then(sightings => this.setState({
          animalSightings: sightings
      }))
  }

  addSighting = (sighting) => {
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
  }


render() {
    return (
      <div className="App">
        {/* <MapContainer /> */}
        {this.state.animalSightings.map(sighting => 
          <div>{sighting.animal}</div>
        )}
        <SightingForm />
      </div>
    )
  }
}

export default App;
