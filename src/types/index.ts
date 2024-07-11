
export interface Reporte {
	id: string
	fecha: Date
	productos: GetProducto[]
	sede: Sede
	usuario: Usuario
}

export interface GetProducto {
	category: string,
	daily_income: 0,
	id: string,
	initial_count: number
	name: string
}

export interface Sede {
	id: string,
	nombre: string
}

export interface Usuario {
	displayName: string
	id: string
	rol: string
}

export type Categoria = {
	id: string
	name: string
}