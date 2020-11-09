import axios from 'axios'
import parsers from './parsers'

const helloWorld = async () => {
    const response = await axios.get( '/api/helloWorld')
    return parsers.helloWorld(response.data)
}

export default {
    helloWorld
}