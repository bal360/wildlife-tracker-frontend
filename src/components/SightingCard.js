import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';

class SightingCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sighted: false,
        }
    };
    
    
    handleClick = (...sighting) => { 
        if (this.props.trackSighting) {
            this.props.trackSighting(...sighting)
            this.setState({ sighted: true })        
        } else {
            this.props.deleteUserSighting(this.props.id)
            this.setState({ sighted: false })        
        }
    };

    
    
    render() {
        console.log('track', this.props.trackSighting);
        return ( 
            <Card style={{ width: '18rem' }} className="bg-dark">    
                    <Card.Img variant="top" src="http://nwwoodsman.com/images/Tracks.GIF" />
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Animal: {this.props.animal}</ListGroupItem>
                    <ListGroupItem>Location: {this.props.location}</ListGroupItem>
                    <ListGroupItem>Date: {this.props.date}</ListGroupItem>
                    <ListGroupItem>Time: {this.props.time}</ListGroupItem>
                    <ListGroupItem>Note: {this.props.note}</ListGroupItem>
                </ListGroup>
                { this.props.user_id == 8 ? null :
                    <Card.Body>
                        <Card.Link onClick={() => this.handleClick(
                            this.props.animal, 
                            this.props.location, 
                            this.props.date, 
                            this.props.time, 
                            this.props.note
                        )}>
                            {this.props.user_id == 8 ? null : <DeleteIcon />}
                        </Card.Link> 
                    </Card.Body>
                }
            </Card>
        );
    }
}
    
export default SightingCard;