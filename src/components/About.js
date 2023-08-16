import React from 'react'
import User from './User';
import UserClass from './UserClass';

class About extends React.Component{
  constructor(props){
    super(props)
    
  }
  

  render(){
    return (
      <div>
          <h1>About Us</h1>
          <p>This is About Page</p>
          
          {/* <User name={"Kunal (function)"}/> */}
          <UserClass name={"Kunal (Class)"} />
      </div>
    )
  }
}


export default About;