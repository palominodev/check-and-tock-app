import { ReactNode } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { deleteProduct } from "@/firebase/service/deleteProduct";
import { useProductos } from "@/hooks/useProductos";
import { useToast } from "./ui/use-toast";

export const DeleteDialog = ({
  children,
  id,
  name
}: Readonly<{
  children: ReactNode,
  id:string,
  name: string
}>) => {
	const {allProducts,setAllProducts} = useProductos()
	const {toast} = useToast()
	const onDeleteProduct = async() => {
		toast({
			description: "Eliminando producto..."
		})
		const newProducts = allProducts.filter(product => product.id !== id)
		await deleteProduct(id)
		setAllProducts(newProducts);
		toast({
			description: 'Producto eliminado',
			className: 'bg-green-900'
		})
	}
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eliminar producto: {name.toUpperCase()}</DialogTitle>
          <DialogDescription>
            Estas seguro que deseas eliminar este producto, este producto de
            eliminará de todas las sedes.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"secondary"}>Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
			<Button onClick={() => onDeleteProduct()} variant={"destructive"}>
			  Si, eliminar
			</Button>
		  </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
