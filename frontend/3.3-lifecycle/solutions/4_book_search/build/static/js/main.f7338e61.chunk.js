(this.webpackJsonpbook_search=this.webpackJsonpbook_search||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),l=a.n(c),r=a(1),s=(a(9),10);var i=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),i=Object(r.a)(l,2),u=i[0],m=i[1],b=Object(n.useState)(!1),E=Object(r.a)(b,2),g=E[0],h=E[1],d=Object(n.useState)("the lord of the rings"),p=Object(r.a)(d,2),f=p[0],j=p[1],k=Object(n.useState)(0),v=Object(r.a)(k,2),O=v[0],y=v[1];function N(){var e=["http://openlibrary.org/search.json?q=",f.replace(/\W+/g,"+"),"&limit=",s,"&offset=",s*(O||0)].join("");console.log("making query to ",e),h(!0),fetch(e).then((function(e){return e.json()})).then((function(e){c(Math.ceil(e.numFound/s)),console.log("data",e),m(e.docs),h(!1)}))}return Object(n.useEffect)(N,[O]),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"SearchBox"},o.a.createElement("input",{placeholder:"Type a book title...",onChange:function(e){j(e.target.value)},value:f}),o.a.createElement("button",{onClick:function(){0===O?N():y(0)}},"Search")),o.a.createElement("div",{className:"Paginator"},o.a.createElement("button",{onClick:function(){O<=0||y(O-1)}},"\u2190"),o.a.createElement("span",null,O+1," / ",a+1),o.a.createElement("button",{onClick:function(){O>=a||y(O+1)}},"\u2192")),o.a.createElement("div",{className:"Books"},g?o.a.createElement("div",{className:"loader"},"Loading..."):u.map((function(e){return o.a.createElement("div",{className:"Books-book",key:e.key},o.a.createElement("img",{src:"http://covers.openlibrary.org/b/id/".concat(e.cover_i,"-M.jpg"),alt:"cover"}),o.a.createElement("div",{className:"Books-book-details"},o.a.createElement("div",{className:"Books-book-title"},e.title_suggest),o.a.createElement("strong",null,"Author:")," ",(e.author_name||[]).join(","),o.a.createElement("br",null),o.a.createElement("strong",null,"Language:")," ",(e.language||[]).join(","),o.a.createElement("br",null),o.a.createElement("strong",null,"Year Published:")," ",e.first_publish_year,o.a.createElement("br",null),o.a.createElement("strong",null,"Publisher(s):")," ",(e.publisher||[]).join(","),o.a.createElement("br",null)))}))))};l.a.render(o.a.createElement(i,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.f7338e61.chunk.js.map