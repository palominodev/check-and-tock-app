import { useEffect } from "react";
import { useDataStore } from "../store/dataStore";
import { getSedes } from "../firebase/service/getSedes";

export const useFetchSedes = () => {
  const sedes = useDataStore(state => state.sede);
  const setSedes = useDataStore(state => state.setSedes);

  useEffect(() => {
    const fetchSedes = async () => {
      if (sedes.length === 0) {
        const sedesFetch = await getSedes();
        setSedes(sedesFetch);
      }
    };
    fetchSedes();
  }, [sedes.length, setSedes]);
};