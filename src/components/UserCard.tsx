import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { Priority } from "../data/priority";
import getPriorityColor from "../utils/getPriorityColor";

interface UserCardProps {
  position: number;
  priority: Priority;
}

function getPriorityText(priority: Priority) {
  switch (priority) {
    case Priority.RED:
      return "Emergência";
    case Priority.YELLOW:
      return "Urgente";
    case Priority.GREEN:
      return "Pouco Urgente";
    case Priority.BLUE:
      return "Não Urgente";
  }
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
          {getPriorityText(priority)}
        </Text>
      </CardBody>
    </Card>
  );
}

export default UserCard;
