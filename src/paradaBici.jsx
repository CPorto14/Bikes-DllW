import { useState, useEffect } from "react"
import { getCargar } from "./services/paradas"
import logo from "./assets/Bici.png"
import logo2 from "./assets/bike_hero.png"
import { useParams } from "react-router-dom";
import { Heading, Box, Text, Image, Flex, Spacer, Tag, Center } from "@chakra-ui/react";

let countB = 0;
let countE = 0;

const Network = () => {
    const [network, setNetwork] = useState(null);

    const params = useParams();
    useEffect(() => {
        getCargar(params.id, setNetwork);
    }, []);

    if (network != null) {
        network.stations.map((station) => {
            countB += station.free_bikes;
            countE += station.empty_slots;

        });
    }

    return (
        <>
            <center>
                <Heading as="h1" size="3xl" fontFamily="revert" >
                    {(`Estación ${params.id}`).toUpperCase()}
                </Heading>
                <Image src={logo} width={200} m={4}></Image>
            </center>
            <Box bg="blue.200" p={4} m={4} borderRadius="lg" >
                <Flex>
                    <Text fontSize="4xl" fontFamily="serif" p={4}>
                        <p>Bicicletas Totales: {countB}</p>
                        <p>Espacios Disponibles: {countE}</p>
                    </Text>
                    <Image src={logo2} width={200} m={4}></Image>
                </Flex>
            </Box>
            {network != null
                ? network.stations.map((station) => (
                    <Box key={station.name} bg="blue.200" p={5} m={4} borderRadius="lg">
                        <strong>
                            {(`Nombre de la estación: ${station.name} `)}
                            <Tag p={2} colorScheme="green">
                                <Text fontSize={12}>{(`Ultima actualización: ${station.timestamp}`)}</Text>
                            </Tag>
                        </strong>
                        {station.free_bikes || station.empty_slots != null ? (
                            <Box>
                                <br />
                                <Flex>
                                    <Spacer />
                                    <Center w="300px" bg="gray.300" borderRadius={5}>
                                        <Text>
                                            Bicicletas libres: {station.free_bikes} <br />
                                            Bicicletas eléctricas: {station.extra.ebikes} <br />
                                            Bicicletas normales: {station.extra.normal_bikes}
                                        </Text>
                                    </Center>
                                    <Spacer />
                                    <Center w="300px" bg="gray.300" borderRadius={5}>
                                        <Text>
                                            Total de espacios libres: {station.empty_slots} <br />
                                            Espacios libres para bicicletas electricas: {station.extra.electric_free} <br />
                                            Espacios libres para bicicletas normales: {station.extra.normal_free}
                                        </Text>
                                    </Center>
                                    <Spacer />
                                    <Center p ={2} w="300px" bg="gray.300" borderRadius={5}>
                                        <Text>
                                            Total de espacios: {station.free_bikes + station.empty_slots} <br />
                                            Espacios totales para bicicletas electricas:{station.extra.electric_slots} <br />
                                            Espacios totales para bicicletas normales:{station.extra.normal_slots}
                                            </Text>
                                    </Center>
                                    <Spacer />
                                </Flex>
                            </Box>
                        ) : (
                            <Flex>
                                <Center w="300px" bg="red.200">
                                    <Text> No está disponible actualmente</Text>
                                </Center>

                                <Spacer />
                                <Tag p={2} colorScheme="red">
                                    Inhabilitada
                                </Tag>
                            </Flex>
                        )}
                    </Box>
                ))
                : "No hay estaciones"}
        </>
    );
};

export default Network;


