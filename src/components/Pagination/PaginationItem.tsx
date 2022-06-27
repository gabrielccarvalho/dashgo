import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  pageNumber: number;
  isCurrent?: boolean;
}

const PaginationItem = ({
  isCurrent = false,
  pageNumber
}: PaginationItemProps) => {
  
  if (isCurrent) {
    return (
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
        {pageNumber}
      </Button>
    )
  }

  return (
    <Button
      fontSize="xs"
      width="1rem"
      bg="gray.700"
      _hover={{
        bg: 'gray.700',
      }}
      size="sm"
    >
      {pageNumber}
    </Button>
  )
}

export default PaginationItem
