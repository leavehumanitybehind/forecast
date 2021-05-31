<template>
  <div class="weather__card">
    <span class="weather__name"> {{ weather.name }}</span>
    <div class="weather__cond">{{ weather.weather_descriptions }}</div>
    <div class="temp__wrapper">
      <div class="visualize">
        <img :src="require(`../assets/${weather.id.toLowerCase()}.svg`)" />
        <span class="weather__temperature"
          >{{ Math.round(weather.temperature) }}°C</span
        >
      </div>
      <div class="weather__details">
        <p class="weather__cond feellike">
          oщущается как: {{ Math.round(weather.feelslike) }}°C
        </p>
        <p class="weather__cond wind">ветер: {{ weather.wind_speed }}м/с</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "WeatherCard",
  data() {
    return {
      img: this.weather.img,
    };
  },
  computed: {
    ...mapState(["weather"]),
  },
  methods: {},
};
</script>
<style scoped>
.weather__card {
  padding: 40px;
}

.visualize {
  margin: 0 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 80px;
  height: 80px;
}
.weather__temperature {
  font-size: 58px;
  line-height: 120%;
}
.weather__details {
  margin: 0 auto;
  width: 40%;
}


.feellike {
  flex-grow: 1;
}
</style>