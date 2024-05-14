import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { FirebaseAuth } from "../firebase/config";
import { useAuthStore } from "../store/authStore";

export const useAuth = () => {
	const onLogin = useAuthStore((state) => state.onLogin);

	useEffect(() => {
		onAuthStateChanged(FirebaseAuth, (user) => {
			if (!user) return;
			onLogin();
		});
	}, []);
};
