import { Navigate, Route, Routes } from "react-router-dom"
import { LayoutGestionProducto } from "../../layout/LayoutGestionProducto"
import { CrearProductoForm } from "./products/CrearProductoForm"
import { EditarProductoForm } from "./products/EditarProductoForm"

export const GestionProductosPage = () => {
	return (
		<LayoutGestionProducto>
			<Routes>
				<Route path="/agregar" element={<CrearProductoForm/>} />
				<Route path="/editar" element={<EditarProductoForm/>} />
				<Route path="/*" element={<Navigate to={'/productos/agregar'}  />} />
			</Routes>
		</LayoutGestionProducto>
	)
}