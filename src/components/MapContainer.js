import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };
  
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

render() {
    return (
      <React.Fragment>
        <Map
          className="map"
          google={this.props.google}
          zoom={8}
          style={{width: '100%', height: '100%'}}
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
                // icon={{
                //   url:'https://c7.uihere.com/files/758/954/421/5bbc49b57fb5c.jpg',
                //   scaledSize: new window.google.maps.Size(60, 60)
                // }}
                animal={marker.animal}
                location={marker.location}
                date={marker.date}
                time={marker.time}
                note={marker.note}
              />
            )
          })}
          
          {this.props.marks.map(marker => {
            return (
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
                content={marker.animal}
              >
                <div>
                  <h3>{this.state.selectedPlace.animal}</h3>
                  <h4>{this.state.selectedPlace.location}</h4>
                  <h4>{this.state.selectedPlace.date}</h4>
                  <h4>{this.state.selectedPlace.time}</h4>
                  <p><b>{this.state.selectedPlace.note}</b></p>
                </div>  
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

