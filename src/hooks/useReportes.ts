import { useDataStore } from "../store/dataStore";
import { getReport } from "../firebase/service/getReport";
import { useFilterStore } from "../store/filtersStore";

export const useReportes = () => {
	const filterReportes = useFilterStore(state => state.filterReportes)
	const setFilterReportes = useFilterStore(state => state.setFilterReportes)
	const setReporte = useDataStore(state => state.setReportes)
	// useEffect(() => {
	// 	(async () => {
	// 		const reportesFetch = await getReport({fecha: date, sede: 'San Borja'})	
	// 		if(!reportesFetch) return
	// 		setReporte(reportesFetch.productos)
	// 		setFilterReportes(reportesFetch.productos)
	// 	})()
	// }, [date])
	const processfilterReportes = async(sede:string,date:string) => {		
		const reportesFetch = await getReport({fecha:date, sede})
		if(!reportesFetch) return console.log('No hay reportes');
		
		setReporte(reportesFetch.productos)
		setFilterReportes(reportesFetch.productos)
		
	}
  	return {
		reportes: filterReportes,
		filterReportes: processfilterReportes
	}
}