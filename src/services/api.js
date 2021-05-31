import axios from "axios";
const instance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/"
})

const weatherApi  = {
    byCoords(lat, lon) {
        return instance.get(`weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=105f97b9ee0800fd961381bac4842c00`)
    }, 
    forWeekByCoords(lat, lon) {
        return instance.get(`forecast?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=105f97b9ee0800fd961381bac4842c00`)
    },
    byName(city) {
        return instance.get(`weather?q=${city}&units=metric&lang=ru&appid=105f97b9ee0800fd961381bac4842c00`)
    },
    forWeek(city) {
        return instance.get(`forecast?q=${city}&lang=ru&units=metric&appid=105f97b9ee0800fd961381bac4842c00`)
            .then(res => res.data.list)
    }
      
}

export default weatherApi;