import { useEffect } from "react"
import { useDataStore } from "../store/dataStore"
import { getSedes } from "../firebase/service/getSedes"
import { useFilterStore } from "../store/filtersStore"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"

export const SedesSelect = () => {
	const sedes = useDataStore(state => state.sede)
	// const selectedSede = useFilterStore(state => state.selectSede)
	const setSedes = useDataStore(state => state.setSedes)
	const setSelectedSede = useFilterStore(state => state.setSelectedSede)

	useEffect(() => {
		(async () => {
			if (sedes.length === 0) {
				const sedesFetch = await getSedes()
				setSedes(sedesFetch)
			}
		})()
	}, [])
	return (
		<Select
			onValueChange={(value) => setSelectedSede(value)}
			name="sede_product"
		>
			<SelectTrigger className="w-[188px]">
				<SelectValue placeholder="Elegir Sede" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Sedes</SelectLabel>
					{
						sedes.length === 0
							? <SelectItem value="a">Cargando Sedes..</SelectItem>
							: sedes.map((sede: any) => (
								<SelectItem key={sede.id} value={sede.nombre}>{sede.nombre}</SelectItem>
							))
					}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}