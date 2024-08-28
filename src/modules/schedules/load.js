import { hoursLoad } from "../form/hours-load";

//seleciona o input de data
const selectedDate = document.getElementById("date")
export function schedulesDay() {
  //Obtem a data do input
  const date = selectedDate.value

  //Renderizar as horas disponíveis
  hoursLoad({ date })
}