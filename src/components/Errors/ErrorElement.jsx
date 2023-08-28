import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";

export default function ErrorElement() {
  let error = useRouteError();
  return isRouteErrorResponse(error) ? (
    <div>
      <Navbar />
      <h1>Oops!</h1>
      <h2>{error.status}</h2>
      <p>{error.statusText}</p>
      {error.data?.message && <p>{error.data.message}</p>}
      <Footer />
    </div>
  ) : (
    <div>
      <Navbar />
      <h1>{error.message || error} Hey its..</h1>
      <Footer />
    </div>
  );
}
