import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MapContainer from './MapContainer';
import SightingContainer from '../containers/SightingContainer';
import SightingForm from './SightingForm';
import Modal from '@material-ui/core/Modal';
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
                {/* <button type="button" onClick={this.handleOpen}>
                    New Sighting
                </button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                <SightingForm addSighting={this.props.addSighting} />
                </Modal> */}
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
                    />
                </div>     
            </div>     
            </React.Fragment>
        );
    }
}
 
export default Home;