import React from "react";
import { Container, Row, Col } from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";

import PageTitle from '../components/PageTitle';
import PlantsContainer from '../components/PlantsContainer';

// styles
import "../Account.scss";

const Account = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading />;
  }

  return (
    <div className="account">
        <PageTitle className='get-started__title' title="Let's Get Started!"/>
        <div className='home__content'>
            <h1>To view the health of your plants, click on their images below.</h1>
        </div>
        <PlantsContainer className='account__plant-items-wrapper'/>

    </div>
   
    // <Container className="mb-5">
      
    //   <Row className="align-items-center account-header mb-5 text-center text-md-left">
    //     <Col md={2}>
    //       <img
    //         src={user.picture}
    //         alt="Account"
    //         className="rounded-circle img-fluid account-picture mb-3 mb-md-0"
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

export default Account;
