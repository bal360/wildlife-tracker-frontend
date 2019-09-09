import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class SightingCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            favorited: false,
        }
    }
    
    handleClick = (...sighting) => { 
        if (this.props.addFavorite) {
            this.props.addFavorite(...sighting)
            this.setState({ favorited: true })        
        } else {
            this.props.deleteFavorite(this.props.id)
            this.setState({ favorited: false })        
        }
    }

    render() {
        return ( 
            <Card style={{ width: '18rem' }} className="bg-dark">
                <Card.Img variant="top" src="https://i.pinimg.com/originals/4a/84/48/4a8448a4af3a5de2e1c5e04dd3670a94.jpg" />
                <Card.ImgOverlay>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Animal: {this.props.animal}</ListGroupItem>
                        <ListGroupItem>Location: {this.props.location}</ListGroupItem>
                        <ListGroupItem>Date: {this.props.date}</ListGroupItem>
                        <ListGroupItem>Time: {this.props.time}</ListGroupItem>
                        <ListGroupItem>Note: {this.props.note}</ListGroupItem>
                    </ListGroup>
                </Card.ImgOverlay>
            </Card>
            );
        }
    }
    
    export default SightingCard;
    {/* { this.state.favorited ? null :
        <Card.Body>
            <Card.Link onClick={() => this.handleClick(
                this.props.itself, 
                this.props.cFS, 
                this.props.height, 
                this.props.status, 
                this.props.gaugeLocation, 
                this.props.dateTime
            )}>
                {this.props.addFavorite ? "Add Favorite" : "Delete Favorite"}
            </Card.Link> 
        </Card.Body>
    } */}