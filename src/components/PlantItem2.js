import React, { Component } from "react";
// import WaterPlant from './waterPlant';
import { Container, Row, Col } from "reactstrap";

export default class PlantItem2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showBack: false,
        }
        this.onItemClickHandler = this.onItemClickHandler.bind(this);
    }

    onItemClickHandler() {
        this.setState({showBack: !this.state.showBack});
    }

    render() {

    const { id, img, streams } = this.props.plant;
    console.log(id, img, streams);
    const showBack = this.state.showBack;

      const iStyle = {
        width: "220px",
        marginTop: "10px",
        marginBottom: '10px',
        alignContent: 'center',
        paddingLeft: '0',
        paddingRight: '0'
      };

    return (
            <Container style={iStyle}  onClick={this.onItemClickHandler} className='plant-items-wrapper__plant'>
                { showBack ? 
                    <Row style={iStyle}  className='plant-items-wrapper__plant__back'>
                        <Col style={iStyle} md={2}>
                            <div style={iStyle} className='plant-items-wrapper__plant__back__water-level'>
                                {streams[0]}
                            </div>
                            <div style={iStyle} className='plant-items-wrapper__plant__back__water-level'>
                                {streams[1]}
                            </div>
                            <div style={iStyle} className='plant-items-wrapper__plant__back__water-level'>
                                {streams[2]}
                            </div>
                            <div style={iStyle} className='plant-items-wrapper__plant__back__water-level'>
                                {streams[3]}
                            </div>
                        </Col>
                    </Row>

                :
                    <Row key={id} onClick={this.onItemClickHandler} className='plant-items-wrapper__plant__front'>
                        <Col md={2}>
                        <img src={img} alt="plant" className='plant-items-wrapper__plant__front__plant-image'/>
                        </Col>
                    </Row>
                }    
            </Container>   
        )
    }
}