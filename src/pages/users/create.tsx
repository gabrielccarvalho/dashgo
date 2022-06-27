import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import Input from "../../components/Form/Input"

import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"


const CreateUser = () => {
  return (
    <Box>
      <Header />

      <Flex
        width="100%"
        my="1.5rem"
        maxWidth="1480px"
        mx="auto"
        px="1.5rem"
      >
        <Sidebar />
        <Box
          flex="1"
          borderRadius="8px"
          bg="gray.800"
          p={["1.5rem", "2rem"]}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="1.5rem" borderColor="gray.700" />
          
          <VStack spacing={["1.5rem", "2rem"]}>
            <SimpleGrid minChildWidth="240px" spacing={["1.5rem", "2rem"]} w="100%">
              <Input name="name" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["1.5rem", "2rem"]} w="100%">
              <Input name="password" type="password" label="Senha" />
              <Input name="password_confirmation" type="password" label="Confirmação da senha" />
            </SimpleGrid>
          </VStack>

          <Flex mt="2rem" justify="flex-end">
            <HStack spacing="1rem">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>

        </Box>
      </Flex>
    </Box>
  )
}

export default CreateUser
