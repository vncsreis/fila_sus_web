import { Box, Text } from "@chakra-ui/react";

function Loading() {
  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      flexDir="column"
      alignItems="center"
      bg="blue.500"
      p={3}
    >
      <Text
        color="white"
        fontSize="3xl"
        mt={40}
        textShadow="1px 2px 3px rgba(0, 0, 0, 0.4)"
      >
        CARREGANDO...
      </Text>
    </Box>
  );
}

export default Loading;
