/*! For license information please see chunk.654.968af32ad371f17a13ef.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[654],{797:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0})
var r,i,s=n(129),o=n(513),a=n(918),l=n(202),c=n(244),h=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent()
return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate()
return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")},e}(),u="@firebase/app",d="0.10.4",p=new a.Logger("@firebase/app"),f="[DEFAULT]",_=((r={})[u]="fire-core",r["@firebase/app-compat"]="fire-core-compat",r["@firebase/analytics"]="fire-analytics",r["@firebase/analytics-compat"]="fire-analytics-compat",r["@firebase/app-check"]="fire-app-check",r["@firebase/app-check-compat"]="fire-app-check-compat",r["@firebase/auth"]="fire-auth",r["@firebase/auth-compat"]="fire-auth-compat",r["@firebase/database"]="fire-rtdb",r["@firebase/database-compat"]="fire-rtdb-compat",r["@firebase/functions"]="fire-fn",r["@firebase/functions-compat"]="fire-fn-compat",r["@firebase/installations"]="fire-iid",r["@firebase/installations-compat"]="fire-iid-compat",r["@firebase/messaging"]="fire-fcm",r["@firebase/messaging-compat"]="fire-fcm-compat",r["@firebase/performance"]="fire-perf",r["@firebase/performance-compat"]="fire-perf-compat",r["@firebase/remote-config"]="fire-rc",r["@firebase/remote-config-compat"]="fire-rc-compat",r["@firebase/storage"]="fire-gcs",r["@firebase/storage-compat"]="fire-gcs-compat",r["@firebase/firestore"]="fire-fst",r["@firebase/firestore-compat"]="fire-fst-compat",r["@firebase/vertexai-preview"]="fire-vertex",r["fire-js"]="fire-js",r.firebase="fire-js-all",r),g=new Map,m=new Map,y=new Map
function v(e,t){try{e.container.addComponent(t)}catch(n){p.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function b(e){var t,n,r,i,s=e.name
if(y.has(s))return p.debug("There were multiple attempts to register component ".concat(s,".")),!1
y.set(s,e)
try{for(var a=o.__values(g.values()),l=a.next();!l.done;l=a.next())v(l.value,e)}catch(e){t={error:e}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}try{for(var c=o.__values(m.values()),h=c.next();!h.done;h=c.next())v(h.value,e)}catch(e){r={error:e}}finally{try{h&&!h.done&&(i=c.return)&&i.call(c)}finally{if(r)throw r.error}}return!0}function w(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0})
return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function C(e){return void 0!==e.options}var E=((i={})["no-app"]="No Firebase App '{$appName}' has been created - call initializeApp() first",i["bad-app-name"]="Illegal App name: '{$appName}'",i["duplicate-app"]="Firebase App named '{$appName}' already exists with different options or config",i["app-deleted"]="Firebase App named '{$appName}' already deleted",i["server-app-deleted"]="Firebase Server App has been deleted",i["no-options"]="Need to provide options, when not being deployed to hosting via source.",i["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",i["invalid-log-argument"]="First argument to `onLog` must be null or a function.",i["idb-open"]="Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",i["idb-get"]="Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",i["idb-set"]="Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",i["idb-delete"]="Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",i["finalization-registry-not-supported"]="FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",i["invalid-server-app-environment"]="FirebaseServerApp is not for use in browser environments.",i),I=new l.ErrorFactory("app","Firebase",E),T=function(){function e(e,t,n){var r=this
this._isDeleted=!1,this._options=o.__assign({},e),this._config=o.__assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new s.Component("app",(function(){return r}),"PUBLIC"))}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed(),this._name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed(),this._options},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"config",{get:function(){return this.checkDestroyed(),this._config},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"container",{get:function(){return this._container},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isDeleted",{get:function(){return this._isDeleted},set:function(e){this._isDeleted=e},enumerable:!1,configurable:!0}),e.prototype.checkDestroyed=function(){if(this.isDeleted)throw I.create("app-deleted",{appName:this._name})},e}(),S=function(e){function t(t,n,r,i){var s=this,a=void 0!==n.automaticDataCollectionEnabled&&n.automaticDataCollectionEnabled,l={name:r,automaticDataCollectionEnabled:a}
if(void 0!==t.apiKey)s=e.call(this,t,l,i)||this
else{var c=t
s=e.call(this,c.options,l,i)||this}return s._serverConfig=o.__assign({automaticDataCollectionEnabled:a},n),s._finalizationRegistry=new FinalizationRegistry((function(){s.automaticCleanup()})),s._refCount=0,s.incRefCount(s._serverConfig.releaseOnDeref),s._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,x(u,d,"serverapp"),s}return o.__extends(t,e),t.prototype.toJSON=function(){},Object.defineProperty(t.prototype,"refCount",{get:function(){return this._refCount},enumerable:!1,configurable:!0}),t.prototype.incRefCount=function(e){this.isDeleted||(this._refCount++,void 0!==e&&this._finalizationRegistry.register(e,this))},t.prototype.decRefCount=function(){return this.isDeleted?0:--this._refCount},t.prototype.automaticCleanup=function(){P(this)},Object.defineProperty(t.prototype,"settings",{get:function(){return this.checkDestroyed(),this._serverConfig},enumerable:!1,configurable:!0}),t.prototype.checkDestroyed=function(){if(this.isDeleted)throw I.create("server-app-deleted")},t}(T)
function k(e,t){var n,r
void 0===t&&(t={})
var i=e
"object"!=typeof t&&(t={name:t})
var a=o.__assign({name:f,automaticDataCollectionEnabled:!1},t),c=a.name
if("string"!=typeof c||!c)throw I.create("bad-app-name",{appName:String(c)})
if(i||(i=l.getDefaultAppConfig()),!i)throw I.create("no-options")
var h=g.get(c)
if(h){if(l.deepEqual(i,h.options)&&l.deepEqual(a,h.config))return h
throw I.create("duplicate-app",{appName:c})}var u=new s.ComponentContainer(c)
try{for(var d=o.__values(y.values()),p=d.next();!p.done;p=d.next()){var _=p.value
u.addComponent(_)}}catch(e){n={error:e}}finally{try{p&&!p.done&&(r=d.return)&&r.call(d)}finally{if(n)throw n.error}}var m=new T(i,a,u)
return g.set(c,m),m}function P(e){return o.__awaiter(this,void 0,void 0,(function(){var t,n
return o.__generator(this,(function(r){switch(r.label){case 0:return t=!1,n=e.name,g.has(n)?(t=!0,g.delete(n)):m.has(n)&&e.decRefCount()<=0&&(m.delete(n),t=!0),t?[4,Promise.all(e.container.getProviders().map((function(e){return e.delete()})))]:[3,2]
case 1:r.sent(),e.isDeleted=!0,r.label=2
case 2:return[2]}}))}))}function x(e,t,n){var r,i=null!==(r=_[e])&&void 0!==r?r:e
n&&(i+="-".concat(n))
var o=i.match(/\s|\//),a=t.match(/\s|\//)
if(o||a){var l=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')]
return o&&l.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&a&&l.push("and"),a&&l.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void p.warn(l.join(" "))}b(new s.Component("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}var N="firebase-heartbeat-database",D=1,R="firebase-heartbeat-store",O=null
function A(){return O||(O=c.openDB(N,D,{upgrade:function(e,t){if(0===t)try{e.createObjectStore(R)}catch(e){console.warn(e)}}}).catch((function(e){throw I.create("idb-open",{originalErrorMessage:e.message})}))),O}function L(e){return o.__awaiter(this,void 0,void 0,(function(){var t,n,r,i,s
return o.__generator(this,(function(o){switch(o.label){case 0:return o.trys.push([0,4,,5]),[4,A()]
case 1:return t=o.sent(),[4,(n=t.transaction(R)).objectStore(R).get(F(e))]
case 2:return r=o.sent(),[4,n.done]
case 3:return o.sent(),[2,r]
case 4:return(i=o.sent())instanceof l.FirebaseError?p.warn(i.message):(s=I.create("idb-get",{originalErrorMessage:null==i?void 0:i.message}),p.warn(s.message)),[3,5]
case 5:return[2]}}))}))}function M(e,t){return o.__awaiter(this,void 0,void 0,(function(){var n,r,i,s
return o.__generator(this,(function(o){switch(o.label){case 0:return o.trys.push([0,4,,5]),[4,A()]
case 1:return n=o.sent(),[4,(r=n.transaction(R,"readwrite")).objectStore(R).put(t,F(e))]
case 2:return o.sent(),[4,r.done]
case 3:return o.sent(),[3,5]
case 4:return(i=o.sent())instanceof l.FirebaseError?p.warn(i.message):(s=I.create("idb-set",{originalErrorMessage:null==i?void 0:i.message}),p.warn(s.message)),[3,5]
case 5:return[2]}}))}))}function F(e){return"".concat(e.name,"!").concat(e.options.appId)}var q=function(){function e(e){var t=this
this.container=e,this._heartbeatsCache=null
var n=this.container.getProvider("app").getImmediate()
this._storage=new B(n),this._heartbeatsCachePromise=this._storage.read().then((function(e){return t._heartbeatsCache=e,e}))}return e.prototype.triggerHeartbeat=function(){var e,t
return o.__awaiter(this,void 0,void 0,(function(){var n,r,i,s
return o.__generator(this,(function(o){switch(o.label){case 0:return n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=j(),null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)?[3,2]:(s=this,[4,this._heartbeatsCachePromise])
case 1:if(s._heartbeatsCache=o.sent(),null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats))return[2]
o.label=2
case 2:return this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((function(e){return e.date===i}))?[2]:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf()
return Date.now()-t<=2592e6})),[2,this._storage.overwrite(this._heartbeatsCache)])}}))}))},e.prototype.getHeartbeatsHeader=function(){var e
return o.__awaiter(this,void 0,void 0,(function(){var t,n,r,i,s
return o.__generator(this,(function(a){switch(a.label){case 0:return null!==this._heartbeatsCache?[3,2]:[4,this._heartbeatsCachePromise]
case 1:a.sent(),a.label=2
case 2:return null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length?[2,""]:(t=j(),n=function(e,t){var n,r
void 0===t&&(t=1024)
var i=[],s=e.slice(),a=function(e){var n=i.find((function(t){return t.agent===e.agent}))
if(n){if(n.dates.push(e.date),W(i)>t)return n.dates.pop(),"break"}else if(i.push({agent:e.agent,dates:[e.date]}),W(i)>t)return i.pop(),"break"
s=s.slice(1)}
try{for(var l=o.__values(e),c=l.next();!c.done&&"break"!==a(c.value);c=l.next());}catch(e){n={error:e}}finally{try{c&&!c.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return{heartbeatsToSend:i,unsentEntries:s}}(this._heartbeatsCache.heartbeats),r=n.heartbeatsToSend,i=n.unsentEntries,s=l.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:r})),this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,[4,this._storage.overwrite(this._heartbeatsCache)]):[3,4])
case 3:return a.sent(),[3,5]
case 4:this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache),a.label=5
case 5:return[2,s]}}))}))},e}()
function j(){return(new Date).toISOString().substring(0,10)}var B=function(){function e(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e.prototype.runIndexedDBEnvironmentCheck=function(){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(e){return l.isIndexedDBAvailable()?[2,l.validateIndexedDBOpenable().then((function(){return!0})).catch((function(){return!1}))]:[2,!1]}))}))},e.prototype.read=function(){return o.__awaiter(this,void 0,void 0,(function(){var e
return o.__generator(this,(function(t){switch(t.label){case 0:return[4,this._canUseIndexedDBPromise]
case 1:return t.sent()?[3,2]:[2,{heartbeats:[]}]
case 2:return[4,L(this.app)]
case 3:return(null==(e=t.sent())?void 0:e.heartbeats)?[2,e]:[2,{heartbeats:[]}]
case 4:return[2]}}))}))},e.prototype.overwrite=function(e){var t
return o.__awaiter(this,void 0,void 0,(function(){var n
return o.__generator(this,(function(r){switch(r.label){case 0:return[4,this._canUseIndexedDBPromise]
case 1:return r.sent()?[3,2]:[2]
case 2:return[4,this.read()]
case 3:return n=r.sent(),[2,M(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})]}}))}))},e.prototype.add=function(e){var t
return o.__awaiter(this,void 0,void 0,(function(){var n
return o.__generator(this,(function(r){switch(r.label){case 0:return[4,this._canUseIndexedDBPromise]
case 1:return r.sent()?[3,2]:[2]
case 2:return[4,this.read()]
case 3:return n=r.sent(),[2,M(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:o.__spreadArray(o.__spreadArray([],o.__read(n.heartbeats),!1),o.__read(e.heartbeats),!1)})]}}))}))},e}()
function W(e){return l.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:e})).length}b(new s.Component("platform-logger",(function(e){return new h(e)}),"PRIVATE")),b(new s.Component("heartbeat",(function(e){return new q(e)}),"PRIVATE")),x(u,d,"node"),x(u,d,"cjs5"),x("fire-js",""),Object.defineProperty(t,"FirebaseError",{enumerable:!0,get:function(){return l.FirebaseError}}),t.SDK_VERSION="10.12.1",t._DEFAULT_ENTRY_NAME=f,t._addComponent=v,t._addOrOverwriteComponent=function(e,t){e.container.addOrOverwriteComponent(t)},t._apps=g,t._clearComponents=function(){y.clear()},t._components=y,t._getProvider=w,t._isFirebaseApp=C,t._isFirebaseServerApp=function(e){return void 0!==e.settings},t._registerComponent=b,t._removeServiceInstance=function(e,t,n){void 0===n&&(n=f),w(e,t).clearInstance(n)},t._serverApps=m,t.deleteApp=P,t.getApp=function(e){void 0===e&&(e=f)
var t=g.get(e)
if(!t&&e===f&&l.getDefaultAppConfig())return k()
if(!t)throw I.create("no-app",{appName:e})
return t},t.getApps=function(){return Array.from(g.values())},t.initializeApp=k,t.initializeServerApp=function(e,t){var n,r,i
if(l.isBrowser())throw I.create("invalid-server-app-environment")
void 0===t.automaticDataCollectionEnabled&&(t.automaticDataCollectionEnabled=!1),i=C(e)?e.options:e
var a=o.__assign(o.__assign({},t),i)
if(void 0!==a.releaseOnDeref&&delete a.releaseOnDeref,void 0!==t.releaseOnDeref&&"undefined"==typeof FinalizationRegistry)throw I.create("finalization-registry-not-supported",{})
var c,h=""+(c=JSON.stringify(a),o.__spreadArray([],o.__read(c),!1).reduce((function(e,t){return Math.imul(31,e)+t.charCodeAt(0)|0}),0)),u=m.get(h)
if(u)return u.incRefCount(t.releaseOnDeref),u
var d=new s.ComponentContainer(h)
try{for(var p=o.__values(y.values()),f=p.next();!f.done;f=p.next()){var _=f.value
d.addComponent(_)}}catch(e){n={error:e}}finally{try{f&&!f.done&&(r=p.return)&&r.call(p)}finally{if(n)throw n.error}}var g=new S(i,t,h,d)
return m.set(h,g),g},t.onLog=function(e,t){if(null!==e&&"function"!=typeof e)throw I.create("invalid-log-argument")
a.setUserLogHandler(e,t)},t.registerVersion=x,t.setLogLevel=function(e){a.setLogLevel(e)}},129:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0})
var r=n(513),i=n(202),s=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),o="[DEFAULT]",a=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e)
if(!this.instancesDeferred.has(t)){var n=new i.Deferred
if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t})
r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t
if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null
throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null
throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n
if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."))
if(this.component)throw Error("Component for ".concat(this.name," has already been provided"))
if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}try{for(var i=r.__values(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var a=r.__read(s.value,2),l=a[0],c=a[1],h=this.normalizeInstanceIdentifier(l)
try{var u=this.getOrInitializeService({instanceIdentifier:h})
c.resolve(u)}catch(e){}}}catch(e){t={error:e}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=o),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return r.__awaiter(this,void 0,void 0,(function(){var e
return r.__generator(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(r.__spreadArray(r.__spreadArray([],r.__read(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))),!1),r.__read(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()}))),!1))]
case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=o),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=o),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n
void 0===e&&(e={})
var i=e.options,s=void 0===i?{}:i,o=this.normalizeInstanceIdentifier(e.instanceIdentifier)
if(this.isInitialized(o))throw Error("".concat(this.name,"(").concat(o,") has already been initialized"))
if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"))
var a=this.getOrInitializeService({instanceIdentifier:o,options:s})
try{for(var l=r.__values(this.instancesDeferred.entries()),c=l.next();!c.done;c=l.next()){var h=r.__read(c.value,2),u=h[0],d=h[1]
o===this.normalizeInstanceIdentifier(u)&&d.resolve(a)}}catch(e){t={error:e}}finally{try{c&&!c.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}return a},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set
i.add(e),this.onInitCallbacks.set(r,i)
var s=this.instances.get(r)
return s&&e(s,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,i,s=this.onInitCallbacks.get(t)
if(s)try{for(var o=r.__values(s),a=o.next();!a.done;a=o.next()){var l=a.value
try{l(e,t)}catch(e){}}}catch(e){n={error:e}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,s=this.instances.get(n)
if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===o?void 0:t),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(e){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=o),this.component?this.component.multipleInstances?e:o:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}(),l=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name)
if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name))
t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e)
var t=new a(e,this)
return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()
t.Component=s,t.ComponentContainer=l,t.Provider=a},449:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0})
var r=n(797),i=n(129),s=n(202),o=n(918)
const a="@firebase/database",l="1.0.5"
let c=""
function h(e){c=e}class u{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),s.stringify(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e))
return null==t?null:s.jsonEval(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return s.contains(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}const p=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e]
return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new u(t)}}catch(e){}return new d},f=p("localStorage"),_=p("sessionStorage"),g=new o.Logger("@firebase/database"),m=function(){let e=1
return function(){return e++}}(),y=function(e){const t=s.stringToByteArray(e),n=new s.Sha1
n.update(t)
const r=n.digest()
return s.base64.encodeByteArray(r)},v=function(...e){let t=""
for(let n=0;n<e.length;n++){const r=e[n]
Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=v.apply(null,r):t+="object"==typeof r?s.stringify(r):r,t+=" "}return t}
let b=null,w=!0
const C=function(e,t){s.assert(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=o.LogLevel.VERBOSE,b=g.log.bind(g),t&&_.set("logging_enabled",!0)):"function"==typeof e?b=e:(b=null,_.remove("logging_enabled"))},E=function(...e){if(!0===w&&(w=!1,null===b&&!0===_.get("logging_enabled")&&C(!0)),b){const t=v.apply(null,e)
b(t)}},I=function(e){return function(...t){E(e,...t)}},T=function(...e){const t="FIREBASE INTERNAL ERROR: "+v(...e)
g.error(t)},S=function(...e){const t=`FIREBASE FATAL ERROR: ${v(...e)}`
throw g.error(t),new Error(t)},k=function(...e){const t="FIREBASE WARNING: "+v(...e)
g.warn(t)},P=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},x="[MIN_NAME]",N="[MAX_NAME]",D=function(e,t){if(e===t)return 0
if(e===x||t===N)return-1
if(t===x||e===N)return 1
{const n=j(e),r=j(t)
return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},R=function(e,t){return e===t?0:e<t?-1:1},O=function(e,t){if(t&&e in t)return t[e]
throw new Error("Missing required key ("+e+") in object: "+s.stringify(t))},A=function(e){if("object"!=typeof e||null===e)return s.stringify(e)
const t=[]
for(const r in e)t.push(r)
t.sort()
let n="{"
for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=s.stringify(t[r]),n+=":",n+=A(e[t[r]])
return n+="}",n},L=function(e,t){const n=e.length
if(n<=t)return[e]
const r=[]
for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t))
return r}
function M(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const F=function(e){let t,n,r,i,o
s.assert(!P(e),"Invalid JSON number"),0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(i=Math.min(Math.floor(Math.log(e)/Math.LN2),1023),n=i+1023,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))))
const a=[]
for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2)
for(o=11;o;o-=1)a.push(n%2?1:0),n=Math.floor(n/2)
a.push(t?1:0),a.reverse()
const l=a.join("")
let c=""
for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16)
1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()},q=new RegExp("^-?(0*)\\d{1,10}$"),j=function(e){if(q.test(e)){const t=Number(e)
if(t>=-2147483648&&t<=2147483647)return t}return null},B=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||""
throw k("Exception was thrown by user callback.",t),e}),Math.floor(0))}},W=function(e,t){const n=setTimeout(e,t)
return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n}
class U{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t
null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}class z{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. '
"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(e)}}class H{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}H.OWNER="owner"
const V="5",$=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Y="ac",K="websocket",G="long_polling"
class Q{constructor(e,t,n,r,i=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=f.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&f.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString()
return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:""
return`${e}${this.host}/${t}`}}function J(e,t,n){let r
if(s.assert("string"==typeof t,"typeof type must == string"),s.assert("object"==typeof n,"typeof params must == object"),t===K)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?"
else{if(t!==G)throw new Error("Unknown connection type: "+t)
r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace)
const i=[]
return M(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}class X{constructor(){this.counters_={}}incrementCounter(e,t=1){s.contains(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return s.deepCopy(this.counters_)}}const Z={},ee={}
function te(e){const t=e.toString()
return Z[t]||(Z[t]=new X),Z[t]}class ne{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum]
delete this.pendingResponses[this.currentResponseNum]
for(let t=0;t<e.length;++t)e[t]&&B((()=>{this.onMessage_(e[t])}))
if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null)
break}this.currentResponseNum++}}}const re="start"
class ie{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=I(e),this.stats_=te(t),this.urlFn=e=>(this.appCheckToken&&(e[Y]=this.appCheckToken),J(t,G,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ne(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(s.isNodeSdk()||"complete"===document.readyState)e()
else{let t=!1
const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))}
document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return
this.scriptTagHolder=new se(((...e)=>{const[t,n,r,i,s]=e
if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===re)this.id=n,this.password=r
else{if("close"!==t)throw new Error("Unrecognized command received: "+t)
n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e
this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn)
const e={}
e[re]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=V,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[Y]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&$.test(location.hostname)&&(e.r="f")
const t=this.urlFn(e)
this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ie.forceAllow_=!0}static forceDisallow(){ie.forceDisallow_=!0}static isAvailable(){return!(s.isNodeSdk()||!ie.forceAllow_&&(ie.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=s.stringify(e)
this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length)
const n=s.base64Encode(t),r=L(n,1840)
for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(s.isNodeSdk())return
this.myDisconnFrame=document.createElement("iframe")
const n={dframe:"t"}
n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=s.stringify(e).length
this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class se{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,s.isNodeSdk())this.commandCB=e,this.onMessageCB=t
else{this.uniqueCallbackIdentifier=m(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=se.createIFrame_()
let n=""
this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)&&(n='<script>document.domain="'+document.domain+'";<\/script>')
const r="<html><body>"+n+"</body></html>"
try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){E("frame writing exception"),e.stack&&E(e.stack),E(e)}}}static createIFrame_(){const e=document.createElement("iframe")
if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready."
document.body.appendChild(e)
try{e.contentWindow.document||E("No IE domain setting required")}catch(t){const r=document.domain
e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)))
const e=this.onDisconnect
e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++
const e={}
e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial
let t=this.urlFn(e),n="",r=0
for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+30+n.length<=1870;){const e=this.pendingSegs.shift()
n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t)
const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3))
this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){s.isNodeSdk()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return
const n=this.myIFrame.doc.createElement("script")
n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState
e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{E("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}let oe=null
"undefined"!=typeof MozWebSocket?oe=MozWebSocket:"undefined"!=typeof WebSocket&&(oe=WebSocket)
class ae{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=I(this.connId),this.stats_=te(t),this.connURL=ae.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const o={}
return o.v=V,!s.isNodeSdk()&&"undefined"!=typeof location&&location.hostname&&$.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),r&&(o[Y]=r),i&&(o.p=i),J(e,K,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,f.set("previous_websocket_failure",!0)
try{let e
if(s.isNodeSdk()){const t=this.nodeAdmin?"AdminNode":"Node"
e={headers:{"User-Agent":`Firebase/${V}/${c}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken)
const n=process.env,r=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy
r&&(e.proxy={origin:r})}this.mySock=new oe(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.")
const t=e.message||e.data
return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.")
const t=e.message||e.data
t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ae.forceDisallow_=!0}static isAvailable(){let e=!1
if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t)
n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==oe&&!ae.forceDisallow_}static previouslyFailed(){return f.isInMemoryStorage||!0===f.get("previous_websocket_failure")}markConnectionHealthy(){f.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("")
this.frames=null
const t=s.jsonEval(e)
this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(s.assert(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e)
if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return
const t=e.data
if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t)
else{const e=this.extractFrameCount_(t)
null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive()
const t=s.stringify(e)
this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length)
const n=L(t,16384)
n.length>1&&this.sendString_(String(n.length))
for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ae.responsesRequiredToBeHealthy=2,ae.healthyTimeout=3e4
class le{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ie,ae]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ae&&ae.isAvailable()
let n=t&&!ae.previouslyFailed()
if(e.webSocketOnly&&(t||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ae]
else{const e=this.transports_=[]
for(const t of le.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)
le.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0]
throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}le.globalTransportInitialized_=!1
class ce{constructor(e,t,n,r,i,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=I("c:"+this.id+":"),this.transportManager_=new le(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport()
this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0
const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_)
this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0))
const r=e.healthyTimeout||0
r>0&&(this.healthyTimeout_=W((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e}
this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t
"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=O("t",e),n=O("d",e)
if("c"===t)this.onSecondaryControl_(n)
else{if("d"!==t)throw new Error("Unknown protocol layer: "+t)
this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=O("t",e),n=O("d",e)
"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=O("t",e)
if("d"in e){const n=e.d
if("h"===t){const e=Object.assign({},n)
this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_
for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e])
this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?T("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):T("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h
this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),V!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport()
e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0
const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_)
this.secondaryConn_.open(t,n),W((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):W((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_
this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(f.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected"
this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}class he{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}class ue{constructor(e){this.allowedEvents_=e,this.listeners_={},s.assert(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]]
for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n})
const r=this.getInitialEvent(e)
r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e)
const r=this.listeners_[e]||[]
for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){s.assert(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}class de extends ue{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||s.isMobileCordova()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new de}getInitialEvent(e){return s.assert("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class pe{constructor(e,t){if(void 0===t){this.pieces_=e.split("/")
let t=0
for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++)
this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e=""
for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t])
return e||"/"}}function fe(){return new pe("")}function _e(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ge(e){return e.pieces_.length-e.pieceNum_}function me(e){let t=e.pieceNum_
return t<e.pieces_.length&&t++,new pe(e.pieces_,t)}function ye(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ve(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function be(e){if(e.pieceNum_>=e.pieces_.length)return null
const t=[]
for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n])
return new pe(t,0)}function we(e,t){const n=[]
for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r])
if(t instanceof pe)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r])
else{const e=t.split("/")
for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new pe(n,0)}function Ce(e){return e.pieceNum_>=e.pieces_.length}function Ee(e,t){const n=_e(e),r=_e(t)
if(null===n)return t
if(n===r)return Ee(me(e),me(t))
throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ie(e,t){const n=ve(e,0),r=ve(t,0)
for(let i=0;i<n.length&&i<r.length;i++){const e=D(n[i],r[i])
if(0!==e)return e}return n.length===r.length?0:n.length<r.length?-1:1}function Te(e,t){if(ge(e)!==ge(t))return!1
for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1
return!0}function Se(e,t){let n=e.pieceNum_,r=t.pieceNum_
if(ge(e)>ge(t))return!1
for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class ke{constructor(e,t){this.errorPrefix_=t,this.parts_=ve(e,0),this.byteLength_=Math.max(1,this.parts_.length)
for(let n=0;n<this.parts_.length;n++)this.byteLength_+=s.stringLength(this.parts_[n])
Pe(this)}}function Pe(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").")
if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+xe(e))}function xe(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}class Ne extends ue{constructor(){let e,t
super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e]
t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Ne}getInitialEvent(e){return s.assert("visible"===e,"Unknown event type: "+e),[this.visible_]}}const De=1e3
class Re extends he{constructor(e,t,n,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Re.nextPersistentConnectionId_++,this.log_=I("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=De,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!s.isNodeSdk())throw new Error("Auth override specified in options, but not supported on non Node.js platforms")
Ne.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&de.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t}
this.log_(s.stringify(i)),s.assert(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_()
const t=new s.Deferred,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d
"ok"===e.s?t.resolve(n):t.reject(n)}}
this.outstandingGets_.push(n),this.outstandingGetCount_++
const r=this.outstandingGets_.length-1
return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_()
const i=e._queryIdentifier,o=e._path.toString()
this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),s.assert(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),s.assert(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.")
const a={onComplete:r,hashFn:t,query:e,tag:n}
this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e]
this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier
this.log_("Listen on "+n+" for "+r)
const i={p:n}
e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s
Re.warnOnListenWarnings_(s,t),(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&s.contains(e,"w")){const n=s.safeGet(e,"w")
if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString()
k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||s.isAdmin(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=s.isValidFormat(e)?"auth":"gauth",n={cred:e}
null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error"
this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error"
"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier
this.log_("Unlisten called for "+n+" "+r),s.assert(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t)
const i={p:e}
r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n}
this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_()
const s={p:t,d:n}
void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++
const o=this.outstandingPuts_.length-1
this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete
this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e}
this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d
this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+s.stringify(e))
const t=e.r,n=this.requestCBHash_[t]
n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error
"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):T("Unrecognized action received from server: "+s.stringify(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){s.assert(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=De,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=De,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&((new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=De),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime())
const e=(new Date).getTime()-this.lastConnectionAttemptTime_
let t=Math.max(0,this.reconnectDelay_-e)
t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null
const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Re.nextConnectionId_++,o=this.lastSessionId
let a=!1,l=null
const c=function(){l?l.close():(a=!0,r())},h=function(e){s.assert(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(e)}
this.realtime_={close:c,sendRequest:h}
const u=this.forceTokenRefresh_
this.forceTokenRefresh_=!1
try{const[e,s]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)])
a?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),this.authToken_=e&&e.accessToken,this.appCheckToken_=s&&s.token,l=new ce(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,(e=>{k(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),o))}catch(e){this.log_("Failed to get token: "+e),a||(this.repoInfo_.nodeAdmin&&k(e),c())}}}interrupt(e){E("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){E("Resuming connection for reason: "+e),delete this.interruptReasons_[e],s.isEmpty(this.interruptReasons_)&&(this.reconnectDelay_=De,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime()
this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e]
t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n
n=t?t.map((e=>A(e))).join("$"):"default"
const r=this.removeListen_(e,n)
r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new pe(e).toString()
let r
if(this.listens.has(n)){const e=this.listens.get(n)
r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0
return r}onAuthRevoked_(e,t){E("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){E("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck()
for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t)
for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e)
for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift()
this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={}
let t="js"
s.isNodeSdk()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+c.replace(/\./g,"-")]=1,s.isMobileCordova()?e["framework.cordova"]=1:s.isReactNative()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=de.getInstance().currentlyOnline()
return s.isEmpty(this.interruptReasons_)&&e}}Re.nextPersistentConnectionId_=0,Re.nextConnectionId_=0
class Oe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Oe(e,t)}}class Ae{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Oe(x,e),r=new Oe(x,t)
return 0!==this.compare(n,r)}minPost(){return Oe.MIN}}let Le
class Me extends Ae{static get __EMPTY_NODE(){return Le}static set __EMPTY_NODE(e){Le=e}compare(e,t){return D(e.name,t.name)}isDefinedOn(e){throw s.assertionError("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Oe.MIN}maxPost(){return new Oe(N,Le)}makePost(e,t){return s.assert("string"==typeof e,"KeyIndex indexValue must always be a string."),new Oe(e,Le)}toString(){return".key"}}const Fe=new Me
class qe{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[]
let s=1
for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right
else{if(0===s){this.nodeStack_.push(e)
break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null
let e,t=this.nodeStack_.pop()
if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right
else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left
return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null
const e=this.nodeStack_[this.nodeStack_.length-1]
return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class je{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:je.RED,this.left=null!=r?r:Be.EMPTY_NODE,this.right=null!=i?i:Be.EMPTY_NODE}copy(e,t,n,r,i){return new je(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this
const i=n(e,r.key)
return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Be.EMPTY_NODE
let e=this
return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r
if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null)
else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Be.EMPTY_NODE
r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this
return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_()
return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_()
return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,je.RED,null,this.right.left)
return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,je.RED,this.left.right,null)
return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null)
return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_()
return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")")
if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red")
const e=this.left.check_()
if(e!==this.right.check_())throw new Error("Black depths differ")
return e+(this.isRed_()?0:1)}}je.RED=!0,je.BLACK=!1
class Be{constructor(e,t=Be.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Be(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,je.BLACK,null,null))}remove(e){return new Be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,je.BLACK,null,null))}get(e){let t,n=this.root_
for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value
t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null
for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null
for(n=n.left;!n.right.isEmpty();)n=n.right
return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qe(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qe(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qe(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qe(this.root_,null,this.comparator_,!0,e)}}function We(e,t){return D(e.name,t.name)}function Ue(e,t){return D(e,t)}let ze
Be.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new je(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}
const He=function(e){return"number"==typeof e?"number:"+F(e):"string:"+e},Ve=function(e){if(e.isLeafNode()){const t=e.val()
s.assert("string"==typeof t||"number"==typeof t||"object"==typeof t&&s.contains(t,".sv"),"Priority must be a string or number.")}else s.assert(e===ze||e.isEmpty(),"priority of unexpected type.")
s.assert(e===ze||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")}
let $e,Ye,Ke
class Ge{constructor(e,t=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,s.assert(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ve(this.priorityNode_)}static set __childrenNodeConstructor(e){$e=e}static get __childrenNodeConstructor(){return $e}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ce(e)?this:".priority"===_e(e)?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=_e(e)
return null===n?t:t.isEmpty()&&".priority"!==n?this:(s.assert(".priority"!==n||1===ge(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(me(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e=""
this.priorityNode_.isEmpty()||(e+="priority:"+He(this.priorityNode_.val())+":")
const t=typeof this.value_
e+=t+":",e+="number"===t?F(this.value_):this.value_,this.lazyHash_=y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(s.assert(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Ge.VALUE_TYPE_ORDER.indexOf(t),i=Ge.VALUE_TYPE_ORDER.indexOf(n)
return s.assert(r>=0,"Unknown leaf type: "+t),s.assert(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0
if(e.isLeafNode()){const t=e
return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"]
const Qe=new class extends Ae{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r)
return 0===i?D(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Oe.MIN}maxPost(){return new Oe(N,new Ge("[PRIORITY-POST]",Ke))}makePost(e,t){const n=Ye(e)
return new Oe(t,new Ge("[PRIORITY-POST]",n))}toString(){return".priority"}},Je=Math.log(2)
class Xe{constructor(e){var t
this.count=(t=e+1,parseInt(Math.log(t)/Je,10)),this.current_=this.count-1
const n=(r=this.count,parseInt(Array(r+1).join("1"),2))
var r
this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_)
return this.current_--,e}}const Ze=function(e,t,n,r){e.sort(t)
const i=function(t,r){const s=r-t
let o,a
if(0===s)return null
if(1===s)return o=e[t],a=n?n(o):o,new je(a,o.node,je.BLACK,null,null)
{const l=parseInt(s/2,10)+t,c=i(t,l),h=i(l+1,r)
return o=e[l],a=n?n(o):o,new je(a,o.node,je.BLACK,c,h)}},s=function(t){let r=null,s=null,o=e.length
const a=function(t,r){const s=o-t,a=o
o-=t
const c=i(s+1,a),h=e[s],u=n?n(h):h
l(new je(u,h.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)}
for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1))
n?a(r,je.BLACK):(a(r,je.BLACK),a(r,je.RED))}return s}(new Xe(e.length))
return new Be(r||t,s)}
let et
const tt={}
class nt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return s.assert(tt&&Qe,"ChildrenNode.ts has not been loaded"),et=et||new nt({".priority":tt},{".priority":Qe}),et}get(e){const t=s.safeGet(this.indexes_,e)
if(!t)throw new Error("No index defined for "+e)
return t instanceof Be?t:null}hasIndex(e){return s.contains(this.indexSet_,e.toString())}addIndex(e,t){s.assert(e!==Fe,"KeyIndex always exists and isn't meant to be added to the IndexMap.")
const n=[]
let r=!1
const i=t.getIterator(Oe.Wrap)
let o,a=i.getNext()
for(;a;)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext()
o=r?Ze(n,e.getCompare()):tt
const l=e.toString(),c=Object.assign({},this.indexSet_)
c[l]=e
const h=Object.assign({},this.indexes_)
return h[l]=o,new nt(h,c)}addToIndexes(e,t){const n=s.map(this.indexes_,((n,r)=>{const i=s.safeGet(this.indexSet_,r)
if(s.assert(i,"Missing index implementation for "+r),n===tt){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Oe.Wrap)
let s=r.getNext()
for(;s;)s.name!==e.name&&n.push(s),s=r.getNext()
return n.push(e),Ze(n,i.getCompare())}return tt}{const r=t.get(e.name)
let i=n
return r&&(i=i.remove(new Oe(e.name,r))),i.insert(e,e.node)}}))
return new nt(n,this.indexSet_)}removeFromIndexes(e,t){const n=s.map(this.indexes_,(n=>{if(n===tt)return n
{const r=t.get(e.name)
return r?n.remove(new Oe(e.name,r)):n}}))
return new nt(n,this.indexSet_)}}let rt
class it{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ve(this.priorityNode_),this.children_.isEmpty()&&s.assert(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return rt||(rt=new it(new Be(Ue),null,nt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||rt}updatePriority(e){return this.children_.isEmpty()?this:new it(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority()
{const t=this.children_.get(e)
return null===t?rt:t}}getChild(e){const t=_e(e)
return null===t?this:this.getImmediateChild(t).getChild(me(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(s.assert(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t)
{const n=new Oe(e,t)
let r,i
t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_))
const s=r.isEmpty()?rt:this.priorityNode_
return new it(r,s,i)}}updateChild(e,t){const n=_e(e)
if(null===n)return t
{s.assert(".priority"!==_e(e)||1===ge(e),".priority must be the last token in a path")
const r=this.getImmediateChild(n).updateChild(me(e),t)
return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null
const t={}
let n=0,r=0,i=!0
if(this.forEachChild(Qe,((s,o)=>{t[s]=o.val(e),n++,i&&it.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[]
for(const n in t)e[n]=t[n]
return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e=""
this.getPriority().isEmpty()||(e+="priority:"+He(this.getPriority().val())+":"),this.forEachChild(Qe,((t,n)=>{const r=n.hash()
""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":y(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n)
if(r){const n=r.getPredecessorKey(new Oe(e,t))
return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e)
if(t){const e=t.minKey()
return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e)
return t?new Oe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e)
if(t){const e=t.maxKey()
return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e)
return t?new Oe(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e)
return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t)
if(n)return n.getIteratorFrom(e,(e=>e))
{const n=this.children_.getIteratorFrom(e.name,Oe.Wrap)
let r=n.peek()
for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek()
return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t)
if(n)return n.getReverseIteratorFrom(e,(e=>e))
{const n=this.children_.getReverseIteratorFrom(e.name,Oe.Wrap)
let r=n.peek()
for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek()
return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===st?-1:0}withIndex(e){if(e===Fe||this.indexMap_.hasIndex(e))return this
{const t=this.indexMap_.addIndex(e,this.children_)
return new it(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Fe||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0
if(e.isLeafNode())return!1
{const t=e
if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Qe),n=t.getIterator(Qe)
let r=e.getNext(),i=n.getNext()
for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1
r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Fe?null:this.indexMap_.get(e.toString())}}it.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/
const st=new class extends it{constructor(){super(new Be(Ue),it.EMPTY_NODE,nt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return it.EMPTY_NODE}isEmpty(){return!1}}
Object.defineProperties(Oe,{MIN:{value:new Oe(x,it.EMPTY_NODE)},MAX:{value:new Oe(N,st)}}),Me.__EMPTY_NODE=it.EMPTY_NODE,Ge.__childrenNodeConstructor=it,ze=st,Ke=st
const ot=!0
function at(e,t=null){if(null===e)return it.EMPTY_NODE
if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),s.assert(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e)return new Ge(e,at(t))
if(e instanceof Array||!ot){let n=it.EMPTY_NODE
return M(e,((t,r)=>{if(s.contains(e,t)&&"."!==t.substring(0,1)){const e=at(r)
!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(at(t))}{const n=[]
let r=!1
if(M(e,((e,t)=>{if("."!==e.substring(0,1)){const i=at(t)
i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Oe(e,i)))}})),0===n.length)return it.EMPTY_NODE
const i=Ze(n,We,(e=>e.name),Ue)
if(r){const e=Ze(n,Qe.getCompare())
return new it(i,at(t),new nt({".priority":e},{".priority":Qe}))}return new it(i,at(t),nt.Default)}}!function(e){Ye=e}(at)
class lt extends Ae{constructor(e){super(),this.indexPath_=e,s.assert(!Ce(e)&&".priority"!==_e(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r)
return 0===i?D(e.name,t.name):i}makePost(e,t){const n=at(e),r=it.EMPTY_NODE.updateChild(this.indexPath_,n)
return new Oe(t,r)}maxPost(){const e=it.EMPTY_NODE.updateChild(this.indexPath_,st)
return new Oe(N,e)}toString(){return ve(this.indexPath_,0).join("/")}}const ct=new class extends Ae{compare(e,t){const n=e.node.compareTo(t.node)
return 0===n?D(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Oe.MIN}maxPost(){return Oe.MAX}makePost(e,t){const n=at(e)
return new Oe(t,n)}toString(){return".value"}}
function ht(e){return{type:"value",snapshotNode:e}}function ut(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function dt(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function pt(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}class ft{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){s.assert(e.isIndexed(this.index_),"A node must be indexed if only a child is updated")
const a=e.getImmediateChild(t)
return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(dt(t,a)):s.assert(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ut(t,n)):o.trackChildChange(pt(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Qe,((e,r)=>{t.hasChild(e)||n.trackChildChange(dt(e,r))})),t.isLeafNode()||t.forEachChild(Qe,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t)
i.equals(r)||n.trackChildChange(pt(t,r,i))}else n.trackChildChange(ut(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?it.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}class _t{constructor(e){this.indexedFilter_=new ft(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_t.getStartPost_(e),this.endPost_=_t.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0
return t&&n}updateChild(e,t,n,r,i,s){return this.matches(new Oe(t,n))||(n=it.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=it.EMPTY_NODE)
let r=t.withIndex(this.index_)
r=r.updatePriority(it.EMPTY_NODE)
const i=this
return t.forEachChild(Qe,((e,t)=>{i.matches(new Oe(e,t))||(r=r.updateImmediateChild(e,it.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName()
return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName()
return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}class gt{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e)
return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost())
return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new _t(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new Oe(t,n))||(n=it.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r
if(t.isLeafNode()||t.isEmpty())r=it.EMPTY_NODE.withIndex(this.index_)
else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e
r=it.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_)
let n=0
for(;e.hasNext()&&n<this.limit_;){const t=e.getNext()
if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break
r=r.updateImmediateChild(t.name,t.node),n++}}}else{let e
r=t.withIndex(this.index_),r=r.updatePriority(it.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_)
let n=0
for(;e.hasNext();){const t=e.getNext()
n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:r=r.updateImmediateChild(t.name,it.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o
if(this.reverse_){const e=this.index_.getCompare()
o=(t,n)=>e(n,t)}else o=this.index_.getCompare()
const a=e
s.assert(a.numChildren()===this.limit_,"")
const l=new Oe(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l)
if(a.hasChild(t)){const e=a.getImmediateChild(t)
let s=r.getChildAfterChild(this.index_,c,this.reverse_)
for(;null!=s&&(s.name===t||a.hasChild(s.name));)s=r.getChildAfterChild(this.index_,s,this.reverse_)
const u=null==s?1:o(s,l)
if(h&&!n.isEmpty()&&u>=0)return null!=i&&i.trackChildChange(pt(t,n,e)),a.updateImmediateChild(t,n)
{null!=i&&i.trackChildChange(dt(t,e))
const n=a.updateImmediateChild(t,it.EMPTY_NODE)
return null!=s&&this.rangedFilter_.matches(s)?(null!=i&&i.trackChildChange(ut(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:h&&o(c,l)>=0?(null!=i&&(i.trackChildChange(dt(c.name,c.node)),i.trackChildChange(ut(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,it.EMPTY_NODE)):e}}class mt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Qe}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return s.assert(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return s.assert(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:x}hasEnd(){return this.endSet_}getIndexEndValue(){return s.assert(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return s.assert(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:N}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return s.assert(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Qe}copy(){const e=new mt
return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function yt(e,t,n){const r=e.copy()
return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function vt(e,t,n){const r=e.copy()
return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function bt(e,t){const n=e.copy()
return n.index_=t,n}function wt(e){const t={}
if(e.isDefault())return t
let n
if(e.index_===Qe?n="$priority":e.index_===ct?n="$value":e.index_===Fe?n="$key":(s.assert(e.index_ instanceof lt,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=s.stringify(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt"
t[n]=s.stringify(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+s.stringify(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt"
t[n]=s.stringify(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+s.stringify(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Ct(e){const t={}
if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_
let n=e.viewFrom_
""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Qe&&(t.i=e.index_.toString()),t}class Et extends he{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=I("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(s.assert(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString()
this.log_("Listen called for "+i+" "+e._queryIdentifier)
const o=Et.getListenId_(e,n),a={}
this.listens_[o]=a
const l=wt(e._queryParams)
this.restRequest_(i+".json",l,((e,t)=>{let l=t
if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(i,l,!1,n),s.safeGet(this.listens_,o)===a){let t
t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Et.getListenId_(e,t)
delete this.listens_[n]}get(e){const t=wt(e._queryParams),n=e._path.toString(),r=new s.Deferred
return this.restRequest_(n+".json",t,((e,t)=>{let i=t
404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token)
const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+s.querystring(t)
this.log_("Sending REST request for "+o)
const a=new XMLHttpRequest
a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText)
let t=null
if(a.status>=200&&a.status<300){try{t=s.jsonEval(a.responseText)}catch(e){k("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status)
n=null}},a.open("GET",o,!0),a.send()}))}}class It{constructor(){this.rootNode_=it.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}function Tt(){return{value:null,children:new Map}}function St(e,t,n){if(Ce(t))e.value=n,e.children.clear()
else if(null!==e.value)e.value=e.value.updateChild(t,n)
else{const r=_e(t)
e.children.has(r)||e.children.set(r,Tt()),St(e.children.get(r),t=me(t),n)}}function kt(e,t){if(Ce(t))return e.value=null,e.children.clear(),!0
if(null!==e.value){if(e.value.isLeafNode())return!1
{const n=e.value
return e.value=null,n.forEachChild(Qe,((t,n)=>{St(e,new pe(t),n)})),kt(e,t)}}if(e.children.size>0){const n=_e(t)
return t=me(t),e.children.has(n)&&kt(e.children.get(n),t)&&e.children.delete(n),0===e.children.size}return!0}function Pt(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}(e,((e,r)=>{Pt(r,new pe(t.toString()+"/"+e),n)}))}class xt{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e)
return this.last_&&M(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}class Nt{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new xt(e)
const n=1e4+2e4*Math.random()
W(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={}
let n=!1
M(e,((e,r)=>{r>0&&s.contains(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),W(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}var Dt
function Rt(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(Dt||(Dt={}))
class Ot{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Dt.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Ce(this.path)){if(null!=this.affectedTree.value)return s.assert(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this
{const t=this.affectedTree.subtree(new pe(e))
return new Ot(fe(),t,this.revert)}}return s.assert(_e(this.path)===e,"operationForChild called for unrelated child."),new Ot(me(this.path),this.affectedTree,this.revert)}}class At{constructor(e,t){this.source=e,this.path=t,this.type=Dt.LISTEN_COMPLETE}operationForChild(e){return Ce(this.path)?new At(this.source,fe()):new At(this.source,me(this.path))}}class Lt{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Dt.OVERWRITE}operationForChild(e){return Ce(this.path)?new Lt(this.source,fe(),this.snap.getImmediateChild(e)):new Lt(this.source,me(this.path),this.snap)}}class Mt{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Dt.MERGE}operationForChild(e){if(Ce(this.path)){const t=this.children.subtree(new pe(e))
return t.isEmpty()?null:t.value?new Lt(this.source,fe(),t.value):new Mt(this.source,fe(),t)}return s.assert(_e(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Mt(this.source,me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}class Ft{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ce(e))return this.isFullyInitialized()&&!this.filtered_
const t=_e(e)
return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}class qt{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jt(e,t,n,r,i,o){const a=r.filter((e=>e.type===n))
a.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw s.assertionError("Should only compare child_ events.")
const r=new Oe(t.childName,t.snapshotNode),i=new Oe(n.childName,n.snapshotNode)
return e.index_.compare(r,i)}(e,t,n))),a.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o)
i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Bt(e,t){return{eventCache:e,serverCache:t}}function Wt(e,t,n,r){return Bt(new Ft(t,n,r),e.serverCache)}function Ut(e,t,n,r){return Bt(e.eventCache,new Ft(t,n,r))}function zt(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ht(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}let Vt
class $t{constructor(e,t=(()=>(Vt||(Vt=new Be(R)),Vt))()){this.value=e,this.children=t}static fromObject(e){let t=new $t(null)
return M(e,((e,n)=>{t=t.set(new pe(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:fe(),value:this.value}
if(Ce(e))return null
{const n=_e(e),r=this.children.get(n)
if(null!==r){const i=r.findRootMostMatchingPathAndValue(me(e),t)
return null!=i?{path:we(new pe(n),i.path),value:i.value}:null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ce(e))return this
{const t=_e(e),n=this.children.get(t)
return null!==n?n.subtree(me(e)):new $t(null)}}set(e,t){if(Ce(e))return new $t(t,this.children)
{const n=_e(e),r=(this.children.get(n)||new $t(null)).set(me(e),t),i=this.children.insert(n,r)
return new $t(this.value,i)}}remove(e){if(Ce(e))return this.children.isEmpty()?new $t(null):new $t(null,this.children)
{const t=_e(e),n=this.children.get(t)
if(n){const r=n.remove(me(e))
let i
return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new $t(null):new $t(this.value,i)}return this}}get(e){if(Ce(e))return this.value
{const t=_e(e),n=this.children.get(t)
return n?n.get(me(e)):null}}setTree(e,t){if(Ce(e))return t
{const n=_e(e),r=(this.children.get(n)||new $t(null)).setTree(me(e),t)
let i
return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new $t(this.value,i)}}fold(e){return this.fold_(fe(),e)}fold_(e,t){const n={}
return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(we(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,fe(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value)
if(r)return r
if(Ce(e))return null
{const r=_e(e),i=this.children.get(r)
return i?i.findOnPath_(me(e),we(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,fe(),t)}foreachOnPath_(e,t,n){if(Ce(e))return this
{this.value&&n(t,this.value)
const r=_e(e),i=this.children.get(r)
return i?i.foreachOnPath_(me(e),we(t,r),n):new $t(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(we(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}class Yt{constructor(e){this.writeTree_=e}static empty(){return new Yt(new $t(null))}}function Kt(e,t,n){if(Ce(t))return new Yt(new $t(n))
{const r=e.writeTree_.findRootMostValueAndPath(t)
if(null!=r){const i=r.path
let s=r.value
const o=Ee(i,t)
return s=s.updateChild(o,n),new Yt(e.writeTree_.set(i,s))}{const r=new $t(n),i=e.writeTree_.setTree(t,r)
return new Yt(i)}}}function Gt(e,t,n){let r=e
return M(n,((e,n)=>{r=Kt(r,we(t,e),n)})),r}function Qt(e,t){if(Ce(t))return Yt.empty()
{const n=e.writeTree_.setTree(t,new $t(null))
return new Yt(n)}}function Jt(e,t){return null!=Xt(e,t)}function Xt(e,t){const n=e.writeTree_.findRootMostValueAndPath(t)
return null!=n?e.writeTree_.get(n.path).getChild(Ee(n.path,t)):null}function Zt(e){const t=[],n=e.writeTree_.value
return null!=n?n.isLeafNode()||n.forEachChild(Qe,((e,n)=>{t.push(new Oe(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Oe(e,n.value))})),t}function en(e,t){if(Ce(t))return e
{const n=Xt(e,t)
return new Yt(null!=n?new $t(n):e.writeTree_.subtree(t))}}function tn(e){return e.writeTree_.isEmpty()}function nn(e,t){return rn(fe(),e.writeTree_,t)}function rn(e,t,n){if(null!=t.value)return n.updateChild(e,t.value)
{let r=null
return t.children.inorderTraversal(((t,i)=>{".priority"===t?(s.assert(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=rn(we(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(we(e,".priority"),r)),n}}function sn(e,t){return gn(t,e)}function on(e,t){if(e.snap)return Se(e.path,t)
for(const n in e.children)if(e.children.hasOwnProperty(n)&&Se(we(e.path,n),t))return!0
return!1}function an(e){return e.visible}function ln(e,t,n){let r=Yt.empty()
for(let i=0;i<e.length;++i){const o=e[i]
if(t(o)){const e=o.path
let t
if(o.snap)Se(n,e)?(t=Ee(n,e),r=Kt(r,t,o.snap)):Se(e,n)&&(t=Ee(e,n),r=Kt(r,fe(),o.snap.getChild(t)))
else{if(!o.children)throw s.assertionError("WriteRecord should have .snap or .children")
if(Se(n,e))t=Ee(n,e),r=Gt(r,t,o.children)
else if(Se(e,n))if(t=Ee(e,n),Ce(t))r=Gt(r,fe(),o.children)
else{const e=s.safeGet(o.children,_e(t))
if(e){const n=e.getChild(me(t))
r=Kt(r,fe(),n)}}}}}return r}function cn(e,t,n,r,i){if(r||i){const s=en(e.visibleWrites,t)
if(!i&&tn(s))return n
if(i||null!=n||Jt(s,fe())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Se(e.path,t)||Se(t,e.path))}
return nn(ln(e.allWrites,s,t),n||it.EMPTY_NODE)}return null}{const r=Xt(e.visibleWrites,t)
if(null!=r)return r
{const r=en(e.visibleWrites,t)
return tn(r)?n:null!=n||Jt(r,fe())?nn(r,n||it.EMPTY_NODE):null}}}function hn(e,t,n,r){return cn(e.writeTree,e.treePath,t,n,r)}function un(e,t){return function(e,t,n){let r=it.EMPTY_NODE
const i=Xt(e.visibleWrites,t)
if(i)return i.isLeafNode()||i.forEachChild(Qe,((e,t)=>{r=r.updateImmediateChild(e,t)})),r
if(n){const i=en(e.visibleWrites,t)
return n.forEachChild(Qe,((e,t)=>{const n=nn(en(i,new pe(e)),t)
r=r.updateImmediateChild(e,n)})),Zt(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return Zt(en(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function dn(e,t,n,r){return function(e,t,n,r,i){s.assert(r||i,"Either existingEventSnap or existingServerSnap must exist")
const o=we(t,n)
if(Jt(e.visibleWrites,o))return null
{const t=en(e.visibleWrites,o)
return tn(t)?i.getChild(n):nn(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function pn(e,t){return function(e,t){return Xt(e.visibleWrites,t)}(e.writeTree,we(e.treePath,t))}function fn(e,t,n){return function(e,t,n,r){const i=we(t,n),s=Xt(e.visibleWrites,i)
return null!=s?s:r.isCompleteForChild(n)?nn(en(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function _n(e,t){return gn(we(e.treePath,t),e.writeTree)}function gn(e,t){return{treePath:e,writeTree:t}}class mn{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName
s.assert("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),s.assert(".priority"!==n,"Only non-priority child changes can be tracked.")
const r=this.changeMap.get(n)
if(r){const i=r.type
if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,pt(n,e.snapshotNode,r.snapshotNode))
else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n)
else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,dt(n,r.oldSnap))
else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,ut(n,e.snapshotNode))
else{if("child_changed"!==t||"child_changed"!==i)throw s.assertionError("Illegal combination of changes: "+e+" occurred after "+r)
this.changeMap.set(n,pt(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}const yn=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}
class vn{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache
if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e)
{const t=null!=this.optCompleteServerCache_?new Ft(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache
return fn(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ht(this.viewCache_),i=function(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a
const l=en(e.visibleWrites,t),c=Xt(l,fe())
if(null!=c)a=c
else{if(null==n)return[]
a=nn(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[]
{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o)
let i=n.getNext()
for(;i&&e.length<1;)0!==t(i,r)&&e.push(i),i=n.getNext()
return e}}(e.writeTree,e.treePath,t,n,0,i,s)}(this.writes_,r,t,0,n,e)
return 0===i.length?null:i[0]}}function bn(e,t,n,r,i,o){const a=t.eventCache
if(null!=pn(r,n))return t
{let l,c
if(Ce(n))if(s.assert(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Ht(t),i=un(r,n instanceof it?n:it.EMPTY_NODE)
l=e.filter.updateFullNode(t.eventCache.getNode(),i,o)}else{const n=hn(r,Ht(t))
l=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const h=_e(n)
if(".priority"===h){s.assert(1===ge(n),"Can't have a priority with additional path components")
const i=a.getNode()
c=t.serverCache.getNode()
const o=dn(r,n,i,c)
l=null!=o?e.filter.updatePriority(i,o):a.getNode()}else{const s=me(n)
let u
if(a.isCompleteForChild(h)){c=t.serverCache.getNode()
const e=dn(r,n,a.getNode(),c)
u=null!=e?a.getNode().getImmediateChild(h).updateChild(s,e):a.getNode().getImmediateChild(h)}else u=fn(r,h,t.serverCache)
l=null!=u?e.filter.updateChild(a.getNode(),h,u,s,i,o):a.getNode()}}return Wt(t,l,a.isFullyInitialized()||Ce(n),e.filter.filtersNodes())}}function wn(e,t,n,r,i,s,o,a){const l=t.serverCache
let c
const h=o?e.filter:e.filter.getIndexedFilter()
if(Ce(n))c=h.updateFullNode(l.getNode(),r,null)
else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r)
c=h.updateFullNode(l.getNode(),e,null)}else{const e=_e(n)
if(!l.isCompleteForPath(n)&&ge(n)>1)return t
const i=me(n),s=l.getNode().getImmediateChild(e).updateChild(i,r)
c=".priority"===e?h.updatePriority(l.getNode(),s):h.updateChild(l.getNode(),e,s,i,yn,null)}const u=Ut(t,c,l.isFullyInitialized()||Ce(n),h.filtersNodes())
return bn(e,u,n,i,new vn(i,u,s),a)}function Cn(e,t,n,r,i,s,o){const a=t.eventCache
let l,c
const h=new vn(i,t,s)
if(Ce(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=Wt(t,c,!0,e.filter.filtersNodes())
else{const i=_e(n)
if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=Wt(t,c,a.isFullyInitialized(),a.isFiltered())
else{const s=me(n),c=a.getNode().getImmediateChild(i)
let u
if(Ce(s))u=r
else{const e=h.getCompleteChild(i)
u=null!=e?".priority"===ye(s)&&e.getChild(be(s)).isEmpty()?e:e.updateChild(s,r):it.EMPTY_NODE}l=c.equals(u)?t:Wt(t,e.filter.updateChild(a.getNode(),i,u,s,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}return l}function En(e,t){return e.eventCache.isCompleteForChild(t)}function In(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Tn(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t
let l,c=t
l=Ce(n)?r:new $t(null).setTree(n,r)
const h=t.serverCache.getNode()
return l.children.inorderTraversal(((n,r)=>{if(h.hasChild(n)){const l=In(0,t.serverCache.getNode().getImmediateChild(n),r)
c=wn(e,c,new pe(n),l,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===r.value
if(!h.hasChild(n)&&!l){const l=In(0,t.serverCache.getNode().getImmediateChild(n),r)
c=wn(e,c,new pe(n),l,i,s,o,a)}})),c}class Sn{constructor(e,t){this.query_=e,this.eventRegistrations_=[]
const n=this.query_._queryParams,r=new ft(n.getIndex()),i=(s=n).loadsAllData()?new ft(s.getIndex()):s.hasLimit()?new gt(s):new _t(s)
var s
this.processor_=function(e){return{filter:e}}(i)
const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(it.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(it.EMPTY_NODE,a.getNode(),null),h=new Ft(l,o.isFullyInitialized(),r.filtersNodes()),u=new Ft(c,a.isFullyInitialized(),i.filtersNodes())
this.viewCache_=Bt(u,h),this.eventGenerator_=new qt(this.query_)}get query(){return this.query_}}function kn(e,t){const n=Ht(e.viewCache_)
return n&&(e.query._queryParams.loadsAllData()||!Ce(t)&&!n.getImmediateChild(_e(t)).isEmpty())?n.getChild(t):null}function Pn(e){return 0===e.eventRegistrations_.length}function xn(e,t,n){const r=[]
if(n){s.assert(null==t,"A cancel should cancel all event registrations.")
const i=e.query._path
e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i)
t&&r.push(t)}))}if(t){let n=[]
for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r]
if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1))
break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[]
return r}function Nn(e,t,n,r){t.type===Dt.MERGE&&null!==t.source.queryId&&(s.assert(Ht(e.viewCache_),"We should always have a full cache before handling merges"),s.assert(zt(e.viewCache_),"Missing event cache, even though we have a server cache"))
const i=e.viewCache_,o=function(e,t,n,r,i){const o=new mn
let a,l
if(n.type===Dt.OVERWRITE){const c=n
c.source.fromUser?a=Cn(e,t,c.path,c.snap,r,i,o):(s.assert(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!Ce(c.path),a=wn(e,t,c.path,c.snap,r,i,l,o))}else if(n.type===Dt.MERGE){const c=n
c.source.fromUser?a=function(e,t,n,r,i,s,o){let a=t
return r.foreach(((r,l)=>{const c=we(n,r)
En(t,_e(c))&&(a=Cn(e,a,c,l,i,s,o))})),r.foreach(((r,l)=>{const c=we(n,r)
En(t,_e(c))||(a=Cn(e,a,c,l,i,s,o))})),a}(e,t,c.path,c.children,r,i,o):(s.assert(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),a=Tn(e,t,c.path,c.children,r,i,l,o))}else if(n.type===Dt.ACK_USER_WRITE){const l=n
a=l.revert?function(e,t,n,r,i,o){let a
if(null!=pn(r,n))return t
{const l=new vn(r,t,i),c=t.eventCache.getNode()
let h
if(Ce(n)||".priority"===_e(n)){let n
if(t.serverCache.isFullyInitialized())n=hn(r,Ht(t))
else{const e=t.serverCache.getNode()
s.assert(e instanceof it,"serverChildren would be complete if leaf node"),n=un(r,e)}h=e.filter.updateFullNode(c,n,o)}else{const i=_e(n)
let s=fn(r,i,t.serverCache)
null==s&&t.serverCache.isCompleteForChild(i)&&(s=c.getImmediateChild(i)),h=null!=s?e.filter.updateChild(c,i,s,me(n),l,o):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(c,i,it.EMPTY_NODE,me(n),l,o):c,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=hn(r,Ht(t)),a.isLeafNode()&&(h=e.filter.updateFullNode(h,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=pn(r,fe()),Wt(t,h,a,e.filter.filtersNodes())}}(e,t,l.path,r,i,o):function(e,t,n,r,i,s,o){if(null!=pn(i,n))return t
const a=t.serverCache.isFiltered(),l=t.serverCache
if(null!=r.value){if(Ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return wn(e,t,n,l.getNode().getChild(n),i,s,a,o)
if(Ce(n)){let r=new $t(null)
return l.getNode().forEachChild(Fe,((e,t)=>{r=r.set(new pe(e),t)})),Tn(e,t,n,r,i,s,a,o)}return t}{let c=new $t(null)
return r.foreach(((e,t)=>{const r=we(n,e)
l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),Tn(e,t,n,c,i,s,a,o)}}(e,t,l.path,l.affectedTree,r,i,o)}else{if(n.type!==Dt.LISTEN_COMPLETE)throw s.assertionError("Unknown operation type: "+n.type)
a=function(e,t,n,r,i){const s=t.serverCache
return bn(e,Ut(t,s.getNode(),s.isFullyInitialized()||Ce(n),s.isFiltered()),n,r,yn,i)}(e,t,n.path,r,o)}const c=o.getChanges()
return function(e,t,n){const r=t.eventCache
if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=zt(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ht(zt(t)))}}(t,a,c),{viewCache:a,changes:c}}(e.processor_,i,t,n,r)
var a,l
return a=e.processor_,l=o.viewCache,s.assert(l.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),s.assert(l.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),s.assert(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Dn(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Dn(e,t,n,r){const i=r?[r]:e.eventRegistrations_
return function(e,t,n,r){const i=[],s=[]
return t.forEach((t=>{var n
"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),jt(e,i,"child_removed",t,r,n),jt(e,i,"child_added",t,r,n),jt(e,i,"child_moved",s,r,n),jt(e,i,"child_changed",t,r,n),jt(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}let Rn,On
class An{constructor(){this.views=new Map}}function Ln(e,t,n,r){const i=t.source.queryId
if(null!==i){const o=e.views.get(i)
return s.assert(null!=o,"SyncTree gave us an op for an invalid query."),Nn(o,t,n,r)}{let i=[]
for(const s of e.views.values())i=i.concat(Nn(s,t,n,r))
return i}}function Mn(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s)
if(!o){let e=hn(n,i?r:null),s=!1
e?s=!0:r instanceof it?(e=un(n,r),s=!1):(e=it.EMPTY_NODE,s=!1)
const o=Bt(new Ft(e,s,!1),new Ft(r,i,!1))
return new Sn(t,o)}return o}function Fn(e){const t=[]
for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n)
return t}function qn(e,t){let n=null
for(const r of e.views.values())n=n||kn(r,t)
return n}function jn(e,t){if(t._queryParams.loadsAllData())return Un(e)
{const n=t._queryIdentifier
return e.views.get(n)}}function Bn(e,t){return null!=jn(e,t)}function Wn(e){return null!=Un(e)}function Un(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t
return null}let zn=1
class Hn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $t(null),this.pendingWriteTree_={visibleWrites:Yt.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vn(e,t,n,r,i){return function(e,t,n,r,i){s.assert(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Kt(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Xn(e,new Lt({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function $n(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n]
if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t)
if(function(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t))
s.assert(n>=0,"removeWrite called with nonexistent writeId.")
const r=e.allWrites[n]
e.allWrites.splice(n,1)
let i=r.visible,o=!1,a=e.allWrites.length-1
for(;i&&a>=0;){const t=e.allWrites[a]
t.visible&&(a>=n&&on(t,r.path)?i=!1:Se(r.path,t.path)&&(o=!0)),a--}return!!i&&(o?(function(e){e.visibleWrites=ln(e.allWrites,an,fe()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0):(r.snap?e.visibleWrites=Qt(e.visibleWrites,r.path):M(r.children,(t=>{e.visibleWrites=Qt(e.visibleWrites,we(r.path,t))})),!0))}(e.pendingWriteTree_,t)){let t=new $t(null)
return null!=r.snap?t=t.set(fe(),!0):M(r.children,(e=>{t=t.set(new pe(e),!0)})),Xn(e,new Ot(r.path,t,n))}return[]}function Yn(e,t,n){return Xn(e,new Lt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Kn(e,t,n,r,i=!1){const o=t._path,a=e.syncPointTree_.get(o)
let l=[]
if(a&&("default"===t._queryIdentifier||Bn(a,t))){const c=function(e,t,n,r){const i=t._queryIdentifier,o=[]
let a=[]
const l=Wn(e)
if("default"===i)for(const[s,c]of e.views.entries())a=a.concat(xn(c,n,r)),Pn(c)&&(e.views.delete(s),c.query._queryParams.loadsAllData()||o.push(c.query))
else{const t=e.views.get(i)
t&&(a=a.concat(xn(t,n,r)),Pn(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return l&&!Wn(e)&&o.push(new(s.assert(Rn,"Reference.ts has not been loaded"),Rn)(t._repo,t._path)),{removed:o,events:a}}(a,t,n,r)
0===a.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(o))
const h=c.removed
if(l=c.events,!i){const n=-1!==h.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(o,((e,t)=>Wn(t)))
if(n&&!i){const t=e.syncPointTree_.subtree(o)
if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Wn(t))return[Un(t)]
{let e=[]
return t&&(e=Fn(t)),M(n,((t,n)=>{e=e.concat(n)})),e}}))}(t)
for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=tr(e,r)
e.listenProvider_.startListening(ar(i),nr(e,i),s.hashFn,s.onComplete)}}}if(!i&&h.length>0&&!r)if(n){const n=null
e.listenProvider_.stopListening(ar(t),n)}else h.forEach((t=>{const n=e.queryToTagMap.get(rr(t))
e.listenProvider_.stopListening(ar(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const r=t[n]
if(!r._queryParams.loadsAllData()){const t=rr(r),n=e.queryToTagMap.get(t)
e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,h)}return l}function Gn(e,t,n,r){const i=ir(e,r)
if(null!=i){const r=sr(i),s=r.path,o=r.queryId,a=Ee(s,t)
return or(e,s,new Lt(Rt(o),a,n))}return[]}function Qn(e,t,n,r=!1){const i=t._path
let o=null,a=!1
e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=Ee(e,i)
o=o||qn(t,n),a=a||Wn(t)}))
let l,c=e.syncPointTree_.get(i)
c?(a=a||Wn(c),o=o||qn(c,fe())):(c=new An,e.syncPointTree_=e.syncPointTree_.set(i,c)),null!=o?l=!0:(l=!1,o=it.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild(((e,t)=>{const n=qn(t,fe())
n&&(o=o.updateImmediateChild(e,n))})))
const h=Bn(c,t)
if(!h&&!t._queryParams.loadsAllData()){const n=rr(t)
s.assert(!e.queryToTagMap.has(n),"View does not exist, but we have a tag")
const r=zn++
e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let u=function(e,t,n,r,i,s){const o=Mn(e,t,r,i,s)
return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[]
return n.getNode().isLeafNode()||n.getNode().forEachChild(Qe,((e,t)=>{r.push(ut(e,t))})),n.isFullyInitialized()&&r.push(ht(n.getNode())),Dn(e,r,n.getNode(),t)}(o,n)}(c,t,n,sn(e.pendingWriteTree_,i),o,l)
if(!h&&!a&&!r){const n=jn(c,t)
u=u.concat(function(e,t,n){const r=t._path,i=nr(e,t),o=tr(e,n),a=e.listenProvider_.startListening(ar(t),i,o.hashFn,o.onComplete),l=e.syncPointTree_.subtree(r)
if(i)s.assert(!Wn(l.value),"If we're adding a query, it shouldn't be shadowed")
else{const t=l.fold(((e,t,n)=>{if(!Ce(e)&&t&&Wn(t))return[Un(t).query]
{let e=[]
return t&&(e=e.concat(Fn(t).map((e=>e.query)))),M(n,((t,n)=>{e=e.concat(n)})),e}}))
for(let n=0;n<t.length;++n){const r=t[n]
e.listenProvider_.stopListening(ar(r),nr(e,r))}}return a}(e,t,n))}return u}function Jn(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=qn(n,Ee(e,t))
if(r)return r}))
return cn(r,t,i,n,!0)}function Xn(e,t){return Zn(t,e.syncPointTree_,null,sn(e.pendingWriteTree_,fe()))}function Zn(e,t,n,r){if(Ce(e.path))return er(e,t,n,r)
{const i=t.get(fe())
null==n&&null!=i&&(n=qn(i,fe()))
let s=[]
const o=_e(e.path),a=e.operationForChild(o),l=t.children.get(o)
if(l&&a){const e=n?n.getImmediateChild(o):null,t=_n(r,o)
s=s.concat(Zn(a,l,e,t))}return i&&(s=s.concat(Ln(i,e,r,n))),s}}function er(e,t,n,r){const i=t.get(fe())
null==n&&null!=i&&(n=qn(i,fe()))
let s=[]
return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=_n(r,t),l=e.operationForChild(t)
l&&(s=s.concat(er(l,i,o,a)))})),i&&(s=s.concat(Ln(i,e,r,n))),s}function tr(e,t){const n=t.query,r=nr(e,n)
return{hashFn:()=>(function(e){return e.viewCache_.serverCache.getNode()}(t)||it.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=ir(e,n)
if(r){const n=sr(r),i=n.path,s=n.queryId,o=Ee(i,t)
return or(e,i,new At(Rt(s),o))}return[]}(e,n._path,r):function(e,t){return Xn(e,new At({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path)
{const r=function(e,t){let n="Unknown Error"
"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable")
const r=new Error(e+" at "+t._path.toString()+": "+n)
return r.code=e.toUpperCase(),r}(t,n)
return Kn(e,n,null,r)}}}}function nr(e,t){const n=rr(t)
return e.queryToTagMap.get(n)}function rr(e){return e._path.toString()+"$"+e._queryIdentifier}function ir(e,t){return e.tagToQueryMap.get(t)}function sr(e){const t=e.indexOf("$")
return s.assert(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new pe(e.substr(0,t))}}function or(e,t,n){const r=e.syncPointTree_.get(t)
return s.assert(r,"Missing sync point for query tag that we're tracking"),Ln(r,n,sn(e.pendingWriteTree_,t),null)}function ar(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(s.assert(On,"Reference.ts has not been loaded"),On)(e._repo,e._path):e}class lr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e)
return new lr(t)}node(){return this.node_}}class cr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=we(this.path_,e)
return new cr(this.syncTree_,t)}node(){return Jn(this.syncTree_,this.path_)}}const hr=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},ur=function(e,t,n){return e&&"object"==typeof e?(s.assert(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?dr(e[".sv"],t,n):"object"==typeof e[".sv"]?pr(e[".sv"],t):void s.assert(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},dr=function(e,t,n){if("timestamp"===e)return n.timestamp
s.assert(!1,"Unexpected server value: "+e)},pr=function(e,t,n){e.hasOwnProperty("increment")||s.assert(!1,"Unexpected server value: "+JSON.stringify(e,null,2))
const r=e.increment
"number"!=typeof r&&s.assert(!1,"Unexpected increment value: "+r)
const i=t.node()
if(s.assert(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r
const o=i.getValue()
return"number"!=typeof o?r:o+r},fr=function(e,t,n,r){return gr(t,new cr(n,e),r)},_r=function(e,t,n){return gr(e,new lr(t),n)}
function gr(e,t,n){const r=e.getPriority().val(),i=ur(r,t.getImmediateChild(".priority"),n)
let s
if(e.isLeafNode()){const r=e,s=ur(r.getValue(),t,n)
return s!==r.getValue()||i!==r.getPriority().val()?new Ge(s,at(i)):e}{const r=e
return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new Ge(i))),r.forEachChild(Qe,((e,r)=>{const i=gr(r,t.getImmediateChild(e),n)
i!==r&&(s=s.updateImmediateChild(e,i))})),s}}class mr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function yr(e,t){let n=t instanceof pe?t:new pe(t),r=e,i=_e(n)
for(;null!==i;){const e=s.safeGet(r.node.children,i)||{children:{},childCount:0}
r=new mr(i,r,e),n=me(n),i=_e(n)}return r}function vr(e){return e.node.value}function br(e,t){e.node.value=t,Tr(e)}function wr(e){return e.node.childCount>0}function Cr(e,t){M(e.node.children,((n,r)=>{t(new mr(n,e,r))}))}function Er(e,t,n,r){n&&!r&&t(e),Cr(e,(e=>{Er(e,t,!0,r)})),n&&r&&t(e)}function Ir(e){return new pe(null===e.parent?e.name:Ir(e.parent)+"/"+e.name)}function Tr(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===vr(e)&&!wr(e)}(n),i=s.contains(e.node.children,t)
r&&i?(delete e.node.children[t],e.node.childCount--,Tr(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Tr(e))}(e.parent,e.name,e)}const Sr=/[\[\].#$\/\u0000-\u001F\u007F]/,kr=/[\[\].#$\u0000-\u001F\u007F]/,Pr=10485760,xr=function(e){return"string"==typeof e&&0!==e.length&&!Sr.test(e)},Nr=function(e){return"string"==typeof e&&0!==e.length&&!kr.test(e)},Dr=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!P(e)||e&&"object"==typeof e&&s.contains(e,".sv")},Rr=function(e,t,n,r){r&&void 0===t||Or(s.errorPrefix(e,"value"),t,n)},Or=function(e,t,n){const r=n instanceof pe?new ke(n,e):n
if(void 0===t)throw new Error(e+"contains undefined "+xe(r))
if("function"==typeof t)throw new Error(e+"contains a function "+xe(r)+" with contents = "+t.toString())
if(P(t))throw new Error(e+"contains "+t.toString()+" "+xe(r))
if("string"==typeof t&&t.length>Pr/3&&s.stringLength(t)>Pr)throw new Error(e+"contains a string greater than "+Pr+" utf8 bytes "+xe(r)+" ('"+t.substring(0,50)+"...')")
if(t&&"object"==typeof t){let n=!1,i=!1
if(M(t,((t,o)=>{if(".value"===t)n=!0
else if(".priority"!==t&&".sv"!==t&&(i=!0,!xr(t)))throw new Error(e+" contains an invalid key ("+t+") "+xe(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')
!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=s.stringLength(t),Pe(e)}(r,t),Or(e,o,r),function(e){const t=e.parts_.pop()
e.byteLength_-=s.stringLength(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+xe(r)+" in addition to actual children.")}},Ar=function(e,t,n,r){if(r&&void 0===t)return
const i=s.errorPrefix(e,"values")
if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.")
const o=[]
M(t,((e,t)=>{const r=new pe(e)
if(Or(i,t,we(n,r)),".priority"===ye(r)&&!Dr(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).")
o.push(r)})),function(e,t){let n,r
for(n=0;n<t.length;n++){r=t[n]
const i=ve(r)
for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!xr(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Ie)
let i=null
for(n=0;n<t.length;n++){if(r=t[n],null!==i&&Se(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString())
i=r}}(i,o)},Lr=function(e,t,n){if(!n||void 0!==t){if(P(t))throw new Error(s.errorPrefix(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).")
if(!Dr(t))throw new Error(s.errorPrefix(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Mr=function(e,t,n,r){if(!(r&&void 0===n||xr(n)))throw new Error(s.errorPrefix(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},Fr=function(e,t,n,r){if(!(r&&void 0===n||Nr(n)))throw new Error(s.errorPrefix(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},qr=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Fr(e,t,n,r)},jr=function(e,t){if(".info"===_e(t))throw new Error(e+" failed = Can't modify data under /.info/")},Br=function(e,t){const n=t.path.toString()
if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!xr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Nr(e)}(n))throw new Error(s.errorPrefix(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')}
class Wr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ur(e,t){let n=null
for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath()
null===n||Te(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function zr(e,t,n){Ur(e,n),Vr(e,(e=>Te(e,t)))}function Hr(e,t,n){Ur(e,n),Vr(e,(e=>Se(e,t)||Se(t,e)))}function Vr(e,t){e.recursionDepth_++
let n=!0
for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r]
i&&(t(i.path)?($r(e.eventLists_[r]),e.eventLists_[r]=null):n=!1)}n&&(e.eventLists_=[]),e.recursionDepth_--}function $r(e){for(let t=0;t<e.events.length;t++){const n=e.events[t]
if(null!==n){e.events[t]=null
const r=n.getEventRunner()
b&&E("event: "+n.toString()),B(r)}}}const Yr="repo_interrupt",Kr=25
class Gr{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Wr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Tt(),this.transactionQueueTree_=new mr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Qr(e){const t=e.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0
return(new Date).getTime()+t}function Jr(e){return hr({timestamp:Qr(e)})}function Xr(e,t,n,r,i){e.dataUpdateCount++
const o=new pe(t)
n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n
let a=[]
if(i)if(r){const t=s.map(n,(e=>at(e)))
a=function(e,t,n,r){const i=ir(e,r)
if(i){const r=sr(i),s=r.path,o=r.queryId,a=Ee(s,t),l=$t.fromObject(n)
return or(e,s,new Mt(Rt(o),a,l))}return[]}(e.serverSyncTree_,o,t,i)}else{const t=at(n)
a=Gn(e.serverSyncTree_,o,t,i)}else if(r){const t=s.map(n,(e=>at(e)))
a=function(e,t,n){const r=$t.fromObject(n)
return Xn(e,new Mt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,o,t)}else{const t=at(n)
a=Yn(e.serverSyncTree_,o,t)}let l=o
a.length>0&&(l=ui(e,o)),Hr(e.eventQueue_,l,a)}function Zr(e,t){ei(e,"connected",t),!1===t&&function(e){ai(e,"onDisconnectEvents")
const t=Jr(e),n=Tt()
Pt(e.onDisconnect_,fe(),((r,i)=>{const s=fr(r,i,e.serverSyncTree_,t)
St(n,r,s)}))
let r=[]
Pt(n,fe(),((t,n)=>{r=r.concat(Yn(e.serverSyncTree_,t,n))
const i=gi(e,t)
ui(e,i)})),e.onDisconnect_=Tt(),Hr(e.eventQueue_,fe(),r)}(e)}function ei(e,t,n){const r=new pe("/.info/"+t),i=at(n)
e.infoData_.updateSnapshot(r,i)
const s=Yn(e.infoSyncTree_,r,i)
Hr(e.eventQueue_,r,s)}function ti(e){return e.nextWriteId_++}function ni(e,t,n,r,i){ai(e,"set",{path:t.toString(),value:n,priority:r})
const s=Jr(e),o=at(n,r),a=Jn(e.serverSyncTree_,t),l=_r(o,a,s),c=ti(e),h=Vn(e.serverSyncTree_,t,l,c,!0)
Ur(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n
s||k("set at "+t+" failed: "+n)
const o=$n(e.serverSyncTree_,c,!s)
Hr(e.eventQueue_,t,o),li(0,i,n,r)}))
const u=gi(e,t)
ui(e,u),Hr(e.eventQueue_,u,[])}function ri(e,t,n){e.server_.onDisconnectCancel(t.toString(),((r,i)=>{"ok"===r&&kt(e.onDisconnect_,t),li(0,n,r,i)}))}function ii(e,t,n,r){const i=at(n)
e.server_.onDisconnectPut(t.toString(),i.val(!0),((n,s)=>{"ok"===n&&St(e.onDisconnect_,t,i),li(0,r,n,s)}))}function si(e,t,n){let r
r=".info"===_e(t._path)?Kn(e.infoSyncTree_,t,n):Kn(e.serverSyncTree_,t,n),zr(e.eventQueue_,t._path,r)}function oi(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Yr)}function ai(e,...t){let n=""
e.persistentConnection_&&(n=e.persistentConnection_.id+":"),E(n,...t)}function li(e,t,n,r){t&&B((()=>{if("ok"===n)t(null)
else{const e=(n||"error").toUpperCase()
let i=e
r&&(i+=": "+r)
const s=new Error(i)
s.code=e,t(s)}}))}function ci(e,t,n){return Jn(e.serverSyncTree_,t,n)||it.EMPTY_NODE}function hi(e,t=e.transactionQueueTree_){if(t||_i(e,t),vr(t)){const n=pi(e,t)
s.assert(n.length>0,"Sending zero length transaction queue"),n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=ci(e,t,r)
let o=i
const a=i.hash()
for(let h=0;h<n.length;h++){const e=n[h]
s.assert(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++
const r=Ee(t,e.path)
o=o.updateChild(r,e.currentOutputSnapshotRaw)}const l=o.val(!0),c=t
e.server_.put(c.toString(),l,(r=>{ai(e,"transaction put response",{path:c.toString(),status:r})
let i=[]
if("ok"===r){const r=[]
for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat($n(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher()
_i(e,yr(e.transactionQueueTree_,t)),hi(e,e.transactionQueueTree_),Hr(e.eventQueue_,t,i)
for(let e=0;e<r.length;e++)B(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0
else{k("transaction at "+c.toString()+" failed: "+r)
for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}ui(e,t)}}),a)}(e,Ir(t),n)}else wr(t)&&Cr(t,(t=>{hi(e,t)}))}function ui(e,t){const n=di(e,t),r=Ir(n)
return function(e,t,n){if(0===t.length)return
const r=[]
let i=[]
const o=t.filter((e=>0===e.status)).map((e=>e.currentWriteId))
for(let l=0;l<t.length;l++){const c=t[l],h=Ee(n,c.path)
let u,d=!1
if(s.assert(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)d=!0,u=c.abortReason,i=i.concat($n(e.serverSyncTree_,c.currentWriteId,!0))
else if(0===c.status)if(c.retryCount>=Kr)d=!0,u="maxretry",i=i.concat($n(e.serverSyncTree_,c.currentWriteId,!0))
else{const n=ci(e,c.path,o)
c.currentInputSnapshot=n
const r=t[l].update(n.val())
if(void 0!==r){Or("transaction failed: Data returned ",r,c.path)
let t=at(r)
"object"==typeof r&&null!=r&&s.contains(r,".priority")||(t=t.updatePriority(n.getPriority()))
const a=c.currentWriteId,l=Jr(e),h=_r(t,n,l)
c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=h,c.currentWriteId=ti(e),o.splice(o.indexOf(a),1),i=i.concat(Vn(e.serverSyncTree_,c.path,h,c.currentWriteId,c.applyLocally)),i=i.concat($n(e.serverSyncTree_,a,!0))}else d=!0,u="nodata",i=i.concat($n(e.serverSyncTree_,c.currentWriteId,!0))}Hr(e.eventQueue_,n,i),i=[],d&&(t[l].status=2,a=t[l].unwatcher,setTimeout(a,Math.floor(0)),t[l].onComplete&&("nodata"===u?r.push((()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot))):r.push((()=>t[l].onComplete(new Error(u),!1,null)))))}var a
_i(e,e.transactionQueueTree_)
for(let s=0;s<r.length;s++)B(r[s])
hi(e,e.transactionQueueTree_)}(e,pi(e,n),r),r}function di(e,t){let n,r=e.transactionQueueTree_
for(n=_e(t);null!==n&&void 0===vr(r);)r=yr(r,n),n=_e(t=me(t))
return r}function pi(e,t){const n=[]
return fi(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function fi(e,t,n){const r=vr(t)
if(r)for(let i=0;i<r.length;i++)n.push(r[i])
Cr(t,(t=>{fi(e,t,n)}))}function _i(e,t){const n=vr(t)
if(n){let e=0
for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++)
n.length=e,br(t,n.length>0?n:void 0)}Cr(t,(t=>{_i(e,t)}))}function gi(e,t){const n=Ir(di(e,t)),r=yr(e.transactionQueueTree_,t)
return function(e,t,n){let r=e.parent
for(;null!==r;){if(t(r))return!0
r=r.parent}}(r,(t=>{mi(e,t)})),mi(e,r),Er(r,(t=>{mi(e,t)})),n}function mi(e,t){const n=vr(t)
if(n){const r=[]
let i=[],o=-1
for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(s.assert(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(s.assert(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat($n(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?br(t,void 0):n.length=o+1,Hr(e.eventQueue_,Ir(t),i)
for(let e=0;e<r.length;e++)B(r[e])}}const yi=function(e,t){const n=vi(e),r=n.namespace
"firebase.com"===n.domain&&S(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||S("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")
const i="ws"===n.scheme||"wss"===n.scheme
return{repoInfo:new Q(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new pe(n.pathString)}},vi=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443
if("string"==typeof e){let c=e.indexOf("//")
c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2))
let h=e.indexOf("/");-1===h&&(h=e.length)
let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(i=function(e){let t=""
const n=e.split("/")
for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r]
try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)))
const d=function(e){const t={}
"?"===e.charAt(0)&&(e=e.substring(1))
for(const n of e.split("&")){if(0===n.length)continue
const r=n.split("=")
2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):k(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)))
c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length
const p=t.slice(0,c)
if("localhost"===p.toLowerCase())n="localhost"
else if(p.split(".").length<=2)n=p
else{const e=t.indexOf(".")
r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}},bi="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",wi=function(){let e=0
const t=[]
return function(n){const r=n===e
let i
e=n
const o=new Array(8)
for(i=7;i>=0;i--)o[i]=bi.charAt(n%64),n=Math.floor(n/64)
s.assert(0===n,"Cannot push at time == 0")
let a=o.join("")
if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0
t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random())
for(i=0;i<12;i++)a+=bi.charAt(t[i])
return s.assert(20===a.length,"nextPushId: Length should be 20."),a}}()
class Ci{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref
return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+s.stringify(this.snapshot.exportVal())}}class Ei{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}class Ii{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return s.assert(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}class Ti{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new s.Deferred
return ri(this._repo,this._path,e.wrapCallback((()=>{}))),e.promise}remove(){jr("OnDisconnect.remove",this._path)
const e=new s.Deferred
return ii(this._repo,this._path,null,e.wrapCallback((()=>{}))),e.promise}set(e){jr("OnDisconnect.set",this._path),Rr("OnDisconnect.set",e,this._path,!1)
const t=new s.Deferred
return ii(this._repo,this._path,e,t.wrapCallback((()=>{}))),t.promise}setWithPriority(e,t){jr("OnDisconnect.setWithPriority",this._path),Rr("OnDisconnect.setWithPriority",e,this._path,!1),Lr("OnDisconnect.setWithPriority",t,!1)
const n=new s.Deferred
return function(e,t,n,r,i){const s=at(n,r)
e.server_.onDisconnectPut(t.toString(),s.val(!0),((n,r)=>{"ok"===n&&St(e.onDisconnect_,t,s),li(0,i,n,r)}))}(this._repo,this._path,e,t,n.wrapCallback((()=>{}))),n.promise}update(e){jr("OnDisconnect.update",this._path),Ar("OnDisconnect.update",e,this._path,!1)
const t=new s.Deferred
return function(e,t,n,r){if(s.isEmpty(n))return E("onDisconnect().update() called with empty data.  Don't do anything."),void li(0,r,"ok",void 0)
e.server_.onDisconnectMerge(t.toString(),n,((i,s)=>{"ok"===i&&M(n,((n,r)=>{const i=at(r)
St(e.onDisconnect_,we(t,n),i)})),li(0,r,i,s)}))}(this._repo,this._path,e,t.wrapCallback((()=>{}))),t.promise}}class Si{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return Ce(this._path)?null:ye(this._path)}get ref(){return new Ni(this._repo,this._path)}get _queryIdentifier(){const e=Ct(this._queryParams),t=A(e)
return"{}"===t?"default":t}get _queryObject(){return Ct(this._queryParams)}isEqual(e){if(!((e=s.getModularInstance(e))instanceof Si))return!1
const t=this._repo===e._repo,n=Te(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier
return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t=""
for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])))
return t||"/"}(this._path)}}function ki(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function Pi(e){let t=null,n=null
if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Fe){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string."
if(e.hasStart()){if(e.getIndexStartName()!==x)throw new Error(r)
if("string"!=typeof t)throw new Error(i)}if(e.hasEnd()){if(e.getIndexEndName()!==N)throw new Error(r)
if("string"!=typeof n)throw new Error(i)}}else if(e.getIndex()===Qe){if(null!=t&&!Dr(t)||null!=n&&!Dr(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(s.assert(e.getIndex()instanceof lt||e.getIndex()===ct,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function xi(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Ni extends Si{constructor(e,t){super(e,t,new mt,!1)}get parent(){const e=be(this._path)
return null===e?null:new Ni(this._repo,e)}get root(){let e=this
for(;null!==e.parent;)e=e.parent
return e}}class Di{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new pe(e),n=Oi(this.ref,e)
return new Di(this._node.getChild(t),n,Qe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,((t,n)=>e(new Di(n,Oi(this.ref,t),Qe))))}hasChild(e){const t=new pe(e)
return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ri(e,t){return(e=s.getModularInstance(e))._checkNotDeleted("ref"),void 0!==t?Oi(e._root,t):e._root}function Oi(e,t){return null===_e((e=s.getModularInstance(e))._path)?qr("child","path",t,!1):Fr("child","path",t,!1),new Ni(e._repo,we(e._path,t))}function Ai(e,t){e=s.getModularInstance(e),jr("set",e._path),Rr("set",t,e._path,!1)
const n=new s.Deferred
return ni(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}class Li{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex()
return new Ci("value",this,new Di(e.snapshotNode,new Ni(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ei(this,e,t):null}matches(e){return e instanceof Li&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Mi{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e
return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ei(this,e,t):null}createEvent(e,t){s.assert(null!=e.childName,"Child events should have a childName.")
const n=Oi(new Ni(t._repo,t._path),e.childName),r=t._queryParams.getIndex()
return new Ci(e.type,this,new Di(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Mi&&this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext))}hasAnyCallback(){return!!this.callbackContext}}function Fi(e,t,n,r,i){let s
if("object"==typeof r&&(s=void 0,i=r),"function"==typeof r&&(s=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{si(e._repo,e,a),t(n,r)}
r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new Ii(n,s||void 0),a="value"===t?new Li(o):new Mi(t,o)
return function(e,t,n){let r
r=".info"===_e(t._path)?Qn(e.infoSyncTree_,t,n):Qn(e.serverSyncTree_,t,n),zr(e.eventQueue_,t._path,r)}(e._repo,e,a),()=>si(e._repo,e,a)}function qi(e,t,n,r){return Fi(e,"value",t,n,r)}class ji{}class Bi extends ji{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){Rr("endAt",this._value,e._path,!0)
const t=vt(e._queryParams,this._value,this._key)
if(xi(t),Pi(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).")
return new Si(e._repo,e._path,t,e._orderByCalled)}}class Wi extends ji{constructor(e,t){super(),this._value=e,this._key=t,this.type="endBefore"}_apply(e){Rr("endBefore",this._value,e._path,!1)
const t=function(e,t,n){let r
return r=e.index_===Fe||n?vt(e,t,n):vt(e,t,x),r.endBeforeSet_=!0,r}(e._queryParams,this._value,this._key)
if(xi(t),Pi(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).")
return new Si(e._repo,e._path,t,e._orderByCalled)}}class Ui extends ji{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAt"}_apply(e){Rr("startAt",this._value,e._path,!0)
const t=yt(e._queryParams,this._value,this._key)
if(xi(t),Pi(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).")
return new Si(e._repo,e._path,t,e._orderByCalled)}}class zi extends ji{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAfter"}_apply(e){Rr("startAfter",this._value,e._path,!1)
const t=function(e,t,n){let r
return r=e.index_===Fe||n?yt(e,t,n):yt(e,t,N),r.startAfterSet_=!0,r}(e._queryParams,this._value,this._key)
if(xi(t),Pi(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).")
return new Si(e._repo,e._path,t,e._orderByCalled)}}class Hi extends ji{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).")
return new Si(e._repo,e._path,function(e,t){const n=e.copy()
return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}(e._queryParams,this._limit),e._orderByCalled)}}class Vi extends ji{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).")
return new Si(e._repo,e._path,function(e,t){const n=e.copy()
return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}(e._queryParams,this._limit),e._orderByCalled)}}class $i extends ji{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){ki(e,"orderByChild")
const t=new pe(this._path)
if(Ce(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.")
const n=new lt(t),r=bt(e._queryParams,n)
return Pi(r),new Si(e._repo,e._path,r,!0)}}class Yi extends ji{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){ki(e,"orderByKey")
const t=bt(e._queryParams,Fe)
return Pi(t),new Si(e._repo,e._path,t,!0)}}class Ki extends ji{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){ki(e,"orderByPriority")
const t=bt(e._queryParams,Qe)
return Pi(t),new Si(e._repo,e._path,t,!0)}}class Gi extends ji{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){ki(e,"orderByValue")
const t=bt(e._queryParams,ct)
return Pi(t),new Si(e._repo,e._path,t,!0)}}class Qi extends ji{constructor(e,t){super(),this._value=e,this._key=t,this.type="equalTo"}_apply(e){if(Rr("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).")
if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).")
return new Bi(this._value,this._key)._apply(new Ui(this._value,this._key)._apply(e))}}!function(e){s.assert(!Rn,"__referenceConstructor has already been defined"),Rn=e}(Ni),function(e){s.assert(!On,"__referenceConstructor has already been defined"),On=e}(Ni)
const Ji={}
let Xi=!1
function Zi(e,t,n,r,i){let s=r||e.options.databaseURL
void 0===s&&(e.options.projectId||S("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),E("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`)
let o,a,l=yi(s,i),c=l.repoInfo
"undefined"!=typeof process&&process.env&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=yi(s,i),c=l.repoInfo):o=!l.repoInfo.secure
const h=i&&o?new H(H.OWNER):new z(e.name,e.options,t)
Br("Invalid Firebase Database URL",l),Ce(l.path)||S("Database URL must point to the root of a Firebase Database (not including a child path).")
const u=function(e,t,n,r){let i=Ji[t.name]
i||(i={},Ji[t.name]=i)
let s=i[e.toURLString()]
return s&&S("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Gr(e,Xi,n,r),i[e.toURLString()]=s,s}(c,e,h,new U(e.name,n))
return new es(u,e)}class es{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,n){if(e.stats_=te(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Et(e.repoInfo_,((t,n,r,i)=>{Xr(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Zr(e,!0)),0)
else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride")
try{s.stringify(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Re(e.repoInfo_,t,((t,n,r,i)=>{Xr(e,t,n,r,i)}),(t=>{Zr(e,t)}),(t=>{!function(e,t){M(t,((t,n)=>{ei(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(t,n){const r=t.toString()
return ee[r]||(ee[r]=new Nt(e.stats_,e.server_)),ee[r]}(e.repoInfo_),e.infoData_=new It,e.infoSyncTree_=new Hn({startListening:(t,n,r,i)=>{let s=[]
const o=e.infoData_.getNode(t._path)
return o.isEmpty()||(s=Yn(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),ei(e,"connected",!1),e.serverSyncTree_=new Hn({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r)
Hr(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ni(this._repo,fe())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){const n=Ji[t]
n&&n[e.key]===e||S(`Database ${t}(${e.repoInfo_}) has already been deleted.`),oi(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&S("Cannot call "+e+" on a deleted database.")}}function ts(){le.IS_TRANSPORT_INITIALIZED&&k("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function ns(e,t,n,r={}){(e=s.getModularInstance(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&S("Cannot call useEmulator() after instance has already been initialized.")
const i=e._repoInternal
let o
if(i.repoInfo_.nodeAdmin)r.mockUserToken&&S('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new H(H.OWNER)
else if(r.mockUserToken){const t="string"==typeof r.mockUserToken?r.mockUserToken:s.createMockUserToken(r.mockUserToken,e.app.options.projectId)
o=new H(t)}!function(e,t,n,r){e.repoInfo_=new Q(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}(i,t,n,o)}const rs={".sv":"timestamp"}
class is{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}Re.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Re.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},h(r.SDK_VERSION),r._registerComponent(new i.Component("database",((e,{instanceIdentifier:t})=>Zi(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),r.registerVersion(a,l,void 0),r.registerVersion(a,l,"cjs2017"),t.DataSnapshot=Di,t.Database=es,t.OnDisconnect=Ti,t.QueryConstraint=ji,t.TransactionResult=is,t._QueryImpl=Si,t._QueryParams=mt,t._ReferenceImpl=Ni,t._TEST_ACCESS_forceRestClient=function(e){!function(e){Xi=e}(e)},t._TEST_ACCESS_hijackHash=function(e){const t=Re.prototype.put
return Re.prototype.put=function(n,r,i,s){void 0!==s&&(s=e()),t.call(this,n,r,i,s)},function(){Re.prototype.put=t}},t._initStandalone=function({app:e,url:t,version:n,customAuthImpl:r,customAppCheckImpl:s,nodeAdmin:o=!1}){h(n)
const a=new i.ComponentContainer("database-standalone"),l=new i.Provider("auth-internal",a)
let c
return s&&(c=new i.Provider("app-check-internal",a),c.setComponent(new i.Component("app-check-internal",(()=>s),"PRIVATE"))),l.setComponent(new i.Component("auth-internal",(()=>r),"PRIVATE")),Zi(e,l,c,t,o)},t._repoManagerDatabaseFromApp=Zi,t._setSDKVersion=h,t._validatePathString=Fr,t._validateWritablePath=jr,t.child=Oi,t.connectDatabaseEmulator=ns,t.enableLogging=function(e,t){C(e,t)},t.endAt=function(e,t){return Mr("endAt","key",t,!0),new Bi(e,t)},t.endBefore=function(e,t){return Mr("endBefore","key",t,!0),new Wi(e,t)},t.equalTo=function(e,t){return Mr("equalTo","key",t,!0),new Qi(e,t)},t.forceLongPolling=function(){ts(),ae.forceDisallow(),ie.forceAllow()},t.forceWebSockets=function(){ts(),ie.forceDisallow()},t.get=function(e){e=s.getModularInstance(e)
const t=new Ii((()=>{})),n=new Li(t)
return function(e,t,n){const r=function(e,t){const n=t._path
let r=null
e.syncPointTree_.foreachOnPath(n,((e,t)=>{const i=Ee(e,n)
r=r||qn(t,i)}))
let i=e.syncPointTree_.get(n)
i?r=r||qn(i,fe()):(i=new An,e.syncPointTree_=e.syncPointTree_.set(n,i))
const s=null!=r,o=s?new Ft(r,!0,!1):null
return zt(Mn(i,t,sn(e.pendingWriteTree_,t._path),s?o.getNode():it.EMPTY_NODE,s).viewCache_)}(e.serverSyncTree_,t)
return null!=r?Promise.resolve(r):e.server_.get(t).then((r=>{const i=at(r).withIndex(t._queryParams.getIndex())
let s
if(Qn(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=Yn(e.serverSyncTree_,t._path,i)
else{const n=nr(e.serverSyncTree_,t)
s=Gn(e.serverSyncTree_,t._path,i,n)}return Hr(e.eventQueue_,t._path,s),Kn(e.serverSyncTree_,t,n,null,!0),i}),(n=>(ai(e,"get for query "+s.stringify(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Di(t,new Ni(e._repo,e._path),e._queryParams.getIndex())))},t.getDatabase=function(e=r.getApp(),t){const n=r._getProvider(e,"database").getImmediate({identifier:t})
if(!n._instanceStarted){const e=s.getDefaultEmulatorHostnameAndPort("database")
e&&ns(n,...e)}return n},t.goOffline=function(e){(e=s.getModularInstance(e))._checkNotDeleted("goOffline"),oi(e._repo)},t.goOnline=function(e){var t;(e=s.getModularInstance(e))._checkNotDeleted("goOnline"),(t=e._repo).persistentConnection_&&t.persistentConnection_.resume(Yr)},t.increment=function(e){return{".sv":{increment:e}}},t.limitToFirst=function(e){if("number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.")
return new Hi(e)},t.limitToLast=function(e){if("number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.")
return new Vi(e)},t.off=function(e,t,n){let r=null
const i=n?new Ii(n):null
"value"===t?r=new Li(i):t&&(r=new Mi(t,i)),si(e._repo,e,r)},t.onChildAdded=function(e,t,n,r){return Fi(e,"child_added",t,n,r)},t.onChildChanged=function(e,t,n,r){return Fi(e,"child_changed",t,n,r)},t.onChildMoved=function(e,t,n,r){return Fi(e,"child_moved",t,n,r)},t.onChildRemoved=function(e,t,n,r){return Fi(e,"child_removed",t,n,r)},t.onDisconnect=function(e){return e=s.getModularInstance(e),new Ti(e._repo,e._path)},t.onValue=qi,t.orderByChild=function(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.')
if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.')
if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.')
return Fr("orderByChild","path",e,!1),new $i(e)},t.orderByKey=function(){return new Yi},t.orderByPriority=function(){return new Ki},t.orderByValue=function(){return new Gi},t.push=function(e,t){e=s.getModularInstance(e),jr("push",e._path),Rr("push",t,e._path,!0)
const n=Qr(e._repo),r=wi(n),i=Oi(e,r),o=Oi(e,r)
let a
return a=null!=t?Ai(o,t).then((()=>o)):Promise.resolve(o),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i},t.query=function(e,...t){let n=s.getModularInstance(e)
for(const r of t)n=r._apply(n)
return n},t.ref=Ri,t.refFromURL=function(e,t){(e=s.getModularInstance(e))._checkNotDeleted("refFromURL")
const n=yi(t,e._repo.repoInfo_.nodeAdmin)
Br("refFromURL",n)
const r=n.repoInfo
return e._repo.repoInfo_.isCustomHost()||r.host===e._repo.repoInfo_.host||S("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),Ri(e,n.path.toString())},t.remove=function(e){return jr("remove",e._path),Ai(e,null)},t.runTransaction=function(e,t,n){var r
if(e=s.getModularInstance(e),jr("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object."
const i=null===(r=null==n?void 0:n.applyLocally)||void 0===r||r,o=new s.Deferred,a=qi(e,(()=>{}))
return function(t,n,r,i,a,l){ai(t,"transaction on "+n)
const c={path:n,update:r,onComplete:(t,n,r)=>{let i=null
t?o.reject(t):(i=new Di(r,new Ni(e._repo,e._path),Qe),o.resolve(new is(n,i)))},status:null,order:m(),applyLocally:l,retryCount:0,unwatcher:a,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},h=ci(t,n,void 0)
c.currentInputSnapshot=h
const u=c.update(h.val())
if(void 0===u)c.unwatcher(),c.currentOutputSnapshotRaw=null,c.currentOutputSnapshotResolved=null,c.onComplete&&c.onComplete(null,!1,c.currentInputSnapshot)
else{Or("transaction failed: Data returned ",u,c.path),c.status=0
const e=yr(t.transactionQueueTree_,n),r=vr(e)||[]
let i
r.push(c),br(e,r),"object"==typeof u&&null!==u&&s.contains(u,".priority")?(i=s.safeGet(u,".priority"),s.assert(Dr(i),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):i=(Jn(t.serverSyncTree_,n)||it.EMPTY_NODE).getPriority().val()
const o=Jr(t),a=at(u,i),l=_r(a,h,o)
c.currentOutputSnapshotRaw=a,c.currentOutputSnapshotResolved=l,c.currentWriteId=ti(t)
const d=Vn(t.serverSyncTree_,n,l,c.currentWriteId,c.applyLocally)
Hr(t.eventQueue_,n,d),hi(t,t.transactionQueueTree_)}}(e._repo,e._path,t,0,a,i),o.promise},t.serverTimestamp=function(){return rs},t.set=Ai,t.setPriority=function(e,t){e=s.getModularInstance(e),jr("setPriority",e._path),Lr("setPriority",t,!1)
const n=new s.Deferred
return ni(e._repo,we(e._path,".priority"),t,null,n.wrapCallback((()=>{}))),n.promise},t.setWithPriority=function(e,t,n){if(jr("setWithPriority",e._path),Rr("setWithPriority",t,e._path,!1),Lr("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object."
const r=new s.Deferred
return ni(e._repo,e._path,t,n,r.wrapCallback((()=>{}))),r.promise},t.startAfter=function(e,t){return Mr("startAfter","key",t,!0),new zi(e,t)},t.startAt=function(e=null,t){return Mr("startAt","key",t,!0),new Ui(e,t)},t.update=function(e,t){Ar("update",t,e._path,!1)
const n=new s.Deferred
return function(e,t,n,r){ai(e,"update",{path:t.toString(),value:n})
let i=!0
const o=Jr(e),a={}
if(M(n,((n,r)=>{i=!1,a[n]=fr(we(t,n),at(r),e.serverSyncTree_,o)})),i)E("update() called with empty data.  Don't do anything."),li(0,r,"ok",void 0)
else{const i=ti(e),o=function(e,t,n,r){!function(e,t,n,r){s.assert(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Gt(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r)
const i=$t.fromObject(n)
return Xn(e,new Mt({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,t,a,i)
Ur(e.eventQueue_,o),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n
o||k("update at "+t+" failed: "+n)
const a=$n(e.serverSyncTree_,i,!o),l=a.length>0?ui(e,t):t
Hr(e.eventQueue_,l,a),li(0,r,n,s)})),M(n,(n=>{const r=gi(e,we(t,n))
ui(e,r)})),Hr(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}},918:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0})
var r,i,s=n(513),o=[]
t.LogLevel=void 0,(i=t.LogLevel||(t.LogLevel={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"
var a={debug:t.LogLevel.DEBUG,verbose:t.LogLevel.VERBOSE,info:t.LogLevel.INFO,warn:t.LogLevel.WARN,error:t.LogLevel.ERROR,silent:t.LogLevel.SILENT},l=t.LogLevel.INFO,c=((r={})[t.LogLevel.DEBUG]="log",r[t.LogLevel.VERBOSE]="log",r[t.LogLevel.INFO]="info",r[t.LogLevel.WARN]="warn",r[t.LogLevel.ERROR]="error",r),h=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
if(!(t<e.logLevel)){var i=(new Date).toISOString(),o=c[t]
if(!o)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"))
console[o].apply(console,s.__spreadArray(["[".concat(i,"]  ").concat(e.name,":")],n,!1))}},u=function(){function e(e){this.name=e,this._logLevel=l,this._logHandler=h,this._userLogHandler=null,o.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in t.LogLevel))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'))
this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?a[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function")
this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
this._userLogHandler&&this._userLogHandler.apply(this,s.__spreadArray([this,t.LogLevel.DEBUG],e,!1)),this._logHandler.apply(this,s.__spreadArray([this,t.LogLevel.DEBUG],e,!1))},e.prototype.log=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
this._userLogHandler&&this._userLogHandler.apply(this,s.__spreadArray([this,t.LogLevel.VERBOSE],e,!1)),this._logHandler.apply(this,s.__spreadArray([this,t.LogLevel.VERBOSE],e,!1))},e.prototype.info=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
this._userLogHandler&&this._userLogHandler.apply(this,s.__spreadArray([this,t.LogLevel.INFO],e,!1)),this._logHandler.apply(this,s.__spreadArray([this,t.LogLevel.INFO],e,!1))},e.prototype.warn=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
this._userLogHandler&&this._userLogHandler.apply(this,s.__spreadArray([this,t.LogLevel.WARN],e,!1)),this._logHandler.apply(this,s.__spreadArray([this,t.LogLevel.WARN],e,!1))},e.prototype.error=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
this._userLogHandler&&this._userLogHandler.apply(this,s.__spreadArray([this,t.LogLevel.ERROR],e,!1)),this._logHandler.apply(this,s.__spreadArray([this,t.LogLevel.ERROR],e,!1))},e}()
t.Logger=u,t.setLogLevel=function(e){o.forEach((function(t){t.setLogLevel(e)}))},t.setUserLogHandler=function(e,n){for(var r=function(r){var i=null
n&&n.level&&(i=a[n.level]),r.userLogHandler=null===e?null:function(n,r){for(var s=[],o=2;o<arguments.length;o++)s[o-2]=arguments[o]
var a=s.map((function(e){if(null==e)return null
if("string"==typeof e)return e
if("number"==typeof e||"boolean"==typeof e)return e.toString()
if(e instanceof Error)return e.message
try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ")
r>=(null!=i?i:n.logLevel)&&e({level:t.LogLevel[r].toLowerCase(),message:a,args:s,type:n.name})}},i=0,s=o;i<s.length;i++)r(s[i])}},202:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})
const n={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw i(t)},i=function(e){return new Error("Firebase Database ("+n.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){const t=[]
let n=0
for(let r=0;r<e.length;r++){let i=e.charCodeAt(r)
i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter")
this.init_()
const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[]
for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,c=t>>2,h=(3&t)<<4|o>>4
let u=(15&o)<<2|l>>6,d=63&l
a||(d=64,s||(u=64)),r.push(n[c],n[h],n[u],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[]
let n=0,r=0
for(;n<e.length;){const i=e[n++]
if(i<128)t[r++]=String.fromCharCode(i)
else if(i>191&&i<224){const s=e[n++]
t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536
t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++]
t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_()
const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[]
for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i
const o=i<e.length?n[e.charAt(i)]:64;++i
const l=i<e.length?n[e.charAt(i)]:64
if(++i,null==t||null==s||null==o||null==l)throw new a
const c=t<<2|s>>4
if(r.push(c),64!==o){const e=s<<4&240|o>>2
if(r.push(e),64!==l){const e=o<<6&192|l
r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={}
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}}
class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l=function(e){const t=s(e)
return o.encodeByteArray(t,!0)},c=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}
function u(e,t){if(!(t instanceof Object))return t
switch(t.constructor){case Date:return new Date(t.getTime())
case Object:void 0===e&&(e={})
break
case Array:e=[]
break
default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=u(e[n],t[n]))
return e}function d(){if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if("undefined"!=typeof global)return global
throw new Error("Unable to locate global object.")}const p=()=>{try{return d().__FIREBASE_DEFAULTS__||(()=>{if("undefined"==typeof process||void 0===process.env)return
const e=process.env.__FIREBASE_DEFAULTS__
return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return
let e
try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&h(e[1])
return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},f=e=>{var t,n
return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]}
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}function g(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function m(){var e
const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment
if("node"===t)return!0
if("browser"===t)return!1
try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}class y extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,v.prototype.create)}}class v{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(b,((e,n)=>{const r=t[n]
return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`
return new y(r,o,n)}}const b=/\{\$([^}]+)}/g
function w(e){return JSON.parse(e)}const C=function(e){let t={},n={},r={},i=""
try{const s=e.split(".")
t=w(h(s[0])||""),n=w(h(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}}
function E(e){return null!==e&&"object"==typeof e}class I{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r
if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.")
r=function(e,t){if("object"!=typeof e||null===e)return!1
for(const n of["next","error","complete"])if(n in e&&"function"==typeof e[n])return!0
return!1}(e)?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=T),void 0===r.error&&(r.error=T),void 0===r.complete&&(r.complete=T)
const i=this.unsubscribeOne.bind(this,this.observers.length)
return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function T(){}function S(e,t){return`${e} failed: ${t} argument `}const k=144e5
t.CONSTANTS=n,t.DecodeBase64StringError=a,t.Deferred=_,t.ErrorFactory=v,t.FirebaseError=y,t.MAX_VALUE_MILLIS=k,t.RANDOM_FACTOR=.5,t.Sha1=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128
for(let e=1;e<this.blockSize;++e)this.pad_[e]=0
this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0)
const n=this.W_
if("string"==typeof e)for(let h=0;h<16;h++)n[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4
else for(let h=0;h<16;h++)n[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4
for(let h=16;h<80;h++){const e=n[h-3]^n[h-8]^n[h-14]^n[h-16]
n[h]=4294967295&(e<<1|e>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4]
for(let h=0;h<80;h++){h<40?h<20?(r=l^o&(a^l),i=1518500249):(r=o^a^l,i=1859775393):h<60?(r=o&a|l&(o|a),i=2400959708):(r=o^a^l,i=3395469782)
const e=(s<<5|s>>>27)+r+c+i+n[h]&4294967295
c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return
void 0===t&&(t=e.length)
const n=t-this.blockSize
let r=0
const i=this.buf_
let s=this.inbuf_
for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize
if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0
break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0
break}}this.inbuf_=s,this.total_+=t}digest(){const e=[]
let t=8*this.total_
this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56))
for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256
this.compress_(this.buf_)
let n=0
for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n
return e}},t.areCookiesEnabled=function(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)},t.assert=r,t.assertionError=i,t.async=function(e,t){return(...n)=>{Promise.resolve(!0).then((()=>{e(...n)})).catch((e=>{t&&t(e)}))}},t.base64=o,t.base64Decode=h,t.base64Encode=l,t.base64urlEncodeWithoutPadding=c,t.calculateBackoffMillis=function(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2)
return Math.min(k,r+i)},t.contains=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.createMockUserToken=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.')
const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id
if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!")
const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e)
return[c(JSON.stringify({alg:"none",type:"JWT"})),c(JSON.stringify(s)),""].join(".")},t.createSubscribe=function(e,t){const n=new I(e,t)
return n.subscribe.bind(n)},t.decode=C,t.deepCopy=function(e){return u(void 0,e)},t.deepEqual=function e(t,n){if(t===n)return!0
const r=Object.keys(t),i=Object.keys(n)
for(const s of r){if(!i.includes(s))return!1
const r=t[s],o=n[s]
if(E(r)&&E(o)){if(!e(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!r.includes(s))return!1
return!0},t.deepExtend=u,t.errorPrefix=S,t.extractQuerystring=function(e){const t=e.indexOf("?")
if(!t)return""
const n=e.indexOf("#",t)
return e.substring(t,n>0?n:void 0)},t.getDefaultAppConfig=()=>{var e
return null===(e=p())||void 0===e?void 0:e.config},t.getDefaultEmulatorHost=f,t.getDefaultEmulatorHostnameAndPort=e=>{const t=f(e)
if(!t)return
const n=t.lastIndexOf(":")
if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`)
const r=parseInt(t.substring(n+1),10)
return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},t.getDefaults=p,t.getExperimentalSetting=e=>{var t
return null===(t=p())||void 0===t?void 0:t[`_${e}`]},t.getGlobal=d,t.getModularInstance=function(e){return e&&e._delegate?e._delegate:e},t.getUA=g,t.isAdmin=function(e){const t=C(e).claims
return"object"==typeof t&&!0===t.admin},t.isBrowser=function(){return"object"==typeof self&&self.self===self},t.isBrowserExtension=function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0
return"object"==typeof e&&void 0!==e.id},t.isElectron=function(){return g().indexOf("Electron/")>=0},t.isEmpty=function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1
return!0},t.isIE=function(){const e=g()
return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0},t.isIndexedDBAvailable=function(){try{return"object"==typeof indexedDB}catch(e){return!1}},t.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())},t.isNode=m,t.isNodeSdk=function(){return!0===n.NODE_CLIENT||!0===n.NODE_ADMIN},t.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},t.isSafari=function(){return!m()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")},t.isUWP=function(){return g().indexOf("MSAppHost/")>=0},t.isValidFormat=function(e){const t=C(e).claims
return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},t.isValidTimestamp=function(e){const t=C(e).claims,n=Math.floor((new Date).getTime()/1e3)
let r=0,i=0
return"object"==typeof t&&(t.hasOwnProperty("nbf")?r=t.nbf:t.hasOwnProperty("iat")&&(r=t.iat),i=t.hasOwnProperty("exp")?t.exp:r+86400),!!n&&!!r&&!!i&&n>=r&&n<=i},t.issuedAtTime=function(e){const t=C(e).claims
return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},t.jsonEval=w,t.map=function(e,t,n){const r={}
for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e))
return r},t.ordinal=function(e){return Number.isFinite(e)?e+function(e){const t=(e=Math.abs(e))%100
if(t>=10&&t<=20)return"th"
const n=e%10
return 1===n?"st":2===n?"nd":3===n?"rd":"th"}(e):`${e}`},t.promiseWithTimeout=function(e,t=2e3){const n=new _
return setTimeout((()=>n.reject("timeout!")),t),e.then(n.resolve,n.reject),n.promise},t.querystring=function(e){const t=[]
for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))
return t.length?"&"+t.join("&"):""},t.querystringDecode=function(e){const t={}
return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=")
t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t},t.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},t.stringLength=function(e){let t=0
for(let n=0;n<e.length;n++){const r=e.charCodeAt(n)
r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t},t.stringToByteArray=function(e){const t=[]
let n=0
for(let i=0;i<e.length;i++){let s=e.charCodeAt(i)
if(s>=55296&&s<=56319){const t=s-55296
i++,r(i<e.length,"Surrogate pair missing trail surrogate."),s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},t.stringify=function(e){return JSON.stringify(e)},t.uuidv4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0
return("x"===e?t:3&t|8).toString(16)}))},t.validateArgCount=function(e,t,n,r){let i
if(r<t?i="at least "+t:r>n&&(i=0===n?"none":"no more than "+n),i)throw new Error(e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".")},t.validateCallback=function(e,t,n,r){if((!r||n)&&"function"!=typeof n)throw new Error(S(e,t)+"must be a valid function.")},t.validateContextObject=function(e,t,n,r){if((!r||n)&&("object"!=typeof n||null===n))throw new Error(S(e,t)+"must be a valid context object.")},t.validateIndexedDBOpenable=function(){return new Promise(((e,t)=>{try{let n=!0
const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r)
i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e
t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))},t.validateNamespace=function(e,t,n){if((!n||t)&&"string"!=typeof t)throw new Error(S(e,"namespace")+"must be a valid firebase namespace.")}},853:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l,modifier:()=>h})
var r=n(294),i=n(377),s=n(130)
function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class a{constructor(e){this.owner=e,o(this,"capabilities",(0,i.capabilities)("3.22"))}createModifier(e,t){return{instance:new e(this.owner,t),element:null}}installModifier(e,t,n){const r=function(e,t){const n=e
return n.element=t,n}(e,t)
r.instance.modify(t,n.positional,n.named)}updateModifier(e,t){e.instance.modify(e.element,t.positional,t.named)}destroyModifier({instance:e}){(0,s.destroy)(e)}}class l{constructor(e,t){(0,r.setOwner)(this,e)}modify(e,t,n){}}(0,i.setModifierManager)((e=>new a(e)),l)
const c=new class{constructor(){o(this,"capabilities",(0,i.capabilities)("3.22"))}createModifier(e){return{element:null,instance:e}}installModifier(e,t,n){const r=function(e,t){const n=e
return n.element=t,n}(e,t),{positional:i,named:s}=n,o=e.instance(t,i,s)
"function"==typeof o&&(r.teardown=o)}updateModifier(e,t){"function"==typeof e.teardown&&e.teardown()
const n=e.instance(e.element,t.positional,t.named)
"function"==typeof n&&(e.teardown=n)}destroyModifier(e){"function"==typeof e.teardown&&e.teardown()}}
function h(e){return(0,i.setModifierManager)((()=>c),e)}},81:(e,t,n)=>{function r(e,t,n){return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e
var n=e[Symbol.toPrimitive]
if(void 0!==n){var r=n.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e
var r}function i(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function s(e,t,n,r,i){var s={}
return Object.keys(r).forEach((function(e){s[e]=r[e]})),s.enumerable=!!s.enumerable,s.configurable=!!s.configurable,("value"in s||s.initializer)&&(s.writable=!0),s=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),s),i&&void 0!==s.initializer&&(s.value=s.initializer?s.initializer.call(i):void 0,s.initializer=void 0),void 0===s.initializer&&(Object.defineProperty(e,t,s),s=null),s}n.d(t,{_:()=>s,a:()=>i,b:()=>r})},266:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u})
var r,i,s,o=n(81),a=n(735),l=n(336),c=n.n(l),h=n(666)
let u=(r=(0,a.inject)("page-title"),i=class extends(c()){constructor(e){super(e),(0,o.a)(this,"tokens",s,this),(0,o.b)(this,"tokenId",(0,h.guidFor)(this)),this.tokens.push({id:this.tokenId})}compute(e,t){const n={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(n),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},s=(0,o._)(i.prototype,"tokens",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i)},299:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m})
var r,i,s,o,a,l=n(81),c=n(223),h=n(735),u=n.n(h),d=n(553),p=n(603)
const f="undefined"!=typeof FastBoot,_="routeDidChange",g=["separator","prepend","replace"]
let m=(r=(0,h.inject)("router"),i=(0,h.inject)("-document"),s=class extends(u()){constructor(e){if(super(e),(0,l.a)(this,"router",o,this),(0,l.a)(this,"document",a,this),(0,l.b)(this,"tokens",[]),(0,l.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,l.b)(this,"scheduleTitleUpdate",(()=>{(0,c.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement(),function(e){return"resolveRegistration"in e}(e)){const n=e.resolveRegistration("config:environment")
"object"==typeof(t=n)&&null!==t&&"pageTitle"in t&&g.forEach((e=>{if(!(0,d.isEmpty)(n.pageTitle[e])){const t=n.pageTitle[e]
this._defaultConfig[e]=t}}))}var t
this.router.on(_,this.scheduleTitleUpdate)}applyTokenDefaults(e){const t=this._defaultConfig.separator,n=this._defaultConfig.prepend,r=this._defaultConfig.replace
e.previous??=null,e.next??=null,null==e.separator&&(e.separator=t),null==e.prepend&&null!=n&&(e.prepend=n),null==e.replace&&null!=r&&(e.replace=r)}inheritFromPrevious(e){const t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){const t=this._findTokenById(e.id)
if(t){const n=this.tokens.indexOf(t),r=[...this.tokens],i=t.previous
return e.previous=i,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),r.splice(n,1,e),void(this.tokens=r)}const n=this.tokens.slice(-1)[0]
n&&(e.previous=n??null,n.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){const t=this._findTokenById(e)
if(!t)return
const{next:n,previous:r}=t
n&&(n.previous=r),r&&(r.next=n),t.previous=t.next=null
const i=[...this.tokens]
i.splice(i.indexOf(t),1),this.tokens=i}get visibleTokens(){const e=this.tokens
let t=e?e.length:0
const n=[]
for(;t--;){const r=e[t]
if(r){if(r.replace){n.unshift(r)
break}n.unshift(r)}}return n}get sortedTokens(){const e=this.visibleTokens
if(!e)return[]
let t=!0,n=[]
const r=[n],i=[]
return e.forEach((e=>{if(e.front)i.unshift(e)
else if(e.prepend){t&&(t=!1,n=[],r.push(n))
const i=n[0]
i&&((e={...e}).separator=i.separator),n.unshift(e)}else t||(t=!0,n=[],r.push(n)),n.push(e)})),i.concat(r.reduce(((e,t)=>e.concat(t)),[]))}toString(){const e=this.sortedTokens,t=[]
for(let n=0,r=e.length;n<r;n++){const i=e[n]
i&&i.title&&(t.push(i.title),n+1<r&&t.push(i.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(_,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
f?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){f||(0,p.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find((t=>t.id===e))}updateFastbootTitle(e){if(!f)return
const t=this.document.head,n=t.childNodes
for(let s=0;s<n.length;s++){const e=n[s]
e&&"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}const r=this.document.createElement("title"),i=this.document.createTextNode(e)
r.appendChild(i),t.appendChild(r)}titleDidUpdate(e){}},o=(0,l._)(s.prototype,"router",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=(0,l._)(s.prototype,"document",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s)},59:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0})
var r=n(797)
r.registerVersion("firebase","10.12.1","app"),Object.keys(r).forEach((function(e){"default"===e||t.hasOwnProperty(e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}))},627:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0})
var r=n(449)
Object.keys(r).forEach((function(e){"default"===e||t.hasOwnProperty(e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}))},244:(e,t,n)=>{n.r(t),n.d(t,{deleteDB:()=>_,openDB:()=>f,unwrap:()=>p,wrap:()=>d})
const r=(e,t)=>t.some((t=>e instanceof t))
let i,s
const o=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap,h=new WeakMap
let u={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return a.get(e)
if("objectStoreNames"===t)return e.objectStoreNames||l.get(e)
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return d(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}
function d(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(d(e.result)),r()},s=()=>{n(e.error),r()}
e.addEventListener("success",i),e.addEventListener("error",s)}))
return t.then((t=>{t instanceof IDBCursor&&o.set(t,e)})).catch((()=>{})),h.set(t,e),t}(e)
if(c.has(e))return c.get(e)
const t=function(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(p(this),e),d(o.get(this))}:function(...e){return d(t.apply(p(this),e))}:function(e,...n){const r=t.call(p(this),e,...n)
return l.set(r,e.sort?e.sort():[e]),d(r)}:(e instanceof IDBTransaction&&function(e){if(a.has(e))return
const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()}
e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}))
a.set(e,t)}(e),r(e,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,u):e)
var t}(e)
return t!==e&&(c.set(e,t),h.set(t,e)),t}const p=e=>h.get(e)
function f(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=d(o)
return r&&o.addEventListener("upgradeneeded",(e=>{r(d(o.result),e.oldVersion,e.newVersion,d(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}function _(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e)
return t&&n.addEventListener("blocked",(e=>t(e.oldVersion,e))),d(n).then((()=>{}))}const g=["get","getKey","getAll","getAllKeys","count"],m=["put","add","delete","clear"],y=new Map
function v(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return
if(y.get(t))return y.get(t)
const n=t.replace(/FromIndex$/,""),r=t!==n,i=m.includes(n)
if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!g.includes(n))return
const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly")
let o=s.store
return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]}
return y.set(t,s),s}var b
b=u,u={...b,get:(e,t,n)=>v(e,t)||b.get(e,t,n),has:(e,t)=>!!v(e,t)||b.has(e,t)}},513:(e,t,n)=>{n.r(t),n.d(t,{__addDisposableResource:()=>A,__assign:()=>s,__asyncDelegator:()=>T,__asyncGenerator:()=>I,__asyncValues:()=>S,__await:()=>E,__awaiter:()=>f,__classPrivateFieldGet:()=>D,__classPrivateFieldIn:()=>O,__classPrivateFieldSet:()=>R,__createBinding:()=>g,__decorate:()=>a,__disposeResources:()=>M,__esDecorate:()=>c,__exportStar:()=>m,__extends:()=>i,__generator:()=>_,__importDefault:()=>N,__importStar:()=>x,__makeTemplateObject:()=>k,__metadata:()=>p,__param:()=>l,__propKey:()=>u,__read:()=>v,__rest:()=>o,__runInitializers:()=>h,__setFunctionName:()=>d,__spread:()=>b,__spreadArray:()=>C,__spreadArrays:()=>w,__values:()=>y,default:()=>F})
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)}
function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},s.apply(this,arguments)}
function o(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function a(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r)
else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o)
return s>3&&o&&Object.defineProperty(t,n,o),o}function l(e,t){return function(n,r){t(n,r,e)}}function c(e,t,n,r,i,s){function o(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected")
return e}for(var a,l=r.kind,c="getter"===l?"get":"setter"===l?"set":"value",h=!t&&e?r.static?e:e.prototype:null,u=t||(h?Object.getOwnPropertyDescriptor(h,r.name):{}),d=!1,p=n.length-1;p>=0;p--){var f={}
for(var _ in r)f[_]="access"===_?{}:r[_]
for(var _ in r.access)f.access[_]=r.access[_]
f.addInitializer=function(e){if(d)throw new TypeError("Cannot add initializers after decoration has completed")
s.push(o(e||null))}
var g=(0,n[p])("accessor"===l?{get:u.get,set:u.set}:u[c],f)
if("accessor"===l){if(void 0===g)continue
if(null===g||"object"!=typeof g)throw new TypeError("Object expected");(a=o(g.get))&&(u.get=a),(a=o(g.set))&&(u.set=a),(a=o(g.init))&&i.unshift(a)}else(a=o(g))&&("field"===l?i.unshift(a):u[c]=a)}h&&Object.defineProperty(h,r.name,u),d=!0}function h(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e)
return r?n:void 0}function u(e){return"symbol"==typeof e?e:"".concat(e)}function d(e,t,n){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})}function p(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))}function _(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.")
for(;s&&(s=0,a[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i
switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a
break
case 4:return o.label++,{value:a[1],done:!1}
case 5:o.label++,r=a[1],a=[0]
continue
case 7:a=o.ops.pop(),o.trys.pop()
continue
default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0
continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1]
break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1]
return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}var g=Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}
function m(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||g(t,e,n)}function y(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0
if(n)return n.call(e)
if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}
throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,s=n.call(e),o=[]
try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]))
return e}function w(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),i=0
for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o]
return r}function C(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i])
return e.concat(r||Array.prototype.slice.call(t))}function E(e){return this instanceof E?(this.v=e,this):new E(e)}function I(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,i=n.apply(e,t||[]),s=[]
return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r
function o(e){i[e]&&(r[e]=function(t){return new Promise((function(n,r){s.push([e,t,n,r])>1||a(e,t)}))})}function a(e,t){try{(n=i[e](t)).value instanceof E?Promise.resolve(n.value.v).then(l,c):h(s[0][2],n)}catch(e){h(s[0][3],e)}var n}function l(e){a("next",e)}function c(e){a("throw",e)}function h(e,t){e(t),s.shift(),s.length&&a(s[0][0],s[0][1])}}function T(e){var t,n
return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t
function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:E(e[r](t)),done:!1}:i?i(t):t}:i}}function S(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var t,n=e[Symbol.asyncIterator]
return n?n.call(e):(e=y(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t)
function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,i,(t=e[n](t)).done,t.value)}))}}}function k(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var P=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}
function x(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&g(t,e,n)
return P(t,e),t}function N(e){return e&&e.__esModule?e:{default:e}}function D(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter")
if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it")
return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function R(e,t,n,r,i){if("m"===r)throw new TypeError("Private method is not writable")
if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter")
if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it")
return"a"===r?i.call(e,n):i?i.value=n:t.set(e,n),n}function O(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object")
return"function"==typeof e?t===e:e.has(t)}function A(e,t,n){if(null!=t){if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object expected.")
var r
if(n){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.")
r=t[Symbol.asyncDispose]}if(void 0===r){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.")
r=t[Symbol.dispose]}if("function"!=typeof r)throw new TypeError("Object not disposable.")
e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0})
return t}var L="function"==typeof SuppressedError?SuppressedError:function(e,t,n){var r=new Error(n)
return r.name="SuppressedError",r.error=e,r.suppressed=t,r}
function M(e){function t(t){e.error=e.hasError?new L(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}return function n(){for(;e.stack.length;){var r=e.stack.pop()
try{var i=r.dispose&&r.dispose.call(r.value)
if(r.async)return Promise.resolve(i).then(n,(function(e){return t(e),n()}))}catch(e){t(e)}}if(e.hasError)throw e.error}()}const F={__extends:i,__assign:s,__rest:o,__decorate:a,__param:l,__metadata:p,__awaiter:f,__generator:_,__createBinding:g,__exportStar:m,__values:y,__read:v,__spread:b,__spreadArrays:w,__spreadArray:C,__await:E,__asyncGenerator:I,__asyncDelegator:T,__asyncValues:S,__makeTemplateObject:k,__importStar:x,__importDefault:N,__classPrivateFieldGet:D,__classPrivateFieldSet:R,__classPrivateFieldIn:O,__addDisposableResource:A,__disposeResources:M}}}])
