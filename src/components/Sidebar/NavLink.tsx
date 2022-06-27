import { Icon, Link, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react"

interface NavLinkprops extends ChakraLinkProps {
  name: string;
  icon: React.ElementType;
}

const NavLink = ({ icon, name, ...props }: NavLinkprops) => {
  return (
    <Link display="flex" alignItems="center" {...props}>
      <Icon as={icon} fontSize="20px" />
      <Text ml="1rem" fontWeight="medium">
        {name}
      </Text>
    </Link>
  )
}

export default NavLink
