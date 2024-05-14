import { Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "../layout/Layout"
import { LoginPage } from "../pages/auth/LoginPage"
import App from "../App"
import { useAuthStore } from "../store/authStore"
import { useAuth } from "../hooks/useAuth"

export const AuthRouter = () => {
	const isLogged = useAuthStore(state => state.isLogged)
	useAuth()
  	return (
		<Layout>
			<Routes>

				{
					(isLogged)
					? <Route path="/*" element={<App />}/>
					: <Route path="/login" element={<LoginPage />}/>
				}
				<Route path="/*" element={<Navigate to={'/login'} />}/>
			</Routes>
		</Layout>
  	)
}