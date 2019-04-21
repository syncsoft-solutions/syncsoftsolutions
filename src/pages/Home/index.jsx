import React, {Component} from 'react'
import './index.css'
import { Jumbotron , Container} from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>SyncSoft Solutions</h2>
                    <p>
                        Your solution for custom softwares and systems from small scales 
                        like mobile apps and simple websites to large database management systems.
                    </p>    
                </Jumbotron>
                
            </Container>
        )
    }
}

export default Home