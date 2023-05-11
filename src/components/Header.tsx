import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Heading, IconButton, Text } from "@chakra-ui/react";

interface HeaderProps {
  onOpen: () => void;
}

function Header({ onOpen }: HeaderProps) {
  return (
    <Box
      bg="blue.500"
      color="white"
      height="10%"
      border="none"
      position="relative"
      display="flex"
      justifyItems="center"
      alignItems="center"
    >
      <Heading textAlign="center" marginX="auto" gridColumnStart="2">
        <Text textShadow="1px 2px 3px rgba(0, 0, 0, 0.4)">FILA SUS</Text>
      </Heading>
      <IconButton
        position="absolute"
        right="0"
        aria-label="Abrir menu"
        variant="ghost"
        size="lg"
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
    </Box>
  );
}

export default Header;
