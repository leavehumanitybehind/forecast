import Vue from 'vue';
import Vuex from 'vuex';
import weatherApi from '../services/api';
Vue.use(Vuex);

let setObj = (el) => {
    let time = new Date(el.dt_txt).toLocaleString("ru", {
        month: "long",
        day: "numeric",
    });
    let elDay = el.dt_txt.toString().substring(0, 10);
    let Hour = el.dt_txt.toString().substring(11, 16);
    let temperature = el.main.temp;
    let feelslike = el.main.feels_like;
    let times = el.sys.pod;
    let weather_descriptions = el.weather[0].description;
    let img =
        "http://openweathermap.org/img/wn/" + el.weather[0].icon + ".png";
    let obj = ({ time, temperature, feelslike, weather_descriptions, img, times, elDay, Hour });
    return obj;
}

export const store = new Vuex.Store({
    state: {
        citySearch: '',
        currentCity: '',
        weather: {
            name: "--",
            temperature: "--",
            weather_descriptions: "--",
            wind_speed: "--",
            wind_degree: "--",
            feelslike: "--",
            img: "",
            time: "120",
        },
        weekWeather: {
            time: '',
            temperature: '',
            feelslike: '',
            weather_descriptions: '',
            img: ''
        },
        week: [],
        filtered: [],
        hourWeather: []
    },

    getters: {
        CITY: state => {
            return state.currentCity;
        },
        CITY_SEARCH: state => {
            return state.citySearch;
        },
        WEATHER: state => {
            return state.weather;
        },
    },

    mutations: {
        SET_CITY_SEARCH: function (state, payload) {
            state.citySearch = payload;
        },
        SET_WEATHER: function (state, payload) {
            let api = payload;
            state.сurrentCity = payload.name;
            state.weather.id = api.weather[0].main;
            state.weather.name = api.name;
            state.weather.temperature = api.main.temp;
            state.weather.feelslike = api.main.feels_like;
            state.weather.weather_descriptions = api.weather[0].description;
            state.weather.wind_speed = api.wind.speed;
            state.weather.wind_degree = api.wind.deg;
            state.weather.date = api.dt_txt;
            state.weather.dayTime = api.sys.pod;
        },
        ADD_WEEKDAYS: function (state, payload) {
            let date = new Date();
            let year = date.getFullYear();
            let month = "0" + (date.getMonth() + 1);
            let day = date.getDate();
            let now = year.toString() + "-" + month + "-" + day.toString();
            payload.forEach((el) => {
                setObj(el);
                let em = setObj(el);
                if (em.elDay == now) {
                    state.hourWeather.push(em);
                }
                state.week.push(setObj(el));
                state.filtered = state.week.filter((el) => el.times == "d");
                state.filtered = Object.values(
                    state.filtered.reduce((unique, o) => {
                        if (!unique[o.time]) {
                            unique[o.time] = o;
                        }
                        return unique;
                    }, {})
                );
            })
        }
    },

    actions: {
        async GET_DEFAULT_LOCATION({ commit }) {
            if (navigator.geolocation) {
try {  navigator.geolocation.getCurrentPosition((data) => {
                    weatherApi.byCoords(data.coords.latitude, data.coords.longitude).then((res) => {
                        commit("SET_WEATHER", res.data);
                        this.state.currentCity = res.data.name;
                    })       
                });
            } 
            catch {
                        (error) => console.log(error)
                    }
              try {
                     navigator.geolocation.getCurrentPosition((data) => {
                        weatherApi.forWeekByCoords(data.coords.latitude, data.coords.longitude)
                            .then((res) => {
console.log(res)
                                commit("ADD_WEEKDAYS", res.data.list);
                            })
                });
              }
                catch {
                    (error) => console.log(error)
                }
            } else if (!navigator.geolocation) {
                alert(
                    "Пожалуйста дайте доступ к геопозиции или выберите ваш город самостоятельно"
                );
            }
        },
        GET_WEATHER_BY_NAME({ commit }, city) {
                weatherApi.byName(city)
                    .then((res) => {
                        commit("SET_WEATHER", res.data);
                    }).catch((error) => {
                    alert(
                        "Город не найден!"
                    );
                    console.log(error);
                })
    

            try {
                weatherApi.forWeek(this.getters.CITY_SEARCH)
                    .then((res) => {
                        this.state.hourWeather = [];
                        this.state.week = [];
                        this.state.filtered = [];
                        commit("ADD_WEEKDAYS", res);
                    })
            }
            catch {
                ((error) => {
                    console.log(error);
                })
            }
        },

    }
});