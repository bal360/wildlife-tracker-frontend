import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {}
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


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
    return (
      <React.Fragment>
        <Map
          className="map"
          google={this.props.google}
          zoom={8}
          style={{width: '100%', height: '20%'}}
          initialCenter={{
            lat: 39.7392358,
            lng: -104.990251
          }} 
        >
          {this.props.marks.map(marker => {
            return (
              <Marker
                position={{ lat: marker.lat, lng: marker.lng }}
                key={marker.id}
                onClick={this.onMarkerClick}
                // content={{animal: marker.animal}}
                >
                </Marker>
                )
              })}
          {this.props.marks.map(marker => {
            return (
              <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
              >
              <div>{marker.animal}</div>
              </InfoWindow>
            )
          })}
       
        </Map>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB0pyabJG-sUhHBG-qn9jtk1RoL3YZTaeg'
})(MapContainer);

