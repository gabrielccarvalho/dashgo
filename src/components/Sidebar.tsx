import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"


const Sidebar = () => {
  return (
    <Box
      as="aside"
      w="16rem"
      mr="2rem"
    >
      <Stack spacing="3rem" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="1rem" mt="2rem" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} fontSize="20px" />
              <Text ml="1rem" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="20px" />
              <Text ml="1rem" fontWeight="medium">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO
          </Text>
          <Stack spacing="1rem" mt="2rem" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiInputMethodLine} fontSize="20px" />
              <Text ml="1rem" fontWeight="medium">
                Formulários
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiGitMergeLine} fontSize="20px" />
              <Text ml="1rem" fontWeight="medium">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default Sidebar
