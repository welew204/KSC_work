(this.webpackJsonpfetch_state=this.webpackJsonpfetch_state||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),o=a(1),u=(a(9),null);var i=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),s=i[0],m=i[1],h=Object(n.useState)([]),p=Object(o.a)(h,2),g=p[0],f=p[1];function d(){console.log("Getting clicked!",s);var e=arguments[0]||s;c(!0),fetch("https://api.github.com/users/".concat(e,"/repos")).then((function(e){return e.json()})).then((function(e){if("Not Found"===e.message)return f([]),void c(!1);console.log("data",e),f(e),c(!1)}))}return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:"https://i.imgur.com/IGjUDRd.png",alt:"octo"}),r.a.createElement("h1",{className:"App-title"},"GitHub Profile Search")),r.a.createElement("div",{className:"Form"},r.a.createElement("input",{placeholder:"Enter your GitHub username",value:s,onChange:function(e){var t,a=e.target.value;m(a),t=a,console.log("the username is",t),clearTimeout(u),u=setTimeout((function(){d(t)}),500)}}),r.a.createElement("h2",null,s?r.a.createElement("a",{href:"http://github.com/"+s+"/",target:"_blank",rel:"noopener noreferrer"},"URL: github.com/",s||"...","/"):"..."),r.a.createElement("button",{onClick:function(){return d()}},"Submit"),r.a.createElement("p",null,0===g.length?"No results.":""),g.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("hr",null),r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.description))})),a?r.a.createElement("img",{src:"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif",alt:"loading"}):null))};l.a.render(r.a.createElement(i,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.74a58603.chunk.js.map