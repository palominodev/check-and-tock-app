import { useDataStore } from "../store/dataStore";
import { getReport } from "../firebase/service/getReport";
import { useFilterStore } from "../store/filtersStore";
import { getAllReportsByDate } from "@/firebase/service/getAllReportsByDate";
import { Reporte } from "@/types";

export const useReportes = () => {
  const filterReportes = useFilterStore((state) => state.filterReportes);
  const setAllReports = useDataStore(state => state.setAllReports)
  const setFilterReportes = useFilterStore((state) => state.setFilterReportes);
  const setReporte = useDataStore((state) => state.setReportes);
  const processfilterReportes = async (sedeId: string, date: string) => {
    const reportesFetch = await getReport({ fecha: date, sedeId });	
    if (!reportesFetch) return;
    const reporte:Reporte = {
      id: reportesFetch.id,
      fecha: reportesFetch.fecha,
      usuario: reportesFetch.usuario,
      productos: reportesFetch.productos,
      sede: reportesFetch.sede
    };
    setReporte(reporte);
    setFilterReportes(reporte);
  };
  const allReportsByDate = async(fecha:string) => {
    const allReportsFetch = await getAllReportsByDate({fecha})    
    
    setAllReports(allReportsFetch);
  }
  return {
    reportes: filterReportes,
    filterReportes: processfilterReportes,
    allReportsByDate
  };
};
