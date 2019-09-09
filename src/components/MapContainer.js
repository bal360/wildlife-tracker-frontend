import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     marks: []
  //   }
  // };

  // markers = (result) => { 
  //   const markerArray = result.reduce((array, sighting) => {
  //     const sightingObj = {
  //       lat: sighting.latitude,
  //       lng: sighting.longitude
  //     }
  //     array.push(sightingObj)
  //     return array
  //   }, [])
  //   this.setState({marks: markerArray})
  // }

  render() {
    console.log('marks', this.props.marks);
    // this.markers(this.props.animalSightings)
    return (
      <React.Fragment>
        <Map
          className="map"
          google={this.props.google}
          zoom={12}
          style={{width: '70%', height: '25%'}}
          initialCenter={{
          lat: 39,
          lng: -104
          }} 
        >
          {this.props.marks.map(marker => (
            <Marker
              position={{ lat: marker.lat, lng: marker.lng }}
              key={marker.id}
            />
          ))}
        </Map>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  // apiKey: 'AIzaSyB0pyabJG-sUhHBG-qn9jtk1RoL3YZTaeg'
})(MapContainer);

