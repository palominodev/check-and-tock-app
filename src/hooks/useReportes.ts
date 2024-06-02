import { useEffect } from "react";
import { useDataStore } from "../store/dataStore";
import { getReport } from "../firebase/service/getReport";
import { useFilterStore } from "../store/filtersStore";

export const useReportes = () => {
	const reportes = useDataStore(state => state.reporte)
	const date = useFilterStore(state => state.selectDate)
	const filterReportes = useFilterStore(state => state.filterReportes)
	const setFilterReportes = useFilterStore(state => state.setFilterReportes)
	const setReporte = useDataStore(state => state.setReportes)
	useEffect(() => {
		(async () => {
			const reportesFetch = await getReport({fecha: date})	
			if(!reportesFetch) return
			setReporte(reportesFetch.productos)
			setFilterReportes(reportesFetch.productos)
		})()
	}, [])
	const processfilterReportes = (sede:string,date:string) => {
		setFilterReportes(reportes)
	}
  	return {
		reportes: filterReportes,
		filterReportes: processfilterReportes
	}
}