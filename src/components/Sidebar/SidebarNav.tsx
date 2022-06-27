import { Stack } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import NavLink from "./NavLink"
import NavSection from "./NavSection"


const SidebarNav = () => {
  return (
    <Stack spacing="3rem" align="flex-start">
      <NavSection title="Geral">
        <NavLink name="Dashboard" icon={RiDashboardLine} href="/dashboard" />
        <NavLink name="Usuários" icon={RiContactsLine} href="/users" />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink name="Formulários" icon={RiInputMethodLine} href="/forms" />
        <NavLink name="Automação" icon={RiGitMergeLine} href="/automation" />
      </NavSection>
    </Stack>
  )
}

export default SidebarNav
