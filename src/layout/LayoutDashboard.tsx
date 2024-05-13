import { Route, Routes } from "react-router-dom"
import { LateralMenu } from "../components/LateralMenu"
import { InventarioPage } from "../pages/dashboard/InventarioPage"
import { GestionProductosPage } from "../pages/dashboard/GestionProductosPage"

export const LayoutDashboard = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<>
			<LateralMenu />
			<section className="h-screen flex justify-center items-center col-span-10 mx-28">
				<Routes>
					<Route path="/" element={children} />
					<Route path="/inventario" element={<InventarioPage />} />
					<Route path="/productos/*" element={<GestionProductosPage />} />
				</Routes>
			</section>
		</>
	)
}