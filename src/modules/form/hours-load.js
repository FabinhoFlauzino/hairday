import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";
import { hoursClick } from "./hours-click";

//pegando a ul de hours
const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
  //Limpa lista de horários
  hours.innerHTML = ""

  const opening = openingHours.map((hour) => {
    //Recuperar somente a hora
    const [scheduleHour] = hour.split(":")

    //Adicionar a hora na dara e verificar se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

    return {
      hour,
      available: isHourPast
    }
  })

  //Renderizando os horários
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li")

    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour

    //verificando o período e adicionando a li header na lista
    if (hour === "9:00") {
      hourHeaderAdd("Manhã")
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde")
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite")
    }

    hours.append(li)
  })

  //Adiciona o evento de click nos horários disponíveis
  hoursClick()
}

//Função para criar e adicionar um li de cabeçalho
function hourHeaderAdd(title) {
  const header = document.createElement("li")

  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)
}
