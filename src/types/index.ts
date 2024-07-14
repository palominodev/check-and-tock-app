import { DocumentReference } from "firebase/firestore"

export interface Reporte {
	id: string
	fecha: Date
	productos: GetProducto[]
	sede: Sede
	usuario: Usuario
}

export interface GetProducto {
	category: Categoria,
	daily_income: number,
	id: string,
	initial_count: number
	final_count: number
	name: string
	sede: Sede
	price: number
	cantidad_minima: number
}

export interface ReportProducto {
	category: string
	daily_income: number,
	id: string,
	initial_count: number
	final_count: number
	name: string
	sede: Sede
	price: number
	cantidad_minima: number
}

export interface Sede {
	id: string,
	nombre: string
}

export interface Usuario {
	displayName: string
	id: string
	rol: string
	sede?: DocumentReference[]
}

export type Categoria = {
	id: string
	name: string
}