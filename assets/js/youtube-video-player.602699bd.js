/*! For license information please see youtube-video-player.602699bd.js.LICENSE.txt */
(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[605],{3295:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>A});var n=r(2784),o=r(3980),a=r.n(o),s=r(9378),i=r.n(s),l=r(5741),u=r.n(l),c=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))y.call(t,r)&&g(e,r,t[r]);if(f)for(var r of f(t))h.call(t,r)&&g(e,r,t[r]);return e},m=(e,t)=>d(e,p(t));function P(e={}){return m(v({},e),{height:0,width:0,playerVars:m(v({},e.playerVars),{autoplay:0,start:0,end:0})})}var b={videoId:a().string,id:a().string,className:a().string,iframeClassName:a().string,style:a().object,title:a().string,loading:a().oneOf(["lazy","eager"]),opts:a().objectOf(a().any),onReady:a().func,onError:a().func,onPlay:a().func,onPause:a().func,onEnd:a().func,onStateChange:a().func,onPlaybackRateChange:a().func,onPlaybackQualityChange:a().func},w=class extends n.Component{constructor(e){super(e),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var t,r;return null==(r=(t=this.props).onReady)?void 0:r.call(t,e)},this.onPlayerError=e=>{var t,r;return null==(r=(t=this.props).onError)?void 0:r.call(t,e)},this.onPlayerStateChange=e=>{var t,r,n,o,a,s,i,l;switch(null==(r=(t=this.props).onStateChange)||r.call(t,e),e.data){case w.PlayerState.ENDED:null==(o=(n=this.props).onEnd)||o.call(n,e);break;case w.PlayerState.PLAYING:null==(s=(a=this.props).onPlay)||s.call(a,e);break;case w.PlayerState.PAUSED:null==(l=(i=this.props).onPause)||l.call(i,e)}},this.onPlayerPlaybackRateChange=e=>{var t,r;return null==(r=(t=this.props).onPlaybackRateChange)?void 0:r.call(t,e)},this.onPlayerPlaybackQualityChange=e=>{var t,r;return null==(r=(t=this.props).onPlaybackQualityChange)?void 0:r.call(t,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then((()=>this.destroyPlayerPromise=void 0)),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if("undefined"==typeof document)return;if(this.destroyPlayerPromise)return void this.destroyPlayerPromise.then(this.createPlayer);const e=m(v({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=u()(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then((e=>{this.props.title&&e.setAttribute("title",this.props.title),this.props.loading&&e.setAttribute("loading",this.props.loading)}))},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;null==(e=this.internalPlayer)||e.getIframe().then((e=>{this.props.id?e.setAttribute("id",this.props.id):e.removeAttribute("id"),this.props.iframeClassName?e.setAttribute("class",this.props.iframeClassName):e.removeAttribute("class"),this.props.opts&&this.props.opts.width?e.setAttribute("width",this.props.opts.width.toString()):e.removeAttribute("width"),this.props.opts&&this.props.opts.height?e.setAttribute("height",this.props.opts.height.toString()):e.removeAttribute("height"),this.props.title?e.setAttribute("title",this.props.title):e.setAttribute("title","YouTube video player"),this.props.loading?e.setAttribute("loading",this.props.loading):e.removeAttribute("loading")}))},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,t,r,n;if(void 0===this.props.videoId||null===this.props.videoId)return void(null==(e=this.internalPlayer)||e.stopVideo());let o=!1;const a={videoId:this.props.videoId};(null==(t=this.props.opts)?void 0:t.playerVars)&&(o=1===this.props.opts.playerVars.autoplay,"start"in this.props.opts.playerVars&&(a.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(a.endSeconds=this.props.opts.playerVars.end)),o?null==(r=this.internalPlayer)||r.loadVideoById(a):null==(n=this.internalPlayer)||n.cueVideoById(a)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(e){return t=this,r=null,n=function*(){(function(e,t){var r,n,o,a;return e.id!==t.id||e.className!==t.className||(null==(r=e.opts)?void 0:r.width)!==(null==(n=t.opts)?void 0:n.width)||(null==(o=e.opts)?void 0:o.height)!==(null==(a=t.opts)?void 0:a.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title})(e,this.props)&&this.updatePlayer(),function(e,t){return e.videoId!==t.videoId||!i()(P(e.opts),P(t.opts))}(e,this.props)&&(yield this.resetPlayer()),function(e,t){var r,n;if(e.videoId!==t.videoId)return!0;const o=(null==(r=e.opts)?void 0:r.playerVars)||{},a=(null==(n=t.opts)?void 0:n.playerVars)||{};return o.start!==a.start||o.end!==a.end}(e,this.props)&&this.updateVideo()},new Promise(((e,o)=>{var a=e=>{try{i(n.next(e))}catch(t){o(t)}},s=e=>{try{i(n.throw(e))}catch(t){o(t)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,s);i((n=n.apply(t,r)).next())}));var t,r,n}componentWillUnmount(){this.destroyPlayer()}render(){return n.createElement("div",{className:this.props.className,style:this.props.style},n.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},E=w;E.propTypes=b,E.defaultProps={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},E.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var C=E,S=r(2322);const A=e=>{let{id:t,...r}=e;return(0,S.jsx)("div",{className:"youtubeContainer",children:(0,S.jsx)(C,{videoId:t,...r})})}},9378:e=>{"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,o,a;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!=o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(a=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,a[o]))return!1;for(o=n;0!=o--;){var s=a[o];if(!e(t[s],r[s]))return!1}return!0}return t!=t&&r!=r}},9599:e=>{function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,o){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");"function"==typeof n&&(o=n,n={}),n=n||{},o=o||function(){},s.type=n.type||"text/javascript",s.charset=n.charset||"utf8",s.async=!("async"in n)||!!n.async,s.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(s,n.attrs),n.text&&(s.text=""+n.text),("onload"in s?t:r)(s,o),s.onload||t(s,o),a.appendChild(s)}},6365:e=>{"use strict";var t;t=function(){var e={},t={};return e.on=function(e,r){var n={name:e,handler:r};return t[e]=t[e]||[],t[e].unshift(n),n},e.off=function(e){var r=t[e.name].indexOf(e);-1!==r&&t[e.name].splice(r,1)},e.trigger=function(e,r){var n,o=t[e];if(o)for(n=o.length;n--;)o[n].handler(r)},e},e.exports=t},7642:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(7071),a=(n=o)&&n.__esModule?n:{default:n};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},2349:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(5532)),o=i(r(8154)),a=i(r(4625)),s=i(r(7642));function i(e){return e&&e.__esModule?e:{default:e}}var l=(0,n.default)("youtube-player"),u={proxyEvents:function(e){var t={},r=function(r){var n="on"+r.slice(0,1).toUpperCase()+r.slice(1);t[n]=function(t){l('event "%s"',n,t),e.trigger(r,t)}},n=!0,o=!1,s=void 0;try{for(var i,u=a.default[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){r(i.value)}}catch(c){o=!0,s=c}finally{try{!n&&u.return&&u.return()}finally{if(o)throw s}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={},n=function(n){t&&s.default[n]?r[n]=function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.then((function(e){var t=s.default[n],o=e.getPlayerState(),a=e[n].apply(e,r);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(r){e.addEventListener("onStateChange",(function n(){var o=e.getPlayerState(),a=void 0;"number"==typeof t.timeout&&(a=setTimeout((function(){e.removeEventListener("onStateChange",n),r()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",n),clearTimeout(a),r())}))})).then((function(){return a})):a}))}:r[n]=function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.then((function(e){return e[n].apply(e,r)}))}},a=!0,i=!1,l=void 0;try{for(var u,c=o.default[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){n(u.value)}}catch(d){i=!0,l=d}finally{try{!a&&c.return&&c.return()}finally{if(i)throw l}}return r}};t.default=u,e.exports=t.default},7071:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},4625:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},8154:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},5741:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=i(r(6365)),a=i(r(4213)),s=i(r(2349));function i(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=(0,o.default)();if(l||(l=(0,a.default)(i)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=s.default.proxyEvents(i);var u=new Promise((function(r){"object"===(void 0===e?"undefined":n(e))&&e.playVideo instanceof Function?r(e):l.then((function(n){var o=new n.Player(e,t);return i.on("ready",(function(){r(o)})),null}))})),c=s.default.promisifyPlayer(u,r);return c.on=i.on,c.off=i.off,c},e.exports=t.default},4213:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(9599),a=(n=o)&&n.__esModule?n:{default:n};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var r="http:"===window.location.protocol?"http:":"https:";(0,a.default)(r+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){n&&n(),t(window.YT)}}}))},e.exports=t.default},5532:(e,t,r)=>{function n(){var e;try{e=t.storage.debug}catch(r){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}(t=e.exports=r(7920)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(r){}},t.load=n,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(n())},7920:(e,t,r)=>{var n;function o(e){function r(){if(r.enabled){var e=r,o=+new Date,a=o-(n||o);e.diff=a,e.prev=n,e.curr=o,n=o;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var l=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;l++;var o=t.formatters[n];if("function"==typeof o){var a=s[l];r=o.call(e,a),s.splice(l,1),l--}return r})),t.formatArgs.call(e,s),(r.log||t.log||console.log.bind(console)).apply(e,s)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(r),r}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"==typeof e?e:"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&("-"===(e=r[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(3589),t.names=[],t.skips=[],t.formatters={}},3589:e=>{var t=1e3,r=60*t,n=60*r,o=24*n,a=365.25*o;function s(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,i){i=i||{};var l,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var s=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!s)return;var i=parseFloat(s[1]);switch((s[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*a;case"days":case"day":case"d":return i*o;case"hours":case"hour":case"hrs":case"hr":case"h":return i*n;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===u&&!1===isNaN(e))return i.long?s(l=e,o,"day")||s(l,n,"hour")||s(l,r,"minute")||s(l,t,"second")||l+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=n)return Math.round(e/n)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}}]);