import { CategoriaSelect } from "@/components/CategoriaSelect"
import { SedesSelect } from "@/components/SedesSelect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const EditarProductoForm = () => {
  return (
	<form>
		<h1 className="text-4xl font-bold mb-5">Editar productos</h1>
				<Label className="block mb-3">
			<p className="text-lg font-bold">Nombre del producto</p>
			<Input className="border p-2 text-lg" type="text" name="name_product" id="name_product" />
		</Label>
		<Label className="block mb-3">
			<p className="text-lg font-bold">Sede</p>
			<SedesSelect />
		</Label>
		<Label className="block mb-3">
			<p className="text-lg font-bold">Categoria</p>
			<CategoriaSelect />
		</Label>
		<Label className="block mb-3">
			<p className="text-lg font-bold">Precio</p>
			<Input step="any" className="border p-2 text-lg" type="number" name="price_product" id="price_product" />
		</Label>
		<Label className="block mb-3">
			<p className="text-lg font-bold">Cantidad mínima</p>
			<Input step="any" className="border p-2 text-lg" type="number" name="cantidad_minima" id="cantidad_minima" />
		</Label>
		<Button className="bg-green-600 px-5 py-3 font-bold text-white rounded-lg" type="submit">Agregar</Button>
	</form>
  )
}