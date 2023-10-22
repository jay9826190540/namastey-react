//// useRouteError is used for handling error
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>Oops</h1>
      <h2>Something went wrong, please try again later</h2>
      <h3>{err.status}: {err.statusText}</h3>
    </>
  )
}
export default Error;