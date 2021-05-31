<template>
  <form @submit.prevent="submit()">
    <input
      class="input__search"
      type="text"
      placeholder="What City"
      v-model="city"
      autocomplete="true"
    />
  </form>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      city: ''
    };
  },
methods: {
  submit() {
    this.$store.commit("SET_CITY_SEARCH", this.city) ;      
    this.$store.dispatch("GET_WEATHER_BY_NAME", this.city);
    this.city = '';

}
},
computed: {

}
};
</script>
<style scoped>
form {
   flex-grow: 1;
   margin-right: 10px;
}
.input__search {
  padding: 12px 24px;
  border-radius: 24px;
  width: 100%;
  border: 2px solid white;
  outline: none;
  font-family: "Oswald", sans-serif, Arial, sans-serif;
  font-size: 18px;
}

.input__search:hover
{
 border: 2px solid rgb(170, 170, 220);
}

.input__search:active, .input__search:focus {
 border: 2px solid rgb(115, 115, 148);
}
</style>