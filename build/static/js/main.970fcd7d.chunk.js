(this["webpackJsonpwestonbirt-golf"]=this["webpackJsonpwestonbirt-golf"]||[]).push([[0],{25:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(0),a=n(15),s=n.n(a),i=n(18),o=n(19),u=n(17),l=n(16),d=n(13),b=n(11),j=n(12),f=(n(25),function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){var e=new XMLHttpRequest;e.open("GET","https://cors-anywhere.herokuapp.com/https://www.eventbrite.co.uk/o/westonbirt-leisure-16812056330"),e.send(),e.onload=function(){if(200!=e.status)console.log("Error");else{var t=document.createElement("html");t.innerHTML=e.response,f(t)}}}),[]);var s=function(e){return"Monday"==e?1:"Tuesday"==e?2:"Wednesday"==e?3:"Thursday"==e?4:"Friday"==e?5:"Saturday"==e?6:"Sunday"==e?7:void 0},f=function(e){var t=e.getElementsByTagName("a");Object.keys(t).map((function(e){if("eds-event-card-content__action-link"==t[e].getAttribute("class")){var n,r;document.createElement("div").innerHTML=t[e].innerHTML;var c=t[e].querySelectorAll("div");Object.keys(c).map((function(e){"eds-is-hidden-accessible"==c[e].getAttribute("class")&&(n=c[e].innerText,r=n.split("-")[1].split("(")[0].trim())}));var o=t[e].getAttribute("href");if(r&&n&&o){var u={day:r,dayNumber:s(r),title:n,url:o};a((function(e){return[].concat(Object(i.a)(e),[u])}))}}}))},h=function(e){return function(){var e=new Date;return 0==e.getDay?7:e.getDay()}()==e.dayNumber?Object(r.jsx)("a",{style:{color:"#f88c00"},href:e.url,children:e.day}):Object(r.jsx)("a",{style:{color:"#202020"},href:e.url,children:e.day})};n.sort((function(e,t){return e.dayNumber-t.dayNumber})).map((function(e,t){return Object(r.jsx)(d.a.Item,{children:h(e)},t)}));return Object(r.jsx)(b.a,{className:"p-3",children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)("h1",{className:"header",children:"Westonbirt Golf Booking"}),Object(r.jsxs)(b.a,{children:[Object(r.jsx)(j.a,{className:"justify-content-md-center",children:Object(r.jsx)("h6",{children:Object(r.jsx)("a",{style:{color:"#33aa00"},href:"https://www.westonbirtgolfclub.co.uk/",children:"About Westonbirt Golf Club"})})}),Object(r.jsx)(j.a,{className:"justify-content-md-center",children:Object(r.jsx)(u.a,{src:"./images/aerial.png",width:"300px"})})]}),Object(r.jsx)(d.a,{style:{marginTop:20}})]})})});s.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.970fcd7d.chunk.js.map