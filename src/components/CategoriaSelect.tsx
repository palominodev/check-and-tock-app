import { useEffect } from "react"
import { useDataStore } from "../store/dataStore"
import { getCategorias } from "../firebase/service/getSedes"
import { useFilterStore } from "../store/filtersStore"

export const CategoriaSelect = () => {
	const categorias = useDataStore(state => state.categoria)
	const setCategorias = useDataStore(state => state.setCategorias)
	const setSelectedCategoria = useFilterStore(state => state.setSelectedCategoria)

	useEffect(() => {
		(async() => {
			if(categorias.length === 0){
				const categoriaFetch = await getCategorias()
				console.log(categoriaFetch);
				
				setCategorias(categoriaFetch)
			}
		})()
	},[])
  return (
	<select onChange={(e) => setSelectedCategoria(e.target.value)} className="border p-2 text-lg" name="categoria_product" id="categoria_product">
		<option selected disabled hidden>Elegir Categoria</option>
				{
					categorias.length === 0
					? <option>Cargando categoria..</option>
					: categorias.map((categoria:any) => (
						<option value={categoria.name} key={categoria.id}>{categoria.name}</option>
					))
				}
	</select>
  )
}