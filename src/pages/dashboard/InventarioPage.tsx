import { useEffect } from "react";
import { SedesSelect } from "../../components/SedesSelect"
import { useReportes } from "../../hooks/useReportes";
import { useFilterStore } from "../../store/filtersStore";
import { TablaData } from "@/components/TablaData";
import { CalendarPicker } from "@/components/CalendarPicker"
import { InfoCard } from "@/components/InfoCard";

export const InventarioPage = () => {
	const date = useFilterStore(state => state.selectDate)
	const {filterReportes,reportes} = useReportes()
	const selectSede = useFilterStore(state => state.selectSede)
	
	useEffect(() => {
		if(selectSede !== '' && date !== '') {
			console.log(reportes);
			
			filterReportes(selectSede, date);			
		}
	}, [selectSede, date])
	
  return (
	<section className="w-full h-full grid grid-rows-12 auto">
		<header className="flex justify-between mt-20 ">
			<InfoCard reportes={reportes} />
			<div>
				<label htmlFor="fecha">
					<p className="mb-2 font-bold text-lg">Seleccionar fecha</p>
					<CalendarPicker />
				</label>
			</div>
			<div>
				<label htmlFor="sede">
					<p className="mb-2 font-bold text-lg">Elegir sede</p>
					<SedesSelect />
				</label>
			</div>
		</header>
		<main className="my-10 row-start-5 row-end-13">
			
			<div className="h-full overflow-y-scroll">
				<TablaData />
			</div>
		</main>
	</section>
  )
}