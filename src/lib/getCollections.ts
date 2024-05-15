import { collection, getDocs } from "firebase/firestore"
import { FirebaseDB } from "../firebase/config"

export const getCollections = async(path:string) => {
	const allCollection:any[] = []
	const CollectionRef = collection(FirebaseDB,`${path}`)
	const ColectionSnap = await getDocs(CollectionRef)
	ColectionSnap.forEach((doc) => {
		allCollection.push({
			id: doc.id,
			...doc.data()
		})
	})
	return allCollection
}