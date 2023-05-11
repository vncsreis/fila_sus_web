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
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

function MainLayout({ children }: PropsWithChildren) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display="flex" flexDir="column" height="100%" width="100%">
      <Header onOpen={onOpen} />
      {children}
      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader display="flex" alignItems="center">
            <Text>Nome do Usuário</Text>
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
