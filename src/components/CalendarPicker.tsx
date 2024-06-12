import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "./ui/calendar"
import { addDays, format } from "date-fns"
import { useFilterStore } from "@/store/filtersStore"

export const CalendarPicker = () => {
	const date = useFilterStore(state => state.selectDate)
	
	const setDate = useFilterStore(state => state.setDate)
	const selectDay = (value:Date|undefined) => {
			if(!value) return
			setDate(format(value, "yyyy-MM-dd"))
	}
  return (
	<Popover>
	<PopoverTrigger asChild>
	  <Button
		variant={"outline"}
		className={cn(
		  "w-[280px] justify-start text-left font-normal",
		  !date && "text-muted-foreground"
		)}
	  >
		<CalendarIcon className="mr-2 h-4 w-4" />
		{date ? format(addDays(new Date(date), 1), "PPP") : <span>Pick a date</span>}
	  </Button>
	</PopoverTrigger>
	<PopoverContent className="w-auto p-0">
	  <Calendar
		mode="single"
		selected={addDays(new Date(date), 1)}
		onSelect={value => selectDay(value)}
		initialFocus
	  />
	</PopoverContent>
  </Popover>
  )
}