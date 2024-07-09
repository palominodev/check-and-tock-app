import { getDoc } from "firebase/firestore";

export const getDataRef = async({
	arrayRefs,
}:any) => {
	const categorySnapshots = await Promise.all([...arrayRefs].map(ref => getDoc(ref)))
	const data = categorySnapshots.reduce((acc:any, snapshot:any) => {		
		acc[snapshot.id] = {
			...snapshot.data(),
			id: snapshot.id
		};
		return acc;
	  }, {});
	return data
}