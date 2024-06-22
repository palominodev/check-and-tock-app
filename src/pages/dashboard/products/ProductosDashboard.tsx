import { TableProducts } from "@/components/TableProducts"

export const ProductosDashboard = () => {
	return (
		<section className="grid grid-cols-12 ">
			<div className="col-span-10 mt-24">
				<TableProducts />
			</div>
		</section>
	)
}