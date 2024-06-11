import { useNavigate } from "react-router-dom"
import { startLogout } from "../firebase/service/logout"
import { useAuthStore } from "../store/authStore"

export const LateralMenu = () => {
	const setLogout = useAuthStore(state => state.onLogout)
	const navigate = useNavigate()
	const onLogout = () => {
		startLogout()
		setLogout()
	}

	return (
		<aside className="flex flex-col p-10 gap-4 col-span-2 justify-center bg-slate-100">
			<button onClick={() => navigate('/inventario')} className="shadow-lg p-2 rounded-lg">Ver Reporte</button>
			<button onClick={() => navigate('/productos')} className="shadow-lg p-2 rounded-lg">Gestionar productos</button>
			<button onClick={onLogout} className="shadow-lg p-2 rounded-lg">Cerrar Sesión</button>
		</aside>
	)
}