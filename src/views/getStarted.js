import React, { Component } from 'react';

import PageTitle from '../components/PageTitle';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import PlantsContainer from '../components/PlantsContainer';

// styles
import "../getStarted.scss";


class GetStarted extends Component {

    render() {
        return (
            <div>
                <div className='get-started'>
                    <PageTitle className='get-started__title' title="Let's Get Started!"/>
                    <div className='get-started__description'>
                        If you are ready to create an account or access your existing account, click the button below. 
                    </div>
                    <Link className='get-started__button' to="/account"><button className='get-started__button__start'>Account</button></Link>
                </div>

                <Container className="mb-5">
                    <h1>Materials and Cloud Services</h1>
                    <Row >
                        <Col className="col"> 
                            <ul>
                                <ol>Raspberry Pi</ol>
                                <ol>Sensors and Pump</ol>
                                <ol>Heroku Account</ol>
                                <ol>M2X Heroku Cloud Plug-In</ol>
                            </ul>
                        </Col>
                        <Col className="links">
                            <ul>
                                <ol>
                                    <a href='https://www.raspberrypi.org/'>https://www.raspberrypi.org/</a>
                                </ol>
                                <ol>
                                <a href='https://www.heroku.com/'>https://www.heroku.com/</a>
                                </ol>
                                <ol>
                                <a href='https://bit.ly/2GD14pE'>https://bit.ly/2GD14pE</a>
                                </ol>
                                <ol>
                                <a href='https://elements.heroku.com/addons/m2x'>https://elements.heroku.com/addons/m2x</a>
                                </ol>
                            </ul>
                        </Col>
                    </Row>
                       <h1>Setup Instructions</h1>
                       <p>This section is currently under construction</p>
                </Container>
            </div>
        )
    }
}


export default GetStarted;