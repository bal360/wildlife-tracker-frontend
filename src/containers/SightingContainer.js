import React from 'react';
import SightingCard from '../components/SightingCard';
import { Container, Row } from 'react-bootstrap';

const SightingContainer = (props) => {
    
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

return(
    <>
        <Container>
            <Row>
                {sightings}
            </Row>    
        </Container>    
    </>
    )
};

export default SightingContainer;
