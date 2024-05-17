import { create } from 'zustand'
import { Product } from '../firebase/service/addProduct';

export type Sede = {
	id: string;
	nombre: string
}

export type Reporte = {
	id: string;
	cantidad: number;
	fecha: Date;
	nombre: string;
	precio: number;
}

type State = {
	sede: Sede[],
	reporte: Reporte[]
	setSedes: (sede: Sede[]) => void
	setReportes: (reportes: Reporte[]) => void
}

export const useDataStore = create<State>((set) => ({
	sede: [],
	reporte: [],
	setSedes: (sedes:Sede[]) => set(() => ({sede: sedes})),
	setReportes: (reportes:Reporte[]) => set(() => ({reporte: reportes}))
}))