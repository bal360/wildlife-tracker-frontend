import React, {Component} from 'react';
import MapContainer from './MapContainer';
import SightingContainer from '../containers/SightingContainer';
import AddSearchButton from './AddSearchButton';

class Home extends Component {
      state = { 
          open: false
        };
        
    setOpen = () => {
        this.setState({
            open: !this.state.open
        })
    };
    
    handleOpen = () => {
        this.setOpen(true);
    };
    
    handleClose = () => {
        this.setOpen(false);
    };

    render() { 
        return ( 
            <React.Fragment>
                <AddSearchButton addSighting={this.props.addSighting}/>
            <div className="main-container">
                <div className="map-container">
                    <MapContainer 
                        animalSightings={this.props.animalSightings} 
                        marks={this.props.marks}
                    />
                </div>
                <div className="sighting-container">
                    <SightingContainer 
                        animalSightings={this.props.animalSightings} 
                        trackSighting={this.trackSighting}
                    />
                </div>     
            </div>     
            </React.Fragment>
        );
    }
}
 
export default Home;