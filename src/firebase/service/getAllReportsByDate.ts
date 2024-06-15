import { addDays, set } from "date-fns";
import { Timestamp, collection, getDocs, query, where } from "firebase/firestore";
import { FirebaseDB } from "../config";

export const getAllReportsByDate = async({fecha}:{fecha:string}) => {
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
		);
		const reportesCollection = await getDocs(q);
		
		const allReportes: any[] = [];
		reportesCollection.forEach((reporte) => {
			allReportes.push(reporte.data());
		});
		
		const AllReportsMapped = allReportes.map(reporte => ({
			fecha: reporte.fecha.toDate(),
			nombre: reporte.nombre,
			sede: reporte.sede,
			productos: reporte.productos,
		}))
		if(AllReportsMapped.length === 0) return []

		return AllReportsMapped
		
		
}