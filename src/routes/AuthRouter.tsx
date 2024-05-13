import { Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "../layout/Layout"
import { LoginPage } from "../pages/auth/LoginPage"
import App from "../App"

export const AuthRouter = () => {
	const isLogged = true
  	return (
		<Layout>
			<Routes >
				<Route path="/*" element={
					isLogged
					? <App />
					: <Navigate to={'/login'} />
				} />
				{
					!isLogged && <Route path="/login" element={<LoginPage />}/>
				}
			</Routes>
		</Layout>
  	)
}