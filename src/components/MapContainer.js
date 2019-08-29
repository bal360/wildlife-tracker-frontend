import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '100%'
};

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
         lat: 26.2361,
         lng: 50.0393
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB0pyabJG-sUhHBG-qn9jtk1RoL3YZTaeg'
})(MapContainer);

