import { useProductos } from "@/hooks/useProductos"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button, buttonVariants } from "./ui/button"
import { Ellipsis } from "lucide-react"
import { Link } from "react-router-dom"
import { ScrollArea } from "./ui/scroll-area"
import { DeleteDialog } from "./DeleteDialog"
// import { useFilterStore } from "@/store/filtersStore"

export const TableProducts = () => {
	const {allProducts} = useProductos()
	// const sede = useFilterStore(state => state.selectSede)

  return (
	<ScrollArea className="h-96 border rounded-md relative">
		<Table className="">
			<TableCaption>Todos los productos</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Categoria</TableHead>
					<TableHead>Nombre</TableHead>
					{/* <TableHead>Sedes</TableHead> */}
					<TableHead>Precio</TableHead>
					<TableHead>Cantidad mínima</TableHead>
					<TableHead>Opciones</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{
					allProducts.map((product) => {
						 return (
							<TableRow key={product.id}>
							<TableCell>{product.category.name}</TableCell>
							<TableCell>{product.name}</TableCell>
							{/* <TableCell>{product.sede.nombre}</TableCell> */}
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
										<Link to={`editar/${product.id}`} className={`${buttonVariants({variant: 'outline'})}`}>Editar</Link>
										<DeleteDialog name={product.name} id={product.id}>
											<Button variant={'destructive'}>Eliminar</Button>
										</DeleteDialog>
									</PopoverContent>
								</Popover>
							</TableCell>
						</TableRow>
						)
					})
				}
			</TableBody>
		</Table>
	</ScrollArea>
  )
}