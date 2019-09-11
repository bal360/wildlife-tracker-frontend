import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { Jumbotron, Button } from 'react-bootstrap';
import SightingCard from '../components/SightingCard';


const Profile = (props) => {
    
    const { user, deleteUserSighting } = props

    const sightings = user.sightings.map(sighting => {
        return ( 
            <SightingCard 
                id={sighting.id} 
                animal={sighting.animal} 
                location={sighting.location} 
                date={sighting.date} 
                time={sighting.time} 
                note={sighting.note} 
                deleteUserSighting={deleteUserSighting}
            />
        )
    });

    console.log('profile', sightings);
   return ( 
       
        <div>
        <Jumbotron 
            className="profileJumbo"
            
        >
            <h1>Name: {user.first_name} {user.last_name} </h1>
            <h2>Location: {user.city} {user.state}</h2>
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