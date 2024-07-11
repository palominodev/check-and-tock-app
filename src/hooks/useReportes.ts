import { ItemReporte, useDataStore } from "../store/dataStore";
import { getReport } from "../firebase/service/getReport";
import { useFilterStore } from "../store/filtersStore";
import { getAllReportsByDate } from "@/firebase/service/getAllReportsByDate";

export const useReportes = () => {
  const filterReportes = useFilterStore((state) => state.filterReportes);
  const setAllReports = useDataStore(state => state.setAllReports)
  const setFilterReportes = useFilterStore((state) => state.setFilterReportes);
  const setReporte = useDataStore((state) => state.setReportes);
  const processfilterReportes = async (sede: string, date: string) => {
    const reportesFetch = await getReport({ fecha: date, sede });	
    if (!reportesFetch) return;
    const reporte = {
      fecha: (reportesFetch.fecha.toDate?.() || reportesFetch.fecha) as Date,
      nombre: reportesFetch?.nombre as string,
      productos: reportesFetch?.productos as ItemReporte[],
    };
    setReporte(reporte);
    setFilterReportes(reporte);
  };
  const allReportsByDate = async(fecha:string) => {
    const allReportsFetch = await getAllReportsByDate({fecha})    
    console.log(allReportsFetch);
    
    setAllReports(allReportsFetch);
  }
  return {
    reportes: filterReportes,
    filterReportes: processfilterReportes,
    allReportsByDate
  };
};
