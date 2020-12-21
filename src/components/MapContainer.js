import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { ResponsiveEmbed } from 'react-bootstrap';

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
        <div style={{ width: '100%' , height: 'auto' }}>
          <ResponsiveEmbed aspectRatio="16by9">
        <Map
          // className="map"
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
                  <p><b><big><strong>{this.state.selectedPlace.note}</strong></big></b></p>
                </div>  
              </InfoWindow>
            )
          })}
        </Map>
          </ResponsiveEmbed>
        </div>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'Add New API Key'
})(MapContainer);

