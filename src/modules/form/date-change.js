import { schedulesDay } from "../schedules/load"

//Selecionar o input data
const selectedDate = document.getElementById("date")

selectedDate.addEventListener("change", () => {
  return schedulesDay()
})