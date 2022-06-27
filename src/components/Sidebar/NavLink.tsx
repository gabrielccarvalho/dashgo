import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react"
import Link from 'next/link'

interface NavLinkprops extends ChakraLinkProps {
  name: string;
  icon: React.ElementType;
  href: string;
}

const NavLink = ({ icon, name, href, ...props }: NavLinkprops) => {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...props}>
        <Icon as={icon} fontSize="20px" />
        <Text ml="1rem" fontWeight="medium">
          {name}
        </Text>
      </ChakraLink>
    </Link>
  )
}

export default NavLink
