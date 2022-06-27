import { Text } from "@chakra-ui/react"

const Logo = () => {
  return (
    <Text
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="tight"
      w="16rem"
    >
      dashgo
      <Text as="span" ml="0.25rem" color="pink.500">.</Text>
    </Text>
  )
}

export default Logo
