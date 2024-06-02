import { addDoc, collection, doc, getDocs } from "firebase/firestore"
import { FirebaseDB } from "../config"

export type Product = {
	id: string
	name: string
	price: string
	sede: string
	categoria: string
}
export const addProduct = async(product: Product) =>{
	const arrayProduct:any = []
	const sedeRef = doc(FirebaseDB, 'sede', product.sede)
	
	const collectionProducts = collection(FirebaseDB, 'producto')
	const querySnapshot = await getDocs(collectionProducts)

	querySnapshot.forEach(producto => {
		arrayProduct.push(producto.data());
	})

	const isRepitedProduct = arrayProduct.some( (producto:any) => (producto.sede.path === sedeRef.path) && (producto.name === product.name))
	
	if(isRepitedProduct)return console.log('producto repetido');
	
	console.log('producto creado');
	
	await addDoc(collection(FirebaseDB, "producto"),{
		...product,
		price: Number(product.price),
		sede: sedeRef
	});
	
	
}