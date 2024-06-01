import { useEffect } from "react";
import { useDataStore } from "../store/dataStore";
import { getReport } from "../firebase/service/getReport";
import { useFilterStore } from "../store/filtersStore";

export const useReportes = () => {
	const reportes = useDataStore(state => state.reporte)
	const filterReportes = useFilterStore(state => state.filterReportes)
	const setFilterReportes = useFilterStore(state => state.setFilterReportes)
	const setReporte = useDataStore(state => state.setReportes)
	useEffect(() => {
		(async () => {
			const reportesFetch = await getReport()
			if(!reportesFetch) return
			setReporte(reportesFetch)
			setFilterReportes(reportesFetch)
		})()
	}, [])
	const processfilterReportes = (sede:string) => {
		const reportesFiltrados = reportes.filter(reporte => reporte.sede === sede)
		setFilterReportes(reportesFiltrados)
	}
  	return {
		reportes: filterReportes,
		filterReportes: processfilterReportes
	}
}