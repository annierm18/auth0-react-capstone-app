


import React from "react";
import { Container, Row, Col } from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";
// import RegisterPlantsForm from '../plants/registerplantsForm';
// import RegisterDropDown from '../plants/registerdropDown';

import PageTitle from '../components/PageTitle';

const RegisterPlants = () => {
    const { loading, user } = useAuth0();
  
    if (loading || !user) {
      return <Loading />;
    }
    
    return (
         <div className='register-plants'>
            <PageTitle className='register-plants__page-title' title='Register Your Plants' />
                {/* <RegisterPlantsForm onSubmit={this.onSubmit} className='register-plants__form' /> */}
                {/* <RegisterDropDown
                    width={200}
                    name="Plant Name"
                    items={[
                        { value: 'Plant Sensor #1', id: 1},
                        { value: 'Plant Sensor #2', id: 2},
                        { value: 'Plant Sensor #3', id: 3},
                    ]}
                /> */}
        </div>
    )
}



export default RegisterPlants;