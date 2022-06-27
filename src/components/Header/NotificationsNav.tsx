import { HStack, Icon } from "@chakra-ui/react"
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri"


const NotificationsNav = () => {
  return (
    <HStack
      spacing="2rem"
      mx="2rem"
      pr="2rem"
      py="0.25rem"
      color="gray.300"
      borderRightWidth="1px"
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="20px" />
      <Icon as={RiUserAddLine} fontSize="20px" />
    </HStack>
  )

}

export default NotificationsNav
