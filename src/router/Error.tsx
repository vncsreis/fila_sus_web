import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { useError } from "../context/useContext";
import { useNavigate } from "react-router-dom";

function Error({ children }: PropsWithChildren) {
  const { error } = useError();
  const navigate = useNavigate();

  const [content, setContent] = useState<ReactNode | null>(null);

  useEffect(() => {
    if (!error) {
      setContent(null);
      navigate("/login");
    } else {
      setContent(<>{children}</>);
    }
  }, []);

  return <>{content}</>;
}

export default Error;
