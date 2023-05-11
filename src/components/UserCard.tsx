import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { Priority } from "../data/priority";
import getPriorityColor from "../utils/getPriorityColor";

interface UserCardProps {
  position: number;
  priority: Priority;
}

function UserCard({ position, priority }: UserCardProps) {
  return (
    <Card
      textAlign="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CardBody>
        <Heading fontSize="sm">Sua posição na fila:</Heading>
        <Heading fontSize="3xl" fontWeight="bold">
          {position}
        </Heading>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color={getPriorityColor(priority)}
          textShadow="1px 1px 2px rgba(0, 0, 0, 0.1)"
        >
          Pouco Urgente
        </Text>
      </CardBody>
    </Card>
  );
}

export default UserCard;
