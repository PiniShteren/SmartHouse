(this.webpackJsonpsmarthome=this.webpackJsonpsmarthome||[]).push([[0],{25:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/bed.abbec120.svg"},26:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/living.766e8987.svg"},27:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/bath.50fea0d5.svg"},28:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/kitchen.559e3a56.svg"},36:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/air-conditioner.63396eca.svg"},43:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/air-conditioner.52057daa.svg"},44:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/hot.31072e21.svg"},45:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/hot.c7e59f31.svg"},46:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/stereo.220c0939.svg"},47:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/stereo.bbd46d60.svg"},48:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/lamp.6dd5e4e0.svg"},49:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/lamp.27812b4d.svg"},50:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/back.82516f76.svg"},51:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/delete.e4cf54dd.svg"},52:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(0),a=c(16),r=c.n(a),s=c(10),i=(c(36),c(3)),d=c(8),u=function(e,t){return{type:"TRUN",indexRoom:e,indexProduct:t}},l=function(e,t){return{type:"ADD-PRODUCT",index:e,payload:t}},j=c(4);function b(e){var t=Object(j.b)(),c=Object(o.useState)(""),a=Object(d.a)(c,2),r=a[0],i=a[1],u=Object(o.useState)(""),l=Object(d.a)(u,2),b=l[0],m=l[1];return Object(n.jsx)("div",{className:"add-room",children:Object(n.jsxs)("div",{className:"form-add-room",children:[Object(n.jsx)("h3",{children:"\u05d4\u05d5\u05e1\u05e3 \u05d7\u05d3\u05e8"}),Object(n.jsxs)("select",{id:"select-room",onChange:function(e){i(e.target.value)},children:[Object(n.jsx)("option",{defaultValue:!0,children:"\u05d1\u05d7\u05e8 \u05e1\u05d5\u05d2 \u05d7\u05d3\u05e8:"}),Object(n.jsx)("option",{value:"Bath Room",children:"\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd"}),Object(n.jsx)("option",{value:"Living Room",children:"\u05e1\u05dc\u05d5\u05df"}),Object(n.jsx)("option",{value:"Bed Room",children:"\u05d7\u05d3\u05e8 \u05e9\u05d9\u05e0\u05d4"}),Object(n.jsx)("option",{value:"Kitchen",children:"\u05de\u05d8\u05d1\u05d7"})]}),Object(n.jsx)("input",{id:"input-name",onChange:function(e){var t=e.target.value;t.match("[a-zA-Z\u05d0-\u05ea]")&&t.length>=3?m(t):m("")},placeholder:"\u05e9\u05dd \u05d4\u05d7\u05d3\u05e8:",autoComplete:"off"}),Object(n.jsx)(s.b,{style:{textDecoration:"none"},to:"/",children:Object(n.jsx)("button",{id:"button-add-room",onClick:function(){r&&b?t({type:"ADD",payload:{name:b,type:r,products:[]}}):alert("\u05e9\u05d2\u05d9\u05d0\u05d4")},children:Object(n.jsx)("p",{children:"\u05d4\u05d5\u05e1\u05e3"})})})]})})}function m(){var e=Object(j.c)((function(e){return e.rooms.rooms})),t=Object(o.useState)("none"),a=Object(d.a)(t,2),r=a[0],u=a[1],l=Object(i.f)(),b=function(e){switch(e){case"Bed Room":return c(25).default;case"Living Room":return c(26).default;case"Bath Room":return c(27).default;case"Kitchen":return c(28).default;default:return}},m=function(e){switch(e){case"Bed Room":return"\u05d7\u05d3\u05e8 - \u05e9\u05d9\u05e0\u05d4";case"Living Room":return"\u05e1\u05dc\u05d5\u05df";case"Bath Room":return"\u05e9\u05e8\u05d5\u05ea\u05d9\u05dd";case"Kitchen":return"\u05de\u05d1\u05d8\u05d7";default:return}};return Object(n.jsxs)("div",{className:"rooms",children:[Object(n.jsx)("div",{className:"rooms-view",children:e?e.map((function(e,t){return Object(n.jsx)(s.b,{to:"room".concat(e.name),style:{textDecoration:"none"},children:Object(n.jsx)("div",{id:"room",style:{backgroundImage:"url(".concat(b(e.type),")")},children:Object(n.jsxs)("h1",{id:"name-room",children:[Object(n.jsx)("span",{style:{fontSize:"0.65em"},children:m(e.type)}),Object(n.jsx)("span",{children:e.name})]})})},t)})):""}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{style:{display:r},children:"\u05d0\u05d9 \u05d0\u05e4\u05e9\u05e8 \u05dc\u05d4\u05d5\u05e1\u05d9\u05e3 \u05d9\u05d5\u05ea\u05e8 \u05de-5 \u05d7\u05d3\u05e8\u05d9\u05dd!"}),Object(n.jsx)("p",{id:"add-room-p",children:"\u05dc\u05d7\u05e5 \u05dc\u05d4\u05d5\u05e1\u05e4\u05ea \u05d7\u05d3\u05e8"}),Object(n.jsx)("button",{id:"add-button",onClick:function(){e?e.length<5?l.push("/addRoom"):u(""):l.push("/addRoom")},children:"+"})]})]})}function f(e){var t=Object(j.b)(),c=Object(j.c)((function(t){return t.rooms.rooms[e.index]})),a=c.products,r=Object(o.useState)("none"),s=Object(d.a)(r,2),i=s[0],u=s[1],b=Object(o.useState)("none"),m=Object(d.a)(b,2),f=m[0],O=m[1],p=Object(o.useState)(""),h=Object(d.a)(p,2),x=h[0],v=h[1];return Object(n.jsxs)("div",{className:"add-product",children:[Object(n.jsx)("p",{style:{display:i},children:"\u05d9\u05e9 \u05dc\u05da \u05db\u05d1\u05e8 \u05d3\u05d5\u05d3 \u05e9\u05de\u05e9!"}),Object(n.jsx)("p",{style:{display:f},children:"\u05d0\u05e4\u05e9\u05e8 \u05dc\u05d4\u05d5\u05e1\u05d9\u05e3 \u05e2\u05d3 5 \u05de\u05d5\u05e6\u05e8\u05d9\u05dd"}),Object(n.jsxs)("select",{id:"select-room",onChange:function(e){v(e.target.value)},children:[Object(n.jsx)("option",{children:"\u05d1\u05d7\u05e8 \u05de\u05d5\u05e6\u05e8"}),Object(n.jsx)("option",{value:"stereo",children:"\u05e1\u05d8\u05e8\u05d9\u05d0\u05d5"}),Object(n.jsx)("option",{value:"air-conditioner",children:"\u05de\u05d6\u05d2\u05df"}),Object(n.jsx)("option",{value:"lamp",children:"\u05de\u05e0\u05d5\u05e8\u05d4"}),"Bath Room"===c.type?Object(n.jsx)("option",{value:"hot",children:"\u05d3\u05d5\u05d3 \u05e9\u05de\u05e9"}):""]}),Object(n.jsx)("button",{id:"button-add-product",onClick:function(){if(x){if(!a)return t(l(e.index,x)),void e.changeFlag();if(5===a.length)return void O("");var c=!1;a.forEach((function(e){e.type===x&&"hot"===e.type&&(c=!0)})),c?u(""):(t(l(e.index,x)),e.changeFlag())}},children:"\u05d4\u05d5\u05e1\u05e3"})]})}function O(e){var t=Object(j.c)((function(t){return t.rooms.rooms[e.index]})),a=Object(i.f)(),r=Object(j.b)(),l=Object(o.useState)(!1),b=Object(d.a)(l,2),m=b[0],O=b[1],p=Object(o.useState)(u),h=Object(d.a)(p,2),x=h[0],v=h[1],g=function(){O(!m)},y=function(e,t){switch(e){case"air-conditioner":return t?c(42).default:c(43).default;case"hot":return t?c(44).default:c(45).default;case"stereo":return t?c(46).default:c(47).default;case"lamp":return t?c(48).default:c(49).default;default:return}};return Object(n.jsxs)("div",{className:"room",style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},children:[Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)(s.b,{to:"/",children:Object(n.jsx)("button",{className:"back",style:{backgroundImage:"url(".concat(c(50).default,")")}})}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("h3",{id:"name",children:[" ",Object(n.jsx)("span",{}),Object(n.jsx)("span",{children:t.name})]}),Object(n.jsx)("div",{className:"room-div-type",style:{backgroundImage:"url(".concat(function(e){switch(e){case"Bed Room":return c(25).default;case"Living Room":return c(26).default;case"Bath Room":return c(27).default;case"Kitchen":return c(28).default;default:return}}(t.type),")")}})]}),Object(n.jsx)("button",{style:{backgroundImage:"url(".concat(c(51).default,")")},className:"delete",onClick:function(){window.confirm("\u05d0\u05ea\u05d4 \u05d1\u05d8\u05d5\u05d7 \u05e9\u05d4\u05d9\u05e0\u05da \u05e8\u05d5\u05e6\u05d4 \u05dc\u05de\u05d7\u05d5\u05e7 \u05d0\u05ea \u05d4\u05d7\u05d3\u05e8?")&&(r({type:"DELETE",payload:e.index}),a.push("/"))}})]}),t.products.length>0?Object(n.jsx)("p",{children:"\u05dc\u05d7\u05e5 \u05db\u05d3\u05d9 \u05dc\u05db\u05d1\u05d5\u05ea/\u05dc\u05d4\u05d3\u05dc\u05d9\u05e7 \u05de\u05d5\u05e6\u05e8"}):"",Object(n.jsx)("div",{className:"products",children:t.products.length>0?t.products.map((function(t,c){return Object(n.jsx)("div",{className:"product",style:{backgroundImage:"url(".concat(y(t.type,t.condition),")")},onClick:function(){r(u(e.index,c)),v(!x)},value:c},c)})):""}),m?Object(n.jsx)("div",{className:"room",children:Object(n.jsx)(f,{index:e.index,changeFlag:g})}):Object(n.jsx)("div",{children:Object(n.jsx)("button",{id:"button-add",style:{display:"flex",justifyContent:"center"},onClick:g,children:Object(n.jsx)("p",{children:"\u05d4\u05d5\u05e1\u05e3 \u05de\u05d5\u05e6\u05e8"})})})]})}function p(){var e=Object(j.c)((function(e){return e.rooms.rooms}));return console.log(e),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{className:"top",children:Object(n.jsx)("h1",{children:"Smart - Home"})}),Object(n.jsxs)(i.c,{children:[Object(n.jsx)(i.a,{exact:!0,path:"/",component:function(){return Object(n.jsx)(m,{})}}),Object(n.jsx)(i.a,{exact:!0,path:"/addRoom",component:function(){return Object(n.jsx)(b,{})}}),e?e.map((function(e,t){return Object(n.jsx)(i.a,{exact:!0,path:"/room".concat(e.name),component:function(){return Object(n.jsx)(O,{index:t})}},t)})):""]})]})}var h=c(13),x=c(30),v=c(11),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{rooms:[],room:{name:"",type:"",products:[]}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return Object(v.a)(Object(v.a)({},e),{},{rooms:[].concat(Object(x.a)(e.rooms),[t.payload])});case"DELETE":var c=e.rooms.filter((function(e,c){return c!==t.payload}));return Object(v.a)(Object(v.a)({},e),{},{rooms:c});case"TRUN":return e.room=e.rooms[t.indexRoom],e.room.products[t.indexProduct].condition=!e.room.products[t.indexProduct].condition,Object(v.a)({},e);case"ADD-PRODUCT":return e.room=e.rooms[t.index],e.room.products.push({type:t.payload,condition:!1}),Object(v.a)({},e);default:return e}},y=Object(h.b)({rooms:g}),R=Object(h.c)(y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());console.log(R.getState()),r.a.render(Object(n.jsx)(s.a,{children:Object(n.jsx)(j.a,{store:R,children:Object(n.jsx)(p,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.2a609de7.chunk.js.map