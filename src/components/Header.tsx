import { Flex, Input, Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

const Header = () => {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth="1480px"
      align="center"
      h="5rem"
      mx="auto"
      mt="1rem"
      px="1.5rem"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="16rem"
      >
        dashgo
        <Text as="span" ml="0.25rem" color="pink.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="1rem"
        px="2rem"
        ml="1.5rem"
        maxWidth="400px"
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="1rem"
          mr="1rem"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
        />

        <Icon as={RiSearchLine} fontSize="20px" />
      </Flex>

      <Flex
        align="center"
        ml="auto"
      >
        <HStack
          spacing="2rem"
          mx="2rem"
          pr="2rem"
          py="0.25rem"
          color="gray.300"
          borderRightWidth="1px"
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20px" />
          <Icon as={RiUserAddLine} fontSize="20px" />
        </HStack>

        <Flex align="center">
          <Box mr="1rem" textAlign="right">
            <Text>Gabriel Campos</Text>
            <Text color="gray.300" font-size="small">
              caampos22@gmail.com
            </Text>
          </Box>

          <Avatar size="md" name="Gabriel Campos" src="https://github.com/gabrielccarvalho.png" />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
