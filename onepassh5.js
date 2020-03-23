!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n=n||self).GOP=t()}(this,function(){"use strict";var uid=function(){return parseInt(1e4*Math.random())+(new Date).valueOf()};function PureEvent(){this.n={}}function extend(n,t){for(var e in t)if(t.hasOwnProperty(e)){var o=t[e];n[e]=o}}PureEvent.prototype={t:function(n,t){var e=this;return e.n[n]?e.n[n].push(t):e.n[n]=[t],e},e:function(n,t){var e=this.n[n];if(e){for(var o=0,r=e.length;o<r;o+=1)e[o](t);return this}},o:function(){this.n={}}};var GATEWAY_FAIL="gateway_fail",GATEWAY_SUCCESS="gateway_success",YDRZ=function(win,doc){var chrsz=8;function hex_md5(n){return binl2hex(core_md5(str2binl(n),n.length*chrsz))}function core_md5(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;for(var e=1732584193,o=-271733879,r=-1732584194,i=271733878,c=0;c<n.length;c+=16){var u=e,a=o,s=r,f=i;e=md5_ff(e,o,r,i,n[c+0],7,-680876936),i=md5_ff(i,e,o,r,n[c+1],12,-389564586),r=md5_ff(r,i,e,o,n[c+2],17,606105819),o=md5_ff(o,r,i,e,n[c+3],22,-1044525330),e=md5_ff(e,o,r,i,n[c+4],7,-176418897),i=md5_ff(i,e,o,r,n[c+5],12,1200080426),r=md5_ff(r,i,e,o,n[c+6],17,-1473231341),o=md5_ff(o,r,i,e,n[c+7],22,-45705983),e=md5_ff(e,o,r,i,n[c+8],7,1770035416),i=md5_ff(i,e,o,r,n[c+9],12,-1958414417),r=md5_ff(r,i,e,o,n[c+10],17,-42063),o=md5_ff(o,r,i,e,n[c+11],22,-1990404162),e=md5_ff(e,o,r,i,n[c+12],7,1804603682),i=md5_ff(i,e,o,r,n[c+13],12,-40341101),r=md5_ff(r,i,e,o,n[c+14],17,-1502002290),e=md5_gg(e,o=md5_ff(o,r,i,e,n[c+15],22,1236535329),r,i,n[c+1],5,-165796510),i=md5_gg(i,e,o,r,n[c+6],9,-1069501632),r=md5_gg(r,i,e,o,n[c+11],14,643717713),o=md5_gg(o,r,i,e,n[c+0],20,-373897302),e=md5_gg(e,o,r,i,n[c+5],5,-701558691),i=md5_gg(i,e,o,r,n[c+10],9,38016083),r=md5_gg(r,i,e,o,n[c+15],14,-660478335),o=md5_gg(o,r,i,e,n[c+4],20,-405537848),e=md5_gg(e,o,r,i,n[c+9],5,568446438),i=md5_gg(i,e,o,r,n[c+14],9,-1019803690),r=md5_gg(r,i,e,o,n[c+3],14,-187363961),o=md5_gg(o,r,i,e,n[c+8],20,1163531501),e=md5_gg(e,o,r,i,n[c+13],5,-1444681467),i=md5_gg(i,e,o,r,n[c+2],9,-51403784),r=md5_gg(r,i,e,o,n[c+7],14,1735328473),e=md5_hh(e,o=md5_gg(o,r,i,e,n[c+12],20,-1926607734),r,i,n[c+5],4,-378558),i=md5_hh(i,e,o,r,n[c+8],11,-2022574463),r=md5_hh(r,i,e,o,n[c+11],16,1839030562),o=md5_hh(o,r,i,e,n[c+14],23,-35309556),e=md5_hh(e,o,r,i,n[c+1],4,-1530992060),i=md5_hh(i,e,o,r,n[c+4],11,1272893353),r=md5_hh(r,i,e,o,n[c+7],16,-155497632),o=md5_hh(o,r,i,e,n[c+10],23,-1094730640),e=md5_hh(e,o,r,i,n[c+13],4,681279174),i=md5_hh(i,e,o,r,n[c+0],11,-358537222),r=md5_hh(r,i,e,o,n[c+3],16,-722521979),o=md5_hh(o,r,i,e,n[c+6],23,76029189),e=md5_hh(e,o,r,i,n[c+9],4,-640364487),i=md5_hh(i,e,o,r,n[c+12],11,-421815835),r=md5_hh(r,i,e,o,n[c+15],16,530742520),e=md5_ii(e,o=md5_hh(o,r,i,e,n[c+2],23,-995338651),r,i,n[c+0],6,-198630844),i=md5_ii(i,e,o,r,n[c+7],10,1126891415),r=md5_ii(r,i,e,o,n[c+14],15,-1416354905),o=md5_ii(o,r,i,e,n[c+5],21,-57434055),e=md5_ii(e,o,r,i,n[c+12],6,1700485571),i=md5_ii(i,e,o,r,n[c+3],10,-1894986606),r=md5_ii(r,i,e,o,n[c+10],15,-1051523),o=md5_ii(o,r,i,e,n[c+1],21,-2054922799),e=md5_ii(e,o,r,i,n[c+8],6,1873313359),i=md5_ii(i,e,o,r,n[c+15],10,-30611744),r=md5_ii(r,i,e,o,n[c+6],15,-1560198380),o=md5_ii(o,r,i,e,n[c+13],21,1309151649),e=md5_ii(e,o,r,i,n[c+4],6,-145523070),i=md5_ii(i,e,o,r,n[c+11],10,-1120210379),r=md5_ii(r,i,e,o,n[c+2],15,718787259),o=md5_ii(o,r,i,e,n[c+9],21,-343485551),e=safe_add(e,u),o=safe_add(o,a),r=safe_add(r,s),i=safe_add(i,f)}return Array(e,o,r,i)}function md5_cmn(n,t,e,o,r,i){return safe_add(bit_rol(safe_add(safe_add(t,n),safe_add(o,i)),r),e)}function md5_ff(n,t,e,o,r,i,c){return md5_cmn(t&e|~t&o,n,t,r,i,c)}function md5_gg(n,t,e,o,r,i,c){return md5_cmn(t&o|e&~o,n,t,r,i,c)}function md5_hh(n,t,e,o,r,i,c){return md5_cmn(t^e^o,n,t,r,i,c)}function md5_ii(n,t,e,o,r,i,c){return md5_cmn(e^(t|~o),n,t,r,i,c)}function safe_add(n,t){var e=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(e>>16)<<16|65535&e}function bit_rol(n,t){return n<<t|n>>>32-t}function str2binl(n){for(var t=Array(),e=(1<<chrsz)-1,o=0;o<n.length*chrsz;o+=chrsz)t[o>>5]|=(n.charCodeAt(o/chrsz)&e)<<o%32;return t}function binl2hex(n){for(var t="0123456789abcdef",e="",o=0;o<4*n.length;o++)e+=t.charAt(n[o>>2]>>o%4*8+4&15)+t.charAt(n[o>>2]>>o%4*8&15);return e}var opts={getMobileUrl:{test01:"http://120.197.235.102/NumberAbility/h5/getMobile.htm?",pro:"http://www.cmpassport.com/NumberAbility/h5/getMobile.htm?"},getToken:{test01:"http://120.197.235.102/NumberAbility/h5/getToken.htm",pro:"https://www.cmpassport.com/NumberAbility/h5/getToken.htm"},optparams:{uuid:"",msgId:"",timestamp:dateFormat(new Date,"yyyyMMddhhmmssSSS"),userInformation:getFingerPrint(),isimge:!1}};function uuid(n,t){var e,o,r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),i=[];if(t=t||r.length,n)for(e=0;e<n;e++)i[e]=r[0|Math.random()*t];else for(i[8]=i[13]=i[18]=i[23]="-",i[14]="4",e=0;e<36;e++)i[e]||(o=0|16*Math.random(),i[e]=r[19==e?3&o|8:o]);return i.join("")}function getFingerPrint(){return encodeURIComponent(base64encode(getBrowserInfo()))}function dateFormat(n,t){var e={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),"S+":n.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[o]:((3==RegExp.$1.length&&"S+"==o?"000":"00")+e[o]).substr((""+e[o]).length)));return t}var YDRZ={getSign:function(n,t){return opts.optparams.uuid=uuid(32,32),opts.optparams.msgId=uuid(32,32),n+opts.optparams.msgId+opts.optparams.timestamp+opts.optparams.uuid+t},getTokenInfo:function(o){var n=""===o.data.expandParams?"callType=6005":"callType=6005|"+o.data.expandParams,r=""===o.data.expandParams?"callType=6006":"callType=6006|"+o.data.expandParams,i={version:o.data.version,appId:o.data.appId,openType:o.data.openType,expandParams:o.data.expandParams,isTest:o.data.isTest,sign:o.data.sign,uuid:opts.optparams.uuid,msgId:opts.optparams.msgId,timestamp:opts.optparams.timestamp,userInformation:opts.optparams.userInformation},t=("0"===i.isTest?opts.getMobileUrl.test01:opts.getMobileUrl.pro)+"version="+i.version+"&appId="+i.appId+"&openType="+i.openType+"&expandParams="+encodeURIComponent(n)+"&msgId="+i.msgId+"&timestamp="+i.timestamp+"&uuid="+i.uuid+"&userInformation="+i.userInformation,c=this;this.isLoaded=!1,this.isTimeout=!1;var u=doc.createElement("img");u.style.display="none",u.src=t,doc.body.appendChild(u);var a=null;0<o.data.timeout&&(a=setTimeout(function(){c.isTimeout=!0,o.error({code:"500",message:"超时",msgId:i.msgId})},o.data.timeout)),u.onload=function(){if(clearTimeout(a),!c.isTimeout){c.isLoaded=!0,doc.body.removeChild(u);var n={header:{version:i.version,msgId:i.msgId,timestamp:i.timestamp,appId:i.appId},body:{expandParams:r,sign:i.sign,uuid:i.uuid}},t="0"===i.isTest?opts.getToken.test01:opts.getToken.pro;try{request.ajax({request:{url:t,method:"post",data:JSON.stringify(n),timeout:o.data.timeout},success:function(n){if(""==n.result.body.token){t={code:n.result.header.resultCode,message:n.result.body.resultDesc};return o.error({code:t.code,message:t.message,msgId:i.msgId}),t}var t={code:n.result.header.resultCode,token:n.result.body.token,userInformation:i.userInformation,message:"获取token成功"};o.success({code:t.code,message:t.message,token:t.token,userInformation:t.userInformation})},error:function(n){var t={code:"500",message:"接口异常，获取token失败"};return o.error({code:t.code,message:t.message,msgId:i.msgId}),t}})}catch(e){throw new Error(e)}}},u.onerror=function(){c.isTimeout||(clearTimeout(a),o.error({code:"500",message:"取号失败",msgId:i.msgId}),c.isLoaded=!0,doc.body.removeChild(u))}}};function getBrowserInfo(){var n=navigator.userAgent,t=(-1<n.indexOf("Android")||n.indexOf("Linux"),window.navigator.platform+"@@"+window.navigator.userAgent+"@@"+window.navigator.appVersion+"@@"+window.navigator.cookieEnabled+"@@"+window.navigator.cpuClass+"@@"+window.navigator.hardwareConcurrency+"@@"+window.navigator.language+"@@"+window.navigator.plugins+"@@"+window.screen.availWidth+"@@"+window.navigator.availHeight+"@@"+window.screen.colorDepth+"@@"+window.Date.getTimezoneOffset);return window.navigator.platform+"@@"+window.navigator.userAgent+"@@"+hex_md5(t)}function base64encode(n){var t,e,o,r,i,c,u,a="",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f=0;for(n=_utf8_encode(n);f<n.length;)r=(t=n.charCodeAt(f++))>>2,i=(3&t)<<4|(e=n.charCodeAt(f++))>>4,c=(15&e)<<2|(o=n.charCodeAt(f++))>>6,u=63&o,isNaN(e)?c=u=64:isNaN(o)&&(u=64),a=a+s.charAt(r)+s.charAt(i)+s.charAt(c)+s.charAt(u);return a}function _utf8_encode(n){n=n.replace(/\r\n/g,"\n");for(var t="",e=0;e<n.length;e++){var o=n.charCodeAt(e);o<128?t+=String.fromCharCode(o):(127<o&&o<2048?t+=String.fromCharCode(o>>6|192):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128)),t+=String.fromCharCode(63&o|128))}return t}var request={utilCreateXHR:function(n){var t=n&&n.window||window;if(t.XMLHttpRequest)return new t.XMLHttpRequest;for(var e=["MSXML2.XMLHTTP.5.0","MSXML2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","Microsoft.XMLHTTP"],o=0;o<e.length;o++)try{return new t.ActiveXObject(e[o])}catch(r){}},parseJson:function(text){var obj=!1;if(text||(obj={code:"ER_NOBODY",summary:"responseText is empty"}),win.JSON&&JSON.parse)try{obj=JSON.parse(text)}catch(ex){}if(!obj)try{obj=eval("("+text+")")}catch(ex){obj={code:"ER_INVALIDJSON",summary:"responseText is invalid json"}}return obj},ajax:function(n){var t=this,e=(n=n||{}).request||{},o=this.utilCreateXHR(n),r=n.success||new Function,i=n.error||new Function;console.log(e);var c=e.timeout,u=null;0<c&&(u=setTimeout(function(){3==o.readyState&&200==o.status||(o.abort(),i({result:{code:"ER_TIMEOUT",summary:"timeout"}}))},c)),o.onreadystatechange=function(n){4==o.readyState&&(clearTimeout(u),0!=o.status?304==o.status||200<=o.status&&o.status<300?r({result:t.parseJson(o.responseText),text:o.responseText,status:o.status}):i({result:{code:"ER_NETWORK",summary:"network has error"},text:o.responseText,status:o.status}):i({result:{code:"ER_STATUS",summary:"status is 0"}}))};var a=e.method&&e.method.toLowerCase();o.open(a||"get",e.url,!0);var s=e.data;if(!e.isFormData&&"object"==typeof s){for(var f in s=[],e.data)s.push(f+"="+encodeURIComponent(e.data[f]));s=s.join("&")}if(e.headers)for(var f in e.headers)console.log(o),o.setRequestHeader(f,e.headers[f]);"post"==a&&s||(s=null),o.send(s)}};return YDRZ}(window,document),CUAU=(Kb={precheckUrl:{test:"https://opencloud.wostore.cn/openapi-test/netauth/precheck/u3?",pro:"https://opencloud.wostore.cn/openapi/netauth/precheck/u3?"},callbackUrl:{test:"https://opencloud.wostore.cn/authz-test/jssdk/authBack",pro:"https://opencloud.wostore.cn/authz/jssdk/authBack"},optparams:{uuid:"",timestamp:Date.now(),version:"1.0"}},{getSign:function(n){return Kb.optparams.uuid=function c(n,t){var e,o,r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),i=[];if(t=t||r.length,n)for(e=0;e<n;e++)i[e]=r[0|Math.random()*t];else for(i[8]=i[13]=i[18]=i[23]="-",i[14]="4",e=0;e<36;e++)i[e]||(o=0|16*Math.random(),i[e]=r[19==e?3&o|8:o]);return i.join("")}(32,32),Kb.callbackUrl.pro+n+Kb.optparams.timestamp+Kb.optparams.uuid+Kb.optparams.version},getAuthCode:function(n,t,e,o,r){Mb(Kb.precheckUrl.pro+"client_id="+n+"&timestamp="+Kb.optparams.timestamp+"&sign="+t+"&uuid="+Kb.optparams.uuid+"&version="+Kb.optparams.version+"&callback="+encodeURIComponent(Kb.callbackUrl.pro),Kb.optparams.uuid,e,o,r)}}),Kb;function Mb(n,t,e,o,r){window.addEventListener("message",function a(n){n.data&&"2"===n.data.msgtype&&!u&&(e(n.data),window.removeEventListener("message",a,!1),i.parentNode.removeChild(i))},!1);var i=document.createElement("iframe");i.id=t,i.src=n,i.style.display="none",i.style.height=0,i.style.width=0,i.style.border="none";var c,u=!(i.style.position="absolute");c=setTimeout(function(){u=!0,o()},r),i.onerror=function(){clearTimeout(c),u||o()},i.onload=function(){clearTimeout(c)},document.body.appendChild(i)}var _Promise=(kc=function(n){return"function"==typeof n},mc=function(n){n()},oc=function(t,n){if(t===n)t.r(new TypeError);else if(n instanceof pc)n.then(function(n){oc(t,n)},function(n){t.r(n)});else if(kc(n)||"object"==typeof(r=n)&&null!==r){var e;try{e=n.then}catch(i){return pc.i(i),void t.r(i)}var o=!1;if(kc(e))try{e.call(n,function(n){o||(o=!0,oc(t,n))},function(n){o||(o=!0,t.r(n))})}catch(i){if(o)return;o=!0,t.r(i)}else t.c(n)}else t.c(n);var r},qc=!(nc.prototype={enqueue:function(n){var t=this,e={ele:n,next:null};null===t.u?t.u=this.a=e:(t.a.next=e,t.a=t.a.next)},dequeue:function(){if(null===this.u)throw new Error("queue is empty");var n=this.u.ele;return this.u=this.u.next,n},isEmpty:function(){return null===this.u},clear:function(){this.u=this.s=null},each:function(n){this.isEmpty()||(n(this.dequeue()),this.each(n))}}),pc.debug=function(){qc=!0},pc.i=function(n){qc&&"undefined"!=typeof console&&console.error(n)},pc.prototype={PENDING:0,RESOLVED:1,REJECTED:-1,c:function(n){var t=this;t.f===t.PENDING&&(t.f=t.RESOLVED,t.d=n,t.m())},r:function(n){var t=this;t.f===t.PENDING&&(t.f=t.REJECTED,t.p=n,t.m())},m:function(){var n,t,e=this,o=e.f;o===e.RESOLVED?(n=e.h,e._.clear(),t=e.d):o===e.REJECTED&&(n=e._,e.h.clear(),t=e.p),n.each(function(n){mc(function(){n(o,t)})})},l:function(e,o,r){var i=this;mc(function(){if(kc(o)){var n;try{n=o(r)}catch(t){return pc.i(t),void i.r(t)}oc(i,n)}else e===i.RESOLVED?i.c(r):e===i.REJECTED&&i.r(r)})},then:function(e,o){var n=this,r=new pc;return n.h.enqueue(function(n,t){r.l(n,e,t)}),n._.enqueue(function(n,t){r.l(n,o,t)}),n.f===n.RESOLVED?n.m():n.f===n.REJECTED&&n.m(),r}},pc.all=function(s){return new pc(function(o,r){var i=s.length,c=0,u=!1,a=[];function e(n,t,e){u||(null!==n&&(u=!0,r(n)),a[e]=t,(c+=1)===i&&(u=!0,o(a)))}for(var n=0;n<i;n+=1)!function(t){var n=s[t];n instanceof pc||(n=new pc(n)),n.then(function(n){e(null,n,t)},function(n){e(n||!0)})}(n)})},pc.race=function(a){return new pc(function(e,o){var n,r=a.length,i=!1,c=0;function t(n,t){i||(null==n?(i=!0,e(t)):r<=(c+=1)&&(i=!0,o(n)))}for(var u=0;u<r;u+=1)n=void 0,(n=a[u])instanceof pc||(n=new pc(n)),n.then(function(n){t(null,n)},function(n){t(n||!0)})})},pc.step=function(e){var o=e.length,r=new pc,i=function(t,n){if(o<=t)return r.c(n);new pc(e[t]).then(function(n){i(t+1,n)},function(n){r.r(n)})};return new pc(e[0]).then(function(n){i(1,n)},function(n){r.r(n)}),r},pc.prototype.g=function(n,t){return this.then(n,t)},pc),kc,mc,oc,qc;function nc(){this.u=this.a=null}function pc(n){var t=this;if(t.f=t.PENDING,t.h=new nc,t._=new nc,kc(n))try{n(function(n){t.c(n)},function(n){t.r(n)})}catch(e){pc.i(e)}}_Promise.debug();var ajax={w:function(){return window.XMLHttpRequest&&window.JSON},v:function(n,t,e,o,r){var i=window.JSON.stringify(t);if(t&&"object"==typeof t){var c=[];for(var u in t)c.push(encodeURIComponent(u)+"="+encodeURIComponent(t[u]));i=c.join("&")}var a=new window.XMLHttpRequest;a.open("POST",n,!0),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.setRequestHeader("Accept","application/json"),a.timeout=r,a.onload=function(){e(window.JSON.parse(a.responseText))},a.ontimeout=function(){o({error:"timeout"})},a.onreadystatechange=function(){4===a.readyState&&(200===a.status?e(window.JSON.parse(a.responseText)):o({error:"status: "+a.status}))},a.send(i)}},TIMEOUT=3e4,TIMEOUT_ERROR="网络不给力",loadJS=function(r,i){return new _Promise(function(n,t){var e=document.getElementsByTagName("head")[0],o=document.createElement("script");o.onload=o.onreadystatechange=function(){o.readyState&&"loaded"!==o.readyState&&"complete"!==o.readyState?t(TIMEOUT_ERROR):n(o)},o.onerror=function(){t(TIMEOUT_ERROR),o.parentNode.removeChild(o)},o.src=r,e.appendChild(o),setTimeout(function(){t(TIMEOUT_ERROR),o.parentNode.removeChild(o)},i||TIMEOUT)})},normalizeDomain=function(n){return n.replace(/^https?:\/\/|\/$/g,"")},normalizePath=function(n){return 0!==(n=n.replace(/\/+/g,"/")).indexOf("/")&&(n="/"+n),n},normalizeQuery=function(n){if(!n)return"";var t="?";for(var e in n)if(n.hasOwnProperty(e)){var o=n[e];t=t+encodeURIComponent(e)+"="+encodeURIComponent(o)+"&"}return"?"===t&&(t=""),t.replace(/&$/,"")},makeURL=function(n,t,e,o){if(!0===o)return e;n=n||location.protocol+"//",t=normalizeDomain(t);var r=normalizePath(e);return t&&(r=n+t+r),r},jsonp=function(i){var n=makeURL(i.protocol,i.domain,i.path,i.fullurl),c=i.query;return ajax.w()&&!i.get?new _Promise(function(t,e){ajax.v(n,c,function(n){t(n)},function(n){e(n)},i.timeout||TIMEOUT)}):new _Promise(function(e,t){var o=i.cb||"geetest_"+uid();i.cb?o=i.cb:c.callback=o;var r=n+normalizeQuery(c);window[o]=function(n){i&&i.recordurl&&((n=n||{}).url=r),e(n),window[o]=undefined;try{delete window[o]}catch(t){}},loadJS(r,i.timeout||TIMEOUT).g(function(){},function(n){t(n)})})};function Error$1(){}Error$1.pre_gateway_net=function(){return{code:100}},Error$1.pre_gateway_result=function(){return{code:101}},Error$1.pre_getmobile_net=function(){return{code:102}},Error$1.pre_getmobile_result=function(n){return{code:n&&n.result||103}},Error$1.cm_token_error=function(){return{code:104}},Error$1.record_token_net=function(){return{code:105}},Error$1.record_token_result=function(){return{code:106}},Error$1.cu_token_error=function(n){return{code:n&&n.code||107}},Error$1.change_gateway=function(n){return{code:n&&n.code||108}};var canClick=!0;function Onepass(n){this.gtapi_domain="onepass.geetest.com",this.protocol=location.protocol+"//",extend(this,n),this.phone=0,this.process_id="",this.T=new PureEvent}Onepass.prototype={constructor:Onepass,A:function(n){var t=this,e=t.T;if(this.phone=n.phone,canClick){this.cb="geetest_"+uid();var o=YDRZ.getSign("","1.2"),r=CUAU.getSign("{client_id}");canClick=!1,jsonp({protocol:this.protocol,domain:this.gtapi_domain,path:"/web/pre_gateway",query:{app_id:t.app_id,sdk:"2.0.5",phone:t.phone,presign:o,presign_cu:r,clienttype:1,callback:this.cb},timeout:this.timeout}).g(function(n){n&&200===n.status?(t.process_id=n.process_id,n.data&&1===n.data.operator?t.y(n.data,n.data.operator):n.data&&3===n.data.operator?t.I(n.data,n.data.operator):t.b(n.data,n.data.operator,t.cb)):(canClick=!0,e.e(GATEWAY_FAIL,Error$1.pre_gateway_result(n)))},function(){canClick=!0,e.e(GATEWAY_FAIL,Error$1.pre_gateway_net())})}},b:function(n,t,e){var o=this,r=o.T;jsonp({get:!0,path:n.url,query:n.option[t],fullurl:!0,cb:e,timeout:o.timeout}).g(function(n){canClick=!0,!n||1e4!==n.result&&0!==n.result?(o.k(n),r.e(GATEWAY_FAIL,Error$1.pre_getmobile_result(n))):r.e(GATEWAY_SUCCESS,{process_id:o.process_id,phone:o.phone,accesscode:n.data})},function(){canClick=!0,o.k({code:400,msg:"接口请求失败"}),r.e(GATEWAY_FAIL,Error$1.pre_getmobile_net())})},y:function(t,n){var e=this,o=e.T,r=t.option[n].appid,i=t.option[n].sign;YDRZ.getTokenInfo({data:{version:"1.2",appId:r,sign:i,openType:"1",timeout:e.timeout||3e3},success:function(n){canClick=!0,o.e(GATEWAY_SUCCESS,{process_id:e.process_id,phone:e.phone,accesscode:n.token+"||"+n.userInformation})},error:function(n){n.code?e.C(t,e.cb):(canClick=!0,e.k(n),o.e(GATEWAY_FAIL,Error$1.cm_token_error()))}})},S:function(n){var t=this,e=t.T;jsonp({protocol:t.protocol,domain:t.gtapi_domain,path:"/web/record_token",query:{process_id:t.process_id,result:n.code,token:n.token,userInformation:n.userInformation},timeout:t.timeout}).g(function(n){n&&200===n.status?e.e(GATEWAY_SUCCESS,{process_id:t.process_id,phone:t.phone}):e.e(GATEWAY_FAIL,Error$1.record_token_result())},function(){e.e(GATEWAY_FAIL,Error$1.record_token_net())})},I:function(t,n){var e=this,o=e.T,r=e.timeout||3e3;CUAU.getAuthCode(t.option[n].client_id,t.option[n].sign,function(n){"0"==n.code?n.operatorType&&"CU"===n.operatorType?(canClick=!0,o.e(GATEWAY_SUCCESS,{process_id:e.process_id,phone:e.phone,accesscode:n.accessCode})):e.R({operator:"CT",options:t}):n.code&&"3011"===n.code?e.R({operator:"CT",options:t}):(e.k(n),canClick=!0,o.e(GATEWAY_FAIL,Error$1.cu_token_error(n)))},function(){canClick=!0,e.k({code:400,msg:"联通接口request失败"}),o.e(GATEWAY_FAIL,Error$1.cu_token_error())},r)},U:function(){this.process_id=""},t:function(n,t){return this.T.t(n,t),this},k:function(n){var t=n&&n.code||n.result||"undefined";n&&"object"==typeof n&&(n=JSON.stringify(n)),jsonp({protocol:this.protocol,domain:this.gtapi_domain,query:{process_id:this.process_id,code:t,metadata:n},path:"/web/client_report",timeout:this.timeout})},R:function(t){var e=this,o=e.T;jsonp({protocol:e.protocol,domain:e.gtapi_domain,path:"/web/change_gateway",query:{process_id:e.process_id,operator:t.operator},timeout:e.timeout}).g(function(n){n&&200===n.status?e.b(t.options,2,e.cb):(canClick=!0,e.k(n),o.e(GATEWAY_FAIL,Error$1.change_gateway(n)))},function(){e.k({code:400,msg:"更改接口request失败"}),canClick=!0,o.e(GATEWAY_FAIL,Error$1.change_gateway())})},C:function(n,t){var e=this,o=e.T;jsonp({get:!0,path:n.url,query:n.option[2],fullurl:!0,cb:t,timeout:e.timeout}).g(function(t){!t||1e4!==t.result&&0!==t.result?(e.k(t),canClick=!0,o.e(GATEWAY_FAIL,Error$1.pre_getmobile_net(t))):jsonp({protocol:e.protocol,domain:e.gtapi_domain,path:"/web/change_gateway",query:{process_id:e.process_id,operator:"CT"},timeout:e.timeout}).g(function(n){canClick=!0,n&&200===n.status?o.e(GATEWAY_SUCCESS,{process_id:e.process_id,phone:e.phone,accesscode:t.data}):(e.k(n),o.e(GATEWAY_FAIL,Error$1.change_gateway()))},function(){e.k({code:400,msg:"切换运营商接口失败"}),canClick=!0,o.e(GATEWAY_FAIL,Error$1.change_gateway())})},function(){e.k({code:400,msg:"移动二次调用电信接口request失败"}),canClick=!0,o.e(GATEWAY_FAIL,Error$1.pre_getmobile_net())})}};var data=(Qf=[],{M:function(n,t){Qf[n]=t},x:function(n){return Qf[n]}}),Qf,user_agent=navigator.userAgent.toLowerCase(),connection=navigator.connection||navigator.mozConnection||navigator.webkitConnection||{type:"unknown"},common_cell=["cellular","2g","3g","4g"],checkNetInfo=function(){if(-1!==user_agent.indexOf("nettype/wifi"))return"wifi";var n=connection&&connection.type;return n&&-1!==common_cell.indexOf(n)?"cellular":"wifi"===n?"wifi":"unknown"};function GOP(n){this.G=uid(),this.O=!0,data.M(this.G,new Onepass(n))}return GOP.version="2.0.5",GOP.prototype={gateway:function(n){return this.O&&data.x(this.G).A(n),this},onGatewaySuccess:function(n){return this.O&&data.x(this.G).t(GATEWAY_SUCCESS,n),this},onGatewayFail:function(n){return this.O&&data.x(this.G).t(GATEWAY_FAIL,n),this},checkNetInfo:function(){return checkNetInfo()}},GOP});
