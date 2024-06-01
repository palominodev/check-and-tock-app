import { useEffect } from "react";
import { SedesSelect } from "../../components/SedesSelect"
import { useReportes } from "../../hooks/useReportes";
import { useFilterStore } from "../../store/filtersStore";

export const InventarioPage = () => {
	const {reportes,filterReportes} = useReportes()
	const date = useFilterStore(state => state.selectDate)
	const selectSede = useFilterStore(state => state.selectSede)
	const setDate = useFilterStore(state => state.setDate)


	useEffect(() => {
		if(selectSede !== '' && date !== '') {
			filterReportes(selectSede);
			console.log(date);
			
		}
	}, [selectSede, date])
	
  return (
	<section className="w-full h-full grid grid-rows-12 auto">
		<header className="flex justify-between mt-20 ">
			<label htmlFor="fecha">
				<p className="mb-2 font-bold text-lg">Seleccionar fecha</p>
				<input value={date} onChange={(e) => setDate(e.target.value)} className="p-4 border rounded-lg" type="date" name="fecha" id="fecha"/>
			</label>
			<label htmlFor="sede">
				<p className="mb-2 font-bold text-lg">Elegir sede</p>
				<SedesSelect />
			</label>
		</header>
		<main className="my-10 row-start-5 row-end-13">
			<div className="h-full overflow-y-scroll">
				<table className="w-full">
					<thead className="sticky top-0 bg-red-700">
						<tr className="*:p-2 *:border-2">
							<th>Nombre</th>
							<th>Precio</th>
							<th>Cantidad</th>
						</tr>
					</thead>
					{
						date === ''
						? <p>Seleccionar una fecha</p>
						: <tbody>
						{
							reportes.length === 0
							? 	<tr className="*:p-2 odd:bg-slate-200 *:border">
									<td>Cargando...</td>
									<td>Cargando...</td>
									<td>Cargando...</td>
								</tr>
							:	reportes.map(reporte => (
								<tr key={reporte.id} className="*:p-2 odd:bg-slate-200 *:border">
									<td>{reporte.nombre}</td>
									<td>{reporte.precio}</td>
									<td>{reporte.cantidad}</td>
								</tr>
							))
						}
					</tbody>}
				</table>
			</div>
		</main>
	</section>
  )
}