import { useProductos } from "@/hooks/useProductos"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button, buttonVariants } from "./ui/button"
import { Ellipsis } from "lucide-react"
import { Link } from "react-router-dom"

export const TableProducts = () => {
	const {allProducts} = useProductos()
	
  return (
	<Table className="col-span-6">
		<TableCaption>Todos los productos</TableCaption>
		<TableHeader>
			<TableRow>
				<TableHead>Categoria</TableHead>
				<TableHead>Nombre</TableHead>
				<TableHead>Precio</TableHead>
				<TableHead>Cantidad mínima</TableHead>
				<TableHead>Opciones</TableHead>
				{/* <TableHead>Sedes</TableHead> */}
			</TableRow>
		</TableHeader>
		<TableBody>
			{
				allProducts.map((product) => (
					<TableRow key={product.id}>
						<TableCell>{product.categoria}</TableCell>
						<TableCell>{product.name}</TableCell>
						<TableCell>{product.price}</TableCell>
						<TableCell>{product.cantidad_minima}</TableCell>
						<TableCell>
							<Popover>
								<PopoverTrigger asChild>
									<Button variant={"outline"}  size={"icon"}>
									<Ellipsis size={16} color="#ffffff" absoluteStrokeWidth />
									</Button>
								</PopoverTrigger>
								
								<PopoverContent className="flex flex-col gap-2 w-48">
									<h4 className="font-bold text-lg">Opciones:</h4>
									<Link to={'agregar'} className={`${buttonVariants({variant: 'secondary'})}`}>Agregar</Link>
									<Link to={'editar'} className={`${buttonVariants({variant: 'destructive'})}`}>Eliminar</Link>
								</PopoverContent>
							</Popover>
						</TableCell>
					</TableRow>
				))
			}
		</TableBody>
	</Table>
  )
}