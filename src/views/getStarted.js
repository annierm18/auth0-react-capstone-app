import React, { Component } from 'react';

import PageTitle from '../components/PageTitle';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";

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
                    <h1>Materials</h1>
                    <Row >
                        <Col className="col"> 
                            <ul>
                                <ol>Raspberry Pi</ol>
                                <ol>Sensor</ol>
                                <ol>Pump</ol>
                                <ol>Plants</ol>
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
                            </ul>
                        </Col>
                    </Row>
                       <h1>Setup Instructions</h1>
                       <p>First...Next...Then...Lastly...</p>
                </Container>
                {/* <a className='get-started__instructions'>
                   <div className='get-started__instructions__materials'>
                        <h1>Materials</h1>
                        <ul>
                            <ol>Raspberry Pi</ol>
                            <ol>Sensor</ol>
                            <ol>Pump</ol>
                            <ol>Plants</ol>
                            <ol>Heroku Account</ol>
                            <ol>M2X Heroku Cloud Plug-In</ol>
                        </ul>
                    </div> 
                    <div className="get-started__instructions__setup">
                        <h1>Testing</h1>
                    </div>
                </div>     */}
            </div>
        )
    }
}


export default GetStarted;