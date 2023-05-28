import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";
import "./App.css";
import { UserProvider } from "./context/UserContext.tsx";
import { ErrorProvider } from "./context/ErrorContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider>
        <ErrorProvider>
          <RouterProvider router={router} />
        </ErrorProvider>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);
