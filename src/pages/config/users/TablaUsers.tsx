import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import { ScrollArea } from "../../../components/ui/scroll-area"
import { Usuario } from "@/types"
import { useUsers } from "@/hooks/useUsers"


export const TablaUsers = () => {
	const {usuarios} = useUsers()
	
	return (
		<ScrollArea className="h-96 border rounded-md">
			<Table className="relative">
				<TableCaption>Lista de usuarios</TableCaption>
				<TableHeader className="sticky top-0">
					<TableRow>
						<TableHead className="w-[100px]">Rol</TableHead>
						<TableHead>Nombre</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{
						usuarios.length === 0 ? null
							: usuarios.map((usuario:Usuario) => (
								<TableRow key={usuario.id}>
									<TableCell className="font-medium">{usuario.rol}</TableCell>
									<TableCell>{usuario.displayName}</TableCell>
								</TableRow>
							))
					}
					
				</TableBody>
			</Table>
		</ScrollArea>
	)
}