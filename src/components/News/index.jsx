import React, {Component} from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

export default class News extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>News</h2>
                    <p>
                        Get our latest updates and industry solutions.
                    </p>    
                </Jumbotron>
            </Container>
        )
    }
}