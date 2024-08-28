import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Data atual para formatar o input
const inputToDay = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual e define a data minima como sendo a data atual
selectedDate.value = inputToDay
selectedDate.min = inputToDay

form.addEventListener("submit", (e) => {
  e.preventDefault()
})