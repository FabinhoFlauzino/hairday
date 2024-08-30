import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";
import { hoursLoad } from "../form/hours-load";
import { schedulesShow } from "./show";

//seleciona o input de data
const selectedDate = document.getElementById("date")
export async function schedulesDay() {
  //Obtem a data do input
  const date = selectedDate.value

  //Buscar na APi os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })

  //Exibe o agendamento
  schedulesShow({ dailySchedules })

  //Renderizar as horas disponíveis
  hoursLoad({ date })
}


