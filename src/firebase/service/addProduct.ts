import { addDoc, collection, doc, getDocs, query, where } from "firebase/firestore"
import { FirebaseDB } from "../config"

type Props = {
	name: string,
	sede: string,
	price: string,
	categoria: string,
	cantidad_minima: string
}

export const addProduct = async(product: Props) =>{
	try {
		const arrayProduct:any = []
		const sedeRef = doc(FirebaseDB, 'sede', product.sede)
		const categoryRef = doc(FirebaseDB, 'categoria', product.categoria)
		
		const collectionProducts = collection(FirebaseDB, 'productos')
		const q = query(collectionProducts, where('sede','==', sedeRef))
		const querySnapshot = await getDocs(q)
		
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
		
		await addDoc(collection(FirebaseDB, "productos"),{
			...product,

			price: Number(product.price),
			cantidad_minima: Number(product.cantidad_minima),
			sede: sedeRef,
			categoria: categoryRef
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