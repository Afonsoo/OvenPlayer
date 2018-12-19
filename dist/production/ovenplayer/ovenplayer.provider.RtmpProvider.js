/*! For license information please see ovenplayer.provider.RtmpProvider.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pickCurrentSource=t.errorTrigger=t.separateLive=t.extractVideoElement=void 0;var n=r(5),u=function(e){return e&&e.__esModule?e:{default:e}}(r(7));t.extractVideoElement=function(e){return u.default.isElement(e)?e:e.getVideoElement?e.getVideoElement():e.media?e.media:null},t.separateLive=function(e){return!!e.isDynamic&&e.isDynamic()},t.errorTrigger=function(e,t){t.setState(n.STATE_ERROR),t.pause(),t.trigger(n.ERROR,e)},t.pickCurrentSource=function(e,t,r){var n=Math.max(0,t);if(e)for(var u=0;u<e.length;u++)if(e[u].default&&(n=u),r.getSourceLabel()&&e[u].label===r.getSourceLabel())return u;return n}},368:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(369),u=r(5),a=function(e){return e&&e.__esModule?e:{default:e}}(r(370));t.default=function(e,t){var r={},i=e.getAttribute("data-parent-id"),o="",l=(0,n.getBrowser)();OvenPlayerConsole.log("MediaManager loaded. browserType : "+l);return r.create=function(){return OvenPlayerConsole.log("MediaManager createElement()"),o&&r.destroy(),function(){if(t!==u.PROVIDER_RTMP)(o=document.createElement("video")).setAttribute("disableRemotePlayback",""),o.setAttribute("webkit-playsinline",""),o.setAttribute("playsinline",""),e.appendChild(o);else{var r=void 0,n=void 0,s=void 0,c=void 0,f=void 0,d=void 0,g=void 0,m=void 0,v=void 0;(r=document.createElement("param")).setAttribute("name","movie"),r.setAttribute("value",a.default),(n=document.createElement("param")).setAttribute("name","flashvars"),n.setAttribute("value","playerId="+i),(s=document.createElement("param")).setAttribute("name","allowscriptaccess"),s.setAttribute("value","always"),(c=document.createElement("param")).setAttribute("name","allowfullscreen"),c.setAttribute("value","true"),(f=document.createElement("param")).setAttribute("name","quality"),f.setAttribute("value","height"),(d=document.createElement("param")).setAttribute("name","name"),d.setAttribute("value",i+"-flash"),(g=document.createElement("param")).setAttribute("name","menu"),g.setAttribute("value","false"),(m=document.createElement("param")).setAttribute("name","quality"),m.setAttribute("value","high"),(v=document.createElement("param")).setAttribute("name","bgcolor"),v.setAttribute("value","#000000");var p=document.createElement("param");p.setAttribute("name","SCALE"),p.setAttribute("value","default"),(o=document.createElement("object")).setAttribute("id",i+"-flash"),o.setAttribute("name",i+"-flash"),o.setAttribute("width","100%"),o.setAttribute("height","100%"),o.setAttribute("scale","default"),"oldIE"!==l?(o.setAttribute("data",a.default),o.setAttribute("type","application/x-shockwave-flash")):(o.setAttribute("classid","clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"),o.appendChild(r)),o.appendChild(p),o.appendChild(v),o.appendChild(m),o.appendChild(c),o.appendChild(s),o.appendChild(n),e.appendChild(o)}return o}()},r.destroy=function(){OvenPlayerConsole.log("MediaManager removeElement()"),e.removeChild(o),o=null},r}},369:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getBrowser=function(){if(-1!=(navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf("OPR")))return"opera";if(-1!=navigator.userAgent.indexOf("Chrome"))return"chrome";if(-1!=navigator.userAgent.indexOf("Safari"))return"safari";if(-1!=navigator.userAgent.indexOf("Firefox"))return"firefox";if(-1!=navigator.userAgent.indexOf("MSIE")){navigator.userAgent.indexOf("MSIE");return function(){for(var e=3,t=document.createElement("div"),r=t.getElementsByTagName("i");t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e",r[0];);return e>4?e:void 0}()<9?"oldIE":"modernIE"}return"unknown"}},370:function(e,t,r){e.exports=r.p+"OvenPlayerFlash.swf"},376:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(88)),u=o(r(377)),a=r(367),i=r(5);function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){OvenPlayerConsole.log("CORE loaded. ");var r={};(0,n.default)(r);var o=(0,u.default)(e.extendedElement,r),l=(0,a.extractVideoElement)(e.extendedElement),s=function(t){var n=e.sources[e.currentSource];OvenPlayerConsole.log("source loaded : ",n,"lastPlayPosition : "+t);var u=l.getCurrentSource();n.file!==u?l.load(n.file):0===t&&r.getPosition()>0&&r.seek(t),t>0&&(r.seek(t),r.play())};return r.triggerEventFromExternal=function(e,t){return o[e]?o[e](t):null},r.getName=function(){return e.name},r.canSeek=function(){return e.canSeek},r.setCanSeek=function(t){e.canSeek=t},r.isSeeking=function(){return e.seeking},r.setSeeking=function(t){e.seeking=t},r.setState=function(t){e.state=t},r.getState=function(){return e.state},r.setBuffer=function(e){},r.getBuffer=function(){return l.getBuffer?l.getBuffer():null},r.getDuration=function(){return l.getDuration?l.getDuration():0},r.getPosition=function(){return l.getPosition?l.getPosition():0},r.setVolume=function(e){return l.setVolume?l.setVolume(e):0},r.getVolume=function(){return l.setVolume?l.getVolume():0},r.setMute=function(){l.setMute()},r.getMute=function(){return!!l.getMute&&l.getMute()},r.preload=function(r,n){OvenPlayerConsole.log("CORE : preload() ",r,n);var u=0;return e.sources=r,e.currentSource=(0,a.pickCurrentSource)(r,e.currentSource,t),new Promise(function(e,t){!function r(){return u++,l.isFlashReady&&l.isFlashReady()?(s(n||0),e()):u<100?void setTimeout(r,100):t()}()})},r.load=function(r){e.sources=r,e.currentSource=(0,a.pickCurrentSource)(r,e.currentSource,t),s(e.sources_.starttime||0)},r.play=function(){l.play&&l.play()},r.pause=function(){l.pause&&l.pause()},r.seek=function(e){l.seek(e)},r.setPlaybackRate=function(e){return 0},r.getPlaybackRate=function(){return 0},r.getSources=function(){return l?e.sources.map(function(e,t){return{file:e.file,type:e.type,label:e.label,index:t}}):[]},r.getCurrentSource=function(){return e.currentSource},r.setCurrentSource=function(n,u){return e.currentQuality!==n&&(n>-1&&e.sources&&e.sources.length>n?(r.setState(i.STATE_IDLE),OvenPlayerConsole.log("source changed : "+n),e.currentSource=n,r.trigger(i.CONTENT_SOURCE_CHANGED,{currentSource:n}),t.setSourceLabel(e.sources[n].label),u&&s(l.getCurrentTime()||0),e.currentSource):void 0)},r.getQualityLevels=function(){return l?e.qualityLevels:[]},r.getCurrentQuality=function(){return l?e.currentQuality:null},r.setCurrentQuality=function(e){},r.isAutoQuality=function(){},r.setAutoQuality=function(e){},r.getFramerate=function(){return e.framerate},r.setFramerate=function(t){return e.framerate=t},r.seekFrame=function(t){var n=e.framerate,u=(l.getCurrentTime()*n+t)/n;u+=1e-5,r.pause(),r.seek(u)},r.stop=function(){OvenPlayerConsole.log("CORE : stop() "),l.stop()},r.destroy=function(){OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied"),l.remove()},r.super=function(e){var t=r[e];return function(){return t.apply(r,arguments)}},r}},377:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5);t.default=function(e,t){var r={isJSReady:function(){return!0},time:function(e){t.trigger(n.CONTENT_TIME,e),t.trigger(n.CONTENT_BUFFER,e)},volumeChanged:function(e){t.trigger(n.CONTENT_VOLUME,e)},stateChanged:function(e){t.setState(e.newstate),t.trigger(n.PLAYER_STATE,e)},metaChanged:function(e){t.trigger(n.CONTENT_META,e)},error:function(e){t.setState(n.STATE_ERROR),t.pause(),t.trigger(n.ERROR,e)}};return r}},96:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(368)),u=r(5),a=i(r(376));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){var r={},i=null,o=(0,n.default)(e,u.PROVIDER_RTMP),l=o.create(),s={name:u.PROVIDER_RTMP,extendedElement:l,listener:null,canSeek:!1,isLive:!1,seeking:!1,state:u.STATE_IDLE,buffer:0,framerate:0,currentQuality:-1,currentSource:-1,qualityLevels:[],sources:[]};return r=(0,a.default)(s,t,null),i=r.super("destroy"),OvenPlayerConsole.log("RTMP PROVIDER LOADED."),r.destroy=function(){o.destroy(),o=null,l=null,OvenPlayerConsole.log("RTMP : PROVIDER DESTROYED."),i()},r}}}]);