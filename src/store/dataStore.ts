import { create } from 'zustand'
export type Sede = {
	id: string;
	nombre: string
}

export type Product = {
	id: string
	name: string
	price: string
	sede: string
	categoria: string
	cantidad_minima: string
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

export type AllReport = {
	fecha: Date;
	nombre: string;
	productos: ItemReporte[];
	sede: string
}[]

export type Categoria = {
	id: string
	name: string
}

type State = {
	allProducts: Product[];
	allReports: AllReport
	sede: Sede[],
	categoria: Categoria[]
	reporte: Reporte
	setSedes: (sede: Sede[]) => void
	setReportes: (reportes: Reporte) => void
	setCategorias: (categorias: Categoria[]) => void
	setAllReports: (allReport: AllReport) => void
	setAllProducts: (allProducts: Product[]) => void
}

export const useDataStore = create<State>((set) => ({
	allProducts: [],
	sede: [],
	categoria: [],
	reporte: {
		fecha: new Date(),
		nombre: '',
		productos: [],
	},
	allReports: [],
	setSedes: (sedes:Sede[]) => set(() => ({sede: sedes})),
	setCategorias: (categoria: Categoria[]) => set(() => ({categoria: categoria})),
	setReportes: (reporte:Reporte) => set(() => ({reporte})),
	setAllReports: (allReport:AllReport) => set(() => ({allReports: allReport})),
	setAllProducts: (allProducts) => set(() => ({allProducts: allProducts}))
}))