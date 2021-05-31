<template>
  <div id="app" v-bind:class="[{ lightApp: day, darkApp: !day }]">
    <div class="btns">
    <Search />
     <button
          class="header__btn"
          v-bind:class="[{ lightTheme: day, darkBtn: !day }]"
          @click="day = !day"
        ></button>
    </div>
    <div class="wrapper" v-if="filtered.length">

      <div class="card" v-bind:class="{ lightTheme: day }">
        <WeatherCard />
         <div class="additional__card">
           <HourlyForecast  />
        <WeeklyForecast  />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherCard from "./components/WeatherCard.vue";
import WeeklyForecast from "./components/WeeklyForecast.vue";
import HourlyForecast from './components/HourlyForecast.vue';
import Search from "./components/Search.vue";
import { mapState } from "vuex";
export default {
  components: { WeatherCard, WeeklyForecast, Search, HourlyForecast },
  name: "App",
  data() {
    return {
      current: true,
      day: true,
    };
  },

  computed: {
    ...mapState(["filtered"]), 
  },
  async created() {
    this.$store.dispatch("GET_DEFAULT_LOCATION");
  },
};
</script>

<style>
@import url("https:fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&display=swap");
* {
  box-sizing: border-box;
}

body{
	height: 100%;
	width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Oswald", sans-serif, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
   font-size: 14px;
}

@media (min-width:568px) {
  #app {
font-size: 18px;
}
}

.lightApp {
  background-image: linear-gradient(#ffffff, rgb(200, 202, 247));
  color: #2c3e50;
}

.darkApp {
    background-image: linear-gradient(#0c0606, rgb(60, 54, 240));
    color: white;
}

.wrapper {
 width: 80%;
  margin: 30px auto 0;
  padding-bottom: 82px;

}

@media (min-width:1268px) {
  .wrapper {
 width: 40%; 
}
}

.card {
  border-radius: 30px;
  background-image: url("./assets/night-theme.jpg");
   background-repeat: no-repeat;
   background-position: 85% 15%;
   background-size: cover;
   -webkit-box-shadow: 24px 16px 52px -3px rgba(34, 60, 80, 0.4);
-moz-box-shadow: 24px 16px 52px -3px rgba(34, 60, 80, 0.4);
box-shadow: 24px 16px 52px -3px rgba(34, 60, 80, 0.4);

}
.lightTheme {
   background-image: url("./assets/lighttheme.jpg");
   background-repeat: no-repeat;
    background-position: 45% 5%;
   background-size: cover;
}



.lightTheme .additional__card{
  background-image: linear-gradient(#c2c1c1, rgb(107, 192, 216));
}

.additional__card{
   background-image: linear-gradient(#9d9b9b, rgb(103, 6, 116));
}

.weather__name {
  margin-top: 40px;
  font-size: 34px;
  line-height: 120%;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1in;
  padding: 0;
  margin: 0;
}

@media (min-width:668px) {
  .weather__name {
  font-size: 54px;
}
}

.weather__cond {
  opacity: 0.7;
  margin: 0;
  padding: 0;
}

.btns {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin:0 auto 10px;
  padding-top: 40px;
}

@media (min-width:1268px) {
  .btns {
 width: 40%; 
}
}

.header__btn {
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  width: 30px;
  height: 30px; 
  background-image: url("./assets/sun-btn.svg");
  cursor: pointer;
}

.header__btn:hover {
  transform: scale(1.2);
}

 .darkBtn {
  background-image: url("./assets/moon-btn.svg");
}

.additional__card {
  border-radius: 30px;
}
</style>
