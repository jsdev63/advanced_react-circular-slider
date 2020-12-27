(this["webpackJsonp@jsdev63/advanced_react-circular-slider"]=this["webpackJsonp@jsdev63/advanced_react-circular-slider"]||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),l=a.n(r),i=(a(16),a(1)),c=a(7),s=(a(6),a(10),a(3)),d=a(2),u=a.n(d),p=function(e,t){switch(t.type){case"init":case"setKnobPosition":return Object(i.a)({},e,{},t.payload);case"onMouseDown":case"onMouseUp":case"setInitialKnobPosition":return Object(i.a)({},e,{},t.payload);default:throw new Error}},f=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){o(!1)}),[]),a},m=(a(19),function(e){var t=e.knobRef,a=e.isDragging,n=e.knobPosition,r=e.knobColor,l=e.knobSize,c=e.hideKnob,s=e.onMouseDown,d=e.onMouseUp,u=e.trackSize,p=e.children,f={knob:{position:"absolute",left:"-".concat(l/2-u/2,"px"),top:"-".concat(l/2-u/2,"px"),cursor:"grab",zIndex:3},dragging:{cursor:"grabbing"},pause:{animationPlayState:"paused"},animation:{transformOrigin:"50% 50%",animationTimingFunction:"ease-out",animationDuration:"1500ms",animationIterationCount:"infinite",animationName:"pulse"},hide:{opacity:0}};return o.a.createElement("div",{style:Object(i.a)({transform:"translate(".concat(n.x,"px, ").concat(n.y,"px)")},f.knob,{},a&&f.dragging,{},c&&f.hide),onMouseDown:function(){return s},onTouchStart:s,onTouchEnd:d},o.a.createElement("svg",{ref:t,width:"".concat(l,"px"),height:"".concat(l,"px"),viewBox:"0 0 ".concat(l," ").concat(l)},o.a.createElement("circle",{style:Object(i.a)({},f.animation,{},a&&f.pause),fill:r,fillOpacity:"0.2",stroke:"none",cx:l/2,cy:l/2,r:l/2}),o.a.createElement("circle",{fill:r,stroke:"none",cx:l/2,cy:l/2,r:2*l/3/2}),p||o.a.createElement("svg",{width:"".concat(l,"px"),height:"".concat(l,"px"),viewBox:"0 0 36 36"},o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"14",width:"8",height:"1"}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"17",width:"8",height:"1"}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"20",width:"8",height:"1"}))))}),v=function(e){var t=e.labelColor,a=e.labelBottom,n=e.labelFontSize,r=e.valueFontSize,l=e.appendToValue,c=e.prependToValue,s=e.verticalOffset,d=e.hideLabelValue,u=e.label,p={labels:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"".concat(t),userSelect:"none",zIndex:1},value:{fontSize:"".concat(r),position:"relative"},bottomMargin:{marginBottom:"calc(".concat(s,")")},appended:{position:"absolute",right:"0",top:"0",transform:"translate(100%, 0)"},prepended:{position:"absolute",left:"0",top:"0",transform:"translate(-100%, 0)"},hide:{display:"none"}};return o.a.createElement("div",{style:Object(i.a)({},p.labels,{},d&&p.hide)},a||o.a.createElement("div",{style:{fontSize:n}},u),o.a.createElement("div",{style:Object(i.a)({},p.value,{},!a&&p.bottomMargin)},o.a.createElement("code",null,o.a.createElement("span",{style:p.prepended},c),(null===u||void 0===u?void 0:u.value)||u,o.a.createElement("span",{style:p.appended},l))),a&&o.a.createElement("div",{style:{fontSize:n}},u))},b=function(e){var t=e.width,a=e.limit,n=(e.max,e.label),r=e.labelColor,l=e.labelFontSize,i=e.labelOffset,c=e.activedlabelColor,s=e.direction,d=e.strokeDasharray,u=e.strokeDashoffset,p=e.progressColorFrom,f=e.progressColorTo,m=e.trackColor,v=e.doubleLineColor,b=e.progressSize,h=e.trackSize,g=e.svgFullPath,y=e.radiansOffset,k=e.progressLineCap,E=e.offsetAngle,C=e.data,x=e.activedItem,O=e.onLableClick,F={svg:{position:"relative",zIndex:2},path:{transform:"rotate(".concat(y,"rad) ").concat(-1===s?"scale(-1, 1)":"scale(1, 1)"),transformOrigin:"center center"},label:{transform:"translateY(20px)"},text:{textAnchor:"middle",fontSize:l,fill:r,cursor:"pointer"},activedTitle:{fill:c,transition:"all 0.6s ease-in-out"}},S=h/2,w=d*(360-a)/360,z=t/2+i,j=C?a/C.length:1;return o.a.createElement("svg",{width:"".concat(t,"px"),height:"".concat(t,"px"),viewBox:"0 0 ".concat(t," ").concat(t),overflow:"visible",style:F.svg},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:n,x1:"100%",x2:"0%"},o.a.createElement("stop",{offset:"0%",stopColor:p}),o.a.createElement("stop",{offset:"100%",stopColor:f}))),o.a.createElement("path",{className:"progress-line",style:F.path,strokeDasharray:d,strokeDashoffset:w,strokeWidth:h,stroke:m,strokeLinecap:k,fill:"none",d:"\n            M ".concat(t/2,", ").concat(t/2,"\n            m 0, -").concat(t/2-S,"\n            a ").concat(t/2-S,",").concat(t/2-S," 0 0,1 0,").concat(t-2*S,"\n            a -").concat(t/2-S,",-").concat(t/2-S," 0 0,1 0,-").concat(t-2*S,"\n        ")}),o.a.createElement("path",{style:F.path,strokeDasharray:d*(t/2)/z,strokeDashoffset:u*(t/2)/z,strokeWidth:b,strokeLinecap:k,fill:"none",stroke:v,d:"\n            M ".concat(t/2,", ").concat(t/2,"\n            m 0, -").concat(t/2-b,"\n            a ").concat(t/2-b,",").concat(t/2-b," 0 0,1 0,").concat(t-2*b,"\n            a -").concat(t/2-b,",-").concat(t/2-b," 0 0,1 0,-").concat(t-2*b,"\n        ")}),o.a.createElement("path",{style:F.path,ref:g,strokeDasharray:d,strokeDashoffset:u,strokeWidth:b,strokeLinecap:"round"!==k?"butt":"round",fill:"none",stroke:"url(#".concat(n,")"),d:"\n            M ".concat(t/2,", ").concat(t/2,"\n            m 0, -").concat(t/2-S,"\n            a ").concat(t/2-S,",").concat(t/2-S," 0 0,1 0,").concat(t-2*S,"\n            a -").concat(t/2-S,",-").concat(t/2-S," 0 0,1 0,-").concat(t-2*S,"\n        ")}),o.a.createElement("path",{id:"myTextPath",d:"\n          M ".concat(z,",").concat(z," m ").concat(-z,", 0  \n          A ").concat(z,",").concat(z," 0 0 1 0,").concat(z," \n          A ").concat(z,",").concat(z," 0 0 1 -").concat(z,",0 \n          A ").concat(z,",").concat(z," 0 0 1 0,-").concat(z," \n          A ").concat(z,",").concat(z," 0 0 1 0,").concat(z,"\n        "),transform:"translate(".concat(t/2,",").concat(t/2,")"),fill:"none",stroke:"none"}),o.a.createElement("text",{style:F.text},null===C||void 0===C?void 0:C.map((function(e,t){return o.a.createElement("textPath",{xlinkHref:"#myTextPath",startOffset:"".concat((j*t+j/2-E)/3.6,"%"),key:t},o.a.createElement("tspan",{style:t===x&&F.activedTitle||{},onClick:function(){return O(t)}},e.value))}))))},h={top:Math.PI/2,right:0,bottom:-Math.PI/2,left:-Math.PI},g=function(e,t){return h[e]+t/180*Math.PI},y=function(e){return e<0?-1:1},k=function(e){return e*Math.PI/180},E=function(e,t){for(var a=[],n=e;n<=t;n++)a.push(n);return a},C=function(e){var t=e.label,a=void 0===t?"SERVICES":t,r=e.width,l=void 0===r?280:r,d=e.direction,h=void 0===d?1:d,C=e.min,x=void 0===C?0:C,O=e.max,F=void 0===O?360:O,S=e.limit,w=void 0===S?360:S,z=e.offsetAngle,j=void 0===z?0:z,M=e.knobColor,D=void 0===M?"#4e63ea":M,P=e.knobSize,T=void 0===P?36:P,I=e.knobPosition,A=void 0===I?"top":I,L=e.hideKnob,R=void 0!==L&&L,V=e.knobDraggable,B=void 0===V||V,N=e.knobEl,K=void 0===N?null:N,W=e.labelBottom,U=void 0!==W&&W,Y=e.labelColor,_=void 0===Y?"#272b77":Y,G=e.labelFontSize,J=void 0===G?"1rem":G,X=e.labelOffset,$=void 0===X?20:X,H=e.activedlabelColor,q=void 0===H?"#c54a1b":H,Q=e.valueFontSize,Z=void 0===Q?"3rem":Q,ee=e.appendToValue,te=void 0===ee?"":ee,ae=e.prependToValue,ne=void 0===ae?"":ae,oe=e.verticalOffset,re=void 0===oe?"1.5rem":oe,le=e.hideLabelValue,ie=void 0!==le&&le,ce=e.progressColorFrom,se=void 0===ce?"#80C3F3":ce,de=e.progressColorTo,ue=void 0===de?"#4990E2":de,pe=e.progressSize,fe=void 0===pe?8:pe,me=e.trackColor,ve=void 0===me?"#DDDEFB":me,be=e.trackSize,he=void 0===be?8:be,ge=e.doubleLineColor,ye=void 0===ge?"#DDDEFB":ge,ke=e.data,Ee=void 0===ke?[]:ke,Ce=e.dataIndex,xe=void 0===Ce?0:Ce,Oe=e.progressLineCap,Fe=void 0===Oe?"round":Oe,Se=e.renderLabelValue,we=void 0===Se?null:Se,ze=e.onChange,je=void 0===ze?function(e){}:ze,Me=l-2*$,De={mounted:!1,isDragging:!1,contentWidth:Me,radius:Me/2,knobPosition:A,label:0,data:Ee,radians:0,offset:0,knob:{x:0,y:0},dashFullArray:0,dashFullOffset:0},Pe=Object(n.useRef)(null),Te=Object(n.useRef)(null),Ie=Object(n.useRef)(null),Ae=Object(n.useRef)(0),Le=(Object(n.useRef)(!1),f()),Re=Object(n.useReducer)(p,De),Ve=Object(s.a)(Re,2),Be=Ve[0],Ne=Ve[1],Ke=o.a.useState(null),We=Object(s.a)(Ke,2),Ue=We[0],Ye=We[1],_e=o.a.useState(null),Ge=Object(s.a)(_e,2),Je=Ge[0],Xe=Ge[1],$e=Object(n.useRef)(null),He=Object(n.useCallback)((function(e){var t=Be.radius-he/2,a=e+g(A,j),n=(a>0?a:2*Math.PI+a)*(360/(2*Math.PI));if("bottom"===A&&n>w)return!0;if("top"===A&&n<360-w)return n=360-w,!0;var o=n/360*Be.dashFullArray;n=-1===y(h)?360-n:n,Ae.current=n,Te.current.style="transform: rotate(".concat(n+j,"deg);");var r=Be.data.length/360,l=Math.round(n*r),i=Math.floor(n*Ee.length/w);Ye(i),Be.data[l]!==Be.label&&je(Be.data[l]),Ne({type:"setKnobPosition",payload:{dashFullOffset:-1===y(h)?o:Be.dashFullArray-o,label:Be.data[l],knob:{x:t*Math.cos(e)+t,y:t*Math.sin(e)+t}}})}),[j,w,Be.dashFullArray,Be.radius,Be.data,Be.label,A,he,h,je]),qe=function(){$e.current=!0,Ne({type:"onMouseDown",payload:{isDragging:!0}})},Qe=function(){$e.current=!1,Ne({type:"onMouseUp",payload:{isDragging:!1}}),setTimeout((function(){Xe(Math.random())}),200)},Ze=Object(n.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if($e.current){var a;t&&e.preventDefault(),"touchmove"===e.type&&(a=e.changedTouches[0]);var n=function(e){var t,a,n,o,r,l,i,c,s=e.current.getBoundingClientRect(),d=!Le&&((null!==(t=null===u.a||void 0===u.a?void 0:u.a.pageXOffset)&&void 0!==t?t:0)||(null!==(a=null===(n=document)||void 0===n||null===(o=n.documentElement)||void 0===o?void 0:o.scrollLeft)&&void 0!==a?a:0)),p=!Le&&((null!==(r=null===u.a||void 0===u.a?void 0:u.a.pageYOffset)&&void 0!==r?r:0)||(null!==(l=null===(i=document)||void 0===i||null===(c=i.documentElement)||void 0===c?void 0:c.scrollTop)&&void 0!==l?l:0));return{top:s.top+p,left:s.left+d}},o=("touchmove"===e.type?a.pageX:e.pageX)-(n(Pe).left+Be.radius),r=("touchmove"===e.type?a.pageY:e.pageY)-(n(Pe).top+Be.radius),l=Math.atan2(r,o);He(l)}}),[Be.radius,He,Le]);Object(n.useEffect)((function(){Pe.current.addEventListener("touchmove",(function(e){Ze(e,!0)}),{passive:!1}),Ne({type:"init",payload:{mounted:!0,data:Be.data.length?Object(c.a)(Be.data):Object(c.a)(E(x,F)),dashFullArray:Ie.current.getTotalLength?Ie.current.getTotalLength():0}})}),[F,x]),Object(n.useEffect)((function(){var e=null===Ue?xe:Ue,t=Be.data.length,a=e>t-1?t-1:e;if(t){var n=w/t,o=k(n)/2;Ne({type:"setInitialKnobPosition",payload:{radians:Math.PI/2-g(Be.knobPosition,j),offset:o}});var r=y(h)*a*n,l=k(r)-g(Be.knobPosition,j);return He(l+o*y(h))}}),[Be.dashFullArray,Be.knobPosition,Be.data.length,xe,h,Je]);var et=a.replace(/[\W_]/g,"_"),tt={circularSlider:{position:"relative",display:"inline-block",opacity:0,transition:"opacity 1s ease-in",margin:"".concat($+25,"px"),maxWidth:"".concat(l,"px")},value:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},mounted:{opacity:1}};return o.a.createElement("div",{style:Object(i.a)({},tt.circularSlider,{},Be.mounted&&tt.mounted),ref:Pe,onMouseDown:qe,onMouseMove:function(e){return Ze(e)},onMouseUp:function(){return Qe()},onMouseLeave:function(){return Qe()},onTouchMove:Ze},o.a.createElement(b,{width:Me,limit:w,max:F,label:et,labelOffset:$,direction:h,strokeDasharray:Be.dashFullArray,strokeDashoffset:Be.dashFullOffset||100,svgFullPath:Ie,progressSize:fe,progressColorFrom:se,progressColorTo:ue,progressLineCap:Fe,doubleLineColor:ye,trackColor:ve,trackSize:he,radiansOffset:Be.radians,offsetAngle:j,labelColor:_,labelFontSize:J,activedlabelColor:q,data:Ee,activedItem:Ue,onLableClick:function(e){Ye(e),Xe(Math.random())}}),B&&o.a.createElement(m,{knobRef:Te,isDragging:Be.isDragging,knobPosition:{x:Be.knob.x,y:Be.knob.y},knobSize:T,knobColor:D,trackSize:he,hideKnob:R,onMouseDown:qe,onMouseUp:Qe},K),we?o.a.createElement("div",{style:tt.value},we):o.a.createElement(v,{label:a,labelColor:_,labelBottom:U,labelFontSize:J,verticalOffset:re,valueFontSize:Z,appendToValue:te,prependToValue:ne,hideLabelValue:ie,value:Be.label}))};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var F=o.a.createElement("path",{d:"M1.5 1.48047L14.4076 13.4814L1.5 25.4805",stroke:"#FFC801",strokeWidth:3}),S=function(e){var t=e.svgRef,a=e.title,n=O(e,["svgRef","title"]);return o.a.createElement("svg",x({width:17,height:27,viewBox:"0 0 17 27",fill:"none",ref:t},n),a?o.a.createElement("title",null,a):null,F)},w=(o.a.forwardRef((function(e,t){return o.a.createElement(S,x({svgRef:t},e))})),a.p,function(){var e={wrapper:{margin:"2rem"},h3:{margin:"3rem 0 2rem 0"},pre:{fontSize:"0.9rem",borderRadius:"0.3rem",backgroundColor:"#eeeeee",padding:"0.5rem"},slider:{padding:"0 0 0.5rem 0"}};return o.a.createElement("div",{style:e.wrapper},o.a.createElement("h3",{style:e.h3},'Anticlockwise rotation with the knob positioned to the right and "\xb0" appended to the value:'),o.a.createElement("div",{style:e.slider},o.a.createElement(C,{limit:270,offsetAngle:-45,direction:1,data:[{key:1,value:"STAFFING"},{key:2,value:"TEAM"},{key:1,value:"PROJECT"},{key:1,value:"MANAGED"}],knobPosition:"bottom",valueFontSize:"2rem",renderLabelValue:null,progressLineCap:"flat",progressSize:24,trackColor:"#eeeeee",trackSize:24,knobColor:"blue",knobSize:50})),o.a.createElement("pre",{className:e.pre},'<CircularSlider\n  min={0}\n  max={360}\n  limit={270}\n  offsetAngle={-45}\n  direction={1}\n  knobPosition="bottom"\n  appendToValue="\xb0"\n  valueFontSize="4rem"\n/>'),o.a.createElement("h3",{className:e.h3},'An initial value of 20, "$" prepended and "K" appended to the value with a custom knob icon and the label on the bottom:'),o.a.createElement("div",{className:e.slider}),o.a.createElement("pre",{className:e.pre},'import { ReactComponent as PowerIcon } from \'./assets/power.svg\';\n.\n.\n.\n<CircularSlider\n    label="savings"\n    min={0}\n    max={100}\n    dataIndex={20}\n    prependToValue="$"\n    appendToValue="K"\n    labelColor="#005a58"\n    labelBottom={true}\n    knobColor="#005a58"\n    knobSize={72}\n    progressColorFrom="#00bfbd"\n    progressColorTo="#005a58"\n    progressSize={24}\n    trackColor="#eeeeee"\n    trackSize={24}\n>\n    <DragIcon x=\'22\' y=\'22\' width=\'28px\' height=\'28px\' />\n</CircularSlider>'),o.a.createElement("h3",{className:e.h3},"A flat line cap with the track size smaller than the progress track size and a smiley knob:"),o.a.createElement("div",{className:e.slider}),o.a.createElement("pre",{className:e.pre},'\nimport { ReactComponent as EmojiIcon } from \'./assets/emoji.svg\';\n.\n.\n.\n<CircularSlider\n    width={200}\n    progressLineCap="flat"\n    dataIndex={1}\n    label="Alphabet"\n    data=["A","B","C"]//...\n    labelColor="#212121"\n    valueFontSize="6rem"\n    verticalOffset="1rem"\n    knobColor="#212121"\n    progressColorFrom="#ff8500"\n    progressColorTo="#a15400"\n    progressSize={8}\n    trackColor="#eeeeee"\n    trackSize={4}\n>\n    <EmojiIcon x="9" y="9" width="18px" height="18px" />\n</CircularSlider>'))});l.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.e69b4343.chunk.js.map