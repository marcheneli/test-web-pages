(window.webpackJsonpwww=window.webpackJsonpwww||[]).push([[55],{1462:function(e,t,n){"use strict";var r=n(855);Object.defineProperty(t,"__esModule",{value:!0});var o={};Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=r(n(1464));Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))})},1463:function(e,t,n){"use strict";var r=n(855),o=n(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(36)),a=o(n(2)),u=(o(n(31)),r(n(1462))),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.breakpoint,r=void 0===n?"sm":n;return(0,u.default)()(function(e){return a.default.createElement(t,(0,i.default)({fullScreen:(0,u.isWidthDown)(r,e.width)},e))})}};t.default=d},1464:function(e,t,n){"use strict";var r=n(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.isWidthDown=t.isWidthUp=void 0;var o=r(n(36)),i=r(n(39)),a=r(n(73)),u=r(n(74)),d=r(n(76)),l=r(n(77)),f=r(n(78)),c=r(n(2)),s=(r(n(31)),r(n(217))),p=r(n(373)),h=(n(61),r(n(539))),v=r(n(263)),m=n(859),g=r(n(860));t.isWidthUp=function(e,t){return arguments.length>2&&void 0!==arguments[2]&&!arguments[2]?m.keys.indexOf(e)<m.keys.indexOf(t):m.keys.indexOf(e)<=m.keys.indexOf(t)};t.isWidthDown=function(e,t){return arguments.length>2&&void 0!==arguments[2]&&!arguments[2]?m.keys.indexOf(t)<m.keys.indexOf(e):m.keys.indexOf(t)<=m.keys.indexOf(e)};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.withTheme,r=void 0!==n&&n,y=e.noSSR,b=void 0!==y&&y,w=e.initialWidth,O=e.resizeInterval,x=void 0===O?166:O,k=function(e){function n(e){var t;return(0,a.default)(this,n),(t=(0,d.default)(this,(0,l.default)(n).call(this,e))).state={width:b?t.getWidth():void 0},"undefined"!=typeof window&&(t.handleResize=(0,p.default)(function(){var e=t.getWidth();e!==t.state.width&&t.setState({width:e})},x)),t}return(0,f.default)(n,e),(0,u.default)(n,[{key:"componentDidMount",value:function(){var e=this.getWidth();e!==this.state.width&&this.setState({width:e})}},{key:"componentWillUnmount",value:function(){this.handleResize.clear()}},{key:"getWidth",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.innerWidth,t=this.props.theme.breakpoints,n=null,r=1;null===n&&r<m.keys.length;){var o=m.keys[r];if(e<t.values[o]){n=m.keys[r-1];break}r+=1}return n=n||"xl"}},{key:"render",value:function(){var e=(0,g.default)({theme:this.props.theme,name:"MuiWithWidth",props:(0,o.default)({},this.props)}),n=e.initialWidth,a=e.theme,u=e.width,d=(0,i.default)(e,["initialWidth","theme","width"]),l=(0,o.default)({width:u||this.state.width||n||w},d);return void 0===l.width?null:(r&&(l.theme=a),c.default.createElement(c.default.Fragment,null,c.default.createElement(t,l),c.default.createElement(s.default,{target:"window",onResize:this.handleResize})))}}]),n}(c.default.Component);return(0,h.default)(k,t),(0,v.default)()(k)}};t.default=y},1465:function(e,t,n){"use strict";var r=n(12);Object.defineProperty(t,"__esModule",{value:!0}),t.isHorizontal=O,t.getAnchor=x,t.default=t.styles=void 0;var o=r(n(36)),i=r(n(55)),a=r(n(39)),u=r(n(73)),d=r(n(74)),l=r(n(76)),f=r(n(77)),c=r(n(78)),s=r(n(2)),p=(r(n(31)),r(n(47))),h=r(n(625)),v=r(n(38)),m=r(n(858)),g=r(n(93)),y=n(110),b=n(321),w={left:"right",right:"left",top:"down",bottom:"up"};function O(e){return-1!==["left","right"].indexOf(e.anchor)}function x(e){return"rtl"===e.theme.direction&&O(e)?w[e.anchor]:e.anchor}var k=function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:"none"},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}};t.styles=k;var j=function(e){function t(){var e,n;(0,u.default)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=(0,l.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(o)))).mounted=!1,n}return(0,c.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"render",value:function(){var e=this.props,t=(e.anchor,e.BackdropProps),n=e.children,r=e.classes,u=e.className,d=e.elevation,l=e.ModalProps,f=(l=void 0===l?{}:l).BackdropProps,c=(0,a.default)(l,["BackdropProps"]),v=e.onClose,b=e.open,O=e.PaperProps,k=e.SlideProps,j=(e.theme,e.transitionDuration),P=e.variant,_=(0,a.default)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","theme","transitionDuration","variant"]),E=x(this.props),R=s.default.createElement(g.default,(0,o.default)({elevation:"temporary"===P?d:0,square:!0,className:(0,p.default)(r.paper,r["paperAnchor".concat((0,y.capitalize)(E))],(0,i.default)({},r["paperAnchorDocked".concat((0,y.capitalize)(E))],"temporary"!==P))},O),n);if("permanent"===P)return s.default.createElement("div",(0,o.default)({className:(0,p.default)(r.root,r.docked,u)},_),R);var S=s.default.createElement(m.default,(0,o.default)({in:b,direction:w[E],timeout:j,appear:this.mounted},k),R);return"persistent"===P?s.default.createElement("div",(0,o.default)({className:(0,p.default)(r.root,r.docked,u)},_),S):s.default.createElement(h.default,(0,o.default)({BackdropProps:(0,o.default)({},t,f,{transitionDuration:j}),className:(0,p.default)(r.root,r.modal,u),open:b,onClose:v},_,c),S)}}]),t}(s.default.Component);j.defaultProps={anchor:"left",elevation:16,open:!1,transitionDuration:{enter:b.duration.enteringScreen,exit:b.duration.leavingScreen},variant:"temporary"};var P=(0,v.default)(k,{name:"MuiDrawer",flip:!1,withTheme:!0})(j);t.default=P},1471:function(e,t,n){"use strict";var r=n(1536),o=n(1537);var i=function(e,t,n){var r=e.length;return n=void 0===n?r:n,!t&&n>=r?e:Object(o.default)(e,t,n)},a=n(431);var u=function(e,t){for(var n=e.length;n--&&Object(a.a)(t,e[n],0)>-1;);return n};var d=function(e,t){for(var n=-1,r=e.length;++n<r&&Object(a.a)(t,e[n],0)>-1;);return n};var l=function(e){return e.split("")},f=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var c=function(e){return f.test(e)},s="[\\ud800-\\udfff]",p="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",h="\\ud83c[\\udffb-\\udfff]",v="[^\\ud800-\\udfff]",m="(?:\\ud83c[\\udde6-\\uddff]){2}",g="[\\ud800-\\udbff][\\udc00-\\udfff]",y="(?:"+p+"|"+h+")"+"?",b="[\\ufe0e\\ufe0f]?"+y+("(?:\\u200d(?:"+[v,m,g].join("|")+")[\\ufe0e\\ufe0f]?"+y+")*"),w="(?:"+[v+p+"?",p,m,g,s].join("|")+")",O=RegExp(h+"(?="+h+")|"+w+b,"g");var x=function(e){return e.match(O)||[]};var k=function(e){return c(e)?x(e):l(e)},j=n(444),P=/^\s+|\s+$/g;t.a=function(e,t,n){if((e=Object(j.default)(e))&&(n||void 0===t))return e.replace(P,"");if(!e||!(t=Object(r.default)(t)))return e;var o=k(e),a=k(t),l=d(o,a),f=u(o,a)+1;return i(o,l,f).join("")}},1473:function(e,t,n){"use strict";var r=n(12);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=r(n(1463))},1474:function(e,t,n){"use strict";var r=n(12);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=r(n(1465))},1536:function(e,t,n){e.exports=n(49)(157)},1537:function(e,t,n){e.exports=n(49)(196)},2659:function(e,t,n){var r=n(2660);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(121)(r,o);r.locals&&(e.exports=r.locals)},2660:function(e,t,n){(e.exports=n(120)(!1)).push([e.i,".TwoFactorCodePage .Screen__container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  min-height: 0;\n  width: 100%;\n  background-color: #eeeded;\n  padding: 20px; }\n\n.TwoFactorCodePage__paper {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  width: 300px; }\n",""])},2754:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),i=n(10),a=n.n(i),u=n(7),d=n.n(u),l=n(8),f=n.n(l),c=n(11),s=n.n(c),p=n(2),h=n(14),v=n(13),m=n(1467),g=n(871),y=n.n(g),b=n(95),w=n(26),O=n.n(w),x=n(633),k=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":s()(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},j=function(e){function t(){return o()(this,t),d()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f()(t,e),a()(t,[{key:"render",value:function(){var e=this.props.fields.code;return p.createElement("form",{onSubmit:this.props.handleSubmit,style:{position:"relative",margin:"20px 20px 0 20px"}},p.createElement(O.a,{fullWidth:!0,autoFocus:!0,value:e.value,onChange:e.onChange,label:this.props.i18n.t("Код верификации")}),p.createElement("div",{style:{textAlign:"center",marginTop:"15px",marginBottom:"15px"}},p.createElement(x.a,{type:"submit",formName:"twoFactorCodeForm",onClick:function(){}},this.props.i18n.t("auth|Отправить"))))}}]),t}(p.Component);j=k([v.autobind],j);var P=Object(h.connect)(function(e){return{i18n:e.i18n}},function(e){return{}},function(e,t,n){return Object.assign({},e,n)},{withRef:!0})(Object(b.reduxForm)({form:"twoFactorCodeForm",fields:["code"]})(j)),_=n(79),E=n(1469),R=n(71),S=n(1471),D=(n(2659),function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":s()(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}),W=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":s()(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},A=function(e){function t(e){return o()(this,t),d()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,m.a.screenInitialState()))}return f()(t,e),a()(t,[{key:"renderNavigation",value:function(){return p.createElement("div",null)}},{key:"renderSidebar",value:function(){return p.createElement("div",null)}},{key:"getLogoSrc",value:function(e){return this.props.cdnAddress+"/free/"+e.value}},{key:"handleSubmit",value:function(e){var t=this;return new Promise(function(n,r){t.props.dispatch(Object(E.g)(Object(S.a)(e.code))).then(function(e){t.props.dispatch(Object(_.tb)()),n()}).catch(function(e){t.props.dispatch(Object(R.h)(t.props.i18n.t("Ошибочный код верификации"))),r({_error:t.props.i18n.t("Ошибочный код верификации")})})})}},{key:"render",value:function(){var e=this;return this.renderScreenBody({className:"TwoFactorCodePage"},p.createElement("div",null,this.props.organisation.logo.map(function(t){return p.createElement("div",{style:{width:"300px",marginBottom:"50px",textAlign:"center"}},p.createElement("img",{style:{height:"100px"},src:e.getLogoSrc(t)}))}).getOrNull(),p.createElement(y.a,{className:"TwoFactorCodePage__paper"},p.createElement(P,{onSubmit:this.handleSubmit}))))}}]),t}(m.a);A=D([v.autobind,W("design:paramtypes",[Object])],A);t.default=Object(h.connect)(function(e){return{terminals:e.terminals,oauth:e.oauth,organisation:e.organisation,i18n:e.i18n,cdnAddress:e.config.cdnAddress}})(A)}}]);