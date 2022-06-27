import { Flex, Icon, Input } from "@chakra-ui/react"
import { RiSearchLine } from "react-icons/ri"


const SearchBox = () => {
  return (
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
  )
}

export default SearchBox
