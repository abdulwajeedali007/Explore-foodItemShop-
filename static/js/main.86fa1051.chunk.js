(this["webpackJsonppizza-store"]=this["webpackJsonppizza-store"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},43:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(33),i=c.n(s),n=c(8),r=c(6),l=c(60),j=c(61),d=c(62),o=(c(43),c.p+"static/media/pizzahome.d246a584.png"),m=c(18),b=c(19),u=c(1);var O=function(){return Object(u.jsxs)("div",{className:"landing__container",children:[Object(u.jsx)(l.a,{children:Object(u.jsxs)(j.a,{children:[Object(u.jsxs)(d.a,{sm:6,children:[Object(u.jsxs)("h2",{children:["Good food & ",Object(u.jsx)("br",{})," Great vibes"]}),Object(u.jsx)("p",{children:"The only thing we're serious about is food."}),Object(u.jsx)(n.b,{to:"/items",children:Object(u.jsx)("button",{className:"btnPrimary",children:"Order Now"})}),Object(u.jsxs)("div",{className:"social__icons",children:[Object(u.jsx)(n.b,{to:"/",children:Object(u.jsx)(m.a,{})}),Object(u.jsx)(n.b,{to:"/",children:Object(u.jsx)(m.b,{})}),Object(u.jsx)(n.b,{to:"/",children:Object(u.jsx)(m.c,{})}),Object(u.jsx)(n.b,{to:"/",children:Object(u.jsx)(m.d,{})})]})]}),Object(u.jsx)(d.a,{sm:6,children:Object(u.jsx)("div",{className:"image__container",children:Object(u.jsx)("img",{src:o,alt:"pizzahome"})})})]})}),Object(u.jsx)("div",{className:"downArrow",children:Object(u.jsx)(b.a,{})})]})},x=c.p+"static/media/aboutusimage.b4b07e97.png";c(50);var h=function(){return Object(u.jsx)("div",{class:"about__container",children:Object(u.jsx)(l.a,{children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(d.a,{sm:6,children:Object(u.jsx)("div",{className:"image__box",children:Object(u.jsx)("img",{src:x,alt:"saladplate",className:"img-fluid"})})}),Object(u.jsx)(d.a,{sm:6,children:Object(u.jsxs)("div",{className:"content__area",children:[Object(u.jsx)("h5",{className:"small__heading",children:"About us"}),Object(u.jsxs)("h2",{className:"main__heading",children:["Simply way of ",Object(u.jsx)("br",{})," Eating Delicious"]}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias porro necessitatibus, ex vel voluptas corporis voluptatem cum aliquam harum at."}),Object(u.jsx)("button",{className:"btnPrimary",children:"Know More..."})]})})]})})})},p=(c(51),c(20)),g=c(21),N=c(22),v=c.p+"static/media/food1.1fd2e38e.png",f=c.p+"static/media/food2.1e825319.png";var _=function(){return Object(u.jsxs)("div",{className:"features__container",children:[Object(u.jsx)("div",{className:"imageoutbox",children:Object(u.jsx)("img",{src:v,alt:"pizza"})}),Object(u.jsx)("div",{className:"imageout2",children:Object(u.jsx)("img",{src:f,alt:"shawarma"})}),Object(u.jsxs)(l.a,{children:[Object(u.jsx)(j.a,{children:Object(u.jsxs)(d.a,{children:[Object(u.jsx)("h4",{className:"small__heading",children:"Features"}),Object(u.jsx)("h2",{className:"main__heading",children:"Our Awesome Services"})]})}),Object(u.jsxs)(j.a,{children:[Object(u.jsx)(d.a,{xs:12,md:4,children:Object(u.jsxs)("div",{className:"service",children:[Object(u.jsx)("div",{className:"icon",children:Object(u.jsx)(p.a,{})}),Object(u.jsx)("div",{className:"name",children:"Quality Food"}),Object(u.jsx)("p",{className:"text",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident eum placeat perferendis, doloribus deleniti sint!"})]})}),Object(u.jsx)(d.a,{xs:12,md:4,children:Object(u.jsxs)("div",{className:"service",children:[Object(u.jsx)("div",{className:"icon",children:Object(u.jsx)(g.b,{})}),Object(u.jsx)("div",{className:"name",children:"Super Taste"}),Object(u.jsx)("p",{className:"text",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident eum placeat perferendis, doloribus deleniti sint!"})]})}),Object(u.jsx)(d.a,{xs:12,md:4,children:Object(u.jsxs)("div",{className:"service",children:[Object(u.jsx)("div",{className:"icon",children:Object(u.jsx)(N.b,{})}),Object(u.jsx)("div",{className:"name",children:"Fast Delivery"}),Object(u.jsx)("p",{className:"text",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident eum placeat perferendis, doloribus deleniti sint!"})]})})]})]})]})},y=(c(31),c(64)),C=c(16),I=c(35),z=c(24),T=c(25),E=c(5),w=function(e,t){switch(t.type){case"GET_DATA":return Object(E.a)({},e);case"ADD_TO_CART":return e.cartItems.length>0&&e.cartItems.find((function(e){return e.id===t.payload.id}))?Object(E.a)({},e):Object(E.a)(Object(E.a)({},e),{},{cartItems:[].concat(Object(T.a)(e.cartItems),[t.payload])});case"DELETE_ITEM":return Object(E.a)(Object(E.a)({},e),{},{cartItems:Object(T.a)(e.cartItems.filter((function(e){return e.id!==t.payload.id})))});case"INCREMENT":var c=e.cartItems.map((function(e){return e.id===t.payload.id?Object(E.a)(Object(E.a)({},e),{},{count:e.count+1}):e}));return Object(E.a)(Object(E.a)({},e),{},{cartItems:c});case"DECREMENT":var a=[];return a=1===t.payload.count?e.cartItems.filter((function(e){return e.id!==t.payload.id})):e.cartItems.map((function(e){return e.id===t.payload.id?Object(E.a)(Object(E.a)({},e),{},{count:e.count-1}):e})),Object(E.a)(Object(E.a)({},e),{},{cartItems:a});case"CLEAR_CART":return Object(E.a)(Object(E.a)({},e),{},{cartItems:[]});default:return console.log(e.cartItems),e}},A=c.p+"static/media/hotpizza.ba151045.jpg",L=c.p+"static/media/cheezpizza.3f1be3de.jpg",k=c.p+"static/media/normalpizza.8140ea58.jpg",D=c.p+"static/media/specialshawarma.2a703a2f.jpg",P={products:[{id:1,name:"Chezz Pizza",price:320,ingradients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",imageUrl:L,latest:!1},{id:2,name:"Normal Pizza",price:250,ingradients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",imageUrl:k,latest:!1},{id:3,name:"Hot Pizza",price:340,ingradients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",imageUrl:A,latest:!0},{id:4,name:"Chicken shawarma",price:60,ingradients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",imageUrl:c.p+"static/media/chickenshawarma.6c01d455.jpg",latest:!1},{id:5,name:"Mutton shawarma",price:120,ingradients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",imageUrl:c.p+"static/media/muttonshawarma.5fabffb4.jpg",latest:!1},{id:6,name:"Special shawarma",price:90,ingradients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",imageUrl:D,latest:!0},{id:7,name:"Cool Drinks",price:45,ingradients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",imageUrl:c.p+"static/media/cooldrinks.866311c3.jpg",latest:!1},{id:8,name:"Tea",price:25,ingradients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",imageUrl:c.p+"static/media/normalchai.b5d9722d.jpg",latest:!1},{id:9,name:"Special tea",price:35,ingradients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum nemo quaerat nulla minus praesentium?",imageUrl:c.p+"static/media/specialchai.0306e7ee.jpg",latest:!0}],cartItems:[]},B=Object(a.createContext)(P),R=function(e){var t=e.children,c=Object(a.useReducer)(w,P),s=Object(z.a)(c,2),i=s[0],n=s[1];return Object(u.jsx)(B.Provider,{value:{allPosts:i.products,addToCartAction:function(e){n({type:"ADD_TO_CART",payload:e})},cartItems:i.cartItems,grandTotal:function(){return i.cartItems.reduce((function(e,t){return e+t.price*t.count}),0)},increment:function(e){n({type:"INCREMENT",payload:e})},decrement:function(e){n({type:"DECREMENT",payload:e})},deleteItem:function(e){n({type:"DELETE_ITEM",payload:e})},clearData:function(){n({type:"CLEAR_CART"})}},children:t})};var S=function(){return Object(a.useContext)(B).allPosts.filter((function(e){return!0===e.latest})).map((function(e,t){return Object(u.jsx)(d.a,{lg:4,children:Object(u.jsxs)(y.a,{className:"mt-4 p-0 boxShadow",children:[Object(u.jsx)(y.a.Img,{variant:"top",src:e.imageUrl}),Object(u.jsx)(y.a.Body,{children:Object(u.jsxs)(j.a,{className:"align-items-center",children:[Object(u.jsxs)(d.a,{lg:7,md:6,xs:6,children:[Object(u.jsx)(y.a.Title,{className:"title",children:e.name}),Object(u.jsxs)("p",{className:"m-0 text",children:[Object(u.jsx)(C.a,{}),e.price," Rs"]})]}),Object(u.jsx)(d.a,{lg:5,md:6,xs:6,className:"text-center",children:Object(u.jsx)(n.b,{to:"/items",children:Object(u.jsxs)("button",{className:"cardButton ",children:["Know more ",Object(u.jsx)(I.a,{})]})})})]})})]},t)})}))};var q=function(){return Object(u.jsx)("div",{className:"items__container",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(j.a,{children:Object(u.jsxs)(d.a,{children:[Object(u.jsx)("h4",{className:"small__heading",children:"Recipes"}),Object(u.jsx)("h2",{className:"main__heading",children:"Most Popular Items"})]})}),Object(u.jsx)(j.a,{children:Object(u.jsx)(S,{})})]})})};var U=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsx)(h,{}),Object(u.jsx)(_,{}),Object(u.jsx)(q,{})]})},M=c(36);c(52);var F=function(){var e=Object(a.useContext)(B).cartItems;return Object(u.jsx)("div",{className:"navbar__main",children:Object(u.jsx)(l.a,{children:Object(u.jsx)(j.a,{children:Object(u.jsx)(d.a,{children:Object(u.jsxs)("div",{className:"navbar__container",children:[Object(u.jsx)(n.b,{to:"/",children:Object(u.jsx)("h1",{children:"\ud83c\udf72 Explore "})}),Object(u.jsx)("nav",{className:"navbar__nav",children:Object(u.jsx)("ul",{children:Object(u.jsx)("li",{className:"navbar__item",children:Object(u.jsxs)(n.b,{to:"/cart",className:"navbar__link",children:[Object(u.jsx)(M.a,{}),Object(u.jsx)("p",{className:"cart-data",children:e.length>0?e.length:0})]})})})})]})})})})})},H=(c(53),c(37)),G=c.p+"static/media/footer-pineapple.66523061.png",J=c.p+"static/media/footer-plate.c20621b4.png";var K=function(){return Object(u.jsxs)("div",{className:"footer__container",children:[Object(u.jsxs)(l.a,{children:[Object(u.jsxs)(j.a,{children:[Object(u.jsx)(d.a,{lg:4,md:12,sm:12,className:"mb-3",children:Object(u.jsxs)("div",{className:"image__logo",children:[Object(u.jsx)("img",{src:G,alt:"Footerpineapple"}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h3",{children:"Explore"}),Object(u.jsxs)("p",{children:[Object(u.jsx)(g.a,{})," Hyderabad-500001"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)(b.b,{})," +91 9133-666-188"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)(H.a,{})," abdulwajeedali007@gmail.com"]})]})]})}),Object(u.jsx)(d.a,{lg:4,md:12,sm:12,className:"mb-3",children:Object(u.jsxs)("div",{className:"details",children:[Object(u.jsx)("h4",{children:"About us"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus esse voluptate, nobis inventore, nisi voluptatibus repellat obcaecati pariatur totam ullam officia, veniam tenetur maxime? Voluptatibus quos dolore perspiciatis voluptas!"})]})}),Object(u.jsx)(d.a,{lg:4,md:12,sm:12,className:"mb-3",children:Object(u.jsxs)("div",{className:"food__items",children:[Object(u.jsx)("h4",{children:"Special Items"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Special pizza"}),Object(u.jsx)("li",{children:"Hot pizza"}),Object(u.jsx)("li",{children:"Normal pizza"}),Object(u.jsx)("li",{children:"Special shawarma"}),Object(u.jsx)("li",{children:"Chicken shawarma"}),Object(u.jsx)("li",{children:"Mutton shawarma"}),Object(u.jsx)("li",{children:"Cool Drinks"}),Object(u.jsx)("li",{children:"Special Tea"}),Object(u.jsx)("li",{children:"Normal Tea"})]})]})})]}),Object(u.jsx)(j.a,{children:Object(u.jsx)(d.a,{children:Object(u.jsxs)("p",{className:"footerlink",children:["\xa9 copyright-2021"," ",Object(u.jsx)(n.b,{to:"/",children:"Self Development (Learning)"})]})})})]}),Object(u.jsx)("img",{src:J,alt:"fruitesdish",className:"outImage"})]})};c(54);var Q=function(){var e=Object(a.useContext)(B),t=e.cartItems,c=e.deleteItem,s=e.increment,i=e.decrement,r=e.grandTotal,o=e.clearData;return Object(u.jsxs)(l.a,{className:"mt-5",children:[Object(u.jsx)(j.a,{className:"justify-content-center",children:t.length<1?Object(u.jsxs)(d.a,{children:[" ",Object(u.jsx)("h1",{className:"empty",children:"your cart is empty please"})," ",Object(u.jsxs)("p",{children:["Back to items page ",Object(u.jsx)(n.b,{to:"/items",children:"Items"})]})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(d.a,{lg:7,md:12,children:[Object(u.jsxs)("div",{className:"details__heading",children:[Object(u.jsx)("p",{children:"Image"}),Object(u.jsx)("p",{children:"Food Name"}),Object(u.jsx)("p",{children:"Count"}),Object(u.jsx)("p",{children:"Inc/Dec"}),Object(u.jsx)("p",{children:"Delete"}),Object(u.jsx)("p",{children:"Total"})]}),Object(u.jsx)("hr",{}),t.map((function(e){return Object(u.jsxs)("div",{className:"cart__container",children:[Object(u.jsx)("div",{className:"image__container",children:Object(u.jsx)("img",{src:e.imageUrl,alt:e.name})}),Object(u.jsxs)("div",{className:"cart__details",children:[Object(u.jsxs)("div",{className:"product",children:[Object(u.jsx)("h4",{className:"product__name",children:e.name}),Object(u.jsxs)("p",{className:"product__price",children:[Object(u.jsx)(C.a,{}),e.price]})]}),Object(u.jsxs)("div",{className:"product__incdec",children:[Object(u.jsx)("button",{className:"add",onClick:function(){return s(e)},children:"+"}),Object(u.jsx)("button",{children:e.count}),Object(u.jsx)("button",{className:"dec",onClick:function(){return i(e)},children:"-"})]}),Object(u.jsx)("div",{className:"valueprice",children:Object(u.jsxs)("p",{children:[e.count," X ",e.price]})}),Object(u.jsx)("div",{className:"deletIcon",children:Object(u.jsx)(N.a,{onClick:function(){return c(e)}})}),Object(u.jsx)("div",{className:"totalPrice",children:Object(u.jsxs)("h4",{children:[Object(u.jsx)(C.a,{}),e.price*e.count]})})]})]},e.id)}))]}),Object(u.jsxs)(d.a,{lg:5,md:12,children:[Object(u.jsxs)("h4",{className:"totalnoof",children:["No of Items"," ",t.length<10?"0".concat(t.length):t.length]}),Object(u.jsxs)("div",{className:"total",children:["Total Amount : ",Object(u.jsx)(C.a,{}),r()]}),Object(u.jsx)("button",{className:"btnCheckout",onClick:function(){return alert("Need to add check out functionality"),void o()},children:"Check Out"})]})]})}),Object(u.jsx)(j.a,{className:"justify-content-center align-items-center",children:Object(u.jsx)(d.a,{children:Object(u.jsx)("button",{className:"clearOut",onClick:function(){return o()},children:"Clear Cart-(Empty)"})})})]})};var V=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h3",{children:"Page Not Found"})})},X=c(38);c(32);var W=function(e){var t=e.Posts,c=Object(a.useContext)(B),s=c.addToCartAction,i=c.cartItems;return t.map((function(e,t){return Object(u.jsx)(d.a,{lg:4,children:Object(u.jsxs)(y.a,{className:"mt-4 p-0 boxShadow",children:[Object(u.jsx)(y.a.Img,{variant:"top",src:e.imageUrl}),Object(u.jsx)(y.a.Body,{children:Object(u.jsxs)(j.a,{className:"align-items-center",children:[Object(u.jsxs)(d.a,{lg:7,md:6,xs:6,children:[Object(u.jsx)(y.a.Title,{className:"title",children:e.name}),Object(u.jsxs)("p",{className:"m-0",children:[Object(u.jsx)(C.a,{}),e.price," Rs"]})]}),Object(u.jsx)(d.a,{lg:5,md:6,xs:6,className:"text-center",children:Object(u.jsxs)("button",{className:i.find((function(t){return t.id===e.id}))?"addedToCart":"cardButton",onClick:function(){return t=e,void s(Object(E.a)(Object(E.a)({},t),{},{count:1}));var t},children:[Object(u.jsx)(X.a,{})," ",i.find((function(t){return t.id===e.id}))?"Added to card":"Add to cart"]})})]})})]},t)})}))},Y=c(63),Z=c(65);var $=function(){var e=Object(a.useState)(""),t=Object(z.a)(e,2),c=t[0],s=t[1],i=Object(a.useContext)(B).allPosts,n=i.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"allitems",children:Object(u.jsx)(l.a,{children:Object(u.jsx)(j.a,{children:Object(u.jsxs)(d.a,{children:[Object(u.jsx)("h2",{className:"main__heading",children:"All Items"}),Object(u.jsxs)("p",{children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aspernatur autem nisi. ",Object(u.jsx)("br",{})," A qui modi quidem expedita, perferendis velit optio!"]})]})})})}),Object(u.jsx)(l.a,{children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(j.a,{className:"justify-content-center",children:Object(u.jsx)(d.a,{lg:8,children:Object(u.jsx)("div",{className:"search__input",children:Object(u.jsxs)(Y.a,{className:"mb-3 ",children:[Object(u.jsx)(Z.a,{className:"inputSearch",placeholder:"Enter food item name... Ex pizza, shawarma, tea,special...","aria-describedby":"basic-addon2",onChange:function(e){return function(e){s(e.target.value)}(e)},value:c}),Object(u.jsx)(Y.a.Text,{id:"basic-addon2 inputButton",children:Object(u.jsx)(p.b,{})})]})})})}),Object(u.jsx)(W,{Posts:c.length>0?n:i})]})})]})};var ee=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(n.a,{children:[Object(u.jsx)(F,{}),Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",component:U}),Object(u.jsx)(r.a,{exact:!0,path:"/cart",component:Q}),Object(u.jsx)(r.a,{exact:!0,path:"/items",component:$}),Object(u.jsx)(r.a,{component:V})]}),Object(u.jsx)(K,{})]})})};c(58);i.a.render(Object(u.jsx)(R,{children:Object(u.jsx)(ee,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.86fa1051.chunk.js.map