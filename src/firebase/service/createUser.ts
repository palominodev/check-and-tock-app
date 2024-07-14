import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { FirebaseAuth, FirebaseDB } from "../config"
import { setDoc, doc, DocumentReference } from "firebase/firestore"
import { SedesCheckedType } from "@/pages/config/users/UserForm"

type CreateUserType = {
	email: string,
	displayName: string,
	rol: string,
	sedes: SedesCheckedType[]
	password: string,
}
export const createUser = async(userForm:CreateUserType) => {
	const sedeRefArray:DocumentReference[] = []
	const userData = await createUserWithEmailAndPassword(FirebaseAuth, userForm.email, userForm.password)

	await updateProfile(userData.user, {
		displayName: userForm.displayName
	})

	const userDoc = doc(FirebaseDB, 'usuarios', userData.user.uid)

	userForm.sedes.forEach(({sede}) => {
		const sedeRef = doc(FirebaseDB, 'sede', sede.id)
		sedeRefArray.push(sedeRef)
	})

	console.log(sedeRefArray);
	await setDoc(userDoc, {
		displayName: userForm.displayName,
		rol: userForm.rol,
		sedes: sedeRefArray
	})
}