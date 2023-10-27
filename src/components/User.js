import { useEffect, useState } from "react";


const User = ({ name }) => {
  const [count, setCount] = useState({ test: 0 });
  const [countNew, setCountNew] = useState(1);
  useEffect(() => {
    //console.log("use effect --1");
    const timer = setInterval(() => {
      //console.log("Inside set interval functional component");
    }, 1000)
    //// This function is called when we are unmouting component
    return () => {
      //console.log("inside clear interval")
      clearInterval(timer)
    };
  }, [])
  useEffect(() => {
    //console.log("Use effect 2 ------");
  }, [])
  useEffect(() => {
    //console.log("Use effect 3 ------");
  }, [])
  const hanldeIncrementCounter = () => {
    setCount({ test: count.test + 1 });
  }
  return (
    <div className="user-card">
      <h1>Count = {count.test}</h1>
      <h1>Count New = {countNew}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Pune</h3>
      <h3>Contact: jaydamoh@gmail.com</h3>
      <button onClick={hanldeIncrementCounter}>Increment</button>
    </div>
  )
}
export default User;