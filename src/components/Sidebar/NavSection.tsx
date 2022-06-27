import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine } from "react-icons/ri"

interface NavSectionProps {
  title: string;
  children: React.ReactNode;
}

const NavSection = ({ title, children }: NavSectionProps) => {
  return (
    <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            {title}
          </Text>
          <Stack spacing="1rem" mt="2rem" align="stretch">
            {children}
          </Stack>
        </Box>
  )
}

export default NavSection
