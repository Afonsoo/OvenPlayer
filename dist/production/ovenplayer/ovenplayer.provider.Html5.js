/*! For license information please see ovenplayer.provider.Html5.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{366:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pickCurrentSource=t.errorTrigger=t.separateLive=t.extractVideoElement=void 0;var n=r(5),a=function(e){return e&&e.__esModule?e:{default:e}}(r(7));t.extractVideoElement=function(e){return a.default.isElement(e)?e:e.getVideoElement?e.getVideoElement():e.media?e.media:null},t.separateLive=function(e){return!!e.isDynamic&&e.isDynamic()},t.errorTrigger=function(e,t){t.setState(n.STATE_ERROR),t.pause(),t.trigger(n.ERROR,e)},t.pickCurrentSource=function(e,t,r){var n=Math.max(0,t);if(e)for(var a=0;a<e.length;a++)if(e[a].default&&(n=a),r.getSourceLabel()&&e[a].label===r.getSourceLabel())return a;return n}},367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(368),a=r(5),o=function(e){return e&&e.__esModule?e:{default:e}}(r(369));t.default=function(e,t,r){var u={},i=e.getAttribute("data-parent-id"),l="",s=(0,n.getBrowser)();OvenPlayerConsole.log("MediaManager loaded. browserType : "+s);return u.create=function(){return OvenPlayerConsole.log("MediaManager createElement()"),l&&u.destroy(),function(){if(t!==a.PROVIDER_RTMP)(l=document.createElement("video")).setAttribute("disableRemotePlayback",""),l.setAttribute("webkit-playsinline",""),l.setAttribute("playsinline",""),r&&l.setAttribute("loop",""),e.appendChild(l);else{var n=void 0,u=void 0,c=void 0,d=void 0,f=void 0,E=void 0,g=void 0,v=void 0,m=void 0,p=void 0;(n=document.createElement("param")).setAttribute("name","movie"),n.setAttribute("value",o.default),(u=document.createElement("param")).setAttribute("name","flashvars"),u.setAttribute("value","playerId="+i),(c=document.createElement("param")).setAttribute("name","allowscriptaccess"),c.setAttribute("value","always"),(d=document.createElement("param")).setAttribute("name","allowfullscreen"),d.setAttribute("value","true"),(f=document.createElement("param")).setAttribute("name","quality"),f.setAttribute("value","height"),(E=document.createElement("param")).setAttribute("name","name"),E.setAttribute("value",i+"-flash"),(g=document.createElement("param")).setAttribute("name","menu"),g.setAttribute("value","false"),(v=document.createElement("param")).setAttribute("name","quality"),v.setAttribute("value","high"),(m=document.createElement("param")).setAttribute("name","bgcolor"),m.setAttribute("value","#000000"),p&&((p=document.createElement("param")).setAttribute("name","loop"),p.setAttribute("value","true")),(l=document.createElement("object")).setAttribute("id",i+"-flash"),l.setAttribute("name",i+"-flash"),l.setAttribute("width","100%"),l.setAttribute("height","100%"),l.setAttribute("scale","default"),"oldIE"!==s?(l.setAttribute("data",o.default),l.setAttribute("type","application/x-shockwave-flash")):(l.setAttribute("classid","clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"),l.appendChild(n)),p&&l.appendChild(p),l.appendChild(m),l.appendChild(v),l.appendChild(d),l.appendChild(c),l.appendChild(u),e.appendChild(l)}return l}()},u.destroy=function(){OvenPlayerConsole.log("MediaManager removeElement()"),e.removeChild(l),l=null},u}},368:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getBrowser=function(){if(-1!=(navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf("OPR")))return"opera";if(-1!=navigator.userAgent.indexOf("Chrome"))return"chrome";if(-1!=navigator.userAgent.indexOf("Safari"))return"safari";if(-1!=navigator.userAgent.indexOf("Firefox"))return"firefox";if(-1!=navigator.userAgent.indexOf("MSIE")){navigator.userAgent.indexOf("MSIE");return function(){for(var e=3,t=document.createElement("div"),r=t.getElementsByTagName("i");t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e",r[0];);return e>4?e:void 0}()<9?"oldIE":"modernIE"}return"unknown"}},369:function(e,t,r){e.exports=r.p+"OvenPlayerFlash.swf"},370:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(88)),a=i(r(371)),o=r(366),u=r(5);function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,r){OvenPlayerConsole.log("CORE loaded. ");var i={};(0,n.default)(i);var l=(0,a.default)(e.extendedElement,i),s=(0,o.extractVideoElement)(e.extendedElement);t.getConfig().image;s.playbackRate=s.defaultPlaybackRate=t.getPlaybackRate();var c=function(n){var a=e.sources[e.currentSource];if(e.framerate=a.framerate,e.framerate||t.setTimecodeMode(!0),r)r(a,n);else{OvenPlayerConsole.log("source loaded : ",a,"lastPlayPosition : "+n);var o=s.src,u=document.createElement("source");u.src=a.file,u.src!==o?(s.src=e.sources[e.currentSource].file,o&&s.load()):0===n&&s.currentTime>0&&i.seek(n),n>0&&(i.seek(n),i.play())}};return i.getName=function(){return e.name},i.canSeek=function(){return e.canSeek},i.setCanSeek=function(t){e.canSeek=t},i.isSeeking=function(){return e.seeking},i.setSeeking=function(t){e.seeking=t},i.setState=function(t){if(e.state!==t){var r=e.state;switch(t){case u.STATE_COMPLETE:i.trigger(u.PLAYER_COMPLETE);break;case u.STATE_PAUSED:i.trigger(u.PLAYER_PAUSE,{prevState:e.state});break;case u.STATE_PLAYING:i.trigger(u.PLAYER_PLAY,{prevState:e.state})}e.state=t,i.trigger(u.PLAYER_STATE,{prevstate:r,newstate:e.state})}},i.getState=function(){return e.state},i.setBuffer=function(t){e.buffer=t},i.getBuffer=function(){return e.buffer},i.getDuration=function(){return s.duration===1/0||(0,o.separateLive)(e.extendedElement)?1/0:s.duration},i.getPosition=function(){return s?s.currentTime:0},i.setVolume=function(e){if(!s)return!1;s.volume=e/100},i.getVolume=function(){return s?100*s.volume:0},i.setMute=function(e){return!!s&&(void 0===e?(s.muted=!s.muted,i.trigger(u.CONTENT_MUTE,{mute:s.muted})):(s.muted=e,i.trigger(u.CONTENT_MUTE,{mute:s.muted})),s.muted)},i.getMute=function(){return!!s&&s.muted},i.preload=function(r,n){return e.sources=r,e.currentSource=(0,o.pickCurrentSource)(r,e.currentSource,t),c(n||0),new Promise(function(e,r){e(),t.isAutoStart()&&i.play(),t.isMute()&&i.setMute(!0),t.getVolume()&&i.setVolume(t.getVolume())})},i.load=function(r){e.sources=r,e.currentSource=(0,o.pickCurrentSource)(r,e.currentSource,t),c(e.sources.starttime||0)},i.play=function(){if(!s)return!1;if(i.getState()!==u.STATE_PLAYING){var e=s.play();void 0!==e&&e.then(function(e){}).catch(function(e){setTimeout(function(){i.play()},1e3)})}},i.pause=function(){if(!s)return!1;i.getState()===u.STATE_PLAYING&&s.pause()},i.seek=function(e){if(!s)return!1;s.currentTime=e},i.setPlaybackRate=function(e){return!!s&&(i.trigger(u.PLAYBACK_RATE_CHANGED,{playbackRate:e}),s.playbackRate=s.defaultPlaybackRate=e)},i.getPlaybackRate=function(){return s?s.playbackRate:0},i.getSources=function(){return s?e.sources.map(function(e,t){return{file:e.file,type:e.type,label:e.label,index:t}}):[]},i.getCurrentSource=function(){return e.currentSource},i.setCurrentSource=function(r,n){return e.currentSource!==r&&(r>-1&&e.sources&&e.sources.length>r?(i.setState(u.STATE_IDLE),OvenPlayerConsole.log("source changed : "+r),e.currentSource=r,i.trigger(u.CONTENT_SOURCE_CHANGED,{currentSource:r}),t.setSourceLabel(e.sources[r].label),n&&c(s.currentTime||0),e.currentSource):void 0)},i.getQualityLevels=function(){return s?e.qualityLevels:[]},i.getCurrentQuality=function(){return s?e.currentQuality:null},i.setCurrentQuality=function(e){},i.isAutoQuality=function(){},i.setAutoQuality=function(e){},i.getFramerate=function(){return e.framerate},i.setFramerate=function(t){return e.framerate=t},i.seekFrame=function(t){var r=e.framerate,n=(s.currentTime*r+t)/r;n+=1e-5,i.pause(),i.seek(n)},i.stop=function(){if(!s)return!1;for(OvenPlayerConsole.log("CORE : stop() "),s.removeAttribute("preload"),s.removeAttribute("src");s.firstChild;)s.removeChild(s.firstChild);i.pause(),i.setState(u.STATE_IDLE)},i.destroy=function(){if(!s)return!1;i.stop(),l.destroy(),i.off(),OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied")},i.super=function(e){var t=i[e];return function(){return t.apply(i,arguments)}},i}},371:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),a=r(366);t.default=function(e,t){var r={};OvenPlayerConsole.log("EventListener loaded.",e,t);var o={},u=(0,a.extractVideoElement)(e);return r.canplay=function(){t.setCanSeek(!0),t.trigger(n.CONTENT_BUFFER_FULL),OvenPlayerConsole.log("EventListener : on canplay")},r.durationchange=function(){r.progress(),OvenPlayerConsole.log("EventListener : on durationchange")},r.ended=function(){OvenPlayerConsole.log("EventListener : on ended"),t.getState()!=n.STATE_IDLE&&t.getState()!=n.STATE_COMPLETE&&(t.trigger(n.CONTENT_COMPLETE),t.setState(n.STATE_COMPLETE))},r.loadeddata=function(){OvenPlayerConsole.log("EventListener : on loadeddata")},r.loadedmetadata=function(){var r=u.duration===1/0||(0,a.separateLive)(e),o=t.getSources(),i=t.getCurrentSource(),l=i>-1?o[i].type:"",s={duration:r?1/0:u.duration,type:l};OvenPlayerConsole.log("EventListener : on loadedmetadata",s),t.trigger(n.CONTENT_META,s)},r.pause=function(){return t.getState()!==n.STATE_COMPLETE&&t.getState()!==n.STATE_ERROR&&!u.ended&&!u.error&&u.currentTime!==u.duration&&(OvenPlayerConsole.log("EventListener : on pause"),void t.setState(n.STATE_PAUSED))},r.play=function(){u.paused||t.getState()===n.STATE_PLAYING||(OvenPlayerConsole.log("EventListener : on play"),t.setState(n.STATE_LOADING))},r.playing=function(){OvenPlayerConsole.log("EventListener : on playing"),t.setState(n.STATE_PLAYING)},r.progress=function(){var e=u.buffered;if(!e)return!1;var r=u.duration,a=u.currentTime,o=function(e,t,r){return Math.max(Math.min(e,r),t)}((e.length>0?e.end(e.length-1):0)/r,0,1);OvenPlayerConsole.log("EventListener : on progress",100*o),t.setBuffer(100*o),t.trigger(n.CONTENT_BUFFER,{bufferPercent:100*o,position:a,duration:r})},r.stalled=function(){OvenPlayerConsole.log("EventListener : on stall")},r.timeupdate=function(){var e=u.currentTime,r=u.duration;isNaN(r)||(t.isSeeking()||u.paused||t.setState(n.STATE_PLAYING),(t.getState()===n.STATE_PLAYING||t.isSeeking())&&t.trigger(n.CONTENT_TIME,{position:e,duration:r}))},r.resize=function(){OvenPlayerConsole.log("EventListener : on resize")},r.seeking=function(){t.setSeeking(!0),OvenPlayerConsole.log("EventListener : on seeking",u.currentTime),t.trigger(n.CONTENT_SEEK,{position:u.currentTime})},r.seeked=function(){t.isSeeking()&&(OvenPlayerConsole.log("EventListener : on seeked"),t.setSeeking(!1),t.trigger(n.CONTENT_SEEKED))},r.waiting=function(){OvenPlayerConsole.log("EventListener : on waiting",t.getState()),t.isSeeking()?t.setState(n.STATE_LOADING):t.getState()===n.STATE_PLAYING&&t.setState(n.STATE_STALLED)},r.volumechange=function(){OvenPlayerConsole.log("EventListener : on volumechange",Math.round(100*u.volume)),t.trigger(n.CONTENT_VOLUME,{volume:Math.round(100*u.volume),mute:u.muted})},r.error=function(){var e=u.error&&u.error.code||0,t={0:n.PLAYER_UNKNWON_ERROR,1:n.PLAYER_UNKNWON_OPERATION_ERROR,2:n.PLAYER_UNKNWON_NEWWORK_ERROR,3:n.PLAYER_UNKNWON_DECODE_ERROR,4:n.PLAYER_FILE_ERROR}[e]||0;OvenPlayerConsole.log("EventListener : on error",t),(0,a.errorTrigger)(n.ERRORS[t])},Object.keys(r).forEach(function(e){u.removeEventListener(e,r[e]),u.addEventListener(e,r[e])}),o.destroy=function(){OvenPlayerConsole.log("EventListener : destroy()"),Object.keys(r).forEach(function(e){u.removeEventListener(e,r[e])})},o}},92:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(367)),a=u(r(370)),o=(r(366),r(5));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){var r=(0,n.default)(e,o.PROVIDER_HTML5,t.isLoop()),u=r.create(),i={name:o.PROVIDER_HTML5,extendedElement:u,listener:null,canSeek:!1,isLive:!1,seeking:!1,state:o.STATE_IDLE,buffer:0,framerate:0,currentQuality:-1,currentSource:-1,qualityLevels:[],sources:[]},l=(0,a.default)(i,t,null),s=l.super("destroy");return OvenPlayerConsole.log("HTML5 PROVIDER LOADED."),l.destroy=function(){r.destroy(),r=null,u=null,OvenPlayerConsole.log("HTML5 : PROVIDER DESTROYED."),s()},l}}}]);