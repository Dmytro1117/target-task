(this["webpackJsonpgoit-react-textbook-lesson-11-redux-reducers"]=this["webpackJsonpgoit-react-textbook-lesson-11-redux-reducers"]||[]).push([[0],{15:function(e,t,c){e.exports={btn:"Button_btn__WK3j6",isSelected:"Button_isSelected__1lKiZ"}},16:function(e,t,c){e.exports={text:"TaskCounter_text__2k4Mg"}},17:function(e,t,c){e.exports={form:"TaskForm_form__1h4ho",field:"TaskForm_field__2pcfY"}},18:function(e,t,c){e.exports={list:"TaskList_list__5fTqZ",listItem:"TaskList_listItem__3PBGt"}},27:function(e,t,c){e.exports={container:"Layout_container__CV9xd"}},31:function(e,t,c){e.exports={wrapper:"StatusFilter_wrapper__3fnEj"}},54:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var a=c(24),n=c.n(a),s=c(2),r=c(27),i=c.n(r),l=c(1),o=function(e){var t=e.children;return Object(l.jsx)("main",{className:i.a.container,children:t})},d=c(3),u=c(11),p=c(28),j=c(29),b=c(15),x=c.n(b),m=["selected","type","children"],f=function(e){var t=e.selected,c=void 0!==t&&t,a=e.type,n=void 0===a?"button":a,s=e.children,r=Object(p.a)(e,m);return Object(l.jsx)("button",Object(d.a)(Object(d.a)({className:Object(j.a)(x.a.btn,Object(u.a)({},x.a.isSelected,c)),type:n},r),{},{children:s}))},O=Object.freeze({all:"all",active:"active",completed:"completed"}),h=function(e){return e.tasks},_=function(e){return e.filters.status},k=c(30),v=c(31),y=c.n(v),N=function(){var e=Object(s.b)(),t=Object(s.c)(_),c=function(t){return e({type:"filters/setStatusFilter",payload:t})};return Object(l.jsxs)("div",{className:y.a.wrapper,children:[Object(l.jsx)(f,{selected:t===O.all,onClick:function(){return c(O.all)},children:"All"}),Object(l.jsx)(f,{selected:t===O.active,onClick:function(){return c(O.active)},children:"Active"}),Object(l.jsx)(f,{selected:t===O.completed,onClick:function(){return c(O.completed)},children:"Completed"})]})},g=c(16),T=c.n(g),w=function(){var e=Object(s.c)(h).reduce((function(e,t){return t.completed?e.completed+=1:e.active+=1,e}),{active:0,completed:0});return Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{className:T.a.text,children:["Active: ",e.active]}),Object(l.jsxs)("p",{className:T.a.text,children:["Completed: ",e.completed]})]})},C=c(6),S=c.n(C),B=function(){return Object(l.jsxs)("header",{className:S.a.wrapper,children:[Object(l.jsxs)("section",{className:S.a.section,children:[Object(l.jsx)("h2",{className:S.a.title,children:"Tasks"}),Object(l.jsx)(w,{})]}),Object(l.jsxs)("section",{className:S.a.section,children:[Object(l.jsx)("h2",{className:S.a.title,children:"Filter by status"}),Object(l.jsx)(N,{})]})]})},A=c(17),F=c.n(A),L=function(){var e=Object(s.b)();return Object(l.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var c,a=t.target;e((c=a.elements.text.value,{type:"tasks/addTask",payload:{id:Object(k.a)(),completed:!1,text:c}})),a.reset()},children:[Object(l.jsx)("input",{className:F.a.field,type:"text",name:"text",placeholder:"Enter task text..."}),Object(l.jsx)(f,{type:"submit",children:"Add task"})]})},H=c(35),R=c(8),I=c.n(R),z=function(e){var t=e.task,c=Object(s.b)();return Object(l.jsxs)("div",{className:I.a.wrapper,children:[Object(l.jsx)("input",{type:"checkbox",className:I.a.checkbox,checked:t.completed,onChange:function(){return c({type:"tasks/toggleCompleted",payload:t.id})}}),Object(l.jsx)("p",{className:I.a.text,children:t.text}),Object(l.jsx)("button",{className:I.a.btn,onClick:function(){return c({type:"tasks/deleteTask",payload:t.id})},children:Object(l.jsx)(H.a,{size:24})})]})},E=c(18),J=c.n(E),M=function(){var e=function(e,t){switch(t){case O.active:return e.filter((function(e){return!e.completed}));case O.completed:return e.filter((function(e){return e.completed}));default:return e}}(Object(s.c)(h),Object(s.c)(_));return Object(l.jsx)("ul",{className:J.a.list,children:e.map((function(e){return Object(l.jsx)("li",{className:J.a.listItem,children:Object(l.jsx)(z,{task:e})},e.id)}))})},V=function(){return Object(l.jsxs)(o,{children:[Object(l.jsx)(B,{}),Object(l.jsx)(L,{}),Object(l.jsx)(M,{})]})},D=c(4),G=c(32),K=c(10),Z=[{id:0,text:"Learn HTML and CSS",completed:!0},{id:1,text:"Get good at JavaScript",completed:!0},{id:2,text:"Master React",completed:!1},{id:3,text:"Discover Redux",completed:!1},{id:4,text:"Build amazing apps",completed:!1}],q={status:O.all},P=Object(D.a)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"tasks/addTask":return[].concat(Object(K.a)(e),[t.payload]);case"tasks/deleteTask":return e.filter((function(e){return e.id!==t.payload}));case"tasks/toggleCompleted":return e.map((function(e){return e.id!==t.payload?e:Object(d.a)(Object(d.a)({},e),{},{completed:!e.completed})}));default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;return"filters/setStatusFilter"===t.type?Object(d.a)(Object(d.a)({},e),{},{status:t.payload}):e}}),U=Object(G.a)(),W=Object(D.c)(P,U);c(54);n.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(s.a,{store:W,children:Object(l.jsx)(V,{})}))},6:function(e,t,c){e.exports={wrapper:"AppBar_wrapper__35rok",section:"AppBar_section__39V8L",title:"AppBar_title__2Vmp0"}},8:function(e,t,c){e.exports={wrapper:"Task_wrapper__ROFhn",text:"Task_text__2RvHH",btn:"Task_btn__o6HH7",checkbox:"Task_checkbox__3bUye"}}},[[55,1,2]]]);
//# sourceMappingURL=main.c63d943a.chunk.js.map