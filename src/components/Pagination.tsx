import { Button, Stack, Box } from "@chakra-ui/react"


const Pagination = () => {
  return (
    <Stack
      direction="row"
      mt="2rem"
      justify="space-between"
      align="center"
      spacing="1.5rem"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="0.5rem">
        <Button
          fontSize="xs"
          width="1rem"
          colorScheme="pink"
          disabled
          _disabled={{
            bg: 'pink.500',
            cursor: 'default'
          }}
          size="sm"
        >
          1
        </Button>
        <Button
          fontSize="xs"
          width="1rem"
          bg="gray.700"
          _hover={{
            bg: 'gray.700',
          }}
          size="sm"
        >
          2
        </Button>
        <Button
          fontSize="xs"
          width="1rem"
          bg="gray.700"
          _hover={{
            bg: 'gray.500',
          }}
          size="sm"
        >
          3
        </Button>
      </Stack>
    </Stack>
  )
}

export default Pagination
