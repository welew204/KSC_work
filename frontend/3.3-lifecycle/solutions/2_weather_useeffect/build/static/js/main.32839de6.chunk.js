(this.webpackJsonpweather_lifecycle=this.webpackJsonpweather_lifecycle||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(3),c=t.n(s),o=t(1);t(9);var l=function(){var e=localStorage.getItem("weathersearch");console.log("previous search was:",e),e||(e="Oakland, California");var a=Object(r.useState)(e),t=Object(o.a)(a,2),s=t[0],c=t[1],l=Object(r.useState)(!1),i=Object(o.a)(l,2),d=i[0],m=i[1],h=Object(r.useState)({location:"",temperature:"",description:"",windSpeed:"",humidity:"",pressure:""}),u=Object(o.a)(h,2),p=u[0],b=u[1];function f(){console.log("Hitting refresh",s);var e="http://api.openweathermap.org/data/2.5/weather?q="+s+"&appid=0de82b6b4ba5d843dac44bbee4d02543";m(!0),fetch(e).then((function(e){return e.json()})).then((function(e){m(!1),console.log("receiving data",e),e.main?b({location:e.name,temperature:Math.round(e.main.temp-273),description:e.weather[0].main,windSpeed:Math.round(e.wind.speed),humidity:Math.round(e.main.humidity),pressure:Math.round(e.main.pressure)}):b({location:"Not found.",description:""})}))}return Object(r.useEffect)(f,[]),Object(r.useEffect)((function(e){console.log("Seach box being changed:",s),localStorage.setItem("weathersearch",s)}),[s]),Object(r.useEffect)((function(){console.log("App is first mounted: useEffect with []")}),[]),Object(r.useEffect)((function(){console.log("App is was just rerendered: useEffect with no args")})),console.log("rerendering"),n.a.createElement("div",{className:"App App--clear"},n.a.createElement("div",{className:"WeatherDashboard"},d?n.a.createElement("div",{className:"loading"}):null,n.a.createElement("div",{className:"WeatherDashboard-location"},p.location),n.a.createElement("div",{className:"WeatherDashboard-overview"},n.a.createElement("span",{className:"WeatherDashboard-temperature"},p.temperature,"\xb0 ",n.a.createElement("span",null,"C")),n.a.createElement("div",{className:"WeatherDashboard-description"},p.description)),n.a.createElement("div",{className:"WeatherDashboard-details"},n.a.createElement("div",{className:"WeatherDashboard-label"},"Wind"),n.a.createElement("div",{className:"WeatherDashboard-data"},p.windSpeed," ",n.a.createElement("span",null,"km/h")),n.a.createElement("div",{className:"WeatherDashboard-label"},"Humidity"),n.a.createElement("div",{className:"WeatherDashboard-data"},p.humidity," ",n.a.createElement("span",null,"%")),n.a.createElement("div",{className:"WeatherDashboard-label"},"Pressure"),n.a.createElement("div",{className:"WeatherDashboard-data"},p.pressure)),n.a.createElement("div",{className:"Controls"},n.a.createElement("input",{placeholder:"Enter location name",value:s,onChange:function(e){return c(e.target.value)}}),n.a.createElement("button",{onClick:f},"Refresh"))))};c.a.render(n.a.createElement(l,null),document.getElementById("root"))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.32839de6.chunk.js.map