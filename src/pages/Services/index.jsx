import React, {Component} from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

export default class Services extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Services</h2>
                    <p>
                        Find what you need from our list of services.
                    </p>    
                </Jumbotron>
            </Container>
        )
    }
}