import React from "react";

import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";

import PageTitle from '../components/PageTitle';
import PlantsContainer from '../components/PlantsContainer';
// import PlantsContainer2 from '../components/PlantsContainer2';

// styles
import "../Account.scss";

const Account = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading />;
  }

  return (
    <div className="account">
        <PageTitle className='get-started__title' title="Monitor Your Plants!"/>
        <div className='home__content'>
            <h1>To view the health of your plants, click on their images below.</h1>
        </div>
        <div>
        <PlantsContainer className='account__plant-items-wrapper'/>
        </div> 
      {/* <div>
        <PlantsContainer2 />
      </div> */}
    </div>
  );
};

export default Account;
