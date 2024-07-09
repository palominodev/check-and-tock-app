import { create } from "zustand"
import { Reporte, Sede, useDataStore } from "./dataStore"
import { parseTime } from "../lib/parseTime"

type State = {
	selectSede: Sede
	selectDate: string
	selectCategoria: string
	setDate: (newDate:string) => void
	setSelectedSede: (sede:string) => void
	setSelectedCategoria: (categoria:string) => void
	filterReportes: Reporte
	setFilterReportes: (reportes:Reporte) => void
}

const date = new Date()



const InitialState = {
	filterReportes: {
		fecha: date,
		nombre: "",
		productos: []
	},
	selectDate: parseTime(date)
}

export const useFilterStore = create<State>((set) => ({
	selectSede: {
		id: "",
		nombre: ""
	},
	selectCategoria: '',
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
	setSelectedCategoria: (categoria:string) => set(() => ({selectCategoria: categoria})),
	setFilterReportes: (reporte: Reporte) => set(() => ({filterReportes:reporte}))
}))