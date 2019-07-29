import React, { Component } from "react";
// import WaterPlant from './waterPlant';
import { Container, Row, Col } from "reactstrap";

export default class PlantItem extends Component {
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

    const { img, humidity, waterLevel, name, index, temperature, sunlight, soilMoisture } = this.props.plant;
    const showBack = this.state.showBack;

    const pStyle = {
        width: "220px"
      };

      const iStyle = {
        width: "220px",
        paddingTop: "30px"
      };

    return (
            <Container onClick={this.onItemClickHandler} className='plant-items-wrapper__plant'>
                { showBack ? 
                    <Row style={iStyle}  className='plant-items-wrapper__plant__back'>
                        <Col style={iStyle} md={2}>
                        <div style={iStyle} className='plant-items-wrapper__plant__back__humidity'>
                            {humidity}
                        </div>
                        <div style={iStyle} className='plant-items-wrapper__plant__back__water-level'>
                            {waterLevel}
                        </div>
                        <div style={iStyle} className='plant-items-wrapper__plant__back__temperature'>
                            {temperature}
                        </div>
                        <div style={iStyle} className='plant-items-wrapper__plant__back__sunlight'>
                            {sunlight}
                        </div>
                        <div style={iStyle} className='plant-items-wrapper__plant__back__soil-moisture'>
                            {soilMoisture}
                        </div>
                        {/* <WaterPlant className='water-plant'/> */}
                        </Col>
                    </Row>

                :
                    <Row key={index} onClick={this.onItemClickHandler} className='plant-items-wrapper__plant__front'>
                        <Col md={2}>
                        <h1 style={pStyle} className='plant-items-wrapper__plant__front__plant-name'>{name}</h1> 
                        <img src={img} alt="plant" className='plant-items-wrapper__plant__front__plant-image'/>
                        </Col>
                    </Row>
                }    
            </Container>   
        )
    }
}