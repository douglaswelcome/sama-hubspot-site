var hamburger=document.querySelector(".hamburger"),mobileSubMenu=document.querySelector(".mobile-submenu"),body=document.querySelector("body"),html=document.querySelector("html");function pressSlider(){$(".press-table-header__category:nth-of-type(1)").click((function(){$(".press-table-header__category:nth-of-type(2)").removeClass("press-table-header__category--selected"),$(this).addClass("press-table-header__category--selected"),$("#slider-divider").removeClass("divider-line--right"),$("#slider-divider").addClass("divider-line--left")})),$(".press-table-header__category:nth-of-type(2)").click((function(){$(".press-table-header__category:nth-of-type(1)").removeClass("press-table-header__category--selected"),$(this).addClass("press-table-header__category--selected"),$("#slider-divider").removeClass("divider-line--left"),$("#slider-divider").addClass("divider-line--right")}))}function filterPress(){$('a[type="Press Release"]').hide(),$(".press-table-header__category:nth-of-type(1)").click((function(){$('a[type="News"]').show(),$('a[type="Press Release"]').hide(),console.log("dd007")})),$(".press-table-header__category:nth-of-type(2)").click((function(){$('a[type="Press Release"]').show(),$('a[type="News"]').hide(),console.log("dd007")}))}hamburger.addEventListener("click",(function(){hamburger.classList.toggle("is-active"),mobileSubMenu.classList.toggle("is-active"),body.classList.toggle("burger-time"),html.classList.toggle("burger-time")})),$(window).resize((function(){$(window).width()>1080&&($(".hamburger").removeClass("is-active"),$(".mobile-submenu").removeClass("is-active"),$("body").removeClass("burger-time"))})),$((function(){var e=!0;function t(){1==e?($(".desktop-header").addClass("submenu-open"),$(".header-cta .hubby-cta").removeClass("secondary"),$(".submenu").addClass("visible")):($(".desktop-header").removeClass("submenu-open"),$(".header-cta .hubby-cta").addClass("secondary"),$(".submenu").removeClass("visible"))}$(".desktop-header .menu, section.submenu .submenu-content").mouseenter((function(){e=!0,t()})),$(".desktop-header, section.submenu .submenu-content").mouseleave((function(){e=!1,t()})),$(".header-desktop-wrapper").mouseleave((function(){$("menu.desktop-menu li.open").removeClass("open")})),$(".desktop-header .menu menu.desktop-menu li").mouseover((function(){var e=$(this).index();$(".desktop-header .menu menu.desktop-menu li.open").removeClass("open"),$(".desktop-header .menu menu.desktop-menu li:eq("+e+")").addClass("open"),$("section.submenu .submenu-content .submenu-item.visible").removeClass("visible"),$("section.submenu .submenu-content .submenu-item:eq("+e+")").addClass("visible")}))})),window.addEventListener("scroll",(function(e){var t=window.pageYOffset;document.querySelector(".pattern").style.transform="translateY("+.2*t+"px)"})),$(pressSlider()),$(filterPress());var i,acc=document.getElementsByClassName("accordian-click");for(i=0;i<acc.length;i++)acc[i].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;console.log(e),e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}));function openWindow(e,t,n){var o,i,r,u;for(document.getElementById(n).currentTime=0,i=document.getElementsByClassName("stuff"),o=0;o<i.length;o++)i[o].classList.remove("active");for(r=document.getElementsByClassName("clicker"),o=0;o<r.length;o++)r[o].className=r[o].className.replace("active","");for(u=document.getElementsByClassName("vid"),o=0;o<u.length;o++)u[o].className=u[o].className.replace("active","");e.currentTarget.className+=" active",document.getElementById(n).classList.add("active"),document.getElementById(t).classList.add("active"),setTimeout((function(){resizeSC(t)}),500)}function resizeSC(e){const t=document.getElementById(e).clientHeight;document.getElementsByClassName("stuff-container")[0].style.height=t+"px"}$(window).on("resize",(function(){$(".strip-block").each((function(){var e=$(this).find(".strip-img").height();console.log(e),$(this).find(".strip-img img").height(e+100)}))})).resize(),$(window).resize((function(){resizeSC($(".stuff.active").attr("id"))}));var pigmeat=$(".stuff.active").attr("id");resizeSC(pigmeat),function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).basicScroll=e()}((function(){return function e(t,n,o){function i(u,s){if(!n[u]){if(!t[u]){var c="function"==typeof require&&require;if(!s&&c)return c(u,!0);if(r)return r(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var l=n[u]={exports:{}};t[u][0].call(l.exports,(function(e){return i(t[u][1][e]||e)}),l,l.exports,e,t,n,o)}return n[u].exports}for(var r="function"==typeof require&&require,u=0;u<o.length;u++)i(o[u]);return i}({1:[function(e,t,n){"use strict";t.exports=function(e){var t=2.5949095;return(e*=2)<1?e*e*((t+1)*e-t)*.5:.5*((e-=2)*e*((t+1)*e+t)+2)}},{}],2:[function(e,t,n){"use strict";t.exports=function(e){var t=1.70158;return e*e*((t+1)*e-t)}},{}],3:[function(e,t,n){"use strict";t.exports=function(e){var t=1.70158;return--e*e*((t+1)*e+t)+1}},{}],4:[function(e,t,n){"use strict";var o=e("./bounce-out");t.exports=function(e){return e<.5?.5*(1-o(1-2*e)):.5*o(2*e-1)+.5}},{"./bounce-out":6}],5:[function(e,t,n){"use strict";var o=e("./bounce-out");t.exports=function(e){return 1-o(1-e)}},{"./bounce-out":6}],6:[function(e,t,n){"use strict";t.exports=function(e){var t=e*e;return e<4/11?7.5625*t:e<8/11?9.075*t-9.9*e+3.4:e<.9?4356/361*t-35442/1805*e+16061/1805:10.8*e*e-20.52*e+10.72}},{}],7:[function(e,t,n){"use strict";t.exports=function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},{}],8:[function(e,t,n){"use strict";t.exports=function(e){return 1-Math.sqrt(1-e*e)}},{}],9:[function(e,t,n){"use strict";t.exports=function(e){return Math.sqrt(1- --e*e)}},{}],10:[function(e,t,n){"use strict";t.exports=function(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}},{}],11:[function(e,t,n){"use strict";t.exports=function(e){return e*e*e}},{}],12:[function(e,t,n){"use strict";t.exports=function(e){var t=e-1;return t*t*t+1}},{}],13:[function(e,t,n){"use strict";t.exports=function(e){return e<.5?.5*Math.sin(13*Math.PI/2*2*e)*Math.pow(2,10*(2*e-1)):.5*Math.sin(-13*Math.PI/2*(2*e-1+1))*Math.pow(2,-10*(2*e-1))+1}},{}],14:[function(e,t,n){"use strict";t.exports=function(e){return Math.sin(13*e*Math.PI/2)*Math.pow(2,10*(e-1))}},{}],15:[function(e,t,n){"use strict";t.exports=function(e){return Math.sin(-13*(e+1)*Math.PI/2)*Math.pow(2,-10*e)+1}},{}],16:[function(e,t,n){"use strict";t.exports=function(e){return 0===e||1===e?e:e<.5?.5*Math.pow(2,20*e-10):-.5*Math.pow(2,10-20*e)+1}},{}],17:[function(e,t,n){"use strict";t.exports=function(e){return 0===e?e:Math.pow(2,10*(e-1))}},{}],18:[function(e,t,n){"use strict";t.exports=function(e){return 1===e?e:1-Math.pow(2,-10*e)}},{}],19:[function(e,t,n){"use strict";t.exports={backInOut:e("./back-in-out"),backIn:e("./back-in"),backOut:e("./back-out"),bounceInOut:e("./bounce-in-out"),bounceIn:e("./bounce-in"),bounceOut:e("./bounce-out"),circInOut:e("./circ-in-out"),circIn:e("./circ-in"),circOut:e("./circ-out"),cubicInOut:e("./cubic-in-out"),cubicIn:e("./cubic-in"),cubicOut:e("./cubic-out"),elasticInOut:e("./elastic-in-out"),elasticIn:e("./elastic-in"),elasticOut:e("./elastic-out"),expoInOut:e("./expo-in-out"),expoIn:e("./expo-in"),expoOut:e("./expo-out"),linear:e("./linear"),quadInOut:e("./quad-in-out"),quadIn:e("./quad-in"),quadOut:e("./quad-out"),quartInOut:e("./quart-in-out"),quartIn:e("./quart-in"),quartOut:e("./quart-out"),quintInOut:e("./quint-in-out"),quintIn:e("./quint-in"),quintOut:e("./quint-out"),sineInOut:e("./sine-in-out"),sineIn:e("./sine-in"),sineOut:e("./sine-out")}},{"./back-in":2,"./back-in-out":1,"./back-out":3,"./bounce-in":5,"./bounce-in-out":4,"./bounce-out":6,"./circ-in":8,"./circ-in-out":7,"./circ-out":9,"./cubic-in":11,"./cubic-in-out":10,"./cubic-out":12,"./elastic-in":14,"./elastic-in-out":13,"./elastic-out":15,"./expo-in":17,"./expo-in-out":16,"./expo-out":18,"./linear":20,"./quad-in":22,"./quad-in-out":21,"./quad-out":23,"./quart-in":25,"./quart-in-out":24,"./quart-out":26,"./quint-in":28,"./quint-in-out":27,"./quint-out":29,"./sine-in":31,"./sine-in-out":30,"./sine-out":32}],20:[function(e,t,n){"use strict";t.exports=function(e){return e}},{}],21:[function(e,t,n){"use strict";t.exports=function(e){return(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1)}},{}],22:[function(e,t,n){"use strict";t.exports=function(e){return e*e}},{}],23:[function(e,t,n){"use strict";t.exports=function(e){return-e*(e-2)}},{}],24:[function(e,t,n){"use strict";t.exports=function(e){return e<.5?8*Math.pow(e,4):-8*Math.pow(e-1,4)+1}},{}],25:[function(e,t,n){"use strict";t.exports=function(e){return Math.pow(e,4)}},{}],26:[function(e,t,n){"use strict";t.exports=function(e){return Math.pow(e-1,3)*(1-e)+1}},{}],27:[function(e,t,n){"use strict";t.exports=function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},{}],28:[function(e,t,n){"use strict";t.exports=function(e){return e*e*e*e*e}},{}],29:[function(e,t,n){"use strict";t.exports=function(e){return--e*e*e*e*e+1}},{}],30:[function(e,t,n){"use strict";t.exports=function(e){return-.5*(Math.cos(Math.PI*e)-1)}},{}],31:[function(e,t,n){"use strict";t.exports=function(e){var t=Math.cos(e*Math.PI*.5);return Math.abs(t)<1e-14?1:1-t}},{}],32:[function(e,t,n){"use strict";t.exports=function(e){return Math.sin(e*Math.PI/2)}},{}],33:[function(e,t,n){"use strict";t.exports=function(e,t){t||(t=[0,""]),e=String(e);var n=parseFloat(e,10);return t[0]=n,t[1]=e.match(/[\d.\-\+]*\s*(.*)/)[1]||"",t}},{}],34:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=u(e("parse-unit")),r=u(e("eases"));function u(e){return e&&e.__esModule?e:{default:e}}var s,c,a=[],l="undefined"!=typeof window,d=function(){return(document.scrollingElement||document.documentElement).scrollTop},f=function(e){return!1===isNaN((0,i.default)(e)[0])},p=function(e){var t=(0,i.default)(e);return{value:t[0],unit:t[1]}},m=function(e){return null!==String(e).match(/^[a-z]+-[a-z]+$/)},h=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:d(),o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:window.innerHeight||window.outerHeight,i=t.getBoundingClientRect(),r=e.match(/^[a-z]+/)[0],u=e.match(/[a-z]+$/)[0],s=0;return"top"===u&&(s-=0),"middle"===u&&(s-=o/2),"bottom"===u&&(s-=o),"top"===r&&(s+=i.top+n),"middle"===r&&(s+=i.top+n+i.height/2),"bottom"===r&&(s+=i.top+n+i.height),s+"px"},b=function(e){var t,n,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:d(),i=e.getData(),r=i.to.value-i.from.value,u=(o-i.from.value)/(r/100),s=Math.min(Math.max(u,0),100),c=(t=i.direct,n={global:document.documentElement,elem:i.elem,direct:i.direct},!0===t?n.elem:t instanceof HTMLElement==1?n.direct:n.global),a=Object.keys(i.props).reduce((function(e,t){var n=i.props[t],o=n.from.unit||n.to.unit,r=n.from.value-n.to.value,u=n.timing(s/100),c=n.from.value-r*u,a=Math.round(1e4*c)/1e4;return e[t]=a+o,e}),{}),l=u<0||100<u;return!0==(0<=u&&u<=100)&&i.inside(e,u,a),!0===l&&i.outside(e,u,a),{elem:c,props:a}},v=function(e,t){Object.keys(t).forEach((function(n){return o=e,i={key:n,value:t[n]},void o.style.setProperty(i.key,i.value);var o,i}))};n.create=function(e){var t=null,n=!1,i={isActive:function(){return n},getData:function(){return t},calculate:function(){t=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).inside&&(e.inside=function(){}),null==e.outside&&(e.outside=function(){}),null==e.direct&&(e.direct=!1),null==e.track&&(e.track=!0),null==e.props&&(e.props={}),null==e.from)throw new Error("Missing property `from`");if(null==e.to)throw new Error("Missing property `to`");if("function"!=typeof e.inside)throw new Error("Property `inside` must be undefined or a function");if("function"!=typeof e.outside)throw new Error("Property `outside` must be undefined or a function");if("boolean"!=typeof e.direct&&e.direct instanceof HTMLElement==0)throw new Error("Property `direct` must be undefined, a boolean or a DOM element/node");if(!0===e.direct&&null==e.elem)throw new Error("Property `elem` is required when `direct` is true");if("boolean"!=typeof e.track)throw new Error("Property `track` must be undefined or a boolean");if("object"!==o(e.props))throw new Error("Property `props` must be undefined or an object");if(null==e.elem){if(!1===f(e.from))throw new Error("Property `from` must be a absolute value when no `elem` has been provided");if(!1===f(e.to))throw new Error("Property `to` must be a absolute value when no `elem` has been provided")}else!0===m(e.from)&&(e.from=h(e.from,e.elem)),!0===m(e.to)&&(e.to=h(e.to,e.elem));return e.from=p(e.from),e.to=p(e.to),e.props=Object.keys(e.props).reduce((function(t,n){var o=Object.assign({},e.props[n]);if(!1===f(o.from))throw new Error("Property `from` of prop must be a absolute value");if(!1===f(o.to))throw new Error("Property `from` of prop must be a absolute value");if(o.from=p(o.from),o.to=p(o.to),null==o.timing&&(o.timing=r.default.linear),"string"!=typeof o.timing&&"function"!=typeof o.timing)throw new Error("Property `timing` of prop must be undefined, a string or a function");if("string"==typeof o.timing&&null==r.default[o.timing])throw new Error("Unknown timing for property `timing` of prop");return"string"==typeof o.timing&&(o.timing=r.default[o.timing]),t[n]=o,t}),{}),e}(e)},update:function(){var e=b(i),t=e.elem,n=e.props;return v(t,n),n},start:function(){n=!0},stop:function(){n=!1},destroy:function(){a[u]=void 0}},u=a.push(i)-1;return i.calculate(),i},!0===l?(function e(t,n){var o=function(){requestAnimationFrame((function(){return e(t,n)}))},i=a.filter((function(e){return null!=e&&e.isActive()}));if(0===i.length)return o();var r=d();if(n===r)return o();n=r,i.map((function(e){return b(e,r)})).forEach((function(e){var t=e.elem,n=e.props;return v(t,n)})),o()}(),window.addEventListener("resize",(s=function(){a.filter((function(e){return null!=e&&e.getData().track})).forEach((function(e){e.calculate(),e.update()}))},50,c=null,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];clearTimeout(c),c=setTimeout((function(){return s.apply(void 0,t)}),50)}))):console.warn("basicScroll is not executing because you are using it in an environment without a `window` object")},{eases:19,"parse-unit":33}]},{},[34])(34)})),function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("div");i.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',o.appendChild(i.childNodes[1])}return t&&e.extend(n,t),this.each((function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];n.customSelector&&t.push(n.customSelector);var o=".fitvidsignore";n.ignore&&(o=o+", "+n.ignore);var i=e(this).find(t.join(","));(i=(i=i.not("object object")).not(o)).each((function(){var t=e(this);if(!(t.parents(o).length>0||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var n=("object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height())/(isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10));if(!t.attr("name")){var i="fitvid"+e.fn.fitVids._count;t.attr("name",i),e.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*n+"%"),t.removeAttr("height").removeAttr("width")}}))}))},e.fn.fitVids._count=0}(window.jQuery||window.Zepto),$(document).ready((function(){$(".video-container").fitVids({customSelector:"iframe[src^='https://embed.ted.com']"})}));