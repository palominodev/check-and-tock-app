import { useDataStore } from "@/store/dataStore"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { User2Icon } from "lucide-react"
import { format } from "date-fns"
import { useEffect } from "react"
import { useFilterStore } from "@/store/filtersStore"
import { useReportes } from "@/hooks/useReportes"

export const ReportCards = () => {
	const allReports = useDataStore(state => state.allReports)
	const date = useFilterStore(state => state.selectDate)
	const { allReportsByDate } = useReportes()

	useEffect(() => {
		if (date !== '') {
			allReportsByDate(date);
		}
	}, [date])
	return (
		<div>
			<h1 className="text-3xl font-bold">Reportes enviados</h1>
			<div className="grid grid-cols-3 gap-3 mt-5">
				{
					allReports.map((reporte, i) => {
						// console.log(reporte.usuario?.displayName)
						return <Card key={`${i}`}>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Informe</CardTitle>
							<User2Icon className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							{
								// !(reporte.nombre)
								// 	? <div className="text-2xl font-bold">Sin Reporte</div>
								// 	: 
									<>
										<p className="text-2xl font-bold">{reporte.sede.nombre}</p>
										<p>Encargado: {reporte.usuario?.displayName}</p>
										<p className="text-xs text-muted-foreground *:font-bold italic">Informe enviado a las <span>{format(reporte.fecha, 'hh:mm aaaa')}</span></p>
									</>
							}
						</CardContent>
					</Card>
					})
				}
			</div>
		</div>
	)
}