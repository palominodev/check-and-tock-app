import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"

type Props = {
	value: string
	hook: (value:string) => void,
	data: {
		id:string,
		nombre: string
	}[],
	name: string
}

const SelectOptions = ({value, hook, data, name}:Props) => {
  return (
		<Select 
		value={value} 
		onValueChange={(value) => hook(value)} 
		name="sede_product" 
		// id="sede_product"
	>
		<SelectTrigger className="w-[188px]">
			<SelectValue placeholder={`Elegir ${name}`} />
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectLabel>Sedes</SelectLabel>
				{
					data.length === 0
					? <option>Cargando Sedes..</option>
					: data.map((sede:any) => (
						<SelectItem key={sede.id} value={sede.nombre}>{sede.nombre}</SelectItem>
					))
				}
			</SelectGroup>
		</SelectContent>
		{/* <option value={''} disabled hidden>Elegir Sede</option> */}
				
	</Select>
  )
}
export default SelectOptions