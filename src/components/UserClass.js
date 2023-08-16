import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userInfo:{
              name: "Dummy",
              location:"Dummy",
              avatar_url:"/"
            }
          }
    }
    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/thekunalprashant");
        const json= await data.json();
        console.log(json)
        this.setState({
          userInfo:json,
        })
  }
  componentDidUpdate(){
    console.log("Component Did Update!");
  }
  componentWillUnmount(){
    console.log("component unmounted!");
  }

    render(){
    const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} alt="profile-pic" />
                <h1>{name}</h1>
                <p>Location: {location}</p>
                <p>Contact: kunalprashant77@gmail.com</p>
            </div>
        )
    }
}

export default UserClass;