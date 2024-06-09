import { useEffect } from "react"
import { useDataStore } from "../store/dataStore"
import { getCategorias } from "../firebase/service/getSedes"
import { useFilterStore } from "../store/filtersStore"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"

export const CategoriaSelect = () => {
	const categorias = useDataStore(state => state.categoria)
	const setCategorias = useDataStore(state => state.setCategorias)
	const setSelectedCategoria = useFilterStore(state => state.setSelectedCategoria)

	useEffect(() => {
		(async() => {
			if(categorias.length === 0){
				const categoriaFetch = await getCategorias()				
				setCategorias(categoriaFetch)
			}
		})()
	},[])
  return (
	<Select onValueChange={(e) => setSelectedCategoria(e)} name="categoria_product">
		<SelectTrigger className="w-[188px]">
			<SelectValue placeholder="Elegir categoria" />
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectLabel>Categoria</SelectLabel>
					{
						categorias.length === 0
						? <SelectItem value="a">Cargando categoria..</SelectItem>
						: categorias.map((categoria:any) => (
							<SelectItem value={categoria.name} key={categoria.id}>{categoria.name}</SelectItem>
						))
					}
				
			</SelectGroup>
		</SelectContent>
	</Select>
  )
}