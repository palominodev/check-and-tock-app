import { create } from "zustand"
import { Reporte } from "./dataStore"

type State = {
	selectSede: string,
	selectDate: string
	setDate: (newDate:string) => void
	setSelectedSede: (sede:string) => void
	filterReportes: Reporte[]
	setFilterReportes: (reportes:Reporte[]) => void
}

const date = new Date()
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;



const InitialState = {
	filterReportes: [],
	selectDate: formattedDate
}

export const useFilterStore = create<State>((set) => ({
	selectSede: '',
	...InitialState,
	setDate: (newDate:string) => set(() => ({selectDate: newDate})),
	setSelectedSede: (sede:string) => set(() => ({selectSede: sede})),
	setFilterReportes: (reporte: Reporte[]) => set(() => ({filterReportes: reporte}))
}))