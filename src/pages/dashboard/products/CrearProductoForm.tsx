import { CategoriaSelect } from "../../../components/CategoriaSelect";
import { SedesSelect } from "../../../components/SedesSelect";
import { Product, addProduct } from "../../../firebase/service/addProduct";

export const CrearProductoForm = () => {
	const onCreateProduct = async(e:any) => {
		e.preventDefault()
		const {name_product, sede_product, price_product,categoria_product, cantidad_minima} = Object.fromEntries(new FormData(e.target))		
		addProduct({
			name: name_product,
			sede: sede_product,
			price: price_product,
			categoria: categoria_product,
			cantidad_minima: cantidad_minima
		} as Product)
	}
  return (
	<form onSubmit={onCreateProduct}>
		<h1 className="text-4xl font-bold mb-5">Crear productos</h1>
		<label className="block mb-3">
			<p className="text-lg font-bold">Nombre del producto</p>
			<input className="border p-2 text-lg" type="text" name="name_product" id="name_product" />
		</label>
		<label className="block mb-3">
			<p className="text-lg font-bold">Sede</p>
			<SedesSelect />
		</label>
		<label className="block mb-3">
			<p className="text-lg font-bold">Categoria</p>
			<CategoriaSelect />
		</label>
		<label className="block mb-3">
			<p className="text-lg font-bold">Precio</p>
			<input step="any" className="border p-2 text-lg" type="number" name="price_product" id="price_product" />
		</label>
		<label className="block mb-3">
			<p className="text-lg font-bold">Cantidad mínima</p>
			<input step="any" className="border p-2 text-lg" type="number" name="cantidad_minima" id="cantidad_minima" />
		</label>
		<input className="bg-green-600 px-5 py-3 font-bold text-white rounded-lg" type="submit" value="Agregar" />
	</form>
  )
}