export const LoginPage = () => {
	return (
		<section className="h-screen flex justify-center items-center col-span-12">
			<form className="shadow-lg p-6 flex flex-col">
				<h1 className="text-3xl font-bold text-center mb-6">Iniciar Sesión</h1>
				<label className="mb-6" htmlFor="email">
					<p>ID</p>
					<input className="border p-2 rounded-md" type="email" name="email" id="email" />
				</label>
				<label className="mb-6" htmlFor="password">
					<p>Password</p>
					<input className="border p-2 rounded-md" type="password" name="password" id="id" />
				</label>
				<button className="bg-green-500 p-2 rounded-md text-white">Ingresar</button>
			</form>
		</section>

	)
}