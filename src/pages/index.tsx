import { Flex, Button, Stack } from "@chakra-ui/react"
import Input from "../components/Form/Input"

export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth="360px"
        flexDir="column"
        bg="gray.800"
        p="2rem"
        borderRadius="8px"
      >
        <Stack spacing="1rem">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button
          type="submit"
          mt="1.5rem"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>

      </Flex>
    </Flex>
  )
}
