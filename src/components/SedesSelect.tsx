import { useEffect } from "react"
import { useDataStore } from "../store/dataStore"
import { useFilterStore } from "../store/filtersStore"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"

export const SedesSelect = () => {
	const sedes = useDataStore(state => state.sede)
	const sede = useFilterStore(state => state.selectSede) || { id: '', nombre: '' }
	const setSelectedSede = useFilterStore(state => state.setSelectedSede)

	useEffect(() => {
		setSelectedSede(sede.id)
	},[sede])

	return (
		<Select
			onValueChange={(sedeId) => setSelectedSede(sedeId)}
			name="sede_product"
			value={sede.id}
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
								<SelectItem key={sede.id} value={sede.id}>{sede.nombre}</SelectItem>
							))
					}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}