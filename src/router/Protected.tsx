import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { useUser } from "../context/useContext";
import { useNavigate } from "react-router-dom";

function Protected({ children }: PropsWithChildren) {
  const { name, location } = useUser();
  const navigate = useNavigate();

  const [content, setContent] = useState<ReactNode | null>(null);

  useEffect(() => {
    if (name === "" && location === "") {
      setContent(null);
      navigate("/login");
    } else {
      setContent(<>{children}</>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{content}</>;
}

export default Protected;
