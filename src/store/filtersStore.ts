import { create } from "zustand"
import { Reporte } from "./dataStore"
import { parseTime } from "../lib/parseTime"

type State = {
	selectSede: string,
	selectDate: string
	setDate: (newDate:string) => void
	setSelectedSede: (sede:string) => void
	filterReportes: Reporte[]
	setFilterReportes: (reportes:Reporte[]) => void
}

const date = new Date()



const InitialState = {
	filterReportes: [],
	selectDate: parseTime(date)
}

export const useFilterStore = create<State>((set) => ({
	selectSede: '',
	...InitialState,
	setDate: (newDate:string) => set(() => ({selectDate: newDate})),
	setSelectedSede: (sede:string) => set(() => ({selectSede: sede})),
	setFilterReportes: (reporte: Reporte[]) => set(() => ({filterReportes: reporte}))
}))