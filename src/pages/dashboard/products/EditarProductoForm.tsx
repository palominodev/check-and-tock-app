import { CategoriaSelect } from "@/components/CategoriaSelect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { updateProduct } from "@/firebase/service/updateProduct"
import { useDataStore } from "@/store/dataStore"
import { useFilterStore } from "@/store/filtersStore"
import { FormEvent, useEffect} from "react"
import { useParams } from "react-router-dom"

export const EditarProductoForm = () => {
	const {toast} = useToast()
	const products = useDataStore(state => state.allProducts)
	const setSede = useFilterStore(state => state.setSelectedSede)
	const setCategory = useFilterStore(state => state.setSelectedCategoria)
	const {id_producto} = useParams()
	const product = products.find(p => p.id === id_producto)
	if(!product) return null
	

	useEffect(() => {
		
		if(product?.sede?.id) {
			setSede(product?.sede.id)
		}
		if(product?.category?.id) {
			setCategory(product.category.id)
		}
	},[product, setSede])
	
	const onEditProduct = async(e:FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		toast({
			description: "Editando producto..."
		})
		const {name_product,categoria_product,price_product,cantidad_minima} = Object.fromEntries(new FormData(e.target as HTMLFormElement))
		if(!id_producto) return
		await updateProduct({
			cantidad_minima: cantidad_minima as string,
			categoria: categoria_product as string,
			id: id_producto,
			name: name_product as string,
			price: price_product as string
		})
		toast({
			description: 'Producto actualizado'
		})
	}

  return (
	<form onSubmit={(e) => onEditProduct(e)}>
		<h1 className="text-4xl font-bold mb-5">Editar productos</h1>
				<Label className="block mb-3">
			<p className="text-lg font-bold">Nombre del producto</p>
			<Input defaultValue={product?.name} className="border p-2 text-lg" type="text" name="name_product" id="name_product" />
		</Label>
		{/* <Label className="block mb-3">
			<p className="text-lg font-bold">Sede</p>
			<SedesSelect />
		</Label> */}
		<Label className="block mb-3">
			<p className="text-lg font-bold">Categoria</p>
			<CategoriaSelect />
		</Label>
		<Label className="block mb-3">
			<p className="text-lg font-bold">Precio</p>
			<Input defaultValue={product?.price} step="any" className="border p-2 text-lg" type="number" name="price_product" id="price_product" />
		</Label>
		<Label className="block mb-3">
			<p className="text-lg font-bold">Cantidad mínima</p>
			<Input defaultValue={product?.cantidad_minima} step="any" className="border p-2 text-lg" type="number" name="cantidad_minima" id="cantidad_minima" />
		</Label>
		<Button className="bg-orange-600/80 hover:bg-orange-600/40 px-5 py-3 font-bold text-white rounded-lg" type="submit">Editar</Button>
	</form>
  )
}