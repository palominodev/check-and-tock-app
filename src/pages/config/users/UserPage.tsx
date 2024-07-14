import { Button } from "@/components/ui/button"
import { TablaUsers } from "./TablaUsers"
import { useNavigate } from "react-router-dom"

export const UserPage = () => {
	const navigate = useNavigate()
  return (
	<div className="w-[400px]">
		<h2 className="text-2xl font-bold my-8">Lista de Usuarios</h2>
		<Button onClick={() => navigate('/config/usuario/crear')} className="mb-4 font-bold">Agregar Usuario</Button>
		<TablaUsers />
	</div>
  )
}