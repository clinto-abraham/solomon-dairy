import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import SideBar from "../sidebar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function ErrorElement() {
  let error = useRouteError();
  const navigate = useNavigate();
  return isRouteErrorResponse(error) ? (
    <>
      <Navbar />
      <SideBar />
      <section className="ma-5 pa-5 error-container">
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
        <Button
          variant="outlined"
          size="large"
          onClick={() => navigate(-1)}
          // sx={{ backgroundColor: "purple", color: "black" }}
        >
          Go Back
        </Button>
      </section>

      <Footer />
    </>
  ) : (
    <div>
      <Navbar />
      <SideBar />
      <section className="ma-5 pa-5 error-container">
        <h1>{error.message || error} Hey its..</h1>
      </section>
      <Footer />
    </div>
  );
}
