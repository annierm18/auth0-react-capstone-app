import React, { Component } from "react";

import { Row } from "reactstrap";
import PlantItem from "./PlantItem";


// import WaterPlant from './waterPlant';
import img from '../assets/agave_2_cropped.jpg';

export default class PlantsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "Welcome to my plants",
      isLoading: false,
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
            }
        ]
    };

        this.plantItems = this.plantItems.bind(this);
        // this.getPlantItems = this.getPlantItems.bing(this);
  }


  getPlantItems() {
    var API_KEY = "f20ad4cd3e20e788c1a92aa130ffac72",
        M2X = require("m2x"),
        m2xClient = new M2X(API_KEY);
        var DEVICE_ID= "cb3eed668dcb1cdf4e3b42df2c4fa00e";
    

        // m2xClient.devices.list(function(response) {
        //   if (response.isSuccess()) {
        //     response.json.devices.forEach(function(device) {
        //       console.log(device);
        //     });
        //   } else {
        //       console.log(JSON.stringify(response.error()));
        //   }
        // });

        m2xClient.devices.streamStats(DEVICE_ID,"temperature",function(response) {
          if (response.isSuccess()) {
         
            console.log(response.json.stats);
           
          } else {
              console.log(JSON.stringify(response.error()));
          }
        
        });

        m2xClient.devices.stream(DEVICE_ID,"temperature",function(response) {
          if (response.isSuccess()) {
         
            console.log(response.json);
           
          } else {
              console.log(JSON.stringify(response.error()));
          }
        });

        m2xClient.devices.stream(DEVICE_ID,"temperature",function(response) {
            if (response.isSuccess()) {
           
              console.log(response.json);
             
            } else {
                console.log(JSON.stringify(response.error()));
            }
          });
  }




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

  componentDidMount() {
    console.log(this.getPlantItems());
    this.getPlantItems();
}


  

  render() {
    const pStyle = {
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'cemter',
        justifyContent: 'center'
      };

    return (
        <div>
        <Row style={pStyle} key={this.state.plants.name} className='plant-items-wrapper'>
                { this.plantItems() }
        </Row>
        <Row>
            { this.getPlantItems() }
        </Row>
        </div>
    );
  }
}