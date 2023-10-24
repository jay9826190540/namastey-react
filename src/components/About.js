import React from "react";
import User from "./User";
import Userclass from "./Userclass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Inside about constructor parent");
  }
  ///The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model).
  componentDidMount() {
    console.log("inside parent component did mount about parent");
  }
  render() {
    console.log("Inside render about parent")
    return (
      <>
        <h1>This is about swiggy page in develpment environment</h1>
        <h2>Develop by Jay</h2>
        <User name={"jay Agrawal functional component"} />
        <Userclass occupation={"Software engineer 1"} hobbies="Playing table tennis 1" mobileNumber="8770514994---1" />

        <Userclass occupation={"Software engineer 2"} hobbies="Playing table tennis 2" mobileNumber="8770514994---2" />
      </>
    )
  }
}
export default About;

/*  
1 . Parent Constructor 
2 . Parent Render 

    a) Child 1 Constructor 
    b) Child 1 Render
    c) Child 2 Constructor
    d) Child 2 Render
    <DOM updated in a single batch below>
    e) Component did Mount First Child Component
    f) Component did Mount Second Child Component

3. Parent Component did mount


*/ 