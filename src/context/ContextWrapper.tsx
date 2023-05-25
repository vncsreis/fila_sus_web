import { PropsWithChildren } from "react";

function ContextWrapper({ children }: PropsWithChildren) {
  return { children };
}

export default ContextWrapper;
