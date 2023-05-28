import { useContext } from "react";
import { UserContext } from "./UserContext";
import { ErrorContext } from "./ErrorContext";

export function useUser() {
  return useContext(UserContext);
}

export function useError() {
  return useContext(ErrorContext);
}
