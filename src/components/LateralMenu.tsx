import { useNavigate } from "react-router-dom"
import { startLogout } from "../firebase/service/logout"
import { useAuthStore } from "../store/authStore"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

export const LateralMenu = () => {
	const setLogout = useAuthStore(state => state.onLogout)
	const navigate = useNavigate()
	const onLogout = () => {
		startLogout()
		setLogout()
	}

	return (
		<div className="flex col-span-2">
			<aside className="flex flex-col p-10 gap-4 justify-center">
				<Button variant={"outline"} onClick={() => navigate('/')} className="shadow-lg p-2 rounded-lg">Dashboard</Button>
				<Button variant={"outline"} onClick={() => navigate('/inventario')} className="shadow-lg p-2 rounded-lg">Ver Reporte</Button>
				<Button variant={"outline"} onClick={() => navigate('/productos')} className="shadow-lg p-2 rounded-lg">Gestionar productos</Button>
				<Button variant={"outline"} onClick={() => navigate('/config')} className="shadow-lg p-2 rounded-lg">Configuración</Button>
				<Button variant={"destructive"} onClick={onLogout} className="shadow-lg p-2 rounded-lg">Cerrar Sesión</Button>
			</aside>
			<Separator orientation="vertical" />
		</div>
	)
}