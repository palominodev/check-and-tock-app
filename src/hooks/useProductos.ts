import { getAllProducts } from "@/firebase/service/getAllProduct"
import { useDataStore } from "@/store/dataStore"
import { useEffect } from "react"

export const useProductos = () => {
	const allProducts = useDataStore(state => state.allProducts)
	const setAllProducts = useDataStore(state => state.setAllProducts)
	
	useEffect(() => {
		const fetchProducts = async () => {
			if(allProducts.length ===0) {
				const productsFetch = await getAllProducts()
				setAllProducts(productsFetch)
			}
		}
		fetchProducts()
	}, [allProducts.length, setAllProducts])
	
	return {
		allProducts
	}
}