;window.CloudflareApps=window.Eager=window.CloudflareApps||window.Eager||{};window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="c15263845b54ba5a445328c5e8ffbc37";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["oLkYWQDTi1J7"]={appId:"lMxPPXVOqmoE",scope:{}};;CloudflareApps.installs["oLkYWQDTi1J7"].options={"account":{"accountId":"sxojxMkZJoVO","service":"googleanalytics","userId":"114851920715007432852"},"id":"UA-69262063-2","social":true};;CloudflareApps.installs["OYYhTr2xVPSF"]={appId:"qdbruf8Ud6a8",scope:{}};;CloudflareApps.installs["OYYhTr2xVPSF"].options={"blocks":[{"content":"\u003ch2 style=\"text-align: center;\"\u003eApps Fixed, Reinstall them and trust again in settings App.\u003c/h2\u003e","location":{"method":"before","selector":"body \u003e .framework7-initializing.framework7-root \u003e .view.view-main.color-theme-red \u003e .page.page-current.page-with-subnavbar \u003e .page-content \u003e .tabs-swipeable-wrap.swiper-container.swiper-container-horizontal \u003e .tabs.swiper-wrapper \u003e .tab.scrollable.tab-active.swiper-slide.swiper-slide-active \u003e .company-name"}}]};;CloudflareApps.installs["OYYhTr2xVPSF"].URLPatterns=["^next.tweakboxapp.com/?.*$"];;CloudflareApps.installs["OYYhTr2xVPSF"].selectors={"blocks[0].location.selector":"body \u003e .framework7-initializing.framework7-root \u003e .view.view-main.color-theme-red \u003e .page.page-current.page-with-subnavbar \u003e .page-content \u003e .tabs-swipeable-wrap.swiper-container.swiper-container-horizontal \u003e .tabs.swiper-wrapper \u003e .tab.scrollable.tab-active.swiper-slide.swiper-slide-active \u003e .company-name"};;CloudflareApps.installs["SxIuQhGxJErs"]={appId:"nt4L5NPJq1za",scope:{}};;CloudflareApps.installs["SxIuQhGxJErs"].options={"blocks":[{"code":"\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=UA-69262063-2\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-69262063-2');\n\u003c/script\u003e","location":{"method":"prepend","selector":"head"}}]};;CloudflareApps.installs["SxIuQhGxJErs"].selectors={"blocks[0].location.selector":"head"};;CloudflareApps.installs["XR9wYQ9vO23Y"]={appId:"ftSYTOLuWZbg",scope:{}};;CloudflareApps.installs["XR9wYQ9vO23Y"].options={"acceptButton":"Alright!","opacity":76.57,"policyText":"By using this website, you agree that we and our partners may set cookies for purposes such as customising content and advertising."};;if(CloudflareApps.matchPage(CloudflareApps.installs['OYYhTr2xVPSF'].URLPatterns)){(function(){'use strict'
if(!document.addEventListener)return
var options=CloudflareApps.installs['OYYhTr2xVPSF'].options
var elements={}
var prevElements={}
function updateElements(){options.blocks.reverse().forEach(function(block,index){var locationHash=[block.location.selector,block.location.method,index].join('!')
var element
if(elements[locationHash]){element=elements[locationHash]}else{if(block.location.method==='replace'){prevElements[locationHash]=document.querySelector(block.location.selector)}
element=CloudflareApps.createElement(block.location)
elements[locationHash]=element}
element.setAttribute('app','add-content')
element.foundInBlocks=true
element.innerHTML=''
var contentWrapper=document.createElement('content-wrapper')
contentWrapper.innerHTML=block.content
element.appendChild(contentWrapper)})
for(var hash in elements){if(!elements[hash].foundInBlocks){if(prevElements[hash]){elements[hash].parentNode.replaceChild(prevElements[hash],elements[hash])
delete prevElements[hash]}else{elements[hash].parentNode.removeChild(elements[hash])}
delete elements[hash]}else{delete elements[hash].foundInBlocks}}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',updateElements)}else{updateElements()}
window.CloudflareApps.installs['OYYhTr2xVPSF'].scope={setOptions:function(nextOptions){options=nextOptions
updateElements()}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['SxIuQhGxJErs'].URLPatterns)){(function(){'use strict'
if(!document.addEventListener)return
var options=CloudflareApps.installs['SxIuQhGxJErs'].options
var elements={}
var prevElements={}
function updateElements(){options.blocks.forEach(function(block,index){var locationHash=[block.location.selector,block.location.method,index].join('!')
var element
if(elements[locationHash]){element=elements[locationHash]}else{if(block.location.method==='replace'){prevElements[locationHash]=document.querySelector(block.location.selector)}
element=CloudflareApps.createElement(block.location)
elements[locationHash]=element}
element.foundInBlocks=true
element.innerHTML=block.code
var scripts=Array.prototype.slice.call(element.querySelectorAll('script'))
if(scripts){scripts.forEach(function(script){var newScript=document.createElement('script')
for(var key=script.attributes.length;key--;){var attr=script.attributes[key]
if(attr.specified){newScript.setAttribute(attr.name,attr.value)}}
newScript.innerHTML=script.innerHTML
element.replaceChild(newScript,script)})}})
for(var hash in elements){if(!elements[hash].foundInBlocks){if(prevElements[hash]){elements[hash].parentNode.replaceChild(prevElements[hash],elements[hash])
delete prevElements[hash]}else{elements[hash].parentNode.removeChild(elements[hash])}
delete elements[hash]}else{delete elements[hash].foundInBlocks}}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',updateElements)}else{updateElements()}
window.CloudflareApps.installs['SxIuQhGxJErs'].scope={setOptions:function(nextOptions){options=nextOptions
updateElements()}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['oLkYWQDTi1J7'].URLPatterns)){(function(){var options=CloudflareApps.installs['oLkYWQDTi1J7'].options;var id;if(options.account&&options.organization){id=options["web-properties-for-"+options.organization];}else{id=(options.id||"").trim();}
if(!id){console.log("Cloudflare Google Analytics: Disabled. UA-ID not present.");return;}else if("oLkYWQDTi1J7"==="preview"){console.log("Cloudflare Google Analytics: Enabled",id);}
function resolveParameter(uri,parameter){if(uri){var parameters=uri.split("#")[0].match(/[^?=&]+=([^&]*)?/g);for(var i=0,chunk;(chunk=parameters[i]);++i){if(chunk.indexOf(parameter)===0){return unescape(chunk.split("=")[1]);}}}}
window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}
gtag("js",new Date());gtag("config",id);gtag("set",{anonymizeIp:options.anonymizeIp});var vendorScript=document.createElement("script");vendorScript.src="https://www.googletagmanager.com/gtag/js?id="+id;document.head.appendChild(vendorScript);if(options.social){window.addEventListener("load",function googleAnalyticsSocialTracking(){var FB=window.FB;var twttr=window.twttr;if("FB"in window&&"Event"in FB&&"subscribe"in window.FB.Event){FB.Event.subscribe("edge.create",function(targetUrl){gtag("event","share",{method:"facebook",event_action:"like",content_id:targetUrl});});FB.Event.subscribe("edge.remove",function(targetUrl){gtag("event","share",{method:"facebook",event_action:"unlike",content_id:targetUrl});});FB.Event.subscribe("message.send",function(targetUrl){gtag("event","share",{method:"facebook",event_action:"send",content_id:targetUrl});});}
if("twttr"in window&&"events"in twttr&&"bind"in twttr.events){twttr.events.bind("tweet",function(event){if(event){var targetUrl;if(event.target&&event.target.nodeName==="IFRAME"){targetUrl=resolveParameter(event.target.src,"url");}
gtag("event","share",{method:"twitter",event_action:"tweet",content_id:targetUrl});}});}},false);}})();};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,Y2xvdWRmbGFyZS1hcHBbYXBwPSJyaWNoLXRleHQiXSB7CiAgZGlzcGxheTogYmxvY2s7CiAgZGlzcGxheTogZmxleDsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJyaWNoLXRleHQiXSBjb250ZW50LXdyYXBwZXIgewogIGRpc3BsYXk6IGJsb2NrOwogIHdpZHRoOiAxMDAlOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9InJpY2gtdGV4dCJdW2RhdGEtaG9yaXpvbnRhbC1hbGlnbm1lbnQ9ImxlZnQiXSB7CiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0Owp9CgpjbG91ZGZsYXJlLWFwcFthcHA9InJpY2gtdGV4dCJdW2RhdGEtaG9yaXpvbnRhbC1hbGlnbm1lbnQ9ImNlbnRlciJdIHsKICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJyaWNoLXRleHQiXVtkYXRhLWhvcml6b250YWwtYWxpZ25tZW50PSJyaWdodCJdIHsKICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOwp9Cg==';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/KaanoPz716nv0Yy9gTRfAZXiY90.js';document.head.appendChild(script);})();