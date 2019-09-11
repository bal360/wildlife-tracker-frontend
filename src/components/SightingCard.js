import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

class SightingCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sighted: false,
        }
    }
    
    handleClick = (...sighting) => { 
        if (this.props.addFavorite) {
            this.props.addSighting(...sighting)
            this.setState({ sighted: true })        
        } else {
            this.props.deleteUserSighting(this.props.id)
            this.setState({ sighted: false })        
        }
    }

    render() {
        return ( 
            <Card style={{ width: '18rem' }} className="bg-dark">
                <Card.Img variant="top" src="https://i.pinimg.com/originals/4a/84/48/4a8448a4af3a5de2e1c5e04dd3670a94.jpg" />
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Animal: {this.props.animal}</ListGroupItem>
                    <ListGroupItem>Location: {this.props.location}</ListGroupItem>
                    <ListGroupItem>Date: {this.props.date}</ListGroupItem>
                    <ListGroupItem>Time: {this.props.time}</ListGroupItem>
                    <ListGroupItem>Note: {this.props.note}</ListGroupItem>
                </ListGroup>
                { this.state.sighted ? null :
                    <Card.Body>
                        <Card.Link onClick={() => this.handleClick(
                            this.props.animal, 
                            this.props.location, 
                            this.props.date, 
                            this.props.time, 
                            this.props.note
                        )}>
                            {this.props.addFavorite ? <AddIcon/> : <DeleteIcon />}
                        </Card.Link> 
                    </Card.Body>
                }
            </Card>
        );
    }
}
    
export default SightingCard;