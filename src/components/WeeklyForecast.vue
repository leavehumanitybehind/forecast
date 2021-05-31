<template>
  <div class="main">
    <div class="week-list">
          <div class="card__week " v-for="(day, index) in filtered" :key="index">
            <img :src="day.img" width="60" height="60" />
            <div>
              <div class="time">{{ day.time }}</div>
            </div>

            <div class="details-temp">
              <span>{{ Math.round(day.temperature) }}°C</span>
            </div>
          </div>
         </div>
      </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "WeeklyForecast",
  data() {
    return {};
  },
  computed: {
    ...mapState(["filtered"]),
  }
};
</script>
<style scoped>
.week-list {
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px 0 30px;
}

.card__week {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(230, 217, 217);
  border-radius: 12px;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;

}

@media (min-width:768px) {
 .week-list {
  flex-wrap: nowrap;
    justify-content: space-between;
}

.card__week {
  margin-right: 0;
}
}

.darkApp .card__week {
    background-color: rgb(162, 132, 169);
}

.details-temp span {
  margin-right: 20%;
}

.time {
  font-size: 14px;
  opacity: 0.7;
}
</style>