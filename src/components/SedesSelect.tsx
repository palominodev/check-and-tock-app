import { useDataStore } from "../store/dataStore"
import { useFilterStore } from "../store/filtersStore"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"
import { useFetchSedes } from "@/hooks/useSedes"

export const SedesSelect = () => {
	useFetchSedes()
	const sedes = useDataStore(state => state.sede)
	const sede = useFilterStore(state => state.selectSede)
	const setSelectedSede = useFilterStore(state => state.setSelectedSede)
	return (
		<Select
			onValueChange={(value) => setSelectedSede(value)}
			name="sede_product"
			value={sede}
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