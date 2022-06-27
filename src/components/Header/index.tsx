import { Flex } from '@chakra-ui/react'
import Logo from './Logo'
import NotificationsNav from './NotificationsNav'
import Profile from './Profile'
import SearchBox from './SearchBox'

const Header = () => {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth="1480px"
      align="center"
      h="5rem"
      mx="auto"
      mt="1rem"
      px="1.5rem"
    >
      <Logo />
      <SearchBox />

      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  )
}

export default Header
