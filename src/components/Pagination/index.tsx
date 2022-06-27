import { Stack, Box } from "@chakra-ui/react"
import PaginationItem from "./PaginationItem"


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
        <PaginationItem pageNumber={1} isCurrent />
        <PaginationItem pageNumber={2} />
        <PaginationItem pageNumber={3} />
        <PaginationItem pageNumber={4} />
        <PaginationItem pageNumber={5} />
      </Stack>
    </Stack>
  )
}

export default Pagination
