import { getCollections } from "../../lib/getCollections"

export const getSedes = async() => {
	return await getCollections('sede')
}

export const getCategorias = async() => {
	return await getCollections('categoria')
}

export const getUsers = async() => {
	return await getCollections('usuarios')
}