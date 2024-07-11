import { getDoc } from "firebase/firestore";

interface Props {
	arrayRefs: Iterable<any>
}

export const getDataRef = async({
	arrayRefs,
}:Props) => {
	const filterRefs = Array.from(arrayRefs).filter((ref) => ref)
	const categorySnapshots = await Promise.all([...filterRefs].map((ref:any) => getDoc(ref)))
	const data = categorySnapshots.reduce((acc:any, snapshot:any) => {		
		acc[snapshot.id] = {
			...snapshot.data(),
			id: snapshot.id
		};
		return acc;
	  }, {});
	return data
}