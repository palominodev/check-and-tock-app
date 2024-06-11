import { addDoc, collection, doc, getDocs } from "firebase/firestore"
import { FirebaseDB } from "../config"

export type Product = {
	id: string
	name: string
	price: string
	sede: string
	categoria: string
	cantidad_minima: string
}
export const addProduct = async(product: Product) =>{
	try {
		const arrayProduct:any = []
		const sedeRef = doc(FirebaseDB, 'sede', product.sede)
		
		const collectionProducts = collection(FirebaseDB, 'producto')
		const querySnapshot = await getDocs(collectionProducts)
		
		querySnapshot.forEach(producto => {
			arrayProduct.push(producto.data());
		})
		
		// const isRepitedProduct = arrayProduct.some( (producto:any) => (producto.sede.path === sedeRef.path) && (producto.name === product.name))
		const isRepitedProduct = arrayProduct.some((producto:any) => ((producto.name.toLocaleLowerCase() === product.name.toLocaleLowerCase())))
		if(isRepitedProduct) {
			return {
				type: "Repited"
			}
		}
		
		await addDoc(collection(FirebaseDB, "producto"),{
			...product,
			price: Number(product.price),
			cantidad_minima: Number(product.cantidad_minima),
			sede: sedeRef
		});
		return {
			type: "Done"
		}
	} catch (err) {
		return {
			error: err,
			type: "Error"
		}
	}
	
	
}