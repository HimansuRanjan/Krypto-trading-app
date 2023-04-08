import React from 'react'
import { VStack, Box, Spinner} from '@chakra-ui/react';

const Loader = () => {
  return (
    <VStack h={'90vh'} justifyContent={'center'}>
      <Box transform={'scale(3)'}>
        <Spinner size={'md'} color='purple'/>
      </Box>
    </VStack>
  )
}

export default Loader
