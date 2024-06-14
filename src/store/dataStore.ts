import { create } from 'zustand'
export type Sede = {
	id: string;
	nombre: string
}

export type ItemReporte = {
	name: string;
	categoria: string;
	count: string;
	id: string;
	fecha: Date;
	precio: number;
	sede: string
}

export type Reporte = {
	fecha: Date;
	nombre: string;
	productos: ItemReporte[];
}

export type Categoria = {
	id: string
	name: string
}

type State = {
	sede: Sede[],
	categoria: Categoria[]
	reporte: Reporte
	setSedes: (sede: Sede[]) => void
	setReportes: (reportes: Reporte) => void
	setCategorias: (categorias: Categoria[]) => void
}

export const useDataStore = create<State>((set) => ({
	sede: [],
	categoria: [],
	reporte: {
		fecha: new Date(),
		nombre: '',
		productos: [],
	},
	setSedes: (sedes:Sede[]) => set(() => ({sede: sedes})),
	setCategorias: (categoria: Categoria[]) => set(() => ({categoria: categoria})),
	setReportes: (reporte:Reporte) => set(() => ({reporte}))
}))