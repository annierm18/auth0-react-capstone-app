import React, { Component } from "react";
// import axios from "axios";

import { Container, Row, Col } from "reactstrap";
import PlantItem from "./PlantItem";


// import WaterPlant from './waterPlant';
import img from '../assets/agave_2_cropped.jpg';

export default class PlantsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "Welcome to my plants",
      isLoading: false,
      data: [],
      plants: [

            { 
                id: 0,
                name: 'Plant #1',
                sensor: 'Sensor #1',
                img: img,
                humidity: 'Humidity: 40%',
                temperature: 'Temp: 100F',
                sunlight: 'Sunlight: sunny',
                soilMoisture: 'Soil Moisture: dry',
                waterLevel: 'Water Level: high',
            },
            { 
                id: 1,
                name: 'Plant #2',
                sensor: 'Sensor #2',
                img: img,
                humidity: 'Humidity: 60%',
                temperature: 'Temp: 75F',
                sunlight: 'Sunlight: sunny',
                soilMoisture: 'Soil Moisture: moist',
                waterLevel: 'Water Level: low',
            },
            { 
                id: 2,
                name: 'Plant #3',
                sensor: 'Sensor #3',
                img: img,
                humidity: 'Humidity: 50%',
                temperature: 'Temp: 60F',
                sunlight: 'Sunlight: sunny',
                soilMoisture: 'Soil Moisture: dry',
                waterLevel: 'Water Level: medium',
            },
            { 
                id: 3,
                name: 'Plant #4',
                sensor: 'Sensor #4',
                img: img,
                humidity: 'Humidity: 70%',
                temperature: 'Temp: 80F',
                sunlight: 'Sunlight: sunny',
                soilMoisture: 'Soil Moisture: dry',
                waterLevel: 'Water Level: medium-high',
            },
            { 
                id: 4,
                name: 'Plant #5',
                sensor: 'Sensor #5',
                img: img,
                humidity: 'Humidity: 60%',
                temperature: 'Temp: 100F',
                sunlight: 'Sunlight: sunny',
                soilMoisture: 'Soil Moisture: over-saturated',
                waterLevel: 'Water Level: high',
            },
        ]
    };

        this.plantItems = this.plantItems.bind(this);

  }


//   getPlantItems() {
//     axios
//       .get("https://jordan.devcamp.space/portfolio/portfolio_items")
//       .then(response => {
//         this.setState({
//           data: response.data.data
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }




  plantItems() {
    return this.state.plants.map((plant, index) => {
      return (
          <div>
            <PlantItem 
                key={index} 
                value={plant.name} 
                plant={plant}
                />
            </div>
        );
    });
  }

  render() {
    const pStyle = {
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'cemter',
        justifyContent: 'center'
      };

    return (
        <Row style={pStyle} key={this.state.plants.name} className='plant-items-wrapper'>
                { this.plantItems() }
        </Row>


    );
  }
}