(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{61:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n(29),s=n.n(r),i=n(12),l=n(2),o=n(3),j=n.n(o),u=n(9),b=n(30),d=n.n(b).a.create({baseURL:"/api/v1/restaurants"}),h=n(5),x=function(){var e=Object(l.h)().id,t=Object(l.g)();console.log(t);var n=Object(l.f)();console.log(e);var r=Object(a.useState)(""),s=Object(h.a)(r,2),i=s[0],o=s[1],b=Object(a.useState)(""),x=Object(h.a)(b,2),O=x[0],p=x[1],m=Object(a.useState)("Rating"),v=Object(h.a)(m,2),f=v[0],g=v[1],N=function(){var c=Object(u.a)(j.a.mark((function c(a){return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a.preventDefault(),c.prev=1,c.next=4,d.post("/".concat(e,"/addReview"),{name:i,review:O,rating:f});case 4:c.sent,n.push("/"),n.push(t.pathname),c.next=11;break;case 9:c.prev=9,c.t0=c.catch(1);case 11:case"end":return c.stop()}}),c,null,[[1,9]])})));return function(e){return c.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"mb-2",children:Object(c.jsxs)("form",{action:"",children:[Object(c.jsxs)("div",{className:"form-row",children:[Object(c.jsxs)("div",{className:"form-group col-8",children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name"}),Object(c.jsx)("input",{value:i,onChange:function(e){return o(e.target.value)},id:"name",placeholder:"name",type:"text",className:"form-control"})]}),Object(c.jsxs)("div",{className:"form-group col-4",children:[Object(c.jsx)("label",{htmlFor:"rating",children:"Rating"}),Object(c.jsxs)("select",{value:f,onChange:function(e){return g(e.target.value)},id:"rating",className:"custom-select",children:[Object(c.jsx)("option",{disabled:!0,children:"Rating"}),Object(c.jsx)("option",{value:"1",children:"1"}),Object(c.jsx)("option",{value:"2",children:"2"}),Object(c.jsx)("option",{value:"3",children:"3"}),Object(c.jsx)("option",{value:"4",children:"4"}),Object(c.jsx)("option",{value:"5",children:"5"})]})]})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"Review",children:"Review"}),Object(c.jsx)("textarea",{value:O,onChange:function(e){return p(e.target.value)},id:"Review",className:"form-control"})]}),Object(c.jsx)("button",{type:"submit",onClick:N,className:"btn btn-primary",children:"Submit"})]})})},O=function(e){for(var t=e.rating,n=[],a=1;a<=5;a++)a<=t?n.push(Object(c.jsx)("i",{className:"fas fa-star text-warning"},a)):a!==Math.ceil(t)||Number.isInteger(t)?n.push(Object(c.jsx)("i",{className:"far fa-star text-warning"},a)):n.push(Object(c.jsx)("i",{className:"fas fa-star-half-alt text-warning"},a));return Object(c.jsx)(c.Fragment,{children:n})},p=function(e){var t=e.reviews;return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"row row-cols-3 mb-2",children:t.map((function(e){return Object(c.jsxs)("div",{className:"card text-white bg-primary mb-3 mr-4",style:{maxWidth:"30%"},children:[Object(c.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[Object(c.jsx)("span",{children:e.name}),Object(c.jsx)("span",{children:Object(c.jsx)(O,{rating:e.rating})})]}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsx)("p",{className:"card-text",children:e.review})})]},e.id)}))})})},m=n(32),v=Object(a.createContext)(),f=function(e){var t=Object(a.useState)([]),n=Object(h.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(null),l=Object(h.a)(i,2),o=l[0],j=l[1];return Object(c.jsx)(v.Provider,{value:{restaurants:r,setRestaurants:s,addRestaurant:function(e){console.log("its reaching"),s([].concat(Object(m.a)(r),[e]))},selectedRestaurant:o,setSelectedRestaurant:j},children:e.children})},g=function(){var e=Object(l.h)().id,t=Object(a.useContext)(v),n=t.selectedRestaurant,r=t.setSelectedRestaurant;return Object(a.useEffect)((function(){(function(){var t=Object(u.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.get("/".concat(e));case 3:n=t.sent,r(n.data.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(c.jsx)("div",{children:n&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{className:"text-center display-1",children:n.restaurant.name}),Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)(O,{rating:n.restaurant.average_rating}),Object(c.jsx)("span",{className:"text-warning ml-1",children:n.restaurant.count?"(".concat(n.restaurant.count,")"):"0"})]}),Object(c.jsxs)("div",{className:"mt-3",children:[Object(c.jsx)(p,{reviews:n.reviews}),Object(c.jsx)(x,{})]})]})})},N=function(e){var t=Object(a.useContext)(v).addRestaurant,n=Object(a.useState)(""),r=Object(h.a)(n,2),s=r[0],i=r[1],l=Object(a.useState)(""),o=Object(h.a)(l,2),b=o[0],x=o[1],O=Object(a.useState)("Price Range"),p=Object(h.a)(O,2),m=p[0],f=p[1],g=function(){var e=Object(u.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,d.post("/",{name:s,location:b,price_range:m});case 4:c=e.sent,t(c.data.data.restaurant),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"mb-4",children:Object(c.jsx)("form",{action:"",children:Object(c.jsxs)("div",{className:"form-row",children:[Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("input",{value:s,onChange:function(e){return i(e.target.value)},type:"text",className:"form-control",placeholder:"name"})}),Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("input",{value:b,onChange:function(e){return x(e.target.value)},type:"text",className:"form-control",placeholder:"location"})}),Object(c.jsx)("div",{className:"col",children:Object(c.jsxs)("select",{value:m,onChange:function(e){return f(e.target.value)},className:"custom-select my-1 mr-sm-2",children:[Object(c.jsx)("option",{disabled:!0,children:"Price Range"}),Object(c.jsx)("option",{value:"1",children:"$"}),Object(c.jsx)("option",{value:"2",children:"$$"}),Object(c.jsx)("option",{value:"3",children:"$$$"}),Object(c.jsx)("option",{value:"4",children:"$$$$"}),Object(c.jsx)("option",{value:"5",children:"$$$$$"})]})}),Object(c.jsx)("button",{type:"submit",onClick:g,className:"btn btn-primary",children:"Add"})]})})})},w=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{className:"font-weight-light display-1 text-center",children:"Restaurant Finder"})})},y=function(e){var t=Object(a.useContext)(v),n=t.restaurants,r=t.setRestaurants,s=Object(l.f)();Object(a.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("/");case 3:t=e.sent,r(t.data.data.restaurants),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=function(){var e=Object(u.a)(j.a.mark((function e(t,c){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),e.prev=1,e.next=4,d.delete("/".concat(c));case 4:a=e.sent,r(n.filter((function(e){return e.id!==c}))),console.log(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),o=function(e){return e.count?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{rating:e.id}),Object(c.jsxs)("span",{className:"text-warniing ml-1",children:["(",e.count,")"]})]}):Object(c.jsx)("span",{className:"text-warning",children:"0 reviews"})};return Object(c.jsx)("div",{className:"list-group",children:Object(c.jsxs)("table",{className:"table table-hover table-dark",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{className:"bg-primary",children:[Object(c.jsx)("th",{scope:"col",children:"Restaurant"}),Object(c.jsx)("th",{scope:"col",children:"Location"}),Object(c.jsx)("th",{scope:"col",children:"Price Range"}),Object(c.jsx)("th",{scope:"col",children:"Ratings (reviews)"}),Object(c.jsx)("th",{scope:"col",children:"Edit"}),Object(c.jsx)("th",{scope:"col",children:"Delete"})]})}),Object(c.jsx)("tbody",{children:n&&n.map((function(e){return Object(c.jsxs)("tr",{onClick:function(){return t=e.id,void s.push("/restaurants/".concat(t));var t},children:[Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.location}),Object(c.jsx)("td",{children:"$".repeat(e.price_range)}),Object(c.jsx)("td",{children:o(e)}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{onClick:function(t){return function(e,t){e.stopPropagation(),s.push("/restaurants/".concat(t,"/update"))}(t,e.id)},className:"btn btn-warning",children:"Update"})}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{onClick:function(t){return i(t,e.id)},className:"btn btn-danger",children:"Delete"})})]},e.id)}))})]})})},R=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(w,{}),Object(c.jsx)(N,{}),Object(c.jsx)(y,{})]})},k=function(e){var t=Object(l.h)().id,n=Object(l.f)(),r=Object(a.useState)(""),s=Object(h.a)(r,2),i=s[0],o=s[1],b=Object(a.useState)(""),x=Object(h.a)(b,2),O=x[0],p=x[1],m=Object(a.useState)(""),v=Object(h.a)(m,2),f=v[0],g=v[1];Object(a.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/".concat(t));case 2:n=e.sent,console.log(n.data.data),o(n.data.data.restaurant.name),p(n.data.data.restaurant.location),g(n.data.data.restaurant.price_range);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var N=function(){var e=Object(u.a)(j.a.mark((function e(c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,d.put("/".concat(t),{name:i,location:O,price_range:f});case 3:e.sent,n.push("/");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{action:"",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name"}),Object(c.jsx)("input",{value:i,onChange:function(e){return o(e.target.value)},id:"name",className:"form-control",type:"text"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"location",children:"Location"}),Object(c.jsx)("input",{value:O,onChange:function(e){return p(e.target.value)},id:"location",className:"form-control",type:"text"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"price_range",children:"Price Range"}),Object(c.jsx)("input",{value:f,onChange:function(e){return g(e.target.value)},id:"price_range",className:"form-control",type:"number"})]}),Object(c.jsx)("button",{type:"submit",onClick:N,className:"btn btn-primary",children:"Submit"})]})})},C=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"text-center",children:" Update Restaurant "}),Object(c.jsx)(k,{})]})},$=function(){return Object(c.jsx)(f,{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(i.a,{children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/restaurants/:id/update",component:C}),Object(c.jsx)(l.a,{exact:!0,path:"/restaurants/:id",component:g}),Object(c.jsx)(l.a,{exact:!0,path:"/",component:R})]})})})})};s.a.render(Object(c.jsx)($,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.ca7357ef.chunk.js.map