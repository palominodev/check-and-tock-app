import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDataStore } from "@/store/dataStore";
import { Sede } from "@/types";
import { CheckedState } from "@radix-ui/react-checkbox";
import { FormEvent, useState } from "react";

type SedesCheckedType = {
  checked: CheckedState;
  sede: Sede;
};

export const UserForm = () => {
  const sedes = useDataStore((state) => state.sede);
  const [sedeChecked, setSedeChecked] = useState<SedesCheckedType[]>([]);

  const handleChecked = ({ checked, sede }: SedesCheckedType) => {
    if (!checked) {
      const removeSede = sedeChecked.filter((s) => s.sede.id !== sede.id);
      setSedeChecked(removeSede);
      return;
    }
    const newSedesChecked = [...sedeChecked, { checked, sede }];
    setSedeChecked(newSedesChecked);
  };

  const handleSubmit = async(e: any) => {
	e.preventDefault()
	const data = Object.fromEntries(new FormData(e.target))
	await createUser({
		...data,
		sedes: sedeChecked
	})
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="w-[450px]">
        <Label className="w-full">
          <h2 className="font-bold my-4 text-lg">Ingresar nombre</h2>
          <Input name="displayName" type="text" />
        </Label>
        <Label className="w-full">
          <h2 className="font-bold my-4 text-lg">Sede</h2>
          {sedes.map((sede) => (
            <>
              <Label className="flex gap-2 mb-2 ml-4" key={sede.id}>
                <Checkbox
                  onCheckedChange={(checked) =>
                    handleChecked({ checked, sede })
                  }
                  value={sede.id}
                />{" "}
                {sede.nombre}
              </Label>
            </>
          ))}
        </Label>
        <Label className="w-full">
          <h2 className="font-bold my-4 text-lg">Rol</h2>
          <Select name="rol">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Rol" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="encargado">Encargado</SelectItem>
              <SelectItem value="usuario">Usuario</SelectItem>
            </SelectContent>
          </Select>
        </Label>
        <Label className="w-full">
          <h2 className="font-bold my-4 text-lg">Ingresar contraseña</h2>
          <Input name="password" type="text" />
        </Label>
        <Label className="w-full">
          <h2 className="font-bold my-4 text-lg">Ingresar contraseña</h2>
          <Input name="valid-password" type="text" />
        </Label>
        <Button className="mt-4 font-bold">Crear usuario</Button>
      </form>
    </div>
  );
};
