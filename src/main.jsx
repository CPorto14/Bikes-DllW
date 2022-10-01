
import React from 'react'
import ReactDOM from 'react-dom/client'
import Direccion from './Direccion'
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Direccion />
    </ChakraProvider>
  </React.StrictMode>
)
