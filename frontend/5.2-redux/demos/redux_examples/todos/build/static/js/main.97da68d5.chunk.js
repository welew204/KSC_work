(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{13:function(e,t,n){e.exports=n(23)},23:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),l=n(5),c=n(4),o=n(2),u=0,a="SHOW_ALL",d="SHOW_COMPLETED",f="SHOW_ACTIVE",E=function(e){var t=e.active,n=e.children,r=e.onClick;return i.a.createElement("button",{onClick:r,disabled:t,style:{marginLeft:"4px"}},n)},m=Object(o.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{onClick:function(){return e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}}))(E),s=function(){return i.a.createElement("div",null,i.a.createElement("span",null,"Show: "),i.a.createElement(m,{filter:a},"All"),i.a.createElement(m,{filter:f},"Active"),i.a.createElement(m,{filter:d},"Completed"))},O=Object(o.b)()((function(e){var t,n=e.dispatch;return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:function(e){var r;(e.preventDefault(),t.value.trim())&&(n((r=t.value,{type:"ADD_TODO",id:u++,text:r})),t.value="")}},i.a.createElement("input",{ref:function(e){return t=e}}),i.a.createElement("button",{type:"submit"},"Add Todo")))})),p=function(e){var t=e.onClick,n=e.completed,r=e.text;return i.a.createElement("li",{onClick:t,style:{textDecoration:n?"line-through":"none"}},r)},v=function(e){var t=e.todos,n=e.toggleTodo;return i.a.createElement("ul",null,t.map((function(e){return i.a.createElement(p,Object.assign({key:e.id},e,{onClick:function(){return n(e.id)}}))})))},b=function(e,t){switch(t){case a:return e;case d:return e.filter((function(e){return e.completed}));case f:return e.filter((function(e){return!e.completed}));default:throw new Error("Unknown filter: "+t)}},_=Object(o.b)((function(e){return{todos:b(e.todos,e.visibilityFilter)}}),(function(e){return{toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))}}}))(v),T=function(){return i.a.createElement("div",null,i.a.createElement(O,null),i.a.createElement(_,null),i.a.createElement(s,null))},h=n(9),D=n(12),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(D.a)(e),[{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{completed:!e.completed}):e}));default:return e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},y=Object(c.b)({todos:I,visibilityFilter:w}),S=Object(c.c)(y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Object(l.render)(i.a.createElement(o.a,{store:S},i.a.createElement(T,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.97da68d5.chunk.js.map