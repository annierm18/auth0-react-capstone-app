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

    const { id, img, temp } = this.props.plant;
    console.log(id, temp);
    const showBack = this.state.showBack;

    const pStyle = {
        width: "220px"
      };

      const iStyle = {
        width: "220px",
        paddingTop: "30px",
        margin: '15px',
        alignContent: 'center',
        paddingLeft: '0',
        paddingRight: '0'
      };

    return (
            <Container style={iStyle}  onClick={this.onItemClickHandler} className='plant-items-wrapper__plant'>
                { showBack ? 
                    <Row style={iStyle}  className='plant-items-wrapper__plant__back'>
                        <Col style={iStyle} md={2}>
                        <div style={iStyle} className='plant-items-wrapper__plant__back__humidity'>
                            {id}
                        </div>
                        <div style={iStyle} className='plant-items-wrapper__plant__back__water-level'>
                            {temp}
                        </div>
                        {/* <div style={iStyle} className='plant-items-wrapper__plant__back__temperature'>
                            {temperature}
                        </div>
                        <div style={iStyle} className='plant-items-wrapper__plant__back__sunlight'>
                            {sunlight}
                        </div>
                        <div style={iStyle} className='plant-items-wrapper__plant__back__soil-moisture'>
                            {soilMoisture}
                        </div> */}
                        {/* <WaterPlant className='water-plant'/> */}
                        </Col>
                    </Row>

                :
                    <Row key={id} onClick={this.onItemClickHandler} className='plant-items-wrapper__plant__front'>
                        <Col md={2}>
                        {/* <h1 style={pStyle} className='plant-items-wrapper__plant__front__plant-name'>{name}</h1>  */}
                        <img src={img} alt="plant" className='plant-items-wrapper__plant__front__plant-image'/>
                        </Col>
                    </Row>
                }    
            </Container>   
        )
    }
}