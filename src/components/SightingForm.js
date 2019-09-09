import React from 'react';

class SightingForm extends React.Component {
    // state = {
    //     animal: "",
    //     location: "",
    //     date: "",
    //     time: "",
    //     note: ""
    // }
    
    
    
    render() {
        console.log(this.props);
        return(
            <form 
                className="sighting-form" 
                onSubmit={this.props.addSighting}
            >
                <input 
                    type="text" 
                    name="animal"
                    placeholder="animal" 
                    value={this.props.animal}
                    onChange={this.props.handleChange}
                    />
                <input 
                    type="text" 
                    name="location"
                    placeholder="location"
                    value={this.props.location}
                    onChange={this.props.handleChange}
                    />
                {/* want location to be autopopulated from map search - i.e. search, enter, form pops up with location auto-populated and then fill out the necessary input fields*/}
                {/* <input type="text" placeholder="location"/>  */}
                <input 
                    type="text" 
                    name="date"
                    placeholder="date"
                    value={this.props.date}
                    onChange={this.props.handleChange}
                    />
                {/* use materialize datepicker and timepicker components here  */}
                <input 
                    type="text" 
                    name="time"
                    placeholder="time"
                    value={this.props.time}
                    onChange={this.props.handleChange}
                    />
                <textarea 
                    name="note" 
                    placeholder="note"
                    value={this.props.note} 
                    cols="30" 
                    rows="5"
                    onChange={this.props.handleChange}
                    >
                </textarea>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default SightingForm;