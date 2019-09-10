import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MapContainer from './MapContainer';
import SightingContainer from '../containers/SightingContainer';
import SightingForm from './SightingForm';
import Modal from '@material-ui/core/Modal';

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
            <Container>
                 <button type="button" onClick={this.handleOpen}>
                    Open Modal
                </button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                <SightingForm addSighting={this.props.addSighting} />
                </Modal>
                    <Row> 
                      <Col xs={12} md={8}> 
                        <MapContainer 
                            animalSightings={this.props.animalSightings} 
                            marks={this.props.marks}
                        /> 
                      </Col>
                      <Col xs={6} md={4} className="sighting-container"> 
                        <SightingContainer 
                            animalSightings={this.props.animalSightings} 
                        /> 
                      </Col>
                    </Row>
            </Container>
         );
    }
}
 
export default Home;