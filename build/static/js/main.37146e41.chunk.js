(this.webpackJsonpsmarthome=this.webpackJsonpsmarthome||[]).push([[0],{19:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/bed.abbec120.svg"},20:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/living.766e8987.svg"},21:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/bath.50fea0d5.svg"},22:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/kitchen.559e3a56.svg"},34:function(t,e,c){},40:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/air-conditioner.63396eca.svg"},41:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/air-conditioner.52057daa.svg"},42:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/hot.31072e21.svg"},43:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/hot.c7e59f31.svg"},44:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/stereo.220c0939.svg"},45:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/stereo.bbd46d60.svg"},46:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/lamp.6dd5e4e0.svg"},47:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/lamp.27812b4d.svg"},48:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/back.82516f76.svg"},49:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/delete.e4cf54dd.svg"},50:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(1),i=c(23),s=c.n(i),o=c(8),d=c(13),r=c(7),u=(c(34),c(2)),l=c(24),j=c(25),b=c(28),m=c(27),p=function(t){Object(b.a)(c,t);var e=Object(m.a)(c);function c(t){var n;return Object(l.a)(this,c),(n=e.call(this,t)).validType=function(t){n.setState({type:t.target.value})},n.validName=function(t){n.setState({name:t.target.value})},n.state={type:"",name:""},n}return Object(j.a)(c,[{key:"render",value:function(){var t=this;return Object(n.jsx)("div",{className:"add-room",children:Object(n.jsxs)("div",{className:"form-add-room",children:[Object(n.jsx)("h3",{children:"Add Room"}),Object(n.jsxs)("select",{id:"select-room",onChange:this.validType,children:[Object(n.jsx)("option",{children:"\u05d1\u05d7\u05e8 \u05e1\u05d5\u05d2 \u05d7\u05d3\u05e8"}),Object(n.jsx)("option",{value:"Bath Room",children:"\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd"}),Object(n.jsx)("option",{value:"Living Room",children:"\u05e1\u05dc\u05d5\u05df"}),Object(n.jsx)("option",{value:"Bed Room",children:"\u05d7\u05d3\u05e8 \u05e9\u05d9\u05e0\u05d4"}),Object(n.jsx)("option",{value:"Kitchen",children:"\u05de\u05d8\u05d1\u05d7"})]}),Object(n.jsx)("input",{id:"input-name",onChange:this.validName,placeholder:"\u05e9\u05dd \u05d4\u05d7\u05d3\u05e8..."}),Object(n.jsx)(o.b,{style:{textDecoration:"none"},to:"/",children:Object(n.jsx)("button",{id:"button-add-room",onClick:function(){var e=t.state.type,c=t.state.name;e&&c?t.props.add(c,e):alert("\u05e9\u05d2\u05d9\u05d0\u05d4")},children:Object(n.jsx)("p",{children:"\u05d4\u05d5\u05e1\u05e3"})})})]})})}}]),c}(a.Component);function f(t){var e=Object(a.useState)("none"),i=Object(r.a)(e,2),s=i[0],d=i[1],l=Object(u.f)(),j=function(t){switch(t){case"Bed Room":return c(19).default;case"Living Room":return c(20).default;case"Bath Room":return c(21).default;case"Kitchen":return c(22).default;default:return}};return Object(n.jsxs)("div",{className:"rooms",children:[Object(n.jsx)("div",{className:"rooms-view",children:t.rooms.map((function(t,e){return Object(n.jsx)(o.b,{to:"room".concat(t.name),style:{textDecoration:"none"},children:Object(n.jsx)("div",{id:"room",style:{backgroundImage:"url(".concat(j(t.type),")")},children:Object(n.jsx)("h1",{id:"name-room",children:t.name})})},e)}))}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{style:{display:s},children:"\u05d0\u05d9 \u05d0\u05e4\u05e9\u05e8 \u05dc\u05d4\u05d5\u05e1\u05d9\u05e3 \u05d9\u05d5\u05ea\u05e8 \u05de-5 \u05d7\u05d3\u05e8\u05d9\u05dd!"}),Object(n.jsx)("p",{id:"add-room-p",children:"\u05dc\u05d7\u05e5 \u05dc\u05d4\u05d5\u05e1\u05e4\u05ea \u05d7\u05d3\u05e8"}),Object(n.jsx)("button",{id:"add-button",onClick:function(){t.rooms.length<5?l.push("/addRoom"):d("")},children:"+"})]})]})}function h(t){var e=Object(a.useState)("none"),c=Object(r.a)(e,2),i=c[0],s=c[1],o=Object(a.useState)("none"),d=Object(r.a)(o,2),u=d[0],l=d[1],j=Object(a.useState)(""),b=Object(r.a)(j,2),m=b[0],p=b[1];return Object(n.jsxs)("div",{className:"add-product",children:[Object(n.jsx)("p",{style:{display:i},children:"\u05d9\u05e9 \u05dc\u05da \u05db\u05d1\u05e8 \u05d3\u05d5\u05d3 \u05e9\u05de\u05e9!"}),Object(n.jsx)("p",{style:{display:u},children:"\u05d0\u05e4\u05e9\u05e8 \u05dc\u05d4\u05d5\u05e1\u05d9\u05e3 \u05e2\u05d3 5 \u05de\u05d5\u05e6\u05e8\u05d9\u05dd"}),Object(n.jsxs)("select",{id:"select-room",onChange:function(t){p(t.target.value)},children:[Object(n.jsx)("option",{children:"\u05d1\u05d7\u05e8 \u05de\u05d5\u05e6\u05e8"}),Object(n.jsx)("option",{value:"stereo",children:"\u05e1\u05d8\u05e8\u05d9\u05d0\u05d5"}),Object(n.jsx)("option",{value:"air-conditioner",children:"\u05de\u05d6\u05d2\u05df"}),Object(n.jsx)("option",{value:"lamp",children:"\u05de\u05e0\u05d5\u05e8\u05d4"}),"Bad Room"===t.type?Object(n.jsx)("option",{value:"hot",children:"\u05d3\u05d5\u05d3 \u05e9\u05de\u05e9"}):""]}),Object(n.jsx)("button",{id:"button-add-product",onClick:function(){if(5!==t.products.length){if(m){var e=!1;t.products.forEach((function(t){t.type===m&&"hot"===t.type&&(e=!0)})),e?s(""):t.addP(t.index,m)}}else l("")},children:"\u05d4\u05d5\u05e1\u05e3"})]})}function O(t){var e=Object(a.useState)(!1),i=Object(r.a)(e,2),s=i[0],d=i[1],u=function(){d(!s)},l=function(t,e){switch(t){case"air-conditioner":return e?c(40).default:c(41).default;case"hot":return e?c(42).default:c(43).default;case"stereo":return e?c(44).default:c(45).default;case"lamp":return e?c(46).default:c(47).default;default:return}};return Object(n.jsxs)("div",{className:"room",style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},children:[Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)(o.b,{to:"/",children:Object(n.jsxs)("button",{className:"back",children:["\u05d7\u05d6\u05e8\u05d4",Object(n.jsx)("img",{src:c(48).default,alt:"back",width:"15em",style:{paddingRight:"0.5em"}})]})}),Object(n.jsx)("button",{style:{backgroundImage:"url(".concat(c(49).default,")")},className:"delete",onClick:function(){window.confirm("\u05d0\u05ea\u05d4 \u05d1\u05d8\u05d5\u05d7 \u05e9\u05d4\u05d9\u05e0\u05da \u05e8\u05d5\u05e6\u05d4 \u05dc\u05de\u05d7\u05d5\u05e7 \u05d0\u05ea \u05d4\u05d7\u05d3\u05e8?")&&t.deleteRoom(t.index)}})]}),Object(n.jsxs)("h3",{id:"name",children:[" ",t.name]}),Object(n.jsx)("div",{className:"room-div-type",style:{backgroundImage:"url(".concat(function(t){switch(t){case"Bed Room":return c(19).default;case"Living Room":return c(20).default;case"Bath Room":return c(21).default;case"Kitchen":return c(22).default;default:return}}(t.type),")")}}),Object(n.jsx)("div",{className:"products",children:t.products.length>0?t.products.map((function(e,c){return Object(n.jsx)("div",{className:"product",style:{backgroundImage:"url(".concat(l(e.type,e.condition),")")},onClick:function(){t.trunProduct(t.index,c)},value:c},c)})):""}),s?Object(n.jsx)("div",{className:"room",children:Object(n.jsx)(h,{addP:t.addP,index:t.index,type:t.type,products:t.products})}):Object(n.jsx)("div",{children:Object(n.jsx)("button",{id:"button-add",style:{display:"flex",justifyContent:"center"},onClick:u,children:Object(n.jsx)("p",{children:"\u05d4\u05d5\u05e1\u05e3 \u05de\u05d5\u05e6\u05e8"})})})]})}function x(){var t=Object(u.f)(),e=Object(a.useState)([]),c=Object(r.a)(e,2),i=c[0],s=c[1],o=function(t,e){s([].concat(Object(d.a)(i),[{name:t,type:e,products:[]}]))},l=function(t,e){var c={condition:!1,type:e};i[t].products.push(c),s(Object(d.a)(i)),console.log(i)},j=function(t,e){i[t].products[e].condition=!i[t].products[e].condition,s(Object(d.a)(i))},b=function(e){var c=i.filter((function(t,c){return c!==e}));s(c),t.push("/")};return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{className:"top",children:Object(n.jsx)("h1",{children:"Smart - Home"})}),Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{exact:!0,path:"/",component:function(){return Object(n.jsx)(f,{rooms:i})}}),Object(n.jsx)(u.a,{exact:!0,path:"/addRoom",component:function(){return Object(n.jsx)(p,{add:o})}}),i.map((function(t,e){return Object(n.jsx)(u.a,{exact:!0,path:"/room".concat(t.name),component:function(){return Object(n.jsx)(O,{name:t.name,type:t.type,addP:l,index:e,products:t.products,trunProduct:j,deleteRoom:b})}},e)}))]})]})}s.a.render(Object(n.jsx)(o.a,{children:Object(n.jsx)(x,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.37146e41.chunk.js.map