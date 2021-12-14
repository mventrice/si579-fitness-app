(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(32),i=a.n(r),s=a(152),o=a(164),d=a(56),l=a(19),j=a(13),u=a(169),h=a(166),b=a(167),O=a(168),x=a(147),y=a(156),p=a(170),v=a(2);function g(e){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(h.a,{variant:"h6",component:"h2",sx:{py:3},children:"Your Weekly Progress"}),Object(v.jsxs)(b.a,{sx:{position:"relative",display:"inline-flex"},children:[Object(v.jsx)(p.a,{variant:"determinate",value:e.percentComplete,label:"percent complete",size:200}),Object(v.jsx)(b.a,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(v.jsxs)(h.a,{variant:"h4",component:"div",color:"text.secondary",children:[e.completedWorkouts,"/",e.totalWorkouts]})})]})]})}var m=a(4),f=a(36),k=a(153),w=a(161),C=a(160),W=a(157),M=a(158),S=a(162);function A(e){var t=e.handleAddWorkout;n.a.useEffect((function(){document.querySelector("input[type='number']").addEventListener("keypress",(function(e){8!==e.which&&(e.which<48||e.which>57)&&e.preventDefault()}))}),[]);var a=Object(c.useState)({duration:"",type:"",category:"",day:""}),r=Object(j.a)(a,2),i=r[0],s=r[1],o=["run","cycling","hiit"],d=["yoga","pilates"],l=function(e){var t=e.target,a=t.value,c=t.name;o.includes(a)?s((function(e){var t;return Object(f.a)(Object(f.a)({},e),{},(t={},Object(m.a)(t,c,a),Object(m.a)(t,"category","cardio"),t))})):d.includes(a)?s((function(e){var t;return Object(f.a)(Object(f.a)({},e),{},(t={},Object(m.a)(t,c,a),Object(m.a)(t,"category","stretch"),t))})):s((function(e){var t;return Object(f.a)(Object(f.a)({},e),{},(t={},Object(m.a)(t,c,a),Object(m.a)(t,"category","strength"),t))}))};return console.log(i),Object(v.jsx)(b.a,{sx:{py:2},children:Object(v.jsxs)(x.a,{direction:"row",spacing:2,children:[Object(v.jsxs)(C.a,{required:!0,sx:{m:0,minWidth:150},children:[Object(v.jsx)(w.a,{id:"demo-simple-select-label",children:"Day"}),Object(v.jsxs)(k.a,{value:i.day,name:"day",label:"day",onChange:l,children:[Object(v.jsx)(W.a,{value:"monday",children:"Monday"}),Object(v.jsx)(W.a,{value:"tuesday",children:"Tuesday"}),Object(v.jsx)(W.a,{value:"wednesday",children:"Wednesday"}),Object(v.jsx)(W.a,{value:"thursday",children:"Thurday"}),Object(v.jsx)(W.a,{value:"friday",children:"Friday"}),Object(v.jsx)(W.a,{value:"saturday",children:"Saturday"}),Object(v.jsx)(W.a,{value:"sunday",children:"Sunday"})]})]}),Object(v.jsx)(M.a,{name:"duration",label:"Duration (min)",value:i.duration,onChange:l,type:"number",required:!0}),Object(v.jsxs)(C.a,{required:!0,sx:{m:1,minWidth:150},children:[Object(v.jsx)(w.a,{id:"demo-simple-select-label",children:"Activity"}),Object(v.jsxs)(k.a,{value:i.type,name:"type",label:"Activity",onChange:l,children:[Object(v.jsx)(W.a,{value:"run",children:"Run"}),Object(v.jsx)(W.a,{value:"cycling",children:"Cycling"}),Object(v.jsx)(W.a,{value:"hiit",children:"HIIT"}),Object(v.jsx)(W.a,{value:"pilates",children:"Pilates"}),Object(v.jsx)(W.a,{value:"yoga",children:"Yoga"}),Object(v.jsx)(W.a,{value:"weight lifting",children:"Weight lifting"}),Object(v.jsx)(W.a,{value:"resistance training",children:"Resistance training"})]})]}),Object(v.jsx)(S.a,{variant:"contained",size:"large",disabled:!(i.duration&&i.day&&i.type),onClick:function(e){t(i),s({duration:"",type:"",category:"",day:""})},children:"Add"})]})})}var D=a(163),I=a(151),q=a(154),T=Object(D.a)(Object(I.a)(new Date),{days:1}),E=Object(D.a)(Object(I.a)(new Date),{days:7}),F=Object(q.a)(T,"E dd MMMM"),H=Object(q.a)(E,"E dd MMMM ");var U=function(){return Object(v.jsxs)(h.a,{variant:"h5",component:"h2",gutterBottom:!0,sx:{py:2},children:[F," \u2013 ",H]})};var Y=function(){return Object(v.jsx)(b.a,{children:Object(v.jsxs)(x.a,{direction:"row",spacing:2,children:[Object(v.jsxs)(x.a,{direction:"row",spacing:1,children:[Object(v.jsx)(b.a,{sx:{backgroundColor:"#002984",width:20,height:20}}),Object(v.jsx)(h.a,{children:"Stretch & Tone"})]}),Object(v.jsxs)(x.a,{direction:"row",spacing:1,children:[Object(v.jsx)(b.a,{sx:{backgroundColor:"#00675b",width:20,height:20}}),Object(v.jsx)(h.a,{children:"Strength"})]}),Object(v.jsxs)(x.a,{direction:"row",spacing:1,children:[Object(v.jsx)(b.a,{sx:{backgroundColor:"#d81b60",width:20,height:20}}),Object(v.jsx)(h.a,{children:"Cardio"})]})]})})};a(104);function z(){return Object(v.jsxs)(h.a,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",Object(v.jsx)(O.a,{color:"inherit",href:"https:marielev.com",children:"Mariele Ventrice"})," ",(new Date).getFullYear(),"."]})}function B(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),i=Object(j.a)(r,2),s=i[0],o=i[1];var O=Object(c.useState)(0),p=Object(j.a)(O,2),m=p[0],f=p[1],k=function(e){var t=e.target.checked;f(t?m+1:m-1)},w=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];var C=null,W=function(e,t){if("function"!==typeof t){var a=t;t=function(e){return e[a]}}var c,n=new Map,r=Object(d.a)(e);try{for(r.s();!(c=r.n()).done;){var i=c.value,s=t(i);n.has(s)||n.set(s,[]),n.get(s).push(i)}}catch(h){r.e(h)}finally{r.f()}var o,l={},j=Object(d.a)(Array.from(n.keys()).sort((function(e,t){return w.indexOf(e)-w.indexOf(t)})));try{for(j.s();!(o=j.n()).done;){var u=o.value;l[u]=n.get(u)}}catch(h){j.e(h)}finally{j.f()}return l}(s,"day"),M=[];for(var D in W){if(w.includes(D)){var I=D.charAt(0).toUpperCase()+D.slice(1);C=Object(v.jsx)(h.a,{variant:"h6",component:"h3",children:I}),M.push(C);var q,T=Object(d.a)(W[D]);try{for(T.s();!(q=T.n()).done;){var E=q.value,F=Object(v.jsxs)("li",{className:"nobullet + ".concat(E.category),children:["hiit"===E.type?E.type.toUpperCase()+" ( "+parseInt(E.duration)+"min )":E.type.charAt(0).toUpperCase()+E.type.slice(1)+" ( "+parseInt(E.duration)+"min )",Object(v.jsx)(y.a,{checked:E.checked,onChange:k,color:"success"})]},E.index);M.push(F)}}catch(H){T.e(H)}finally{T.f()}}console.log(D)}return Object(v.jsx)(u.a,{maxWidth:"md",children:Object(v.jsxs)(b.a,{sx:{my:4,py:2,px:2,border:1,borderColor:"#ccc"},children:[Object(v.jsx)(h.a,{variant:"h4",component:"h1",gutterBottom:!0,children:"Workout Scheduler and Tracker"}),Object(v.jsx)(A,{handleAddWorkout:function(e){o((function(t){return[].concat(Object(l.a)(t),[e])}));var t=s.length;n(0===t?t+1:t)}}),Object(v.jsx)(U,{}),Object(v.jsx)(Y,{}),Object(v.jsxs)(x.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(v.jsx)(b.a,{sx:{minWidth:300,minHeight:400,py:2},children:Object(v.jsx)("ul",{children:M})}),Object(v.jsxs)(b.a,{sx:{minWidth:300,minHeight:200},children:[Object(v.jsx)(g,{totalWorkouts:a,completedWorkouts:m,percentComplete:a?m/a*100:0})," "]})]}),a?Object(v.jsx)(S.a,{onClick:function(){o([{}]),f(0),n(0)},children:"Clear Workouts"}):null,Object(v.jsx)(z,{})]})})}var J=a(35),P=a(77),R=Object(P.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:J.a.A400}}});i.a.render(Object(v.jsxs)(o.a,{theme:R,children:[Object(v.jsx)(s.a,{}),Object(v.jsx)(B,{})]}),document.querySelector("#root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.055387de.chunk.js.map