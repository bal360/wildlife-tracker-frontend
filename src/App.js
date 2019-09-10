import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SightingForm from './components/SightingForm';
import NavBar from './components/NavBar';
import AddSearchModal from './components/AddSearchModal';
import Profile from './components/Profile';
import Home from './components/Home';
import UpdateForm from './components/UpdateForm'


class App extends React.Component {
  state = {
    animalSightings: [],
    searchForm: [],
    marks: [],
    user: {}
  };

  componentDidMount() {
    this.getSightings()
    this.getUser();
  };
  
  getUser = () => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(users => {
        this.setState({user: users[3]})
      })
    };
  
  getSightings = () => {
    fetch('http://localhost:3000/sightings')
    .then(response => response.json())
    .then(result => this.markers(result))
  };

  markers = (result) => { 
    this.setState({
      animalSightings: result
    })
    const markerArray = result.reduce((array, sighting) => {
      const sightingObj = {
        lat: sighting.latitude,
        lng: sighting.longitude,
        animal: sighting.animal,
        location: sighting.location,
        date: sighting.date,
        time: sighting.time,
        note: sighting.note
      }
      array.push(sightingObj)
      return array
    }, [])
    this.setState({marks: markerArray})
  };

  
  // addSighting = (sighting) => {
  //   fetch('http://localhost:3000/sightings', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       animal: sighting.animal,
  //       location: sighting.location,
  //       date: sighting.date,
  //       time: sighting.time,
  //       note: sighting.note,
  //       latitude: sighting.latitude,
  //       longitude: sighting.longitude,
  //       user_id: this.state.user.id
  //     })
  //   }).then(this.getSightings)
  // };

  addSighting = (apiBody) => {
    fetch('http://localhost:3000/sightings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(apiBody)
    }).then(this.getSightings)
  }

  deleteUserSighting = (id) => {
    fetch(`http://localhost:3000/sightings/${id}`, {
      method: 'DELETE'
    })
      .then(response => this.getUser())
  };

  render() {
    console.log('user', this.state.user);
    return (
      <React.Fragment>
          <Router> 
            <NavBar />
            <Switch>
              <Route path="/" exact render={(...props) => {
                return (
                  <Home 
                    user={this.state.user} 
                    animalSightings={this.state.animalSightings}
                    addSighting={this.addSighting} 
                    marks={this.state.marks}
                /> )}}
              />
              <Route path="/updateForm/"  exact render={() => {
                return (
                  <UpdateForm 
                    user={this.state.user} 
                    handleChange={this.handleChange}
                    updateUser={this.updateUser}
                    getUser={this.getUser}
                  />
                )
              }}/>
              { this.state.user.sightings ? 
                <Route path="/profile/" render={(...props) => {
                return (
                  <Profile 
                    user={this.state.user} 
                    updateUser={this.updateUser}
                    deleteUserSighting={this.deleteUserSighting}
                    animalSightings={this.state.animalSightings}
                  />  
                )
              }} /> : null }
            </Switch>
          </Router>
      </React.Fragment>
    )
  }
}

export default App;
