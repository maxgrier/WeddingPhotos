(self.webpackChunkwedding_slideshow=self.webpackChunkwedding_slideshow||[]).push([[216],{6741:(e,t,s)=>{var a,r=Object.create,l=Object.defineProperty,n=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,o=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,h=(e,t,s,a)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let r of i(t))p.call(e,r)||r===s||l(e,r,{get:()=>t[r],enumerable:!(a=n(t,r))||a.enumerable});return e},d=(e,t,s)=>(((e,t,s)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(e,"symbol"!==typeof t?t+"":t,s),s),c={};((e,t)=>{for(var s in t)l(e,s,{get:t[s],enumerable:!0})})(c,{default:()=>P}),e.exports=(a=c,h(l({},"__esModule",{value:!0}),a));var y=((e,t,s)=>(s=null!=e?r(o(e)):{},h(!t&&e&&e.__esModule?s:l(s,"default",{value:e,enumerable:!0}),e)))(s(2791)),u=s(135),m=s(365);class P extends y.Component{constructor(){super(...arguments),d(this,"callPlayer",u.callPlayer),d(this,"playerID",this.props.config.playerId||"".concat("twitch-player-").concat((0,u.randomString)())),d(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),d(this,"unmute",(()=>{this.callPlayer("setMuted",!1)}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){const{playsinline:s,onError:a,config:r,controls:l}=this.props,n=m.MATCH_URL_TWITCH_CHANNEL.test(e),i=n?e.match(m.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(m.MATCH_URL_TWITCH_VIDEO)[1];t?n?this.player.setChannel(i):this.player.setVideo("v"+i):(0,u.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((t=>{this.player=new t.Player(this.playerID,{video:n?"":i,channel:n?i:"",height:"100%",width:"100%",playsinline:s,autoplay:this.props.playing,muted:this.props.muted,controls:!!n||l,time:(0,u.parseStartTime)(e),...r.options});const{READY:a,PLAYING:o,PAUSE:p,ENDED:h,ONLINE:d,OFFLINE:c,SEEK:y}=t.Player;this.player.addEventListener(a,this.props.onReady),this.player.addEventListener(o,this.props.onPlay),this.player.addEventListener(p,this.props.onPause),this.player.addEventListener(h,this.props.onEnded),this.player.addEventListener(y,this.props.onSeek),this.player.addEventListener(d,this.props.onLoaded),this.player.addEventListener(c,this.props.onLoaded)}),a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){return y.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}d(P,"displayName","Twitch"),d(P,"canPlay",m.canPlay.twitch),d(P,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerTwitch.699dde68.chunk.js.map