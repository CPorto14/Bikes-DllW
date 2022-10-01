import { useState, useEffect } from "react"
import { getParadas } from "./services/paradas"
import logo from "./assets/Bici.png"
import { Heading, Box, Image, Flex, Text, Spacer, Button } from '@chakra-ui/react'


export default function App() {
    const [paradas, setParadas] = useState([])

    useEffect(() => {
        getParadas(setParadas)
    }, []);



    return (
        <>
            <center><Image m={4} src={logo} width={200} /></center>
            <Heading as="h1" size="lg" m={4}>
                Paradas
            </Heading>
            <section>
                {paradas.map((parada) => (
                    <Box
                        key={parada.id}
                        bg="blue.100"
                        p={4}
                        m={4} borderRadius="lg"
                    >
                        <Flex>
                            <Text fontSize="2x1">
                                <strong>Nombre de la parada: {parada.name} </strong> <br />
                                - Compañia: {parada.company}  <br />
                                - Ciudad: {parada.location.city}, {parada.location.country}
                            </Text>
                            <Spacer />
                            <a href={`/paradaBici/${parada.id}`}>
                                <Button p={8} colorScheme="green">
                                    Consultar
                                </Button>
                            </a>
                        </Flex>

                    </Box>

                ))}
            </section>
        </>
    )
}

