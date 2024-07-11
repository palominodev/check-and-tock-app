import { addDays, set } from "date-fns";
import { DocumentData, DocumentReference, Timestamp, collection, getDocs, query, where } from "firebase/firestore";
import { FirebaseDB } from "../config";
import { getDataRef } from "./getDataRef";
import { Reporte} from "@/store/dataStore";

export const getAllReportsByDate = async({fecha}:{fecha:string}) => {
	const date_format = addDays(new Date(fecha), 1);
	const sedesRefs = new Set<DocumentReference<DocumentData>>();
	const usuariosRefs = new Set<DocumentReference<DocumentData>>();
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
		const reportesSnapshot = collection(FirebaseDB, "reporte");

		const q = query(
			reportesSnapshot,
			where("fecha", ">=", startDate),
			where("fecha", "<=", endDate),
		);
		const reportesCollection = await getDocs(q);
		
		const allReportes: any[] = [];
		reportesCollection.forEach((reporte) => {
			const reporteData = reporte.data()
			usuariosRefs.add(reporteData.usuario)
			sedesRefs.add(reporteData.sede)
			allReportes.push(reporte.data());
		});
		
		const sedes = await getDataRef({arrayRefs: sedesRefs})
		const usuarios = await getDataRef({arrayRefs: usuariosRefs})
		const allReportsMapped:any = reportesCollection.docs.map((doc) =>{
			const reportData = doc.data();
			const sedeData = sedes[reportData.sede.id]
			const userData = usuarios[reportData?.usuario?.id] || null
			return {
				...reportData,
				usuario: userData,
				sede:sedeData
			}
		})
		const AllReportsMapped = allReportsMapped.map((reporte:any) => ({
			fecha: reporte.fecha.toDate(),
			nombre: reporte.nombre,
			usuario: reporte.usuario,
			sede: reporte.sede,
			productos: reporte.productos,
		}));
		if(AllReportsMapped.length === 0) return []

		return AllReportsMapped as Reporte[]
		
		
}