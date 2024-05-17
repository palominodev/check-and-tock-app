import { doc, getDoc } from "firebase/firestore";
import { FirebaseDB } from "../firebase/config";

export const getDocument = async(path:string, id:string) => {
	const docRef = doc(FirebaseDB, path, id);
	
	const docSnap = await getDoc(docRef);
	
	if (docSnap.exists()) {
		return {
			id: docSnap.id,
			...docSnap.data()
		}
	} else {
	// docSnap.data() will be undefined in this case
	console.log("No such document!");
	}
}