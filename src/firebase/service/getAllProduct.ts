import { getCollections } from "../../lib/getCollections"

export const getAllProducts = async() => {
	return await getCollections('producto')
}