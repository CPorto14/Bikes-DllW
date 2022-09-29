import axios from 'axios'

const getParadas = async (state) => {
  const peticion = await axios.get('http://api.citybik.es/v2/networks')
  state(peticion.data.networks)
}

const getCargar = async (id, state) => {
  const peticion = await axios.get(`http://api.citybik.es/v2/networks/${id}`)
  state(peticion.data.network)

} 




export {
  getParadas,
  getCargar
}