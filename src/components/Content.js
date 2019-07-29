import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contentData from "../utils/contentData";

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">
          Do your plants die when you go on vacation?  Do you wish you could have a way to monitor and water your plants while you are away?
        </h2>
        <p>
          If the answers are yes, then this application is perfect for you!
          You can view the health of your plants and water them all with the click of a button! There are instructions in the "Get Started" page on how to hook up your plants to this application through backend configuration.
        </p>
      </div>
    );
  }
}

export default Content;
