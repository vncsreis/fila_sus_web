import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { Priority } from "../data/priority";
import getPriorityColor from "../utils/getPriorityColor";

interface LineCardProps {
  amount: number;
  priority: Priority;
}

function LineCard({ amount, priority }: LineCardProps) {
  return (
    <Card textAlign="center" m="1" shadow="md">
      <CardHeader
        bg={getPriorityColor(priority)}
        borderRadius={5}
        fontSize="2xl"
        fontWeight="bold"
        color="white"
        p="2"
      >
        <Text textShadow="1px 2px 3px rgba(0, 0, 0, 0.5)">{amount}</Text>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />}>
          <Box>
            <Heading size="md" textTransform="uppercase">
              {((priority: Priority) => {
                switch (priority) {
                  case Priority.RED:
                    return <Text>Emergência</Text>;
                  case Priority.YELLOW:
                    return <Text>Urgência</Text>;
                  case Priority.GREEN:
                    return <Text>Pouco Urgente</Text>;
                  case Priority.BLUE:
                    return <Text>Não Urgente</Text>;
                }
              })(priority)}
            </Heading>
            <Text fontSize="sm">{amount} usuários na sua frente.</Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default LineCard;
