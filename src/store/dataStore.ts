import { create } from 'zustand'

export type Sede = {
	id: string;
	nombre: string
}

type State = {
	sede: Sede[]
	setSedes: (sede: Sede[]) => void
}

export const useDataStore = create<State>((set) => ({
	sede: [],
	setSedes: (sedes:Sede[]) => set(() => ({sede: sedes})),
}))