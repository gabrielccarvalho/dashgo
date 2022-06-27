import { Flex, Box, Text, Avatar } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData: boolean;
}

const Profile = ({ showProfileData }: ProfileProps) => {
  return (
    <Flex align="center">
          {showProfileData && (
            <Box mr="1rem" textAlign="right">
              <Text>Gabriel Campos</Text>
              <Text color="gray.300" font-size="small">
                caampos22@gmail.com
              </Text>
            </Box>
          )}

          <Avatar size="md" name="Gabriel Campos" src="https://github.com/gabrielccarvalho.png" />
        </Flex>
  )

}

export default Profile
