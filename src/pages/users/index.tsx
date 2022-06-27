import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react"
import Link from "next/link"
import { RiAddLine, RiPencilLine } from "react-icons/ri"

import Header from "../../components/Header"
import Pagination from "../../components/Pagination"
import Sidebar from "../../components/Sidebar"


const UserList = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

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
          p="2rem"
        >
          <Flex mb="2rem" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20px" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["1rem", "1rem", "1.5rem"]} color="gray.300" width="2rem">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="2rem"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["1rem", "1rem", "1.5rem"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Campos</Text>
                    <Text fontSize="sm" color="gray.300">caampos22@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril de 2022</Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16px" />}
                    >
                      Editar
                    </Button>
                  </Td>)}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}

export default UserList
