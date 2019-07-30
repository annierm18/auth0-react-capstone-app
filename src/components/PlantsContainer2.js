import React from "react";



import {
  
    Button,
   
  } from "reactstrap";

const PlantsContainer2 = () => {

  return (

    <Button
      id="qsIrrigate"
      color="primary"
      className="btn-margin"
      onClick={function(){
        var API_KEY = "f20ad4cd3e20e788c1a92aa130ffac72",
        M2X = require("m2x"),
        m2xClient = new M2X(API_KEY);
        var DEVICE_ID= "cb3eed668dcb1cdf4e3b42df2c4fa00e";

        m2xClient.devices.list(function(response) {
          if (response.isSuccess()) {
            response.json.devices.forEach(function(device) {
              console.log(device);
            });
          } else {
              console.log(JSON.stringify(response.error()));
          }
        
        });
        m2xClient.devices.streamStats(DEVICE_ID,"temperature",function(response) {
          if (response.isSuccess()) {
         
            console.log(response.json.stats);
           
          } else {
              console.log(JSON.stringify(response.error()));
          }
        
        });
        m2xClient.devices.stream(DEVICE_ID,"temperature",function(response) {
          if (response.isSuccess()) {
         
            console.log(response.json.name, response.json.value, response.json.unit.symbol);
           
          } else {
              console.log(JSON.stringify(response.error()));
          }
        
        });

      }}
    >
      Water my plants
    </Button>


    // <Container className="mb-5">
    //   <Row className="align-items-center profile-header mb-5 text-center text-md-left">
    //     <Col md={2}>
    //       <img
    //         src={user.picture}
    //         alt="Profile"
    //         className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
    //       />
    //     </Col>
    //     <Col md>
    //       <h2>{user.name}</h2>
    //       <p className="lead text-muted">{user.email}</p>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
    //   </Row>
    // </Container>
  );
};

export default PlantsContainer2;