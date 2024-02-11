import { useRouteError } from "react-router-dom";

const Error = ()=>{
  const err = useRouteError();
  console.log(err);
    return (<div>
      <h2> Oops you went out of boundaries!!!....</h2>
      <h2> {err.status} : Not Found</h2>
    </div>)
}

export default Error;