import { useState, useEffect } from "react"
import {getParadas} from "./services/paradas"


export function App() {
    const [paradas, setParadas] = useState([])

    useEffect(() => {
        getParadas(setParadas)
    }, []);



    return (
        <>
        <h1>Paradas</h1>
        <ul>
            {paradas.map((parada) =>(
                <li key={parada.id}>
                    {parada.company}
                </li>

            ))}
        </ul>
        </>
    )
}

