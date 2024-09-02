import { schedulesDay } from "../schedules/load.js"

//Selecionar o input data
const selectedDate = document.getElementById("date")

//Recarrega a lsita de horários quando o iniput de datat mudar
selectedDate.onchange = () => schedulesDay()