import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        avatar_url: "/",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/thekunalprashant");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    // console.log("Component Did Update!");
  }
  componentWillUnmount() {
    // console.log("component unmounted!");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="text-center w-[240px] m-auto mt-3 p-2 aspect-square relative shadow-lg bg-gray-50 ">
        <img
          className=" w-52 m-auto rounded-lg object-scale-down"
          src={avatar_url}
          alt="profile-pic"
        />
        <div className="bg-green-50 inset-x-0 absolute">
          <h1>{name}</h1>
          <p>Location: {location}</p>
          <p className="text-xs pb-2 shadow-lg">
            Contact: kunalprashant77@gmail.com
          </p>
        </div>
      </div>
    );
  }
}

export default UserClass;
