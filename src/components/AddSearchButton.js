import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import Geocode from 'react-geocode';

Geocode.setApiKey('AIzaSyB0pyabJG-sUhHBG-qn9jtk1RoL3YZTaeg')

class AddSearchButton extends React.Component {
  state = {
    animal: "",
    location: "",
    date: "",
    time: "",
    note: "",
    coord: {
      lat: 0.0,
      lng: 0.0
    },
    open: false
  };
  
  addLatLng = () => {
    const address = this.state.location
    const latLng = []
    return Geocode.fromAddress(address).then(response => {
      const coordinates = response.results[0].geometry.location
      latLng.push(coordinates)
      return coordinates
    })
    .then(coordinates => this.setState(state => {
      state.coord.lat = coordinates.lat;
      state.coord.lng = coordinates.lng
      console.log('working?', this.state);
    return state
    }))
    .then(response => this.postSighting())
  };
  
  postSighting = () => {
    const apiBody = {
      sighting: {
        animal: this.state.animal,
        location: this.state.location,
        date: this.state.date,
        time: this.state.time,
        note: this.state.note,
        latitude: this.state.coord.lat,
        longitude: this.state.coord.lng,
        user_id: 7
      }
    }
    this.props.addSighting(apiBody)
    return apiBody
  };
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };
  
  setOpen = () => {
      this.setState({
          open: !this.state.open
      })
  };
  
  handleClickOpen = () => {
    this.setOpen(true);
  }

  handleClose = () => {
    this.addLatLng()
    this.setOpen(false);
  }
  
  cancel = () => {
    this.setOpen(false);
  }

  render() {
    return (
      <React.Fragment>
        <Fab aria-label="add" size="smalllarge" style={{ marginLeft: '25px', marginTop: "25px" }} onClick={this.handleClickOpen}>
          <AddLocationIcon/>
        </Fab>
        <Dialog open={this.state.open} onClose={this.cancel} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">What did you see?</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="animal"
              label="Animal"
              type="text"
              onChange={this.handleChange}
              fullWidth
              />
            <TextField
              autoFocus
              margin="dense"
              name="location"
              label="Location"
              type="text"
              onChange={this.handleChange}
              fullWidth
              />
            <TextField
              autoFocus
              margin="dense"
              name="date"
              // label="Date"
              type="date"
              onChange={this.handleChange}
              fullWidth
              />
            <TextField
              autoFocus
              margin="dense"
              name="time"
              // label="Time"
              type="time"
              onChange={this.handleChange}
              fullWidth
              />
            <TextField
              autoFocus
              margin="dense"
              name="note"
              label="Note"
              type="textarea"
              onChange={this.handleChange}
              fullWidth
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.cancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Add Sighting
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}
 
export default AddSearchButton;