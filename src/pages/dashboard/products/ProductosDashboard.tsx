// import { SedesSelect } from "@/components/SedesSelect"
import { TableProducts } from "@/components/TableProducts"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export const ProductosDashboard = () => {
	const navigate = useNavigate()
	return (
		<section className="grid grid-cols-12 ">
			<div className="col-span-12 mt-24">
				<h1 className="text-3xl font-bold mb-5">Lista de todos los productos</h1>
				<div className="mb-5 flex gap-2">
				{/* <SedesSelect /> */}
				<Button onClick={() => navigate('/productos/agregar')} className="font-bold">Crear Producto</Button>
				</div>
				<TableProducts />
			</div>
		</section>
	)
}