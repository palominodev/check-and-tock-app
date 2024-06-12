import { useReportes } from "@/hooks/useReportes"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"


export const TablaData = () => {
	const { reportes } = useReportes()
	return (
		<Table className="relative">
			<TableCaption>Reporte del dia</TableCaption>
			<TableHeader className="sticky top-0">
				<TableRow>
					<TableHead className="w-[100px]">Tipo</TableHead>
					<TableHead>Sede</TableHead>
					<TableHead>Producto</TableHead>
					<TableHead className="text-right">Cantidad</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{
					reportes.length === 0 ? null
						: reportes.map(reporte => (
							<TableRow key={reporte.name}>
								<TableCell className="font-medium">{reporte.categoria}</TableCell>
								<TableCell>{reporte.sede}</TableCell>
								<TableCell>{reporte.name}</TableCell>
								<TableCell className="text-right">{reporte.count}</TableCell>
							</TableRow>
						))
				}
			</TableBody>
		</Table>
	)
}