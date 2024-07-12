import { Route, Routes } from "react-router-dom"
import { LayoutGestionProducto } from "../../layout/LayoutGestionProducto"
import { CrearProductoForm } from "./products/CrearProductoForm"
import { EditarProductoForm } from "./products/EditarProductoForm"
import { ProductosDashboard } from "./products/ProductosDashboard"

export const GestionProductosPage = () => {
	return (
		<LayoutGestionProducto>
			<Routes>
				<Route path="/agregar" element={<CrearProductoForm/>} />
				<Route path="/editar/:id_producto" element={<EditarProductoForm/>} />
				<Route path="/*" element={<ProductosDashboard />} />
			</Routes>

		</LayoutGestionProducto>
	)
}