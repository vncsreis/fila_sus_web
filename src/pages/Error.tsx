import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useError, useUser } from "../context/useContext";

function Error() {
  const navigate = useNavigate();
  const { setError } = useError();
  const { setName, setLocation } = useUser();

  return (
    <Box
      bgColor="blue.500"
      color="white"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      gap="2"
    >
      <Heading>Usuário não encontrado</Heading>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Seu nome não consta na fila no momento.</Text>
        <Text>Verifique se seu nome foi escrito corretamente.</Text>
      </Box>
      <Button
        colorScheme="facebook"
        onClick={() => {
          setError(false);
          setName("");
          setLocation("");
          navigate("/login");
        }}
      >
        Tentar Novamente
      </Button>
    </Box>
  );
}

export default Error;
