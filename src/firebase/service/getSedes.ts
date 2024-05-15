import { getCollections } from "../../lib/getCollections"

export const getSedes = async() => {
	return await getCollections('sede')
}