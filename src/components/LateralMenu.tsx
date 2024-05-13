import { useNavigate } from "react-router-dom"

export const LateralMenu = () => {
	const navigate = useNavigate()

	return (
		<aside className="flex flex-col p-10 gap-4 col-span-2 justify-center bg-slate-100">
			<button onClick={() => navigate('/inventario')} className="shadow-lg p-2 rounded-lg">Ver Inventarios</button>
			<button onClick={() => navigate('/productos')} className="shadow-lg p-2 rounded-lg">Gestionar productos</button>
			<button className="shadow-lg p-2 rounded-lg">Cerrar Sesión</button>
		</aside>
	)
}