(this["webpackJsonpreact-bootstrap-template"]=this["webpackJsonpreact-bootstrap-template"]||[]).push([[4],{114:function(e,t,n){"use strict";n.r(t);var c=n(4),i=n(0),r=n.n(i),a=n(134),s=n(2),l=n(3),o=n(26);var u=function(e,t){var n=Object(i.useRef)(!0);Object(i.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},j=n(77);function d(e){var t=function(e){var t=Object(i.useRef)(e);return t.current=e,t}(e);Object(i.useEffect)((function(){return function(){return t.current()}}),[])}var b=Math.pow(2,31)-1;function h(e,t,n){var c=n-Date.now();e.current=c<=b?setTimeout(t,c):setTimeout((function(){return h(e,t,n)}),b)}function O(){var e=function(){var e=Object(i.useRef)(!0),t=Object(i.useRef)((function(){return e.current}));return Object(i.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=Object(i.useRef)();return d((function(){return clearTimeout(t.current)})),Object(i.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(c,i){void 0===i&&(i=0),e()&&(n(),i<=b?t.current=setTimeout(c,i):h(t,c,Date.now()+i))},clear:n}}),[])}var f=n(73),x=n(5),v=n.n(x),p=n(35),m=n(18),g=Object(m.a)("carousel-caption"),N=n(6),C=n(1),I=["as","bsPrefix","className"],S=i.forwardRef((function(e,t){var n=e.as,c=void 0===n?"div":n,i=e.bsPrefix,r=e.className,a=Object(l.a)(e,I),o=v()(r,Object(N.a)(i,"carousel-item"));return Object(C.jsx)(c,Object(s.a)(Object(s.a)({ref:t},a),{},{className:o}))}));S.displayName="CarouselItem";var M=S,y=n(146),w=n(42),H=n(54),k=n(43),T=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"],E={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:Object(C.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:Object(C.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var L=i.forwardRef((function(e,t){var n=Object(p.a)(e,{activeIndex:"onSelect"}),r=n.as,a=void 0===r?"div":r,d=n.bsPrefix,b=n.slide,h=n.fade,x=n.controls,m=n.indicators,g=n.indicatorLabels,I=n.activeIndex,S=n.onSelect,M=n.onSlide,E=n.onSlid,L=n.interval,R=n.keyboard,P=n.onKeyDown,W=n.pause,D=n.onMouseOver,F=n.onMouseOut,A=n.wrap,q=n.touch,K=n.onTouchStart,J=n.onTouchMove,V=n.onTouchEnd,X=n.prevIcon,z=n.prevLabel,B=n.nextIcon,G=n.nextLabel,Q=n.variant,U=n.className,Y=n.children,Z=Object(l.a)(n,T),$=Object(N.a)(d,"carousel"),_=Object(N.b)(),ee=Object(i.useRef)(null),te=Object(i.useState)("next"),ne=Object(c.a)(te,2),ce=ne[0],ie=ne[1],re=Object(i.useState)(!1),ae=Object(c.a)(re,2),se=ae[0],le=ae[1],oe=Object(i.useState)(!1),ue=Object(c.a)(oe,2),je=ue[0],de=ue[1],be=Object(i.useState)(I||0),he=Object(c.a)(be,2),Oe=he[0],fe=he[1];je||I===Oe||(ee.current?ie(ee.current):ie((I||0)>Oe?"next":"prev"),b&&de(!0),fe(I||0)),Object(i.useEffect)((function(){ee.current&&(ee.current=null)}));var xe,ve=0;Object(y.a)(Y,(function(e,t){++ve,t===I&&(xe=e.props.interval)}));var pe=Object(j.a)(xe),me=Object(i.useCallback)((function(e){if(!je){var t=Oe-1;if(t<0){if(!A)return;t=ve-1}ee.current="prev",null==S||S(t,e)}}),[je,Oe,S,A,ve]),ge=Object(o.a)((function(e){if(!je){var t=Oe+1;if(t>=ve){if(!A)return;t=0}ee.current="next",null==S||S(t,e)}})),Ne=Object(i.useRef)();Object(i.useImperativeHandle)(t,(function(){return{element:Ne.current,prev:me,next:ge}}));var Ce=Object(o.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(Ne.current)&&(_?me():ge())})),Ie="next"===ce?"start":"end";u((function(){b||(null==M||M(Oe,Ie),null==E||E(Oe,Ie))}),[Oe]);var Se="".concat($,"-item-").concat(ce),Me="".concat($,"-item-").concat(Ie),ye=Object(i.useCallback)((function(e){Object(H.a)(e),null==M||M(Oe,Ie)}),[M,Oe,Ie]),we=Object(i.useCallback)((function(){de(!1),null==E||E(Oe,Ie)}),[E,Oe,Ie]),He=Object(i.useCallback)((function(e){if(R&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(_?ge(e):me(e));case"ArrowRight":return e.preventDefault(),void(_?me(e):ge(e))}null==P||P(e)}),[R,P,me,ge,_]),ke=Object(i.useCallback)((function(e){"hover"===W&&le(!0),null==D||D(e)}),[W,D]),Te=Object(i.useCallback)((function(e){le(!1),null==F||F(e)}),[F]),Ee=Object(i.useRef)(0),Le=Object(i.useRef)(0),Re=O(),Pe=Object(i.useCallback)((function(e){Ee.current=e.touches[0].clientX,Le.current=0,"hover"===W&&le(!0),null==K||K(e)}),[W,K]),We=Object(i.useCallback)((function(e){e.touches&&e.touches.length>1?Le.current=0:Le.current=e.touches[0].clientX-Ee.current,null==J||J(e)}),[J]),De=Object(i.useCallback)((function(e){if(q){var t=Le.current;Math.abs(t)>40&&(t>0?me(e):ge(e))}"hover"===W&&Re.set((function(){le(!1)}),L||void 0),null==V||V(e)}),[q,W,me,ge,Re,L,V]),Fe=null!=L&&!se&&!je,Ae=Object(i.useRef)();Object(i.useEffect)((function(){var e,t;if(Fe){var n=_?me:ge;return Ae.current=window.setInterval(document.visibilityState?Ce:n,null!=(e=null!=(t=pe.current)?t:L)?e:void 0),function(){null!==Ae.current&&clearInterval(Ae.current)}}}),[Fe,me,ge,pe,L,Ce,_]);var qe=Object(i.useMemo)((function(){return m&&Array.from({length:ve},(function(e,t){return function(e){null==S||S(t,e)}}))}),[m,ve,S]);return Object(C.jsxs)(a,Object(s.a)(Object(s.a)({ref:Ne},Z),{},{onKeyDown:He,onMouseOver:ke,onMouseOut:Te,onTouchStart:Pe,onTouchMove:We,onTouchEnd:De,className:v()(U,$,b&&"slide",h&&"".concat($,"-fade"),Q&&"".concat($,"-").concat(Q)),children:[m&&Object(C.jsx)("div",{className:"".concat($,"-indicators"),children:Object(y.b)(Y,(function(e,t){return Object(C.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=g&&g.length?g[t]:"Slide ".concat(t+1),className:t===Oe?"active":void 0,onClick:qe?qe[t]:void 0,"aria-current":t===Oe},t)}))}),Object(C.jsx)("div",{className:"".concat($,"-inner"),children:Object(y.b)(Y,(function(e,t){var n=t===Oe;return b?Object(C.jsx)(k.a,{in:n,onEnter:n?ye:void 0,onEntered:n?we:void 0,addEndListener:w.a,children:function(t,c){return i.cloneElement(e,Object(s.a)(Object(s.a)({},c),{},{className:v()(e.props.className,n&&"entered"!==t&&Se,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&Me)}))}}):i.cloneElement(e,{className:v()(e.props.className,n&&"active")})}))}),x&&Object(C.jsxs)(C.Fragment,{children:[(A||0!==I)&&Object(C.jsxs)(f.a,{className:"".concat($,"-control-prev"),onClick:me,children:[X,z&&Object(C.jsx)("span",{className:"visually-hidden",children:z})]}),(A||I!==ve-1)&&Object(C.jsxs)(f.a,{className:"".concat($,"-control-next"),onClick:ge,children:[B,G&&Object(C.jsx)("span",{className:"visually-hidden",children:G})]})]})]}))}));L.displayName="Carousel",L.defaultProps=E;var R=Object.assign(L,{Caption:g,Item:M}),P=n(41);t.default=function(){var e=Object(i.useState)(0),t=Object(c.a)(e,2),n=t[0],s=t[1];return Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsx)(a.a,{className:"p-3",lg:"6",children:Object(C.jsxs)("div",{className:"component",children:[Object(C.jsx)("h2",{className:"h2 text-center",children:"Carousels basic example"}),Object(C.jsxs)(R,{interval:1e3,children:[Object(C.jsxs)(R.Item,{children:[Object(C.jsx)(P.b,{iWidth:500,iHeight:200,iMinHeight:"250px"}),Object(C.jsxs)(R.Caption,{children:[Object(C.jsx)("h3",{children:"First slide label"}),Object(C.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),Object(C.jsxs)(R.Item,{children:[Object(C.jsx)(P.b,{iWidth:500,iHeight:200,iMinHeight:"250px"}),Object(C.jsxs)(R.Caption,{children:[Object(C.jsx)("h3",{children:"Second slide label"}),Object(C.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(C.jsxs)(R.Item,{children:[Object(C.jsx)(P.b,{iWidth:500,iHeight:200,iMinHeight:"250px"}),Object(C.jsxs)(R.Caption,{children:[Object(C.jsx)("h3",{children:"Third slide label"}),Object(C.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]})]})}),Object(C.jsx)(a.a,{className:"p-3",lg:"6",children:Object(C.jsxs)("div",{className:"component",children:[Object(C.jsx)("h2",{className:"h2 text-center",children:"Controlled carousels"}),Object(C.jsxs)(R,{activeIndex:n,onSelect:function(e,t){s(e)},children:[Object(C.jsxs)(R.Item,{children:[Object(C.jsx)(P.b,{iWidth:500,iHeight:200,iMinHeight:"250px"}),Object(C.jsxs)(R.Caption,{children:[Object(C.jsx)("h3",{children:"First slide label"}),Object(C.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),Object(C.jsxs)(R.Item,{children:[Object(C.jsx)(P.b,{iWidth:500,iHeight:200,iMinHeight:"250px"}),Object(C.jsxs)(R.Caption,{children:[Object(C.jsx)("h3",{children:"Second slide label"}),Object(C.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(C.jsxs)(R.Item,{children:[Object(C.jsx)(P.b,{iWidth:500,iHeight:200,iMinHeight:"250px"}),Object(C.jsxs)(R.Caption,{children:[Object(C.jsx)("h3",{children:"Third slide label"}),Object(C.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]})]})}),Object(C.jsx)(a.a,{className:"p-3",lg:"12",children:Object(C.jsxs)("div",{className:"component",children:[Object(C.jsx)("h2",{className:"h2 text-center",children:"Carousel with fade effect"}),Object(C.jsxs)(R,{fade:!0,children:[Object(C.jsxs)(R.Item,{children:[Object(C.jsx)(P.b,{iWidth:500,iHeight:200,iMinHeight:"250px"}),Object(C.jsxs)(R.Caption,{children:[Object(C.jsx)("h3",{children:"First slide label"}),Object(C.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),Object(C.jsxs)(R.Item,{children:[Object(C.jsx)(P.b,{iWidth:500,iHeight:200,iMinHeight:"250px"}),Object(C.jsxs)(R.Caption,{children:[Object(C.jsx)("h3",{children:"Second slide label"}),Object(C.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(C.jsxs)(R.Item,{children:[Object(C.jsx)(P.b,{iWidth:500,iHeight:200,iMinHeight:"250px"}),Object(C.jsxs)(R.Caption,{children:[Object(C.jsx)("h3",{children:"Third slide label"}),Object(C.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]})]})})]})}},146:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var c=n(0);function i(e,t){var n=0;return c.Children.map(e,(function(e){return c.isValidElement(e)?t(e,n++):e}))}function r(e,t){var n=0;c.Children.forEach(e,(function(e){c.isValidElement(e)&&t(e,n++)}))}}}]);
//# sourceMappingURL=4.c11fb72a.chunk.js.map