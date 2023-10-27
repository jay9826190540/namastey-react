import React from "react";
/// A new class of class gets instantiated
class Userclass extends React.Component {
  constructor(props) {
    console.log("inside constructor child");
    super(props);//// Must to write 
    this.state = {
      count: 0,
      countNew: 1,
      userInfo: {
        name: '',
        location: ''
      },
    };
    this.hanldeIncrement = this.hanldeIncrement.bind(this);
  }
  hanldeIncrement() {
    this.setState({
      count: this.state.count + 1,
    })
  }
  async componentDidMount() {
    console.log("Inside component did mount user class child");
    this.timerId = setInterval(() => {
      console.log("Inside set Interval");
    }, 1000)
    /// Make the api call
    const data = await fetch("https://api.github.com/users/jay9826190540");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: {
        name: json.login,
        location: json.location
      }
    });
  }
  componentDidUpdate() {
    console.log("inside component did update");
  }
  componentWillUnmount() {
    console.log("inside component will unmount");
    clearInterval(this.timerId);
  }

  render() {
    const { occupation, hobbies, mobileNumber } = this.props;
    const { count, countNew } = this.state;
    console.log("inside render");
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} width={"100"} height={"100"}></img>
        <h1>Count = {count}</h1>
        <h1>Count New = {countNew}</h1>
        <h2>Occupation : {occupation}</h2>
        <h3>Hobbies : {hobbies}</h3>
        <h3>Mobile :  {mobileNumber}</h3>
        <h3>Git Hub Name : {this.state.userInfo.name}</h3>
        <button onClick={this.hanldeIncrement}>Increment</button>
      </div>
    )
  }
}
export default Userclass;


/*------ Mounting -------------
 1. Constructor(Dummy Data)
 2. Render(dummy)
    <HTML Dummy data>
 3. Component Did Mount
    <API Call>
    <this.setState>

 ---- Updating-----
  1.   render(API Data)
  2.   <HTML with new API Data>
  3.   Component did update

*/