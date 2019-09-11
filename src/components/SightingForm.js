// import React from 'react';
// import Geocode from 'react-geocode';
// import AddSearchButton from './AddSearchButton'

// Geocode.setApiKey('AIzaSyB0pyabJG-sUhHBG-qn9jtk1RoL3YZTaeg')

// class SightingForm extends React.Component {
//     state = {
//         animal: "",
//         location: "",
//         date: "",
//         time: "",
//         note: "",
//         coord: {
//         lat: 0.0,
//             lng: 0.0
//         }
//     };

//     addLatLng = () => {
//         const address = this.state.location
//         const latLng = []
//         return Geocode.fromAddress(address).then(response => {
//             const coordinates = response.results[0].geometry.location
//             latLng.push(coordinates)
//             return coordinates
//         })
//         .then(coordinates => this.setState(state => {
//             state.coord.lat = coordinates.lat;
//             state.coord.lng = coordinates.lng
//             console.log('working?', this.state);
//           return state
//         }))
//         .then(response => this.postSighting())
//       };

//       postSighting = () => {
//           const apiBody = {
//               sighting: {
//                 animal: this.state.animal,
//                 location: this.state.location,
//                 date: this.state.date,
//                 time: this.state.time,
//                 note: this.state.note,
//                 latitude: this.state.coord.lat,
//                 longitude: this.state.coord.lng,
//                 user_id: 7
//               }
//           }
//           this.props.addSighting(apiBody)
//           return apiBody
//       };

//     handleChange = (event) => {
//         this.setState({
//           [event.target.name]: event.target.value
//         })
//     };

//     handleSubmit = (event) => {
//         event.preventDefault()
//         this.addLatLng()
//     };
    
//     render() {
//         return(
//             <React.Fragment>
//             <div>
//             </div>
//             <form 
//                 className="sighting-form" 
//                 onSubmit={this.handleSubmit}
//             >
//                 <input 
//                     type="text" 
//                     name="animal"
//                     placeholder="animal" 
//                     value={this.state.animal}
//                     onChange={this.handleChange}
//                     />
//                 <input 
//                     type="text" 
//                     name="location"
//                     placeholder="location"
//                     value={this.state.location}
//                     onChange={this.handleChange}
//                     />
//                 {/* want location to be autopopulated from map search - i.e. search, enter, form pops up with location auto-populated and then fill out the necessary input fields*/}
//                 {/* <input type="text" placeholder="location"/>  */}
//                 <input 
//                     type="date" 
//                     name="date"
//                     placeholder="date"
//                     value={this.state.date}
//                     onChange={this.handleChange}
//                     />
//                 {/* use materialize datepicker and timepicker components here  */}
//                 <input 
//                     type="time" 
//                     name="time"
//                     placeholder="time"
//                     value={this.state.time}
//                     onChange={this.handleChange}
//                     />
//                 <textarea 
//                     name="note" 
//                     placeholder="note"
//                     value={this.state.note} 
//                     cols="30" 
//                     rows="5"
//                     onChange={this.handleChange}
//                     >
//                 </textarea>
//                 <input type="submit" value="Submit" />
//             </form>
//             {/* <AddSearchButton addLatLng={this.addLatLng} handleChange={this.handleChange}/> */}
//             </React.Fragment>
//         )
//     }
// }

// export default SightingForm;