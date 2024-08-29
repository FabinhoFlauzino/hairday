import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedules-new"


const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

// Data atual para formatar o input
const inputToDay = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual e define a data minima como sendo a data atual
selectedDate.value = inputToDay
selectedDate.min = inputToDay

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  try {
    //Recuperando o nome do cliente
    const name = clientName.value.trim()

    if (!name) {
      return alert("Informe o nome do cliente")
    }

    //Recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected")

    if (!hourSelected) {
      return alert("Selecione um horário")
    }

    //Recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":")

    //Inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    //Gerar ID
    const id = new Date().getTime()

    //Salvando dados na API
    await scheduleNew({
      id, name, when
    })

  } catch (error) {
    alert("Não foi possível realizar o agendamento")
  }
})