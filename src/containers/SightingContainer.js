import React from 'react';
import SightingCard from '../components/SightingCard';
import { Container, Row } from 'react-bootstrap';

const SightingContainer = (props) => {
    
    const sightings = props.animalSightings.map(sighting => {
        return sighting.user_id !== 7 ?
            <SightingCard 
                id={sighting.id} 
                user_id={sighting.user_id}
                animal={sighting.animal} 
                location={sighting.location} 
                date={sighting.date} 
                time={sighting.time} 
                note={sighting.note} 
                trackSighting={props.trackSighting}
            /> 
            :  null
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
