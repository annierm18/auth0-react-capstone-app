import React, { Component } from "react";

import { Row } from "reactstrap";
import PlantItem from "./PlantItem";
import PlantItem2 from "./PlantItem2";


// import WaterPlant from './waterPlant';
import img from '../assets/agave_2_cropped.jpg';

export default class PlantsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        pageTitle: "Welcome to my plants",
        isLoading: false,
        deviceInfo: [],
        deviceArr: [],
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
        this.plantItems2 = this.plantItems2.bind(this);
  }


    getPlantItems() {
        var API_KEY = "f20ad4cd3e20e788c1a92aa130ffac72",
        M2X = require("m2x"),
        m2xClient = new M2X(API_KEY);
        var arr = []

        m2xClient.devices.list(function(response) {
          if (response.isSuccess()) {
            response.json.devices.forEach(function(device) {
              
              
                var device_obj= {id: "", img, streams: []}
                device_obj.id = device.id

             
                m2xClient.devices.stream(device.id,"temperature",function(response) {
                    if (response.isSuccess()) {
                        var temp = `${response.json.name}: ${response.json.value} ${response.json.unit.symbol}`
                        
                        device_obj.streams.push(temp)
                       
                        console.log(response.json.name, response.json.value, response.json.unit.symbol);

               
                    } else {
                        console.log(JSON.stringify(response.error()));
                    }   
                    
                })
                m2xClient.devices.stream(device.id,"humidity",function(response) {
                    if (response.isSuccess()) {
                        console.log(response.json);
                        var hum = `${response.json.name}: ${response.json.value} ${response.json.unit.symbol}`
                        device_obj.streams.push(hum)
                        console.log(device_obj.streams);
                        console.log(response.json.name, response.json.value, response.json.unit.symbol);
                
                    } else {
                        console.log(JSON.stringify(response.error()));
                    }
                })
                m2xClient.devices.stream(device.id,"soil-moisture",function(response) {
                    if (response.isSuccess()) {
                        console.log(response.json);
                        var soil = `${response.json.name}: ${response.json.value} %`
                        device_obj.streams.push(soil)
                        console.log(device_obj.streams);
                        console.log(response.json.name, response.json.value, response.json.unit.symbol);
                
                    } else {
                        console.log(JSON.stringify(response.error()));
                    }
                })
                m2xClient.devices.stream(device.id,"visible-light",function(response) {
                    if (response.isSuccess()) {
                        console.log(response.json);
                        var light = `${response.json.name}: ${response.json.value} ${response.json.unit.symbol}`
                        device_obj.streams.push(light)
                        console.log(device_obj.streams);
                        console.log(response.json.name, response.json.value, response.json.unit.symbol);
                
                    } else {
                        console.log(JSON.stringify(response.error()));
                    }
                })

                arr.push(device_obj)
        })
        this.setState({
            deviceArr: arr
        });
        console.log(this.state.deviceArr)
    }
    }.bind(this));

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

  plantItems2() {
    return this.state.deviceArr.map((plant) => {
      return (
          <div>
            <PlantItem2 
                plant={plant}
                />
            </div>
        );
    });
  }

  componentDidMount() {
    this.getPlantItems();
}  

  render() {
    const pStyle = {
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      };

    return (
        <div>
        <Row style={pStyle} key={this.state.plants.name} className='plant-items-wrapper'>
                { this.plantItems() }
        </Row>
        <Row style={pStyle} key={this.state.plants.name} className='plant-items-wrapper'>
                { this.plantItems2() }
        </Row>
        </div>
    );
  }
}