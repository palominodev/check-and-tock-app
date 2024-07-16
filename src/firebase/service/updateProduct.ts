import { doc, updateDoc } from "firebase/firestore"
import { FirebaseDB } from "../config"

type Props = {
	id: string,
	name: string,
	categoria: string,
	cantidad_minima: string
	price: string
}

export const updateProduct = async(product: Props) => {
	const productRef = doc(FirebaseDB, 'productos', product.id)
	const categoryRef = doc(FirebaseDB, 'categoria', product.categoria)
	console.log({
		id: product.id,
		cantidad_minima: product.cantidad_minima,
		categoria: categoryRef,
		name: product.name,
		price: Number(product.price)
	});
	await updateDoc(productRef, {
		cantidad_minima: Number(product.cantidad_minima),
		categoria: categoryRef,
		name: product.name,
		price: Number(product.price)
	})
}