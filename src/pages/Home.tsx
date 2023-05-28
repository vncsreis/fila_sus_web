import { Box } from "@chakra-ui/react";
import UserCard from "../components/UserCard";
import { useEffect, useState } from "react";
import { Line } from "../data/line";
import LineCard from "../components/LineCard";
import { Priority } from "../data/priority";
import MainLayout from "../layout/Main";
import Loading from "../components/Loading";
import ServerResponse from "../data/serverResponse";
import { useError, useUser } from "../context/useContext";
import { useNavigate } from "react-router-dom";

async function getUserInfo(userName: string) {
  try {
    const { response }: ServerResponse = await fetch(
      `https://script.google.com/macros/s/AKfycbxnxNqHTbXqCM_Q4_jxMliMsoaF0H_87Uyt35ef3EazZAMN-KtMGPbDm_DXCh7Nb8zMrg/exec?name=${userName}`
    ).then((p) => p.json());

    const { pacientPosition, pacientColor } = response;

    const { red, green, yellow, blue } = response.colors;

    return {
      pacientPosition,
      pacientColor,
      red: { priority: "red", amount: red },
      green: { priority: "green", amount: green },
      yellow: { priority: "yellow", amount: yellow },
      blue: { priority: "blue", amount: blue },
    };
  } catch (err) {
    return null;
  }
}

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [userPosition, setUserPosition] = useState<number>(0);
  const [userPriority, setUserPriority] = useState(Priority.GREEN);
  const { name } = useUser();
  const { setError } = useError();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const res = await getUserInfo(name);

      if (res === null) {
        setError(true);
        navigate("/err");
      } else {
        const { pacientPosition, pacientColor, red, green, yellow, blue } = res;

        const line = [red, green, yellow, blue];

        setUserPosition(pacientPosition);
        setUserPriority(pacientColor);
        setLines(line);
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      console.log("fetching");

      const res = await getUserInfo(name);

      if (res === null) {
        setError(true);
        navigate("/err");
      } else {
        const { pacientPosition, pacientColor, red, green, yellow, blue } = res;

        const line = [red, green, yellow, blue];

        setUserPosition(pacientPosition);
        setUserPriority(pacientColor);
        setLines(line);
      }
    }, 60000);

    return () => clearInterval(interval);
  });

  return (
    <MainLayout>
      {isLoading ? (
        <Loading />
      ) : (
        <Box
          height="100%"
          width="100%"
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          bg="blue.500"
          p="2"
        >
          <Box display="flex" flexDir="column" justifyContent="space-between">
            {lines
              .sort((a, b): number => {
                if (a.priority == "red") {
                  return -1;
                } else if (a.priority != "red" && b.priority == "green") {
                  return -1;
                }

                return 0;
              })
              .map((line: Line) => {
                let priority;

                switch (line.priority) {
                  case "green":
                    priority = Priority.GREEN;
                    break;
                  case "yellow":
                    priority = Priority.YELLOW;
                    break;
                  case "red":
                    priority = Priority.RED;
                    break;
                  case "blue":
                    priority = Priority.BLUE;
                    break;
                }

                if (priority != undefined) {
                  return (
                    <LineCard
                      key={line.priority}
                      amount={line.amount}
                      priority={priority}
                    />
                  );
                } else {
                  return null;
                }
              })}
          </Box>
          <UserCard position={userPosition} priority={userPriority} />
        </Box>
      )}
    </MainLayout>
  );
}

export default Home;
