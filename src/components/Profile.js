import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { Jumbotron, Button } from 'react-bootstrap';
import SightingCard from '../components/SightingCard';


const Profile = (props) => {
    
    const { user, deleteSightings } = props

    const sightings = props.animalSightings.map(sighting => {
        return ( 
            <SightingCard 
                id={sighting.id} 
                animal={sighting.animal} 
                location={sighting.location} 
                date={sighting.date} 
                time={sighting.time} 
                note={sighting.note} 
                addFavorite={props.addFavorite}
            />
        )
    });

   return ( 
        <div>
        <Jumbotron 
            className="profileJumbo"
            
        >
                <h1>Name: {user.first} </h1>
                <h2>Location: {user.location}</h2>
                <h3>Email: {user.email}</h3>
            <Button 
                variant="primary" 
                className="profileButton"
                size="lg"
                onClick={() => {props.history.push('/updateForm')}}
            >
                Update Profile
            </Button>
        </Jumbotron>
        <Container>
            <Row>
                {sightings}
            </Row>
        </Container>
        </div>
     );
}
 
export default withRouter(Profile);