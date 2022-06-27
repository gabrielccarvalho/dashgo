import { Flex, Input, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react"

export default function Home() {
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

          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              type="email"
              id="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
            />
          </FormControl>
          
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              name="password"
              type="password"
              id="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
            />
          </FormControl>

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
