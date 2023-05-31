import axios from 'axios'

const url_patrimonios = 'http://localhost:3001/api/patrimonios'
const url_pessoas = 'http://localhost:3001/api/pessoas'

async function getPatrimonios() {
    return (await axios.get(url_patrimonios)).data
}

async function postPatrimonio(patrimonio) {
    return (await axios.post(url_patrimonios, patrimonio)).data
}

async function deletePatrimonio(id) {
    return (await axios.delete(url_patrimonios + '/' + id))
}

async function putPatrimonio(id, patrimonio) {
    return (await axios.put(url_patrimonios + '/' + id, patrimonio)).data
}

async function getServidores() {
    return (await axios.get(url_pessoas)).data
}

async function getServidorByPk(id) {
    return (await axios.get(url_pessoas + '/' + id)).data
}

async function postServidor(pessoa) {
    return (await axios.post(url_pessoas, pessoa)).data
}


async function putServidor(id, pessoa) {
    return (await axios.put(url_pessoas + '/' + id, pessoa)).data
}

export default { getPatrimonios, getServidores, postServidor, postPatrimonio, getServidorByPk, deletePatrimonio, putPatrimonio, putServidor }