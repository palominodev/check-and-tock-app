import { DocumentData, DocumentReference, collection, getDocs } from "firebase/firestore";
import { FirebaseDB } from "../config";
import { getDataRef } from "./getDataRef";
import { productMapped } from "@/lib/productMapped";

export const getAllProducts = async() => {
	const categoryRefs = new Set<DocumentReference<DocumentData>>();
	const sedesRefs = new Set<DocumentReference<DocumentData>>();
	const productsCollection = collection(FirebaseDB,'productos')
	const productsSnapshot = await getDocs(productsCollection)
	productsSnapshot.forEach(doc => {
		const productData = doc.data()
		categoryRefs.add(productData.categoria)
		sedesRefs.add(productData.sede)
	})

	const categories = await getDataRef({arrayRefs: categoryRefs})
	const sedes = await getDataRef({arrayRefs: sedesRefs})
	const productsWithCategories = productsSnapshot.docs.map(doc => {
		const productData = doc.data();
		const categoryData = categories[productData.categoria.id];
		const sedeData = sedes[productData.sede.id]
		return { ...productData,id:doc.id, categoria: categoryData,sede: sedeData};
		});
	return {
		products: productMapped(productsWithCategories),
		existsInventoryInitial: false
	}
}