import { Categoria, GetProducto, Reporte, Sede } from '@/types';
import { create } from 'zustand'

type State = {
	allProducts: GetProducto[];
	allReports: Reporte[]
	sede: Sede[],
	categoria: Categoria[]
	reporte: Reporte
	setSedes: (sede: Sede[]) => void
	setReportes: (reportes: Reporte) => void
	setCategorias: (categorias: Categoria[]) => void
	setAllReports: (allReport: Reporte[]) => void
	setAllProducts: (allProducts: GetProducto[]) => void
}

export const useDataStore = create<State>((set) => ({
	allProducts: [],
	sede: [],
	categoria: [],
	reporte: {
		fecha: new Date(),
		productos: [],
		sede: {
			id: '',
			nombre: ''
		},
		usuario: {
			displayName: '',
			id: '',
			rol: ''
		},
		id: ''
	},
	allReports: [],
	setSedes: (sedes:Sede[]) => set(() => ({sede: sedes})),
	setCategorias: (categoria: Categoria[]) => set(() => ({categoria: categoria})),
	setReportes: (reporte:Reporte) => set(() => ({reporte})),
	setAllReports: (allReport:Reporte[]) => set(() => ({allReports: allReport})),
	setAllProducts: (allProducts) => set(() => ({allProducts: allProducts}))
}))

export const sedes = useDataStore.getState().sede