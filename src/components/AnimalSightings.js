import React from 'react';

const AnimalSightings = (props) => {
    
    const sightings = props.animalSightings.map(sighting => 
        <div>{sighting.animal}</div>
    )
    
    return(
        <div className="animal-sightings">
            <div>
                {sightings}
            </div>
        </div>
    )   
};

export default AnimalSightings;