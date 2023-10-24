import { useState } from "react";


const User = ({ name }) => {
  const [count, setCount] = useState({ test: 0 });
  const [countNew, setCountNew] = useState(1);
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