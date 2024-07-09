import { useNavigate } from "react-router-dom"
import { LayoutDashboard } from "./layout/LayoutDashboard"
import { useEffect } from "react"
import { CalendarPicker } from "./components/CalendarPicker"
import { ReportCards } from "./components/ReportCards"
import { useFetchSedes } from "./hooks/useSedes"


function App() {
	useFetchSedes()
  
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/')
  }, [])

  
  return (
    <LayoutDashboard>
      <div className="h-full mt-40 w-full">
        <div className="flex justify-end">
          <CalendarPicker />
        </div>
        <ReportCards />
      </div>
    </LayoutDashboard>
  )
}

export default App
