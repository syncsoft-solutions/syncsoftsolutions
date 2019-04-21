import React, {Component} from 'react'
import './index.css'
import { Jumbotron , Container, Card} from 'react-bootstrap'

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
                <h1>Recent Projects</h1>
                <Card bg='info'>
                    <Card.Header as='h3' className='text-center'>Album KML Generator</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        Album KML Generator is a web applications that let registered users
                        create their albums of geo tagged images. The main function of the app
                        is to generate kml (Google Earth) file for a certain group if images (in this case, Albums).
                        Currently, the app is written in PHP but has a proposal in the future to convert
                        to modern JS frameworks like ReactJS.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default Home