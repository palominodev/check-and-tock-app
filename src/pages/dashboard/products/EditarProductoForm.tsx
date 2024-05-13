export const EditarProductoForm = () => {
  return (
	<form>
		<h1 className="text-4xl font-bold mb-5">Editar productos</h1>
		<label className="block mb-3">
			<p className="text-lg font-bold">Nombre del producto</p>
			<input className="border p-2 text-lg" type="text" name="name_product" id="name_product" />
		</label>
		<label className="block mb-3">
			<p className="text-lg font-bold">Sede</p>
			<select className="border p-2 text-lg" name="sede_product" id="sede_product">
				<option value="Villa el Salvador">Villa el Salvador</option>
				<option value="Hospital">Hospital</option>
			</select>
		</label>
		<label className="block mb-3">
			<p className="text-lg font-bold">Precio</p>
			<input className="border p-2 text-lg" type="number" name="price_product" id="price_product" />
		</label>
		<input className="bg-green-600 px-5 py-3 font-bold text-white rounded-lg" type="submit" value="Agregar" />
	</form>
  )
}