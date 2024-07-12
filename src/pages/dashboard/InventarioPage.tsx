import { useEffect } from "react";
import { SedesSelect } from "../../components/SedesSelect";
import { useReportes } from "../../hooks/useReportes";
import { useFilterStore } from "../../store/filtersStore";
import { TablaData } from "@/components/TablaData";
import { CalendarPicker } from "@/components/CalendarPicker";
import { InfoCard } from "@/components/InfoCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const InventarioPage = () => {
  const date = useFilterStore((state) => state.selectDate);
  const { productos } = useFilterStore((state) => state.filterReportes);
  const { filterReportes, reportes } = useReportes();
  const selectSede = useFilterStore((state) => state.selectSede) || {
    id: "",
    nombre: "",
  };

  useEffect(() => {
    if (selectSede.id !== "" && date !== "") {
      filterReportes(selectSede.id, date);
    }
  }, [selectSede, date]);

  return (
    <section className="w-full h-full grid grid-rows-12 auto">
      <header className="flex justify-between mt-20 ">
        <InfoCard reportes={reportes} />
        <div>
          <Card className="h-32">
            <CardHeader>
              <CardTitle className="text-base font-medium">
                Seleccionar fecha
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CalendarPicker />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="h-32">
            <CardHeader>
              <CardTitle className="text-base font-medium">
                Elegir sede
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SedesSelect />
            </CardContent>
          </Card>
        </div>
      </header>
      <main className="my-10 row-start-5 row-end-13">
        <Dialog>
          {selectSede.id !== "" && date !== "" && (
            <DialogTrigger asChild>
              <Button className="font-bold mb-4">Ver requerimientos</Button>
            </DialogTrigger>
          )}
          <DialogContent className="w-[300px]">
            <DialogHeader>
              <DialogTitle>
                Requerimientos de sede: {selectSede?.nombre}
              </DialogTitle>
              <DialogDescription>
                <ul className="mt-4">
                  {productos.map((product) => {
                    if (product.final_count !== 0) return;
                    return (
                      <>
                        <li
                          className="list-none flex justify-between hover:bg-slate-600/5 p-2"
                          key={product.id}
                        >
                          {product.name}
						  <span>{product.final_count}</span>
                        </li>
                        <Separator />
                      </>
                    );
                  })}
                </ul>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <div className="">
          <TablaData />
        </div>
      </main>
    </section>
  );
};
