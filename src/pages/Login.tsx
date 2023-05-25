import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
} from "@chakra-ui/react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import people from "../imgs/diversas-pessoas-esperando-na-fila-do-hospital-e-assinando-papéis-que-o-médico-dá-aguardando-para-tomar-tiros-ou-serem-testadas-204700619.jpg";
import { useState } from "react";
import { useUser } from "../context/useContext";

type Options = 1 | 2 | 3;

function Login() {
  const { setName: setUserName, setLocation: setUserLocation } = useUser();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [formNumber, setFormNumber] = useState<Options>(1);

  function getForm(
    formNumber: Options,
    setFormNumber: React.Dispatch<React.SetStateAction<Options>>,
    navigate: NavigateFunction
  ) {
    switch (formNumber) {
      case 1:
        return (
          <>
            <Heading size="3xl" p="10" textAlign="center">
              Fila SUS
            </Heading>
            <Button
              colorScheme="facebook"
              size="lg"
              onClick={() => setFormNumber(2)}
            >
              Acessar
            </Button>
          </>
        );

      case 2:
        return (
          <>
            <Heading size="xl" p="7">
              Fila SUS
            </Heading>
            <FormControl bg="white" color="black" p="5" borderRadius="10">
              <FormLabel>Nome:</FormLabel>
              <Input
                type="text"
                borderColor="blue.700"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FormHelperText py="4">
                Digite seu nome como consta no sistema de fila.
              </FormHelperText>

              <Button colorScheme="facebook" onClick={() => setFormNumber(3)}>
                Próximo
              </Button>
            </FormControl>
          </>
        );

      case 3:
        return (
          <>
            <Heading size="xl" p="7">
              Fila SUS
            </Heading>
            <FormControl bg="white" color="black" p="5" borderRadius="10">
              <FormLabel>Unidade:</FormLabel>
              <Select
                placeholder="Unidade de saúde"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="Celso Ramos">Celso Ramos</option>
                <option value="Hospital Universitário">
                  Hospital Universitário
                </option>
              </Select>
              <FormHelperText py="4">
                Agora selecione a unidade onde você aguarda atendimento.
              </FormHelperText>

              <Button
                colorScheme="facebook"
                onClick={() => {
                  setUserName(name);
                  setUserLocation(location);
                  navigate("/");
                }}
              >
                Próximo
              </Button>
            </FormControl>
          </>
        );
    }
  }

  const navigate = useNavigate();

  return (
    <Box
      bg="blue.500"
      color="white"
      height="100%"
      width="100%"
      display="flex"
      flexDir="column"
      alignItems="center"
      position="relative"
    >
      <Box height="40%" position="relative">
        <Image
          src={people}
          height="100vh"
          width="100vw"
          objectFit="cover"
          position="relative"
          top="-40"
        />
        <Box
          position="absolute"
          top="0"
          zIndex="100"
          height="100vh"
          width="100%"
          bgGradient="linear(to-b, transparent 15%, blue.500 40%)"
        />
      </Box>
      <Box zIndex="200" width="90%">
        <Box display="flex" flexDir="column">
          {getForm(formNumber, setFormNumber, navigate)}
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
