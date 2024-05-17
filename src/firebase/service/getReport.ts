import { getCollections } from "../../lib/getCollections"
import { getDocument } from "../../lib/getDocument"
import { Reporte } from "../../store/dataStore";

export const getReport = async () => {
try {
	  const reportesCollection = await getCollections('reporte');
	  const allReporte:Reporte[] = await Promise.all(reportesCollection.map(async (reporte) => {
		const producto = await getDocument('producto', reporte.producto.id)
		return {
		  id: reporte.id,
		  fecha: reporte.fecha.toDate(),
		  precio: producto?.price,
		  cantidad: reporte.cantidad,
		  nombre: producto?.name
		};
	  }));
	  console.log(allReporte);
	  return allReporte; // Devuelve el resultado si necesitas usarlo en otro lugar
	} catch (error) {
		console.error("Error al obtener el reporte:", error);
	}
};