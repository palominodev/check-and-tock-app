export const InventarioPage = () => {
  return (
	<section className="w-full h-full grid grid-rows-12 auto">
		<header className="flex justify-between mt-20 ">
			<label htmlFor="fecha">
				<p className="mb-2 font-bold text-lg">Seleccionar fecha</p>
				<input className="p-4 border rounded-lg" type="date" name="fecha" id="fecha"/>
			</label>
			<label htmlFor="sede">
				<p className="mb-2 font-bold text-lg">Elegir sede</p>
				<select className="p-4 border rounded-lg" name="sede" id="sede">
					<option value="villa_01">Cientifica - Villa</option>
					<option value="hospital_02">Hospital</option>
				</select>
			</label>
		</header>
		<main className="my-10 row-start-5 row-end-13">
			<div className="h-full overflow-y-scroll">
				<table className="w-full">
					<thead className="sticky top-0 bg-red-700">
						<tr className="*:p-2 *:border-2">
							<th>Nombre</th>
							<th>Categoria</th>
							<th>Precio</th>
							<th>Cantidad</th>
						</tr>
					</thead>
					<tbody>
						<tr className="*:p-2 *:border-2">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
						<tr className="*:p-2 *:border">
							<td>Oreo</td>
							<td>Galleta</td>
							<td>12.4</td>
							<td>12 unidades</td>
						</tr>
					</tbody>
				</table>
			</div>
		</main>
	</section>
  )
}