import { LayoutGestionProducto } from "@/layout/LayoutGestionProducto"
import { Route, Routes, useNavigate } from "react-router-dom"
import { UserForm } from "./UserForm"
import { Button } from "@/components/ui/button"

export const ConfigPage = () => {
	const navigate = useNavigate()
  return (
	<LayoutGestionProducto>
		<Routes>
			<Route path="/usuario" element={<UserForm />} />
			<Route path='/*' element={<Button onClick={() => navigate('/config/usuario')} className="mt-24 font-bold">Crear Usuario</Button>} />
		</Routes>
	</LayoutGestionProducto>
  )
}