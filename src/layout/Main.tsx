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
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useUser } from "../context/useContext";

function MainLayout({ children }: PropsWithChildren) {
  const { name, location } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <DrawerBody>
            <p>option</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default MainLayout;
