(function(e){function t(t){for(var n,o,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,c=1;c<r.length;c++){var s=r[c];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/forecast/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"02fc":function(e,t,r){},"034f":function(e,t,r){"use strict";r("85ec")},"0502":function(e,t,r){e.exports=r.p+"img/snow.3257144a.svg"},"06a8":function(e,t,r){},"1a7d":function(e,t,r){e.exports=r.p+"img/clear.f9b5aaf2.svg"},"1f54":function(e,t,r){"use strict";r("591e")},"24db":function(e,t,r){e.exports=r.p+"img/moon-btn.fae36699.svg"},"2eb4":function(e,t,r){e.exports=r.p+"img/cloud.c9c222dc.svg"},3136:function(e,t,r){e.exports=r.p+"img/moon.fd4da191.svg"},"31e8":function(e,t,r){var n={"./clear.svg":"1a7d","./cloud.svg":"2eb4","./clouds.svg":"6bd0","./cloudy-even.svg":"73a6","./drizzle.svg":"7008","./dust.svg":"c5a7","./moon-btn.svg":"24db","./moon.svg":"3136","./rain.svg":"e006","./snow.svg":"0502","./sun-btn.svg":"f75d","./thunderstorm.svg":"d6df","./wind.svg":"5b6d"};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id="31e8"},"4ade":function(e,t,r){"use strict";r("02fc")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:[{lightApp:e.day,darkApp:!e.day}],attrs:{id:"app"}},[r("div",{staticClass:"btns"},[r("Search"),r("button",{staticClass:"header__btn",class:[{lightTheme:e.day,darkBtn:!e.day}],on:{click:function(t){e.day=!e.day}}})],1),e.filtered.length?r("div",{staticClass:"wrapper"},[r("div",{staticClass:"card",class:{lightTheme:e.day}},[r("WeatherCard"),r("div",{staticClass:"additional__card"},[r("HourlyForecast"),r("WeeklyForecast")],1)],1)]):e._e()])},i=[],o=r("1da1"),c=r("5530"),s=(r("96cf"),r("ca82"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"weather__card"},[n("span",{staticClass:"weather__name"},[e._v(" "+e._s(e.weather.name))]),n("div",{staticClass:"weather__cond"},[e._v(e._s(e.weather.weather_descriptions))]),n("div",{staticClass:"temp__wrapper"},[n("div",{staticClass:"visualize"},[n("img",{attrs:{src:r("31e8")("./"+e.weather.id.toLowerCase()+".svg"),width:"50",height:"50"}}),n("span",{staticClass:"weather__temperature"},[e._v(e._s(Math.round(e.weather.temperature))+"°C")])]),n("div",{staticClass:"weather__details"},[n("p",{staticClass:"weather__cond feellike"},[e._v(" oщущается как: "+e._s(Math.round(e.weather.feelslike))+"°C ")]),n("p",{staticClass:"weather__cond wind"},[e._v("ветер: "+e._s(e.weather.wind_speed)+"м/с")])])])])}),u=[],d=r("94ea"),l={name:"WeatherCard",data:function(){return{}},computed:Object(c["a"])({},Object(d["b"])(["weather"])),methods:{}},f=l,p=(r("4ade"),r("2877")),h=Object(p["a"])(f,s,u,!1,null,"655d94f6",null),m=h.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[e.filtered.length?n("div",{staticClass:"week-list"},e._l(e.filtered,(function(t,a){return n("div",{key:a,staticClass:"card__week"},[n("img",{attrs:{src:r("31e8")("./"+t.id.toLowerCase()+".svg"),width:"40",height:"40"}}),n("div",[n("div",{staticClass:"time"},[e._v(e._s(t.time))])]),n("div",{staticClass:"details-temp"},[n("span",[e._v(e._s(Math.round(t.temp_max))+"°C")])])])})),0):e._e()])},v=[],_={name:"WeeklyForecast",data:function(){return{}},computed:Object(c["a"])({},Object(d["b"])(["filtered"]))},b=_,w=(r("1f54"),Object(p["a"])(b,g,v,!1,null,"36267d8a",null)),y=w.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hourly"},[e.hourWeather.length?n("div",{staticClass:"forecast"},e._l(e.hourWeather,(function(t,a){return n("div",{key:a},[n("p",[e._v(e._s(t.Hour))]),n("img",{attrs:{src:r("31e8")("./"+t.id.toLowerCase()+".svg"),width:"35",height:"40"}}),n("p",[e._v(e._s(Math.round(t.temperature))+"°C")])])})),0):e._e()])},E=[],k={name:"HourlyForecast",computed:Object(d["b"])(["hourWeather"]),data:function(){return{}}},x=k,O=(r("7293"),Object(p["a"])(x,C,E,!1,null,"fb74423a",null)),S=O.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],staticClass:"input__search",attrs:{type:"text",placeholder:"What City",autocomplete:"true",autofocus:""},domProps:{value:e.city},on:{input:function(t){t.target.composing||(e.city=t.target.value)}}})])},W=[],j={name:"Search",data:function(){return{city:""}},methods:{submit:function(){this.$store.commit("SET_CITY_SEARCH",this.city),this.$store.dispatch("GET_WEATHER_BY_NAME",this.city),this.city=""}},computed:{}},A=j,D=(r("b7c4"),Object(p["a"])(A,T,W,!1,null,"d1807afe",null)),H=D.exports,R={components:{WeatherCard:m,WeeklyForecast:y,Search:H,HourlyForecast:S},name:"App",data:function(){return{current:!0,day:!0}},computed:Object(c["a"])({},Object(d["b"])(["filtered"])),created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.dispatch("GET_DEFAULT_LOCATION");case 1:case"end":return t.stop()}}),t)})))()}},M=R,P=(r("034f"),Object(p["a"])(M,a,i,!1,null,null,null)),N=P.exports,Y=(r("d3b7"),r("25f0"),r("a4d3"),r("e01a"),r("b0c0"),r("498a"),r("159b"),r("4de4"),r("07ac"),r("99af"),r("bc3a")),F=r.n(Y),I=F.a.create({baseURL:"https://api.openweathermap.org/data/2.5/"}),L={byCoords:function(e,t){return I.get("weather?lat=".concat(e,"&lon=").concat(t,"&units=metric&lang=ru&appid=105f97b9ee0800fd961381bac4842c00"))},forWeekByCoords:function(e,t){return I.get("forecast?lat=".concat(e,"&lon=").concat(t,"&units=metric&lang=ru&appid=105f97b9ee0800fd961381bac4842c00"))},byName:function(e){return I.get("weather?q=".concat(e,"&units=metric&lang=ru&appid=105f97b9ee0800fd961381bac4842c00"))},forWeek:function(e){return I.get("forecast?q=".concat(e,"&lang=ru&units=metric&appid=105f97b9ee0800fd961381bac4842c00")).then((function(e){return e.data.list}))}},$=L;n["a"].use(d["a"]);var z=function(){navigator.geolocation?navigator.geolocation.watchPosition((function(){}),(function(e){e.code==e.PERMISSION_DENIED&&alert("Доступ к геопозиции запрещен, пожалуйста найдите город самостоятельно!")})):alert("Ваш браузер не поддерживает геолокацию, пожалуйста найдите город самостоятельно!")},B=function(e){var t=new Date(e.dt_txt).toLocaleString("ru",{month:"long",day:"numeric"}),r=e.dt_txt.substring(0,10),n=e.dt_txt.toString().substring(11,16),a=e.main.temp,i=e.main.temp_max,o=e.main.feels_like,c=e.sys.pod,s=e.weather[0].description,u=e.weather[0].main,d="http://openweathermap.org/img/wn/"+e.weather[0].icon+".png",l={time:t,temperature:a,feelslike:o,weather_descriptions:s,img:d,times:c,elDay:r,Hour:n,id:u,temp_max:i};return l},G=new d["a"].Store({state:{citySearch:"",currentCity:"",weather:{name:"--",temperature:"--",weather_descriptions:"--",wind_speed:"--",wind_degree:"--",feelslike:"--",img:"",time:"120"},weekWeather:{time:"",temperature:"",feelslike:"",weather_descriptions:"",img:""},week:[],filtered:[],hourWeather:[]},getters:{CITY:function(e){return e.currentCity},CITY_SEARCH:function(e){return e.citySearch},WEATHER:function(e){return e.weather}},mutations:{SET_CITY_SEARCH:function(e,t){e.citySearch=t},SET_WEATHER:function(e,t){var r=t;e.сurrentCity=t.name,e.weather.id=r.weather[0].main,e.weather.name=r.name,e.weather.temperature=r.main.temp,e.weather.feelslike=r.main.feels_like,e.weather.weather_descriptions=r.weather[0].description,e.weather.wind_speed=r.wind.speed,e.weather.wind_degree=r.wind.deg},ADD_WEEKDAYS:function(e,t){var r=new Date,n=r.getFullYear(),a="0"+(r.getMonth()+1),i=r.toString().substring(7,10).trim(),o=n.toString()+"-"+a+"-"+i;t.forEach((function(t){B(t);var r=B(t);r.elDay==o&&e.hourWeather.push(r),e.week.push(B(t)),e.filtered=e.week.filter((function(e){return"d"==e.times})),e.filtered=e.week.filter((function(e){return"12:00"==e.Hour})),e.filtered=Object.values(e.filtered.reduce((function(e,t){return e[t.time]||(e[t.time]=t),e}),{}))}))}},actions:{GET_DEFAULT_LOCATION:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.commit,z(),navigator.geolocation){try{navigator.geolocation.getCurrentPosition((function(e){$.byCoords(e.coords.latitude,e.coords.longitude).then((function(e){n("SET_WEATHER",e.data),t.state.currentCity=e.data.name}))}))}catch(a){}try{navigator.geolocation.getCurrentPosition((function(e){$.forWeekByCoords(e.coords.latitude,e.coords.longitude).then((function(e){n("ADD_WEEKDAYS",e.data.list)}))}))}catch(i){}}else console.log("Geolocation not supported by your browser");case 3:case"end":return r.stop()}}),r)})))()},GET_WEATHER_BY_NAME:function(e,t){var r=this,n=e.commit;$.byName(t).then((function(e){n("SET_WEATHER",e.data)})).catch((function(e){alert("Город не найден!"),console.log(e)}));try{$.forWeek(this.getters.CITY_SEARCH).then((function(e){r.state.hourWeather=[],r.state.week=[],r.state.filtered=[],n("ADD_WEEKDAYS",e)}))}catch(a){}}}});n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(N)},store:G}).$mount("#app")},"591e":function(e,t,r){},"5b6d":function(e,t,r){e.exports=r.p+"img/wind.35bdfe38.svg"},"6bd0":function(e,t,r){e.exports=r.p+"img/clouds.f56077ed.svg"},7008:function(e,t,r){e.exports=r.p+"img/drizzle.7cfdb5f4.svg"},7293:function(e,t,r){"use strict";r("bbb6")},"73a6":function(e,t,r){e.exports=r.p+"img/cloudy-even.38564df1.svg"},"85ec":function(e,t,r){},b7c4:function(e,t,r){"use strict";r("06a8")},bbb6:function(e,t,r){},c5a7:function(e,t,r){e.exports=r.p+"img/dust.0dfc4518.svg"},d6df:function(e,t,r){e.exports=r.p+"img/thunderstorm.cb502ff2.svg"},e006:function(e,t,r){e.exports=r.p+"img/rain.ae592aff.svg"},f75d:function(e,t,r){e.exports=r.p+"img/sun-btn.8387c4df.svg"}});
//# sourceMappingURL=app.1697d7a2.js.map