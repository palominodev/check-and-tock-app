import { TableProducts } from "@/components/TableProducts"

export const ProductosDashboard = () => {
	return (
		<section className="grid grid-cols-12 ">
			<div className="col-span-12 mt-24">
				<h1 className="text-3xl font-bold mb-20">Lista de todos los productos</h1>
				<TableProducts />
			</div>
		</section>
	)
}