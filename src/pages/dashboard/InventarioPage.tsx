import { useEffect } from "react";
import { SedesSelect } from "../../components/SedesSelect"
import { useReportes } from "../../hooks/useReportes";
import { useFilterStore } from "../../store/filtersStore";
import { TablaData } from "@/components/TablaData";

export const InventarioPage = () => {
	const date = useFilterStore(state => state.selectDate)
	const {filterReportes} = useReportes()
	const selectSede = useFilterStore(state => state.selectSede)
	const setDate = useFilterStore(state => state.setDate)
	
	useEffect(() => {
		if(selectSede !== '' && date !== '') {
			filterReportes(selectSede, date);			
		}
	}, [selectSede, date])
	
  return (
	<section className="w-full h-full grid grid-rows-12 auto">
		<header className="flex justify-between mt-20 ">
			<label htmlFor="fecha">
				<p className="mb-2 font-bold text-lg">Seleccionar fecha</p>
				<input value={date} onChange={(e) => setDate(e.target.value)} className="p-4 border rounded-lg" type="date" name="fecha" id="fecha"/>
			</label>
			<label htmlFor="sede">
				<p className="mb-2 font-bold text-lg">Elegir sede</p>
				<SedesSelect />
			</label>
		</header>
		<main className="my-10 row-start-5 row-end-13">
			<div className="h-full overflow-y-scroll">
				<TablaData />
			</div>
		</main>
	</section>
  )
}