import { useEffect, useState } from "react";

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date().toTimeString())
  useEffect(() => {
    let timerId = setInterval(() => {
      setCurrentDate(new Date().toTimeString());
    }, 1000)
    return () => { clearInterval(timerId) }
  }, [])
  return (
    <h1>Current time is : {currentDate}</h1>
  )
}
export default CurrentDate;