import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className=" p-4 text-center ">
        <h1>About Us</h1>
        <p>This is About Page</p>

        {/* <User name={"Kunal (function)"}/> */}
        <UserClass name={"Kunal (Class)"} />
      </div>
    );
  }
}

export default About;
