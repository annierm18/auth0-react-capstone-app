import React, { Component } from "react";
// import WaterPlant from './waterPlant';

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

    return (
            <div key={index} onClick={this.onItemClickHandler} className='plant-items-wrapper__plant'>
                { showBack ? 
                    <div className='plant-items-wrapper__plant__back'>
                        <div className='plant-items-wrapper__plant__back__humidity'>
                            {humidity}
                        </div>
                        <div className='plant-items-wrapper__plant__back__water-level'>
                            {waterLevel}
                        </div>
                        <div className='plant-items-wrapper__plant__back__temperature'>
                            {temperature}
                        </div>
                        <div className='plant-items-wrapper__plant__back__sunlight'>
                            {sunlight}
                        </div>
                        <div className='plant-items-wrapper__plant__back__soil-moisture'>
                            {soilMoisture}
                        </div>
                        {/* <WaterPlant className='water-plant'/> */}
                    </div>

                :
                    <div key={index} onClick={this.onItemClickHandler} className='plant-items-wrapper__plant__front'>
                        <h1 className='plant-items-wrapper__plant__front__plant-name'>{name}</h1> 
                        <img src={img} alt="plant" className='plant-items-wrapper__plant__front__plant-image'/>
                    </div>
                }    
            </div>   
        )
    }
}