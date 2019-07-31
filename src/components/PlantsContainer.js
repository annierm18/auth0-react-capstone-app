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
        deviceArr: [
            {
                img: '',
                id: '',
                name: ''
            }
        ],
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
        // this.getPlantItems = this.getPlantItems.bind(this);
  }


  getPlantItems() {
    var API_KEY = "f20ad4cd3e20e788c1a92aa130ffac72",
        M2X = require("m2x"),
        m2xClient = new M2X(API_KEY);
        // var DEVICE_ID= "cb3eed668dcb1cdf4e3b42df2c4fa00e";
        var arr = []

        m2xClient.devices.list(function(response) {
          if (response.isSuccess()) {
            response.json.devices.forEach(function(device) {
                arr.push(device.id)
                this.setState({
                    deviceId: arr
                })
              console.log(this.state.deviceId, arr);
            }.bind(this));
          } else {
              console.log(JSON.stringify(response.error()));
          }
        }.bind(this));

    }

    getSensorData() {
        var API_KEY = "f20ad4cd3e20e788c1a92aa130ffac72",
        M2X = require("m2x"),
        m2xClient = new M2X(API_KEY);
        var newArr = []
        // var DEVICE_ID= this.state.deviceId;
        console.log(this.state.deviceId);
        // var DEVICE_ID= "cb3eed668dcb1cdf4e3b42df2c4fa00e";

        return this.state.deviceId.map((id) => {
            return (
                 m2xClient.devices.stream(id,"temperature",function(response) {
                    if (response.isSuccess() && this.state.deviceInfo.length < 1 ) {
                        var temp = `${response.json.name}: ${response.json.value} ${response.json.unit.symbol}`
                        var obj = {id, img, temp}
                        newArr.push(obj)
                        console.log(newArr);
                        console.log(response.json.name, response.json.value, response.json.unit.symbol);

                        this.setState({
                            deviceInfo: newArr 
                        });
               
                    } else {
                        console.log(JSON.stringify(response.error()));
                    }
                }.bind(this))
              );
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

  plantItems2() {
    return this.state.deviceInfo.map((plant) => {
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
    // this.getSensorData();
}

componentDidUpdate() {
    this.getSensorData();
}

// componentWillUnmount() {
//     this.getSensorData();
// }

  

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