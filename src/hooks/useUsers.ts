import { getUsers } from "@/firebase/service/getSedes"
import { useDataStore } from "@/store/dataStore"
import { useEffect } from "react"

export const useUsers = () => {
  const setUsuarios = useDataStore(state => state.setUsuarios)
	const usuarios = useDataStore(state => state.usuarios)


  useEffect(() => {
	const fetchUsers = async() => {
		const data = await getUsers()
		setUsuarios(data)
	}
	fetchUsers()
  },[])

  return {
	usuarios
  }
}