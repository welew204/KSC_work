(this.webpackJsonpquidditch_components=this.webpackJsonpquidditch_components||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"name":"Angelina Johnson","position":"Chaser","house":"Gryffindor"},{"name":"Marcus Flint","position":"Chaser","house":"Slytherin"},{"name":"Zacharias Smith","position":"Chaser","house":"Hufflepuff"},{"name":"Roger Davies","position":"Chaser","house":"Ravenclaw"},{"name":"Fred Weasley","position":"Beater","house":"Gryffindor"},{"name":"Vincent Crabbe","position":"Beater","house":"Slytherin"},{"name":"Maxine O\'Flaherty","position":"Beater","house":"Hufflepuff"},{"name":"Duncan Inglebee","position":"Beater","house":"Ravenclaw"},{"name":"Ronald Weasley","position":"Keeper","house":"Gryffindor"},{"name":"Miles Bletchley","position":"Keeper","house":"Slytherin"},{"name":"Herbert Fleet","position":"Keeper","house":"Hufflepuff"},{"name":"Grant Page","position":"Keeper","house":"Ravenclaw"},{"name":"Harry Potter","position":"Seeker","house":"Gryffindor"},{"name":"Draco Malfoy","position":"Seeker","house":"Slytherin"},{"name":"Cedric Diggory","position":"Seeker","house":"Hufflepuff"},{"name":"Cho Chang","position":"Seeker","house":"Ravenclaw"}]')},,,function(e,n,t){e.exports=t(13)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(4),i=t.n(r),c=t(1);t(10),t(11);var l=function(){return o.a.createElement("header",{className:"Nav"},o.a.createElement("img",{src:"https://i.imgur.com/NrJQBLb.png",alt:"snitch"}),o.a.createElement("h1",{className:"Nav-title"},"Quidditch Manager"))};t(12);var s=function(e){return e.info?o.a.createElement("div",{className:"Character"},o.a.createElement("h3",null,e.info.name),o.a.createElement("h4",null,e.info.house),o.a.createElement("button",{onClick:e.onButtonClick},e.buttonText||"Choose")):o.a.createElement("em",null,"None selected")},u=t(2),m=u.filter((function(e){return"Chaser"===e.position})),f=u.filter((function(e){return"Beater"===e.position})),p=u.filter((function(e){return"Keeper"===e.position})),h=u.filter((function(e){return"Seeker"===e.position}));var E=function(){var e=Object(a.useState)(m),n=Object(c.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)(f),u=Object(c.a)(i,2),E=u[0],v=u[1],d=p,b=h,g=Object(a.useState)([]),k=Object(c.a)(g,2),C=k[0],S=k[1],y=Object(a.useState)([]),B=Object(c.a)(y,2),N=B[0],M=B[1],O=Object(a.useState)(null),R=Object(c.a)(O,2),T=R[0],j=R[1],x=Object(a.useState)(null),K=Object(c.a)(x,2),w=K[0],H=K[1];return o.a.createElement("div",{className:"App"},o.a.createElement(l,null),o.a.createElement("div",{className:"TeamManager"},o.a.createElement("div",{className:"TeamManager-position"},o.a.createElement("h2",null,"Starting Keeper"),o.a.createElement(s,{info:T,onButtonClick:function(){j(null)},buttonText:"Remove"})),o.a.createElement("div",{className:"TeamManager-position"},o.a.createElement("h2",null,"Roster (Keepers)"),d.map((function(e,n){return o.a.createElement(s,{key:n,info:e,onButtonClick:function(){return function(e){var n=d[e];j(n)}(n)}})}))),o.a.createElement("div",{className:"TeamManager-position"},o.a.createElement("h2",null,"Starting Seeker"),o.a.createElement(s,{info:w,onButtonClick:function(){H(null)},buttonText:"Remove"})),o.a.createElement("div",{className:"TeamManager-position"},o.a.createElement("h2",null,"Roster (Seekers)"),b.map((function(e,n){return o.a.createElement(s,{key:n,info:e,onButtonClick:function(){return function(e){H(b[e])}(n)}})}))),o.a.createElement("div",{className:"TeamManager-position"},o.a.createElement("h2",null,"Starting Chasers"),C.map((function(e,n){return o.a.createElement(s,{key:n,info:e,onButtonClick:function(){return function(e){var n=C.slice(),a=t.slice(),o=n[e];a.push(o),n.splice(e,1),S(n),r(a)}(n)},buttonText:"Remove"})}))),o.a.createElement("div",{className:"TeamManager-position"},o.a.createElement("h2",null,"Roster (Chasers)"),t.map((function(e,n){return o.a.createElement(s,{key:n,info:e,onButtonClick:function(){return function(e){var n=C.slice(),a=t.slice(),o=a[e];n.push(o),a.splice(e,1),S(n),r(a)}(n)}})}))),o.a.createElement("div",{className:"TeamManager-position"},o.a.createElement("h2",null,"Starting Beaters"),N.map((function(e,n){return o.a.createElement(s,{key:n,info:e,onButtonClick:function(){return function(e){var n=N.slice(),t=E.slice(),a=n[e];t.push(a),n.splice(e,1),M(n),v(t)}(n)},buttonText:"Remove"})}))),o.a.createElement("div",{className:"TeamManager-position"},o.a.createElement("h2",null,"Roster (Beaters)"),E.map((function(e,n){return o.a.createElement(s,{key:n,info:e,onButtonClick:function(){return function(e){var n=N.slice(),t=E.slice(),a=t[e];n.push(a),t.splice(e,1),M(n),v(t)}(n)}})})))))};i.a.render(o.a.createElement(E,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.bcec4078.chunk.js.map