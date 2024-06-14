import { ItemReporte, useDataStore } from "../store/dataStore";
import { getReport } from "../firebase/service/getReport";
import { useFilterStore } from "../store/filtersStore";

export const useReportes = () => {
  const filterReportes = useFilterStore((state) => state.filterReportes);
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
  return {
    reportes: filterReportes,
    filterReportes: processfilterReportes,
  };
};
