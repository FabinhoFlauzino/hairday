import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
  try {
    //Fazendo a requisição, trazendo os dados
    const response = await fetch(`${apiConfig.baseUrl}/schedules`)

    //converte para json
    const data = await response.json()

    //filtra o agendamento para o dia selecionado
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    )

    return dailySchedules
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar agendamento")
  }
}