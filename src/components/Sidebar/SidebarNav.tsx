import { Stack } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import NavLink from "./NavLink"
import NavSection from "./NavSection"


const SidebarNav = () => {
  return (
    <Stack spacing="3rem" align="flex-start">
      <NavSection title="Geral">
        <NavLink name="Dashboard" icon={RiDashboardLine} />
        <NavLink name="Usuários" icon={RiContactsLine} />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink name="Formulários" icon={RiInputMethodLine} />
        <NavLink name="Automação" icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  )
}

export default SidebarNav
