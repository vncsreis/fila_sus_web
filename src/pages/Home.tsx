import { Box } from "@chakra-ui/react";
import UserCard from "../components/UserCard";
import { useEffect, useState } from "react";
import { Line } from "../data/line";
import LineCard from "../components/LineCard";
import { Priority } from "../data/priority";
import MainLayout from "../layout/Main";
import Loading from "../components/Loading";

async function getLine(): Promise<Line[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return [
    {
      priority: "green",
      amount: 10,
    },
    {
      priority: "yellow",
      amount: 15,
    },
    {
      priority: "red",
      amount: 17,
    },
  ];
}

async function getUserInfo(): Promise<[number, Priority]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return [42, Priority.GREEN];
}

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [userPosition, setUserPosition] = useState<number>(0);
  const [userPriority, setUserPriority] = useState(Priority.GREEN);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const [gotLine, [gotPosition, gotPriority]] = await Promise.all([
        getLine(),
        getUserInfo(),
      ]);

      setUserPosition(gotPosition);
      setUserPriority(gotPriority);
      setLines(gotLine);
      setIsLoading(false);
    })();
  }, []);

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
          bg="blue.100"
          p={3}
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
