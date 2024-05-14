import { create } from 'zustand'

type State = {
	isLogged: boolean;
	onLogin: () => void
	onLogout: () => void
}

export const useAuthStore = create<State>((set) => ({
	isLogged: false,
	onLogin: () => set(() => ({isLogged: true})),
	onLogout: () => set(() => ({isLogged: false})),
}))