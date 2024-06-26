import {
	Timestamp,
	collection,
	getDocs,
	query,
	where,
} from "firebase/firestore";
import { FirebaseDB } from "../config";
import { addDays, set } from "date-fns";

type Props = { 
	fecha: string
	sede:string
}

export const getReport = async ({ fecha,sede }: Props) => {
	try {
		
		const date_format = addDays(new Date(fecha), 1);
		const startDate = Timestamp.fromDate(
			set(date_format, {
				hours: 0,
				minutes: 0,
				seconds: 0,
			})
		);
		const endDate = Timestamp.fromDate(
			set(date_format, {
				hours: 23,
				minutes: 59,
				seconds: 59,
			})
		);
		const reportesSnapshot = collection(FirebaseDB, "reportes");

		const q = query(
			reportesSnapshot,
			where("fecha", ">=", startDate),
			where("fecha", "<=", endDate),
			where("sede", "==", sede),
		);
		const reportesCollection = await getDocs(q);
		
		const allReportes: any[] = [];
		reportesCollection.forEach((reporte) => {
			allReportes.push(reporte.data());
		});

		const [reportesMapped] = allReportes.flatMap((reporte) => {
			
			return {
				fecha: reporte.fecha,
				nombre: reporte.nombre,
				productos: reporte.productos.flatMap(({products,name}: any) => {
					
					return (products.map((item:any) => ({
						...item,
						categoria: name,
						sede: reporte.sede,
					})))
					
				}),
			}
			
		});
		
		if(!reportesMapped) {
			return {
				fecha: date_format,
				nombre: undefined,
				productos: []
			}
		}

		return reportesMapped;
	} catch (error) {
		console.error("Error al obtener el reporte:", error);
	}
};
