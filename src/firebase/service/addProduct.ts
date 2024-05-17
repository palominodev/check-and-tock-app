import { addDoc, collection, doc } from "firebase/firestore"
import { FirebaseDB } from "../config"

export type Product = {
	id: string
	name: string
	price: string
	sede: string
}
export const addProduct = async(product: Product) =>{
	const sedeRef = doc(FirebaseDB, 'sede', product.sede)
	await addDoc(collection(FirebaseDB, "producto"),{
		...product,
		price: Number(product.price),
		sede: sedeRef
	});
	
	
}