import React from 'react';

const SightingForm = (props) => {
    return(
        <div className="sighting-form">
            <input type="text" placeholder="animal"/>
            {/* want location to be autopopulated from map search - i.e. search, enter, form pops up with location auto-populated and then fill out the necessary input fields*/}
            {/* <input type="text" placeholder="location"/>  */}
            <input type="text" placeholder="date"/>
            {/* use materialize datepicker and timepicker components here  */}
            <input type="text" placeholder="time"/>
            <input type="text" placeholder="note"/>
        </div>
    )
}

export default SightingForm;