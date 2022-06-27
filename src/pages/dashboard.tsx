import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react"
import { ApexOptions } from "apexcharts"
import dynamic from 'next/dynamic'

import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabel: {
    enabled: false,
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisThick: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
  ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
}

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 51, 18, 109] }
]

const Dashboard = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex
        width="100%"
        my="1.5rem"
        maxWidth="1480px"
        mx="auto"
        px="1.5rem"
      >
        <Sidebar />

        <SimpleGrid flex="1" gap="1rem" minChildWidth="320px" alignItems="flex-start">
          <Box
            p={["1.5rem", "2rem"]}
            bg="gray.800"
            borderRadius="2rem"
            pb="1rem"
          >
            <Text fontSize="lg" mb="1rem">Inscritos da semana</Text>
            <Chart type="area" height="160px" options={options as ApexOptions} series={series} />
          </Box>

          <Box
            p={["1.5rem", "2rem"]}
            bg="gray.800"
            borderRadius="2rem"
            pb="1rem"
          >
            <Text fontSize="lg" mb="1rem">Taxa de abertura</Text>
            <Chart type="area" height="160px" options={options as ApexOptions} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export default Dashboard
