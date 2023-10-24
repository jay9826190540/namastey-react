import React from "react";
/// A new class of class gets instantiated
class Userclass extends React.Component {
  constructor(props) {
    console.log("inside constructor child");
    super(props);//// Must to write 
    this.state = {
      count: 0,
      countNew: 1
    };
    this.hanldeIncrement = this.hanldeIncrement.bind(this);
  }
  hanldeIncrement() {
    this.setState({
      count: this.state.count + 1,
    })
  }
  componentDidMount() {
    console.log("Inside component did mount user class child");
    /// Make the api call 
  }
  render() {
    const { occupation, hobbies, mobileNumber } = this.props;
    const { count, countNew } = this.state;
    console.log("inside render");
    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count New = {countNew}</h1>
        <h2>Occupation : {occupation}</h2>
        <h3>Hobbies : {hobbies}</h3>
        <h3>Mobile :  {mobileNumber}</h3>
        <button onClick={this.hanldeIncrement}>Increment</button>
      </div>
    )
  }
}
export default Userclass;