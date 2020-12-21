import React, {Component} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
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
      <Container className="main-container" fluid>
        <Row>
          <Col className="map-container" sm={8}>
            <MapContainer 
              animalSightings={this.props.animalSightings} 
              marks={this.props.marks}
            />
          </Col>
          <Col className="sighting-container" sm={4}>
            <SightingContainer 
              animalSightings={this.props.animalSightings} 
              trackSighting={this.trackSighting}
            />
          </Col>     
        </Row>
      </Container>     
      </React.Fragment>
    );
  }
}
 
export default Home;