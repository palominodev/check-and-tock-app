import { create } from 'zustand'
export type Sede = {
	id: string;
	nombre: string
}

export type Reporte = {
	name: string;
	categoria: string;
	count: string;
	id: string;
	fecha: Date;
	precio: number;
	sede: string
}

export type Categoria = {
	id: string
	name: string
}

type State = {
	sede: Sede[],
	categoria: Categoria[]
	reporte: Reporte[]
	setSedes: (sede: Sede[]) => void
	setReportes: (reportes: Reporte[]) => void
	setCategorias: (categorias: Categoria[]) => void
}

export const useDataStore = create<State>((set) => ({
	sede: [],
	categoria: [],
	reporte: [],
	setSedes: (sedes:Sede[]) => set(() => ({sede: sedes})),
	setCategorias: (categoria: Categoria[]) => set(() => ({categoria: categoria})),
	setReportes: (reportes:Reporte[]) => set(() => ({reporte: reportes}))
}))