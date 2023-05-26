import { PropsWithChildren } from "react";
import Header from "../components/Header";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Text,
  IconButton,
  Heading,
  Button,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useUser } from "../context/useContext";
import { useNavigate } from "react-router-dom";

function MainLayout({ children }: PropsWithChildren) {
  const { name, location, setName, setLocation } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  function logOut() {
    setName("");
    setLocation("");

    localStorage.removeItem("fila-sus-name");
    localStorage.removeItem("fila-sus-location");

    navigate("/login");
  }

  return (
    <Box display="flex" flexDir="column" height="100%" width="100%">
      <Header onOpen={onOpen} />
      {children}
      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader display="flex" alignItems="center">
            <Box display="flex" flexDir="column">
              <Heading>{name}</Heading>
              <Text color="gray.500" size="sm">
                {location}
              </Text>
            </Box>
            <IconButton
              aria-label="Fechar menu"
              marginLeft="auto"
              variant="ghost"
              icon={<CloseIcon />}
              onClick={onClose}
            />
          </DrawerHeader>
          <DrawerBody display="flex" flexDir="column">
            <Button
              mt="auto"
              variant="ghost"
              fontSize="xl"
              onClick={() => logOut()}
            >
              Sair
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default MainLayout;
