<template>
  <div class="hourly">
    <div class="forecast">
      <div v-for="(hour, index) in hourWeather" :key="index">
        <p>{{ hour.Hour }}</p>
        <img :src="hour.img" width="60" height="50" />
        <p>{{ Math.round(hour.temperature) }}°C</p>
      </div>
    </div>
  </div>
</template>
<script>
//import axios from "axios";
//const API_KEY = "105f97b9ee0800fd961381bac4842c00";
//let date = new Date();
//let year = date.getFullYear();
//let month = "0" + (date.getMonth() + 1);
//let day = date.getDate();
//let now = year.toString() + "-" + month + "-" + day.toString();
//const baseURL = `https://api.openweathermap.org/data/2.5/forecast?q=`;  
import { mapState } from "vuex";
export default {

  name: "HourlyForecast",
  props: ['weather'],
    computed: mapState(["hourWeather"]),
  data() {
    return {

    };
  },
//  methods: {
//    getHourWeather:async function () {
//      axios
//        .get(`${baseURL}${this.$store.state.currentCity}&lang=ru&units=metric&appid=${API_KEY}`)
//        .then((response) => {
//          let responseAPI = response.data;
//          let day = responseAPI.list;
//          day.forEach((el) => {
//            let elDay = el.dt_txt.toString().substring(0, 10);
//            let Hour = el.dt_txt.toString().substring(11, 16);
//            let icon =
//              " http://openweathermap.org/img/wn/" +
//              el.weather[0].icon +
//              ".png";
//            let desc = el.weather[0].description;
//            let temp = el.main.temp;
//            if (this.day.length < 99) {
//              this.day.push({ elDay, Hour, icon, desc, temp });
//              if (elDay == now) {
//                this.hourWeather.push({ Hour, desc, icon, temp });
//              }
//            }
//          });
//        })
//        .catch((error) => {
//          console.log(error);
//        });
//    },
//  },
//mounted() {
//    this.getHourWeather();
//  },
};
</script>
<style scoped>
.hourly {
  flex-grow: 1;  
}

.forecast {
  display: flex;
  justify-content: center;
  padding: 10px;
  border: 1px solid white;
  border-radius: 34px;

}

.forecast div {
  margin-right: 10px;
}

p {
  margin: 0;
  padding: 0;
}
</style>