import { create } from "zustand"
import { useDataStore } from "./dataStore"
import { parseTime } from "../lib/parseTime"
import { Categoria, Reporte, Sede } from "@/types"

type State = {
	selectSede: Sede
	selectDate: string
	selectCategoria: Categoria
	setDate: (newDate:string) => void
	setSelectedSede: (sede:string) => void
	setSelectedCategoria: (categoryId:string) => void
	filterReportes: Reporte
	setFilterReportes: (reportes:Reporte) => void
}

const date = new Date()



const InitialState = {
	filterReportes: {
		id:'',
		sede: {
			id: '',
			nombre: ''
		},
		fecha: date,
		usuario: {
			displayName: '',
			id: '',
			rol: '',
		},
		productos: []
	},
	selectDate: parseTime(date)
}

export const useFilterStore = create<State>((set) => ({
	selectSede: {
		id: "",
		nombre: ""
	},
	selectCategoria: {
		id: "",
		name: ""
	},
	...InitialState,
	setDate: (newDate:string) => set(() => ({selectDate: newDate})),
	setSelectedSede: (sedeId:string) => set(() => {
		const sede = useDataStore.getState().sede.find(s => s.id === sedeId)
		if(!sede) return {
			selectSede: sede
		}
		return {
			selectSede: sede
		}
	}),
	setSelectedCategoria: (categoryId:string) => set(() => {
		const category = useDataStore.getState().categoria.find(c => c.id === categoryId)
		if(!category) return {
			selectCategoria: category
		}
		return {
			selectCategoria: category
		}
	}),
	setFilterReportes: (reporte: Reporte) => set(() => ({filterReportes:reporte}))
}))