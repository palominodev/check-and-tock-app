import {
	DocumentData,
	DocumentReference,
	Timestamp,
	collection,
	doc,
	getDocs,
	query,
	where,
} from "firebase/firestore";
import { FirebaseDB } from "../config";
import { addDays, set } from "date-fns";
import { getDataRef } from "./getDataRef";
import { Reporte } from "@/types";

type Props = { 
	fecha: string
	sedeId:string
}

export const getReport = async ({ fecha,sedeId }: Props):Promise<Reporte|null> => {
	try {
		const sedesRefs = new Set<DocumentReference<DocumentData>>();
		const usuariosRefs = new Set<DocumentReference<DocumentData>>();
		const sedeRef = doc(FirebaseDB, 'sede', sedeId)
		if(!sedeId) return null
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
		const reportesSnapshot = collection(FirebaseDB, "reporte");

		const q = query(
			reportesSnapshot,
			where("fecha", ">=", startDate),
			where("fecha", "<=", endDate),
			where("sede", "==", sedeRef),
		);
		const reportesCollection = await getDocs(q);
		
		const allReportes: any[] = [];
		reportesCollection.forEach((reporte) => {
			const reporteData = reporte.data()
			sedesRefs.add(reporteData.sede)
			usuariosRefs.add(reporteData.usuario)
			allReportes.push(reporte.data());
		});
		const sedes = await getDataRef({arrayRefs: sedesRefs})
		const usuarios = await getDataRef({arrayRefs: usuariosRefs})
		const [reportesMapped]:any = reportesCollection.docs.map((doc) => {
			const reportData = doc.data();
			const sedeData = sedes[reportData.sede.id]
			const userData = usuarios[reportData?.usuario?.id] || null
			return {
				...reportData,
				fecha: doc.get('fecha').toDate(),
				usuario: userData,
				sede:sedeData,
				id: doc.id
			}
		})
		
		if(!reportesMapped) {
			return {
				id: '',
				fecha: date_format,
				usuario: {
					displayName: "",
					id: "",
					rol: ""
				},
				productos: [],
				sede: {
					id: "",
					nombre: ""
				}
			}
		}
		// console.log(reportesMapped)
		return reportesMapped as Reporte;
	} catch (error) {
		console.error("Error al obtener el reporte:", error);
		return null
	}
};
