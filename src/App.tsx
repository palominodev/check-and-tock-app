import { LayoutDashboard } from "./layout/LayoutDashboard"

function App() {
  return (
    <LayoutDashboard>
      <section className="flex gap-8">
        <article className="p-6 shadow-lg rounded-lg cursor-pointer">
          <h2 className="text-xl font-bold ">Ver Inventarios</h2>
        </article>
        <article className="p-6 shadow-lg rounded-lg cursor-pointer">
          <h2 className="text-xl font-bold ">Gestionar Productos</h2>
        </article>
      </section>
    </LayoutDashboard>
  )
}

export default App
