import { useEffect } from "react"
import { useDataStore } from "../store/dataStore"
import { getSedes } from "../firebase/service/getSedes"
import { useFilterStore } from "../store/filtersStore"

export const SedesSelect = () => {
	const sedes = useDataStore(state => state.sede)
	const selectedSede = useFilterStore(state => state.selectSede)
	const setSedes = useDataStore(state => state.setSedes)
	const setSelectedSede = useFilterStore(state => state.setSelectedSede)

	useEffect(() => {
		(async() => {
			if(sedes.length === 0){
				const sedesFetch = await getSedes()
				setSedes(sedesFetch)
			}
		})()
	},[])
  return (
	<select value={selectedSede} onChange={(e) => setSelectedSede(e.target.value)} className="border p-2 text-lg" name="sede_product" id="sede_product">
		<option value={''} disabled hidden>Elegir Sede</option>
				{
					sedes.length === 0
					? <option>Cargando Sedes..</option>
					: sedes.map((sede:any) => (
						<option value={sede.nombre} key={sede.id}>{sede.nombre}</option>
					))
				}
	</select>
  )
}