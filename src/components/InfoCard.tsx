import { User2Icon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { format } from "date-fns"

type Props = {
	reportes: {
		nombre: string,
		fecha: Date
	}
	
}
export const InfoCard = ({reportes}: Props) => {
  return (
	<Card>
		<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
			<CardTitle className="text-sm font-medium">Informe</CardTitle>
			<User2Icon className="h-4 w-4 text-muted-foreground" />
		</CardHeader>
		<CardContent>
			{
				!(reportes.nombre)
				? <div className="text-2xl font-bold">Sin Reporte</div>
				: <>
					<div className="text-2xl font-bold">{reportes.nombre}</div>
					<p className="text-xs text-muted-foreground *:font-bold italic">Informe enviado a las <span>{format(reportes.fecha, 'hh:mm aaaa')}</span></p>
				</>
			}
			
		</CardContent>
	</Card>
  )
}