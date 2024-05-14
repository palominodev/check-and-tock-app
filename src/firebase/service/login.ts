import { signInWithEmailAndPassword } from "firebase/auth"
import { FirebaseAuth } from "../config"

export const startLogin = async(email:string, password:string) => {
	try {
		const {user} = await signInWithEmailAndPassword(FirebaseAuth,email, password)

		const data = {
			email: user.email,
			displayName: user.displayName,
			uid: user.uid
		}
		if(!data) return 
		return data
	} catch (error) {
		console.log(error)
	}
	
	
}