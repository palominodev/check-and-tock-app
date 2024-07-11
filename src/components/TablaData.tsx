import { useReportes } from "@/hooks/useReportes"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { ScrollArea } from "./ui/scroll-area"


export const TablaData = () => {
	const { reportes } = useReportes()
	return (
		<ScrollArea className="h-96 border rounded-md">
			<Table className="relative">
				<TableCaption>Reporte del dia</TableCaption>
				<TableHeader className="sticky top-0">
					<TableRow>
						<TableHead className="w-[100px]">Tipo</TableHead>
						<TableHead>Producto</TableHead>
						<TableHead className="text-right">Cantidad inicial</TableHead>
						<TableHead className="text-right">Ingreso diario</TableHead>
						<TableHead className="text-right">Cantidad final</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{
						reportes.productos.length === 0 ? null
							: reportes.productos.map((reporte:any) => (
								<TableRow key={reporte.id}>
									<TableCell className="font-medium">{reporte.category}</TableCell>
									<TableCell>{reporte.name}</TableCell>
									<TableCell className="text-right">{reporte.initial_count}</TableCell>
									<TableCell className="text-right">{reporte.daily_income}</TableCell>
									<TableCell className="text-right">{reporte.final_count}</TableCell>
								</TableRow>
							))
					}
				</TableBody>
			</Table>
		</ScrollArea>
	)
}