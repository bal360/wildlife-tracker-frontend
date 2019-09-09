import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const style = {
  width: '50%',
  height: '65%',
};

class MapContainer extends React.Component {

render() {
    return (
      <React.Fragment>
        <Map
          className="map"
          google={this.props.google}
          zoom={12}
          style={style}
          initialCenter={{
          lat: 26.2361,
          lng: 50.0393
          }} >
            <Marker name={'Dolores park'}
              position={{lat: 37.759703, lng: -122.428093}} 
            />
        </Map>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB0pyabJG-sUhHBG-qn9jtk1RoL3YZTaeg'
})(MapContainer);

