// import { Product } from "@/store/dataStore"

import { GetProducto } from "@/types"


export const productMapped = (array:any[]):GetProducto[] => {
	const arrayMapped:GetProducto[] = array.map((item) => ({
		id: item.id,
		name: item.name,
		category: item.categoria,
		initial_count: 0,
		daily_income: 0,
		final_count: 0,
		sede: item.sede,
		cantidad_minima: item.cantidad_minima,
		price: item.price
	} as GetProducto))
	return arrayMapped
}