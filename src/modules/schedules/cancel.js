import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "./load.js"

const periods = document.querySelectorAll(".period")

//Gerar evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  //Captura o evento de clique na lista
  period.addEventListener("click", async (e) => {
    if (e.target.classList.contains("cancel-icon")) {
      //Obter a li pai do elemento clicado
      const item = e.target.closest("li")
      
      //Pega o id do agendamento para remover
      const { id } = item.dataset

      //Confirma que o id foi selecionado
      if (id) {
        const isConfirm = confirm("Deseja cancelar o agendamento?")

        //Faz a requisição na api e recarrega os agendamentos
        if (isConfirm) {
          await scheduleCancel({ id })
          schedulesDay()
        }
      }
    }
  })
})