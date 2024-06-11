import { Link, Route, Routes } from "react-router-dom"
import { LayoutGestionProducto } from "../../layout/LayoutGestionProducto"
import { CrearProductoForm } from "./products/CrearProductoForm"
import { EditarProductoForm } from "./products/EditarProductoForm"
import { Button, buttonVariants } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export const GestionProductosPage = () => {
	const { toast } = useToast()
	return (
		<LayoutGestionProducto>
			<Routes>
				<Route path="/agregar" element={<CrearProductoForm/>} />
				<Route path="/editar" element={<EditarProductoForm/>} />
				<Route path="/*" element={
					<section className="flex gap-4">
						<Link to={'agregar'} className={`${buttonVariants({size:"lg"})} text-2xl p-10`}>Agregar</Link>
						<Button 
							variant="outline" 
							className={`text-2xl p-10`}
							onClick={() =>  {
								toast({
									title: "En construcion",
									description: "Esta sección está en construcción. Pronto estará disponible."
								})
							}}
						>Editar</Button>
					</section>
				} />
			</Routes>
			
		</LayoutGestionProducto>
	)
}