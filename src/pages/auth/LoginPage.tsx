import { Input } from "@/components/ui/input"
import { startLogin } from "../../firebase/service/login"
import { useAuthStore } from "../../store/authStore"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export const LoginPage = () => {
	const setLogin = useAuthStore(state => state.onLogin)
	const onLogin = async(e:any) => {
		e.preventDefault()
		const {email,password} = Object.fromEntries(new FormData(e.target))		
		const data = await startLogin(email as string, password as string)
		if(!data) return
		setLogin()
	}

	return (
		<section className="h-screen flex justify-center items-center col-span-12">
			<form onSubmit={onLogin} className="shadow-lg p-6 flex flex-col">
				<h1 className="text-3xl font-bold text-center mb-6">Iniciar Sesión</h1>
				<Label className="mb-6" htmlFor="email">
					<p>ID</p>
					<Input className="border p-2 rounded-md" type="email" name="email" id="email" />
				</Label>
				<Label className="mb-6" htmlFor="password">
					<p>Password</p>
					<Input className="border p-2 rounded-md" type="password" name="password" id="id" />
				</Label>
				<Button className="bg-green-500 p-2 rounded-md text-white">Ingresar</Button>
			</form>
		</section>

	)
}