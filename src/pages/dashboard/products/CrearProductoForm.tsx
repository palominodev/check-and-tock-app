import { useEffect } from "react";
import { Product, addProduct } from "../../../firebase/service/addProduct";
import { useDataStore } from "../../../store/dataStore";
import { getSedes } from "../../../firebase/service/getSedes";

export const CrearProductoForm = () => {
	const sedes = useDataStore(state => state.sede)
	const setSedes = useDataStore(state => state.setSedes)
	const onCreateProduct = async(e:any) => {
		e.preventDefault()
		const {name_product, sede_product, price_product} = Object.fromEntries(new FormData(e.target))		
		await addProduct({
			name: name_product,
			sede: sede_product,
			price: price_product
		} as Product)
	}

	useEffect(() => {
		(async() => {
			const sedes = await getSedes()
			setSedes(sedes)
		})()
	},[])
  return (
	<form onSubmit={onCreateProduct}>
		<h1 className="text-4xl font-bold mb-5">Crear productos</h1>
		<label className="block mb-3">
			<p className="text-lg font-bold">Nombre del producto</p>
			<input className="border p-2 text-lg" type="text" name="name_product" id="name_product" />
		</label>
		<label className="block mb-3">
			<p className="text-lg font-bold">Sede</p>
			<select disabled={!sedes} className="border p-2 text-lg" name="sede_product" id="sede_product">
				{
					sedes.length === 0
					? <option>Cargando Sedes..</option>
					: sedes.map((sede:any) => (
						<option value={sede.id} key={sede.id}>{sede.nombre}</option>
					))
				}
			</select>
		</label>
		<label className="block mb-3">
			<p className="text-lg font-bold">Precio</p>
			<input step="any" className="border p-2 text-lg" type="number" name="price_product" id="price_product" />
		</label>
		<input className="bg-green-600 px-5 py-3 font-bold text-white rounded-lg" type="submit" value="Agregar" />
	</form>
  )
}