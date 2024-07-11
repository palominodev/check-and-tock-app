import { useToast } from "@/components/ui/use-toast";
import { CategoriaSelect } from "../../../components/CategoriaSelect";
import { SedesSelect } from "../../../components/SedesSelect";
import { addProduct } from "../../../firebase/service/addProduct";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const CrearProductoForm = () => {
	const {toast} = useToast()
	const onCreateProduct = async(e:any) => {
		e.preventDefault()		
		const {name_product, sede_product, price_product,categoria_product, cantidad_minima} = Object.fromEntries(new FormData(e.target))	
		toast({
			title: "Creando producto..."
		})
		const {type} = await addProduct({
			name: name_product as string,
			sede: sede_product as string,
			price: price_product as string,
			categoria: categoria_product as string,
			cantidad_minima: cantidad_minima as string
		})
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