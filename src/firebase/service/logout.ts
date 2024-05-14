import { signOut } from "firebase/auth"
import { FirebaseAuth } from "../config"

export const startLogout = async() => {
	try {
		await signOut(FirebaseAuth)
	} catch (error) {
		console.log(error);
		
		console.log("No se puedo cerrar sesión");
		
	}
}