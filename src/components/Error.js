import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div className="error">
      <h1>Ooops!!</h1>
      <h2>Something Went Wrong!</h2>
      <h2>
        {err.status}:{err.statusText}
      </h2>
    </div>
  );
};
export default Error;
