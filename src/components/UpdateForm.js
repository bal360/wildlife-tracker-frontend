import React from 'react'
import { Form, Button, Jumbotron } from 'react-bootstrap';

class UpdateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            city: "",
            state: "",
            email: ""
        }
    }

    componentDidMount() {
        this.setState({
            first_name: this.props.user.first_name,
            last_name: this.props.user.last_name,
            city: this.props.user.city,
            state: this.props.user.state,
            email: this.props.user.email
        })
    }
    
    handleChange = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value
        })
    };
    
    handleUpdate = (event) => {
        event.preventDefault()
            fetch('http://localhost:3000/users/7', {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    this.state
                )
              }
            )
        .then(response => this.props.getUser())
    };
        
        render() {
            return (
            <Jumbotron className="updateJumbo">
                <Form className="updateForm" onSubmit={this.handleUpdate}>
                    <Form.Group controlId="form-first-name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={this.state.first_name}
                            name="first_name"
                            onChange={this.handleChange}
                            />
                    </Form.Group>
                    <Form.Group controlId="form-last-name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={this.state.last_name}
                            name="last_name"
                            onChange={this.handleChange}
                            />
                    </Form.Group>
                    <Form.Group controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={this.state.city}
                            name="city"
                            onChange={this.handleChange}
                            />
                    </Form.Group>
                    <Form.Group controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={this.state.state}
                            name="state"
                            onChange={this.handleChange}
                            />
                    </Form.Group>
                    <Form.Group controlId="form-email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={this.state.email}
                            name="email"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button 
                        className="updateButton"
                        variant="primary" 
                        type="submit"
                        size="lg"
                    >
                        Submit
                    </Button>
                </Form>
            </Jumbotron>
        )
    }    
};

export default UpdateForm;