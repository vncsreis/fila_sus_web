import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Protected from "./Protected";
import Error from "../pages/Error";
import ProtectedError from "./Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/err",
    element: (
      <ProtectedError>
        <Error />
      </ProtectedError>
    ),
  },
]);

export default router;
