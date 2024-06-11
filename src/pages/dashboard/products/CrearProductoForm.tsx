import { useToast } from "@/components/ui/use-toast";
import { CategoriaSelect } from "../../../components/CategoriaSelect";
import { SedesSelect } from "../../../components/SedesSelect";
import { Product, addProduct } from "../../../firebase/service/addProduct";

export const CrearProductoForm = () => {
	const {toast} = useToast()
	const onCreateProduct = async(e:any) => {
		e.preventDefault()		
		const {name_product, sede_product, price_product,categoria_product, cantidad_minima} = Object.fromEntries(new FormData(e.target))	
		toast({
			title: "Creando producto..."
		})
		const {type} = await addProduct({
			name: name_product,
			sede: sede_product,
			price: price_product,
			categoria: categoria_product,
			cantidad_minima: cantidad_minima
		} as Product)
		if(type === "Repited"){
			toast({
				variant: "destructive",
				title: "Este producto es repetido",
				description: "Ya creaste un producto con este nombre"
			})
			return
		}
		if(type === "Error") {
			toast({
				variant: "destructive",
				title: "Hubo un error al crear el producto",
				description: "Vuelve a intentarlo mas tarde"
			})
			return
		}
		toast({
			title: "Este producto creado"
		})
	}
  return (
	<form onSubmit={(e) => onCreateProduct(e)}>
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