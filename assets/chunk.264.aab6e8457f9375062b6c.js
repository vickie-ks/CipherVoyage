/*! For license information please see chunk.264.aab6e8457f9375062b6c.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[264],{797:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r,i,o=n(129),s=n(513),a=n(918),l=n(202),c=n(244),u=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent()
return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate()
return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")},e}(),h="@firebase/app",d="0.10.4",p=new a.Logger("@firebase/app"),f="[DEFAULT]",_=((r={})[h]="fire-core",r["@firebase/app-compat"]="fire-core-compat",r["@firebase/analytics"]="fire-analytics",r["@firebase/analytics-compat"]="fire-analytics-compat",r["@firebase/app-check"]="fire-app-check",r["@firebase/app-check-compat"]="fire-app-check-compat",r["@firebase/auth"]="fire-auth",r["@firebase/auth-compat"]="fire-auth-compat",r["@firebase/database"]="fire-rtdb",r["@firebase/database-compat"]="fire-rtdb-compat",r["@firebase/functions"]="fire-fn",r["@firebase/functions-compat"]="fire-fn-compat",r["@firebase/installations"]="fire-iid",r["@firebase/installations-compat"]="fire-iid-compat",r["@firebase/messaging"]="fire-fcm",r["@firebase/messaging-compat"]="fire-fcm-compat",r["@firebase/performance"]="fire-perf",r["@firebase/performance-compat"]="fire-perf-compat",r["@firebase/remote-config"]="fire-rc",r["@firebase/remote-config-compat"]="fire-rc-compat",r["@firebase/storage"]="fire-gcs",r["@firebase/storage-compat"]="fire-gcs-compat",r["@firebase/firestore"]="fire-fst",r["@firebase/firestore-compat"]="fire-fst-compat",r["@firebase/vertexai-preview"]="fire-vertex",r["fire-js"]="fire-js",r.firebase="fire-js-all",r),g=new Map,m=new Map,v=new Map
function y(e,t){try{e.container.addComponent(t)}catch(n){p.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function b(e){var t,n,r,i,o=e.name
if(v.has(o))return p.debug("There were multiple attempts to register component ".concat(o,".")),!1
v.set(o,e)
try{for(var a=s.__values(g.values()),l=a.next();!l.done;l=a.next())y(l.value,e)}catch(e){t={error:e}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}try{for(var c=s.__values(m.values()),u=c.next();!u.done;u=c.next())y(u.value,e)}catch(e){r={error:e}}finally{try{u&&!u.done&&(i=c.return)&&i.call(c)}finally{if(r)throw r.error}}return!0}function w(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0})
return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function k(e){return void 0!==e.options}var C=((i={})["no-app"]="No Firebase App '{$appName}' has been created - call initializeApp() first",i["bad-app-name"]="Illegal App name: '{$appName}'",i["duplicate-app"]="Firebase App named '{$appName}' already exists with different options or config",i["app-deleted"]="Firebase App named '{$appName}' already deleted",i["server-app-deleted"]="Firebase Server App has been deleted",i["no-options"]="Need to provide options, when not being deployed to hosting via source.",i["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",i["invalid-log-argument"]="First argument to `onLog` must be null or a function.",i["idb-open"]="Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",i["idb-get"]="Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",i["idb-set"]="Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",i["idb-delete"]="Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",i["finalization-registry-not-supported"]="FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",i["invalid-server-app-environment"]="FirebaseServerApp is not for use in browser environments.",i),E=new l.ErrorFactory("app","Firebase",C),S=function(){function e(e,t,n){var r=this
this._isDeleted=!1,this._options=s.__assign({},e),this._config=s.__assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new o.Component("app",(function(){return r}),"PUBLIC"))}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed(),this._name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed(),this._options},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"config",{get:function(){return this.checkDestroyed(),this._config},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"container",{get:function(){return this._container},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isDeleted",{get:function(){return this._isDeleted},set:function(e){this._isDeleted=e},enumerable:!1,configurable:!0}),e.prototype.checkDestroyed=function(){if(this.isDeleted)throw E.create("app-deleted",{appName:this._name})},e}(),T=function(e){function t(t,n,r,i){var o=this,a=void 0!==n.automaticDataCollectionEnabled&&n.automaticDataCollectionEnabled,l={name:r,automaticDataCollectionEnabled:a}
if(void 0!==t.apiKey)o=e.call(this,t,l,i)||this
else{var c=t
o=e.call(this,c.options,l,i)||this}return o._serverConfig=s.__assign({automaticDataCollectionEnabled:a},n),o._finalizationRegistry=new FinalizationRegistry((function(){o.automaticCleanup()})),o._refCount=0,o.incRefCount(o._serverConfig.releaseOnDeref),o._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,I(h,d,"serverapp"),o}return s.__extends(t,e),t.prototype.toJSON=function(){},Object.defineProperty(t.prototype,"refCount",{get:function(){return this._refCount},enumerable:!1,configurable:!0}),t.prototype.incRefCount=function(e){this.isDeleted||(this._refCount++,void 0!==e&&this._finalizationRegistry.register(e,this))},t.prototype.decRefCount=function(){return this.isDeleted?0:--this._refCount},t.prototype.automaticCleanup=function(){P(this)},Object.defineProperty(t.prototype,"settings",{get:function(){return this.checkDestroyed(),this._serverConfig},enumerable:!1,configurable:!0}),t.prototype.checkDestroyed=function(){if(this.isDeleted)throw E.create("server-app-deleted")},t}(S)
function x(e,t){var n,r
void 0===t&&(t={})
var i=e
"object"!=typeof t&&(t={name:t})
var a=s.__assign({name:f,automaticDataCollectionEnabled:!1},t),c=a.name
if("string"!=typeof c||!c)throw E.create("bad-app-name",{appName:String(c)})
if(i||(i=l.getDefaultAppConfig()),!i)throw E.create("no-options")
var u=g.get(c)
if(u){if(l.deepEqual(i,u.options)&&l.deepEqual(a,u.config))return u
throw E.create("duplicate-app",{appName:c})}var h=new o.ComponentContainer(c)
try{for(var d=s.__values(v.values()),p=d.next();!p.done;p=d.next()){var _=p.value
h.addComponent(_)}}catch(e){n={error:e}}finally{try{p&&!p.done&&(r=d.return)&&r.call(d)}finally{if(n)throw n.error}}var m=new S(i,a,h)
return g.set(c,m),m}function P(e){return s.__awaiter(this,void 0,void 0,(function(){var t,n
return s.__generator(this,(function(r){switch(r.label){case 0:return t=!1,n=e.name,g.has(n)?(t=!0,g.delete(n)):m.has(n)&&e.decRefCount()<=0&&(m.delete(n),t=!0),t?[4,Promise.all(e.container.getProviders().map((function(e){return e.delete()})))]:[3,2]
case 1:r.sent(),e.isDeleted=!0,r.label=2
case 2:return[2]}}))}))}function I(e,t,n){var r,i=null!==(r=_[e])&&void 0!==r?r:e
n&&(i+="-".concat(n))
var s=i.match(/\s|\//),a=t.match(/\s|\//)
if(s||a){var l=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')]
return s&&l.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),s&&a&&l.push("and"),a&&l.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void p.warn(l.join(" "))}b(new o.Component("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}var O="firebase-heartbeat-database",N=1,A="firebase-heartbeat-store",D=null
function R(){return D||(D=c.openDB(O,N,{upgrade:function(e,t){if(0===t)try{e.createObjectStore(A)}catch(e){console.warn(e)}}}).catch((function(e){throw E.create("idb-open",{originalErrorMessage:e.message})}))),D}function L(e){return s.__awaiter(this,void 0,void 0,(function(){var t,n,r,i,o
return s.__generator(this,(function(s){switch(s.label){case 0:return s.trys.push([0,4,,5]),[4,R()]
case 1:return t=s.sent(),[4,(n=t.transaction(A)).objectStore(A).get(j(e))]
case 2:return r=s.sent(),[4,n.done]
case 3:return s.sent(),[2,r]
case 4:return(i=s.sent())instanceof l.FirebaseError?p.warn(i.message):(o=E.create("idb-get",{originalErrorMessage:null==i?void 0:i.message}),p.warn(o.message)),[3,5]
case 5:return[2]}}))}))}function M(e,t){return s.__awaiter(this,void 0,void 0,(function(){var n,r,i,o
return s.__generator(this,(function(s){switch(s.label){case 0:return s.trys.push([0,4,,5]),[4,R()]
case 1:return n=s.sent(),[4,(r=n.transaction(A,"readwrite")).objectStore(A).put(t,j(e))]
case 2:return s.sent(),[4,r.done]
case 3:return s.sent(),[3,5]
case 4:return(i=s.sent())instanceof l.FirebaseError?p.warn(i.message):(o=E.create("idb-set",{originalErrorMessage:null==i?void 0:i.message}),p.warn(o.message)),[3,5]
case 5:return[2]}}))}))}function j(e){return"".concat(e.name,"!").concat(e.options.appId)}var F=function(){function e(e){var t=this
this.container=e,this._heartbeatsCache=null
var n=this.container.getProvider("app").getImmediate()
this._storage=new q(n),this._heartbeatsCachePromise=this._storage.read().then((function(e){return t._heartbeatsCache=e,e}))}return e.prototype.triggerHeartbeat=function(){var e,t
return s.__awaiter(this,void 0,void 0,(function(){var n,r,i,o
return s.__generator(this,(function(s){switch(s.label){case 0:return n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=z(),null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)?[3,2]:(o=this,[4,this._heartbeatsCachePromise])
case 1:if(o._heartbeatsCache=s.sent(),null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats))return[2]
s.label=2
case 2:return this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((function(e){return e.date===i}))?[2]:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf()
return Date.now()-t<=2592e6})),[2,this._storage.overwrite(this._heartbeatsCache)])}}))}))},e.prototype.getHeartbeatsHeader=function(){var e
return s.__awaiter(this,void 0,void 0,(function(){var t,n,r,i,o
return s.__generator(this,(function(a){switch(a.label){case 0:return null!==this._heartbeatsCache?[3,2]:[4,this._heartbeatsCachePromise]
case 1:a.sent(),a.label=2
case 2:return null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length?[2,""]:(t=z(),n=function(e,t){var n,r
void 0===t&&(t=1024)
var i=[],o=e.slice(),a=function(e){var n=i.find((function(t){return t.agent===e.agent}))
if(n){if(n.dates.push(e.date),B(i)>t)return n.dates.pop(),"break"}else if(i.push({agent:e.agent,dates:[e.date]}),B(i)>t)return i.pop(),"break"
o=o.slice(1)}
try{for(var l=s.__values(e),c=l.next();!c.done&&"break"!==a(c.value);c=l.next());}catch(e){n={error:e}}finally{try{c&&!c.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return{heartbeatsToSend:i,unsentEntries:o}}(this._heartbeatsCache.heartbeats),r=n.heartbeatsToSend,i=n.unsentEntries,o=l.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:r})),this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,[4,this._storage.overwrite(this._heartbeatsCache)]):[3,4])
case 3:return a.sent(),[3,5]
case 4:this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache),a.label=5
case 5:return[2,o]}}))}))},e}()
function z(){return(new Date).toISOString().substring(0,10)}var q=function(){function e(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e.prototype.runIndexedDBEnvironmentCheck=function(){return s.__awaiter(this,void 0,void 0,(function(){return s.__generator(this,(function(e){return l.isIndexedDBAvailable()?[2,l.validateIndexedDBOpenable().then((function(){return!0})).catch((function(){return!1}))]:[2,!1]}))}))},e.prototype.read=function(){return s.__awaiter(this,void 0,void 0,(function(){var e
return s.__generator(this,(function(t){switch(t.label){case 0:return[4,this._canUseIndexedDBPromise]
case 1:return t.sent()?[3,2]:[2,{heartbeats:[]}]
case 2:return[4,L(this.app)]
case 3:return(null==(e=t.sent())?void 0:e.heartbeats)?[2,e]:[2,{heartbeats:[]}]
case 4:return[2]}}))}))},e.prototype.overwrite=function(e){var t
return s.__awaiter(this,void 0,void 0,(function(){var n
return s.__generator(this,(function(r){switch(r.label){case 0:return[4,this._canUseIndexedDBPromise]
case 1:return r.sent()?[3,2]:[2]
case 2:return[4,this.read()]
case 3:return n=r.sent(),[2,M(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})]}}))}))},e.prototype.add=function(e){var t
return s.__awaiter(this,void 0,void 0,(function(){var n
return s.__generator(this,(function(r){switch(r.label){case 0:return[4,this._canUseIndexedDBPromise]
case 1:return r.sent()?[3,2]:[2]
case 2:return[4,this.read()]
case 3:return n=r.sent(),[2,M(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:s.__spreadArray(s.__spreadArray([],s.__read(n.heartbeats),!1),s.__read(e.heartbeats),!1)})]}}))}))},e}()
function B(e){return l.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:e})).length}b(new o.Component("platform-logger",(function(e){return new u(e)}),"PRIVATE")),b(new o.Component("heartbeat",(function(e){return new F(e)}),"PRIVATE")),I(h,d,"node"),I(h,d,"cjs5"),I("fire-js",""),Object.defineProperty(t,"FirebaseError",{enumerable:!0,get:function(){return l.FirebaseError}}),t.SDK_VERSION="10.12.1",t._DEFAULT_ENTRY_NAME=f,t._addComponent=y,t._addOrOverwriteComponent=function(e,t){e.container.addOrOverwriteComponent(t)},t._apps=g,t._clearComponents=function(){v.clear()},t._components=v,t._getProvider=w,t._isFirebaseApp=k,t._isFirebaseServerApp=function(e){return void 0!==e.settings},t._registerComponent=b,t._removeServiceInstance=function(e,t,n){void 0===n&&(n=f),w(e,t).clearInstance(n)},t._serverApps=m,t.deleteApp=P,t.getApp=function(e){void 0===e&&(e=f)
var t=g.get(e)
if(!t&&e===f&&l.getDefaultAppConfig())return x()
if(!t)throw E.create("no-app",{appName:e})
return t},t.getApps=function(){return Array.from(g.values())},t.initializeApp=x,t.initializeServerApp=function(e,t){var n,r,i
if(l.isBrowser())throw E.create("invalid-server-app-environment")
void 0===t.automaticDataCollectionEnabled&&(t.automaticDataCollectionEnabled=!1),i=k(e)?e.options:e
var a=s.__assign(s.__assign({},t),i)
if(void 0!==a.releaseOnDeref&&delete a.releaseOnDeref,void 0!==t.releaseOnDeref&&"undefined"==typeof FinalizationRegistry)throw E.create("finalization-registry-not-supported",{})
var c,u=""+(c=JSON.stringify(a),s.__spreadArray([],s.__read(c),!1).reduce((function(e,t){return Math.imul(31,e)+t.charCodeAt(0)|0}),0)),h=m.get(u)
if(h)return h.incRefCount(t.releaseOnDeref),h
var d=new o.ComponentContainer(u)
try{for(var p=s.__values(v.values()),f=p.next();!f.done;f=p.next()){var _=f.value
d.addComponent(_)}}catch(e){n={error:e}}finally{try{f&&!f.done&&(r=p.return)&&r.call(p)}finally{if(n)throw n.error}}var g=new T(i,t,u,d)
return m.set(u,g),g},t.onLog=function(e,t){if(null!==e&&"function"!=typeof e)throw E.create("invalid-log-argument")
a.setUserLogHandler(e,t)},t.registerVersion=I,t.setLogLevel=function(e){a.setLogLevel(e)}},129:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(513),i=n(202),o=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),s="[DEFAULT]",a=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e)
if(!this.instancesDeferred.has(t)){var n=new i.Deferred
if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t})
r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t
if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null
throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null
throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n
if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."))
if(this.component)throw Error("Component for ".concat(this.name," has already been provided"))
if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}try{for(var i=r.__values(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=r.__read(o.value,2),l=a[0],c=a[1],u=this.normalizeInstanceIdentifier(l)
try{var h=this.getOrInitializeService({instanceIdentifier:u})
c.resolve(h)}catch(e){}}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=s),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return r.__awaiter(this,void 0,void 0,(function(){var e
return r.__generator(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(r.__spreadArray(r.__spreadArray([],r.__read(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))),!1),r.__read(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()}))),!1))]
case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=s),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=s),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n
void 0===e&&(e={})
var i=e.options,o=void 0===i?{}:i,s=this.normalizeInstanceIdentifier(e.instanceIdentifier)
if(this.isInitialized(s))throw Error("".concat(this.name,"(").concat(s,") has already been initialized"))
if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"))
var a=this.getOrInitializeService({instanceIdentifier:s,options:o})
try{for(var l=r.__values(this.instancesDeferred.entries()),c=l.next();!c.done;c=l.next()){var u=r.__read(c.value,2),h=u[0],d=u[1]
s===this.normalizeInstanceIdentifier(h)&&d.resolve(a)}}catch(e){t={error:e}}finally{try{c&&!c.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}return a},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set
i.add(e),this.onInitCallbacks.set(r,i)
var o=this.instances.get(r)
return o&&e(o,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,i,o=this.onInitCallbacks.get(t)
if(o)try{for(var s=r.__values(o),a=s.next();!a.done;a=s.next()){var l=a.value
try{l(e,t)}catch(e){}}}catch(e){n={error:e}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n)
if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===s?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=s),this.component?this.component.multipleInstances?e:s:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}(),l=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name)
if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name))
t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e)
var t=new a(e,this)
return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()
t.Component=o,t.ComponentContainer=l,t.Provider=a},830:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(797),i=n(129),o=n(202),s=n(918)
const a="@firebase/database",l="1.0.5"
let c=""
function u(e){c=e}class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),o.stringify(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e))
return null==t?null:o.jsonEval(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return o.contains(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}const p=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e]
return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(e){}return new d},f=p("localStorage"),_=p("sessionStorage"),g=new s.Logger("@firebase/database"),m=function(){let e=1
return function(){return e++}}(),v=function(e){const t=o.stringToByteArray(e),n=new o.Sha1
n.update(t)
const r=n.digest()
return o.base64.encodeByteArray(r)},y=function(...e){let t=""
for(let n=0;n<e.length;n++){const r=e[n]
Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=y.apply(null,r):t+="object"==typeof r?o.stringify(r):r,t+=" "}return t}
let b=null,w=!0
const k=function(e,t){o.assert(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=s.LogLevel.VERBOSE,b=g.log.bind(g),t&&_.set("logging_enabled",!0)):"function"==typeof e?b=e:(b=null,_.remove("logging_enabled"))},C=function(...e){if(!0===w&&(w=!1,null===b&&!0===_.get("logging_enabled")&&k(!0)),b){const t=y.apply(null,e)
b(t)}},E=function(e){return function(...t){C(e,...t)}},S=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e)
g.error(t)},T=function(...e){const t=`FIREBASE FATAL ERROR: ${y(...e)}`
throw g.error(t),new Error(t)},x=function(...e){const t="FIREBASE WARNING: "+y(...e)
g.warn(t)},P=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},I="[MIN_NAME]",O="[MAX_NAME]",N=function(e,t){if(e===t)return 0
if(e===I||t===O)return-1
if(t===I||e===O)return 1
{const n=z(e),r=z(t)
return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},A=function(e,t){return e===t?0:e<t?-1:1},D=function(e,t){if(t&&e in t)return t[e]
throw new Error("Missing required key ("+e+") in object: "+o.stringify(t))},R=function(e){if("object"!=typeof e||null===e)return o.stringify(e)
const t=[]
for(const r in e)t.push(r)
t.sort()
let n="{"
for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=o.stringify(t[r]),n+=":",n+=R(e[t[r]])
return n+="}",n},L=function(e,t){const n=e.length
if(n<=t)return[e]
const r=[]
for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t))
return r}
function M(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const j=function(e){let t,n,r,i,s
o.assert(!P(e),"Invalid JSON number"),0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(i=Math.min(Math.floor(Math.log(e)/Math.LN2),1023),n=i+1023,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))))
const a=[]
for(s=52;s;s-=1)a.push(r%2?1:0),r=Math.floor(r/2)
for(s=11;s;s-=1)a.push(n%2?1:0),n=Math.floor(n/2)
a.push(t?1:0),a.reverse()
const l=a.join("")
let c=""
for(s=0;s<64;s+=8){let e=parseInt(l.substr(s,8),2).toString(16)
1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()},F=new RegExp("^-?(0*)\\d{1,10}$"),z=function(e){if(F.test(e)){const t=Number(e)
if(t>=-2147483648&&t<=2147483647)return t}return null},q=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||""
throw x("Exception was thrown by user callback.",t),e}),Math.floor(0))}},B=function(e,t){const n=setTimeout(e,t)
return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n}
class H{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t
null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){x(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}class W{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(C("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. '
"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',x(e)}}class U{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}U.OWNER="owner"
const V="5",$=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,G="ac",K="websocket",Y="long_polling"
class Q{constructor(e,t,n,r,i=!1,o="",s=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=f.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&f.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString()
return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:""
return`${e}${this.host}/${t}`}}function J(e,t,n){let r
if(o.assert("string"==typeof t,"typeof type must == string"),o.assert("object"==typeof n,"typeof params must == object"),t===K)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?"
else{if(t!==Y)throw new Error("Unknown connection type: "+t)
r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace)
const i=[]
return M(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}class X{constructor(){this.counters_={}}incrementCounter(e,t=1){o.contains(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return o.deepCopy(this.counters_)}}const Z={},ee={}
function te(e){const t=e.toString()
return Z[t]||(Z[t]=new X),Z[t]}class ne{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum]
delete this.pendingResponses[this.currentResponseNum]
for(let t=0;t<e.length;++t)e[t]&&q((()=>{this.onMessage_(e[t])}))
if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null)
break}this.currentResponseNum++}}}const re="start"
class ie{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=E(e),this.stats_=te(t),this.urlFn=e=>(this.appCheckToken&&(e[G]=this.appCheckToken),J(t,Y,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ne(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(o.isNodeSdk()||"complete"===document.readyState)e()
else{let t=!1
const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))}
document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return
this.scriptTagHolder=new oe(((...e)=>{const[t,n,r,i,o]=e
if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===re)this.id=n,this.password=r
else{if("close"!==t)throw new Error("Unrecognized command received: "+t)
n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e
this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn)
const e={}
e[re]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=V,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[G]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&$.test(location.hostname)&&(e.r="f")
const t=this.urlFn(e)
this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ie.forceAllow_=!0}static forceDisallow(){ie.forceDisallow_=!0}static isAvailable(){return!(o.isNodeSdk()||!ie.forceAllow_&&(ie.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=o.stringify(e)
this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length)
const n=o.base64Encode(t),r=L(n,1840)
for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(o.isNodeSdk())return
this.myDisconnFrame=document.createElement("iframe")
const n={dframe:"t"}
n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=o.stringify(e).length
this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class oe{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,o.isNodeSdk())this.commandCB=e,this.onMessageCB=t
else{this.uniqueCallbackIdentifier=m(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=oe.createIFrame_()
let n=""
this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)&&(n='<script>document.domain="'+document.domain+'";<\/script>')
const r="<html><body>"+n+"</body></html>"
try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){C("frame writing exception"),e.stack&&C(e.stack),C(e)}}}static createIFrame_(){const e=document.createElement("iframe")
if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready."
document.body.appendChild(e)
try{e.contentWindow.document||C("No IE domain setting required")}catch(t){const r=document.domain
e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)))
const e=this.onDisconnect
e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++
const e={}
e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial
let t=this.urlFn(e),n="",r=0
for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+30+n.length<=1870;){const e=this.pendingSegs.shift()
n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t)
const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3))
this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){o.isNodeSdk()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return
const n=this.myIFrame.doc.createElement("script")
n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState
e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{C("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}let se=null
"undefined"!=typeof MozWebSocket?se=MozWebSocket:"undefined"!=typeof WebSocket&&(se=WebSocket)
class ae{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=E(this.connId),this.stats_=te(t),this.connURL=ae.connectionURL_(t,o,s,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const s={}
return s.v=V,!o.isNodeSdk()&&"undefined"!=typeof location&&location.hostname&&$.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),r&&(s[G]=r),i&&(s.p=i),J(e,K,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,f.set("previous_websocket_failure",!0)
try{let e
if(o.isNodeSdk()){const t=this.nodeAdmin?"AdminNode":"Node"
e={headers:{"User-Agent":`Firebase/${V}/${c}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken)
const n=process.env,r=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy
r&&(e.proxy={origin:r})}this.mySock=new se(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.")
const t=e.message||e.data
return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.")
const t=e.message||e.data
t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ae.forceDisallow_=!0}static isAvailable(){let e=!1
if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t)
n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==se&&!ae.forceDisallow_}static previouslyFailed(){return f.isInMemoryStorage||!0===f.get("previous_websocket_failure")}markConnectionHealthy(){f.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("")
this.frames=null
const t=o.jsonEval(e)
this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(o.assert(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e)
if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return
const t=e.data
if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t)
else{const e=this.extractFrameCount_(t)
null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive()
const t=o.stringify(e)
this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length)
const n=L(t,16384)
n.length>1&&this.sendString_(String(n.length))
for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ae.responsesRequiredToBeHealthy=2,ae.healthyTimeout=3e4
class le{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ie,ae]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ae&&ae.isAvailable()
let n=t&&!ae.previouslyFailed()
if(e.webSocketOnly&&(t||x("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ae]
else{const e=this.transports_=[]
for(const t of le.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)
le.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0]
throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}le.globalTransportInitialized_=!1
class ce{constructor(e,t,n,r,i,o,s,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=E("c:"+this.id+":"),this.transportManager_=new le(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport()
this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0
const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_)
this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0))
const r=e.healthyTimeout||0
r>0&&(this.healthyTimeout_=B((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e}
this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t
"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=D("t",e),n=D("d",e)
if("c"===t)this.onSecondaryControl_(n)
else{if("d"!==t)throw new Error("Unknown protocol layer: "+t)
this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=D("t",e),n=D("d",e)
"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=D("t",e)
if("d"in e){const n=e.d
if("h"===t){const e=Object.assign({},n)
this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_
for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e])
this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?S("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):S("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h
this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),V!==n&&x("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport()
e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0
const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_)
this.secondaryConn_.open(t,n),B((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):B((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_
this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(f.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected"
this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}class ue{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}class he{constructor(e){this.allowedEvents_=e,this.listeners_={},o.assert(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]]
for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n})
const r=this.getInitialEvent(e)
r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e)
const r=this.listeners_[e]||[]
for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){o.assert(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}class de extends he{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||o.isMobileCordova()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new de}getInitialEvent(e){return o.assert("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class pe{constructor(e,t){if(void 0===t){this.pieces_=e.split("/")
let t=0
for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++)
this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e=""
for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t])
return e||"/"}}function fe(){return new pe("")}function _e(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ge(e){return e.pieces_.length-e.pieceNum_}function me(e){let t=e.pieceNum_
return t<e.pieces_.length&&t++,new pe(e.pieces_,t)}function ve(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ye(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function be(e){if(e.pieceNum_>=e.pieces_.length)return null
const t=[]
for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n])
return new pe(t,0)}function we(e,t){const n=[]
for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r])
if(t instanceof pe)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r])
else{const e=t.split("/")
for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new pe(n,0)}function ke(e){return e.pieceNum_>=e.pieces_.length}function Ce(e,t){const n=_e(e),r=_e(t)
if(null===n)return t
if(n===r)return Ce(me(e),me(t))
throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ee(e,t){const n=ye(e,0),r=ye(t,0)
for(let i=0;i<n.length&&i<r.length;i++){const e=N(n[i],r[i])
if(0!==e)return e}return n.length===r.length?0:n.length<r.length?-1:1}function Se(e,t){if(ge(e)!==ge(t))return!1
for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1
return!0}function Te(e,t){let n=e.pieceNum_,r=t.pieceNum_
if(ge(e)>ge(t))return!1
for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class xe{constructor(e,t){this.errorPrefix_=t,this.parts_=ye(e,0),this.byteLength_=Math.max(1,this.parts_.length)
for(let n=0;n<this.parts_.length;n++)this.byteLength_+=o.stringLength(this.parts_[n])
Pe(this)}}function Pe(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").")
if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Ie(e))}function Ie(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}class Oe extends he{constructor(){let e,t
super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e]
t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Oe}getInitialEvent(e){return o.assert("visible"===e,"Unknown event type: "+e),[this.visible_]}}const Ne=1e3
class Ae extends ue{constructor(e,t,n,r,i,s,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ae.nextPersistentConnectionId_++,this.log_=E("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ne,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!o.isNodeSdk())throw new Error("Auth override specified in options, but not supported on non Node.js platforms")
Oe.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&de.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t}
this.log_(o.stringify(i)),o.assert(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_()
const t=new o.Deferred,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d
"ok"===e.s?t.resolve(n):t.reject(n)}}
this.outstandingGets_.push(n),this.outstandingGetCount_++
const r=this.outstandingGets_.length-1
return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_()
const i=e._queryIdentifier,s=e._path.toString()
this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),o.assert(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),o.assert(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.")
const a={onComplete:r,hashFn:t,query:e,tag:n}
this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e]
this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier
this.log_("Listen on "+n+" for "+r)
const i={p:n}
e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const o=i.d,s=i.s
Ae.warnOnListenWarnings_(o,t),(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&o.contains(e,"w")){const n=o.safeGet(e,"w")
if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString()
x(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||o.isAdmin(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=o.isValidFormat(e)?"auth":"gauth",n={cred:e}
null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error"
this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error"
"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier
this.log_("Unlisten called for "+n+" "+r),o.assert(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t)
const i={p:e}
r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n}
this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_()
const o={p:t,d:n}
void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++
const s=this.outstandingPuts_.length-1
this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete
this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e}
this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d
this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+o.stringify(e))
const t=e.r,n=this.requestCBHash_[t]
n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error
"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):S("Unrecognized action received from server: "+o.stringify(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){o.assert(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ne,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ne,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&((new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Ne),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime())
const e=(new Date).getTime()-this.lastConnectionAttemptTime_
let t=Math.max(0,this.reconnectDelay_-e)
t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null
const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ae.nextConnectionId_++,s=this.lastSessionId
let a=!1,l=null
const c=function(){l?l.close():(a=!0,r())},u=function(e){o.assert(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(e)}
this.realtime_={close:c,sendRequest:u}
const h=this.forceTokenRefresh_
this.forceTokenRefresh_=!1
try{const[e,o]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)])
a?C("getToken() completed but was canceled"):(C("getToken() completed. Creating connection."),this.authToken_=e&&e.accessToken,this.appCheckToken_=o&&o.token,l=new ce(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,(e=>{x(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),a||(this.repoInfo_.nodeAdmin&&x(e),c())}}}interrupt(e){C("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){C("Resuming connection for reason: "+e),delete this.interruptReasons_[e],o.isEmpty(this.interruptReasons_)&&(this.reconnectDelay_=Ne,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime()
this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e]
t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n
n=t?t.map((e=>R(e))).join("$"):"default"
const r=this.removeListen_(e,n)
r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new pe(e).toString()
let r
if(this.listens.has(n)){const e=this.listens.get(n)
r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0
return r}onAuthRevoked_(e,t){C("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){C("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck()
for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t)
for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e)
for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift()
this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={}
let t="js"
o.isNodeSdk()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+c.replace(/\./g,"-")]=1,o.isMobileCordova()?e["framework.cordova"]=1:o.isReactNative()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=de.getInstance().currentlyOnline()
return o.isEmpty(this.interruptReasons_)&&e}}Ae.nextPersistentConnectionId_=0,Ae.nextConnectionId_=0
class De{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new De(e,t)}}class Re{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new De(I,e),r=new De(I,t)
return 0!==this.compare(n,r)}minPost(){return De.MIN}}let Le
class Me extends Re{static get __EMPTY_NODE(){return Le}static set __EMPTY_NODE(e){Le=e}compare(e,t){return N(e.name,t.name)}isDefinedOn(e){throw o.assertionError("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return De.MIN}maxPost(){return new De(O,Le)}makePost(e,t){return o.assert("string"==typeof e,"KeyIndex indexValue must always be a string."),new De(e,Le)}toString(){return".key"}}const je=new Me
class Fe{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[]
let o=1
for(;!e.isEmpty();)if(o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right
else{if(0===o){this.nodeStack_.push(e)
break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null
let e,t=this.nodeStack_.pop()
if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right
else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left
return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null
const e=this.nodeStack_[this.nodeStack_.length-1]
return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ze{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ze.RED,this.left=null!=r?r:qe.EMPTY_NODE,this.right=null!=i?i:qe.EMPTY_NODE}copy(e,t,n,r,i){return new ze(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this
const i=n(e,r.key)
return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE
let e=this
return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r
if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null)
else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return qe.EMPTY_NODE
r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this
return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_()
return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_()
return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ze.RED,null,this.right.left)
return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ze.RED,this.left.right,null)
return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null)
return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_()
return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")")
if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red")
const e=this.left.check_()
if(e!==this.right.check_())throw new Error("Black depths differ")
return e+(this.isRed_()?0:1)}}ze.RED=!0,ze.BLACK=!1
class qe{constructor(e,t=qe.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new qe(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ze.BLACK,null,null))}remove(e){return new qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ze.BLACK,null,null))}get(e){let t,n=this.root_
for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value
t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null
for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null
for(n=n.left;!n.right.isEmpty();)n=n.right
return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fe(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Fe(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Fe(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Fe(this.root_,null,this.comparator_,!0,e)}}function Be(e,t){return N(e.name,t.name)}function He(e,t){return N(e,t)}let We
qe.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new ze(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}
const Ue=function(e){return"number"==typeof e?"number:"+j(e):"string:"+e},Ve=function(e){if(e.isLeafNode()){const t=e.val()
o.assert("string"==typeof t||"number"==typeof t||"object"==typeof t&&o.contains(t,".sv"),"Priority must be a string or number.")}else o.assert(e===We||e.isEmpty(),"priority of unexpected type.")
o.assert(e===We||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")}
let $e,Ge,Ke
class Ye{constructor(e,t=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,o.assert(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ve(this.priorityNode_)}static set __childrenNodeConstructor(e){$e=e}static get __childrenNodeConstructor(){return $e}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ye(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ke(e)?this:".priority"===_e(e)?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=_e(e)
return null===n?t:t.isEmpty()&&".priority"!==n?this:(o.assert(".priority"!==n||1===ge(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(me(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e=""
this.priorityNode_.isEmpty()||(e+="priority:"+Ue(this.priorityNode_.val())+":")
const t=typeof this.value_
e+=t+":",e+="number"===t?j(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ye.__childrenNodeConstructor?-1:(o.assert(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Ye.VALUE_TYPE_ORDER.indexOf(t),i=Ye.VALUE_TYPE_ORDER.indexOf(n)
return o.assert(r>=0,"Unknown leaf type: "+t),o.assert(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0
if(e.isLeafNode()){const t=e
return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"]
const Qe=new class extends Re{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r)
return 0===i?N(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return De.MIN}maxPost(){return new De(O,new Ye("[PRIORITY-POST]",Ke))}makePost(e,t){const n=Ge(e)
return new De(t,new Ye("[PRIORITY-POST]",n))}toString(){return".priority"}},Je=Math.log(2)
class Xe{constructor(e){var t
this.count=(t=e+1,parseInt(Math.log(t)/Je,10)),this.current_=this.count-1
const n=(r=this.count,parseInt(Array(r+1).join("1"),2))
var r
this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_)
return this.current_--,e}}const Ze=function(e,t,n,r){e.sort(t)
const i=function(t,r){const o=r-t
let s,a
if(0===o)return null
if(1===o)return s=e[t],a=n?n(s):s,new ze(a,s.node,ze.BLACK,null,null)
{const l=parseInt(o/2,10)+t,c=i(t,l),u=i(l+1,r)
return s=e[l],a=n?n(s):s,new ze(a,s.node,ze.BLACK,c,u)}},o=function(t){let r=null,o=null,s=e.length
const a=function(t,r){const o=s-t,a=s
s-=t
const c=i(o+1,a),u=e[o],h=n?n(u):u
l(new ze(h,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(o=e,r=e)}
for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1))
n?a(r,ze.BLACK):(a(r,ze.BLACK),a(r,ze.RED))}return o}(new Xe(e.length))
return new qe(r||t,o)}
let et
const tt={}
class nt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return o.assert(tt&&Qe,"ChildrenNode.ts has not been loaded"),et=et||new nt({".priority":tt},{".priority":Qe}),et}get(e){const t=o.safeGet(this.indexes_,e)
if(!t)throw new Error("No index defined for "+e)
return t instanceof qe?t:null}hasIndex(e){return o.contains(this.indexSet_,e.toString())}addIndex(e,t){o.assert(e!==je,"KeyIndex always exists and isn't meant to be added to the IndexMap.")
const n=[]
let r=!1
const i=t.getIterator(De.Wrap)
let s,a=i.getNext()
for(;a;)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext()
s=r?Ze(n,e.getCompare()):tt
const l=e.toString(),c=Object.assign({},this.indexSet_)
c[l]=e
const u=Object.assign({},this.indexes_)
return u[l]=s,new nt(u,c)}addToIndexes(e,t){const n=o.map(this.indexes_,((n,r)=>{const i=o.safeGet(this.indexSet_,r)
if(o.assert(i,"Missing index implementation for "+r),n===tt){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(De.Wrap)
let o=r.getNext()
for(;o;)o.name!==e.name&&n.push(o),o=r.getNext()
return n.push(e),Ze(n,i.getCompare())}return tt}{const r=t.get(e.name)
let i=n
return r&&(i=i.remove(new De(e.name,r))),i.insert(e,e.node)}}))
return new nt(n,this.indexSet_)}removeFromIndexes(e,t){const n=o.map(this.indexes_,(n=>{if(n===tt)return n
{const r=t.get(e.name)
return r?n.remove(new De(e.name,r)):n}}))
return new nt(n,this.indexSet_)}}let rt
class it{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ve(this.priorityNode_),this.children_.isEmpty()&&o.assert(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return rt||(rt=new it(new qe(He),null,nt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||rt}updatePriority(e){return this.children_.isEmpty()?this:new it(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority()
{const t=this.children_.get(e)
return null===t?rt:t}}getChild(e){const t=_e(e)
return null===t?this:this.getImmediateChild(t).getChild(me(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(o.assert(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t)
{const n=new De(e,t)
let r,i
t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_))
const o=r.isEmpty()?rt:this.priorityNode_
return new it(r,o,i)}}updateChild(e,t){const n=_e(e)
if(null===n)return t
{o.assert(".priority"!==_e(e)||1===ge(e),".priority must be the last token in a path")
const r=this.getImmediateChild(n).updateChild(me(e),t)
return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null
const t={}
let n=0,r=0,i=!0
if(this.forEachChild(Qe,((o,s)=>{t[o]=s.val(e),n++,i&&it.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1})),!e&&i&&r<2*n){const e=[]
for(const n in t)e[n]=t[n]
return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e=""
this.getPriority().isEmpty()||(e+="priority:"+Ue(this.getPriority().val())+":"),this.forEachChild(Qe,((t,n)=>{const r=n.hash()
""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n)
if(r){const n=r.getPredecessorKey(new De(e,t))
return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e)
if(t){const e=t.minKey()
return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e)
return t?new De(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e)
if(t){const e=t.maxKey()
return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e)
return t?new De(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e)
return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t)
if(n)return n.getIteratorFrom(e,(e=>e))
{const n=this.children_.getIteratorFrom(e.name,De.Wrap)
let r=n.peek()
for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek()
return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t)
if(n)return n.getReverseIteratorFrom(e,(e=>e))
{const n=this.children_.getReverseIteratorFrom(e.name,De.Wrap)
let r=n.peek()
for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek()
return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ot?-1:0}withIndex(e){if(e===je||this.indexMap_.hasIndex(e))return this
{const t=this.indexMap_.addIndex(e,this.children_)
return new it(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===je||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0
if(e.isLeafNode())return!1
{const t=e
if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Qe),n=t.getIterator(Qe)
let r=e.getNext(),i=n.getNext()
for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1
r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===je?null:this.indexMap_.get(e.toString())}}it.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/
const ot=new class extends it{constructor(){super(new qe(He),it.EMPTY_NODE,nt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return it.EMPTY_NODE}isEmpty(){return!1}}
Object.defineProperties(De,{MIN:{value:new De(I,it.EMPTY_NODE)},MAX:{value:new De(O,ot)}}),Me.__EMPTY_NODE=it.EMPTY_NODE,Ye.__childrenNodeConstructor=it,We=ot,Ke=ot
const st=!0
function at(e,t=null){if(null===e)return it.EMPTY_NODE
if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),o.assert(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e)return new Ye(e,at(t))
if(e instanceof Array||!st){let n=it.EMPTY_NODE
return M(e,((t,r)=>{if(o.contains(e,t)&&"."!==t.substring(0,1)){const e=at(r)
!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(at(t))}{const n=[]
let r=!1
if(M(e,((e,t)=>{if("."!==e.substring(0,1)){const i=at(t)
i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new De(e,i)))}})),0===n.length)return it.EMPTY_NODE
const i=Ze(n,Be,(e=>e.name),He)
if(r){const e=Ze(n,Qe.getCompare())
return new it(i,at(t),new nt({".priority":e},{".priority":Qe}))}return new it(i,at(t),nt.Default)}}!function(e){Ge=e}(at)
class lt extends Re{constructor(e){super(),this.indexPath_=e,o.assert(!ke(e)&&".priority"!==_e(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r)
return 0===i?N(e.name,t.name):i}makePost(e,t){const n=at(e),r=it.EMPTY_NODE.updateChild(this.indexPath_,n)
return new De(t,r)}maxPost(){const e=it.EMPTY_NODE.updateChild(this.indexPath_,ot)
return new De(O,e)}toString(){return ye(this.indexPath_,0).join("/")}}const ct=new class extends Re{compare(e,t){const n=e.node.compareTo(t.node)
return 0===n?N(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return De.MIN}maxPost(){return De.MAX}makePost(e,t){const n=at(e)
return new De(t,n)}toString(){return".value"}}
function ut(e){return{type:"value",snapshotNode:e}}function ht(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function dt(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function pt(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}class ft{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){o.assert(e.isIndexed(this.index_),"A node must be indexed if only a child is updated")
const a=e.getImmediateChild(t)
return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(dt(t,a)):o.assert(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(ht(t,n)):s.trackChildChange(pt(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Qe,((e,r)=>{t.hasChild(e)||n.trackChildChange(dt(e,r))})),t.isLeafNode()||t.forEachChild(Qe,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t)
i.equals(r)||n.trackChildChange(pt(t,r,i))}else n.trackChildChange(ht(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?it.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}class _t{constructor(e){this.indexedFilter_=new ft(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_t.getStartPost_(e),this.endPost_=_t.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0
return t&&n}updateChild(e,t,n,r,i,o){return this.matches(new De(t,n))||(n=it.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=it.EMPTY_NODE)
let r=t.withIndex(this.index_)
r=r.updatePriority(it.EMPTY_NODE)
const i=this
return t.forEachChild(Qe,((e,t)=>{i.matches(new De(e,t))||(r=r.updateImmediateChild(e,it.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName()
return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName()
return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}class gt{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e)
return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost())
return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new _t(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new De(t,n))||(n=it.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r
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
n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:r=r.updateImmediateChild(t.name,it.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s
if(this.reverse_){const e=this.index_.getCompare()
s=(t,n)=>e(n,t)}else s=this.index_.getCompare()
const a=e
o.assert(a.numChildren()===this.limit_,"")
const l=new De(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l)
if(a.hasChild(t)){const e=a.getImmediateChild(t)
let o=r.getChildAfterChild(this.index_,c,this.reverse_)
for(;null!=o&&(o.name===t||a.hasChild(o.name));)o=r.getChildAfterChild(this.index_,o,this.reverse_)
const h=null==o?1:s(o,l)
if(u&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(pt(t,n,e)),a.updateImmediateChild(t,n)
{null!=i&&i.trackChildChange(dt(t,e))
const n=a.updateImmediateChild(t,it.EMPTY_NODE)
return null!=o&&this.rangedFilter_.matches(o)?(null!=i&&i.trackChildChange(ht(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:u&&s(c,l)>=0?(null!=i&&(i.trackChildChange(dt(c.name,c.node)),i.trackChildChange(ht(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,it.EMPTY_NODE)):e}}class mt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Qe}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return o.assert(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return o.assert(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:I}hasEnd(){return this.endSet_}getIndexEndValue(){return o.assert(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return o.assert(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:O}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return o.assert(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Qe}copy(){const e=new mt
return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vt(e,t,n){const r=e.copy()
return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function yt(e,t,n){const r=e.copy()
return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function bt(e,t){const n=e.copy()
return n.index_=t,n}function wt(e){const t={}
if(e.isDefault())return t
let n
if(e.index_===Qe?n="$priority":e.index_===ct?n="$value":e.index_===je?n="$key":(o.assert(e.index_ instanceof lt,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=o.stringify(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt"
t[n]=o.stringify(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+o.stringify(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt"
t[n]=o.stringify(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+o.stringify(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function kt(e){const t={}
if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_
let n=e.viewFrom_
""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Qe&&(t.i=e.index_.toString()),t}class Ct extends ue{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=E("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(o.assert(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString()
this.log_("Listen called for "+i+" "+e._queryIdentifier)
const s=Ct.getListenId_(e,n),a={}
this.listens_[s]=a
const l=wt(e._queryParams)
this.restRequest_(i+".json",l,((e,t)=>{let l=t
if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(i,l,!1,n),o.safeGet(this.listens_,s)===a){let t
t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Ct.getListenId_(e,t)
delete this.listens_[n]}get(e){const t=wt(e._queryParams),n=e._path.toString(),r=new o.Deferred
return this.restRequest_(n+".json",t,((e,t)=>{let i=t
404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token)
const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+o.querystring(t)
this.log_("Sending REST request for "+s)
const a=new XMLHttpRequest
a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText)
let t=null
if(a.status>=200&&a.status<300){try{t=o.jsonEval(a.responseText)}catch(e){x("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&x("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status)
n=null}},a.open("GET",s,!0),a.send()}))}}class Et{constructor(){this.rootNode_=it.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}function St(){return{value:null,children:new Map}}function Tt(e,t,n){if(ke(t))e.value=n,e.children.clear()
else if(null!==e.value)e.value=e.value.updateChild(t,n)
else{const r=_e(t)
e.children.has(r)||e.children.set(r,St()),Tt(e.children.get(r),t=me(t),n)}}function xt(e,t){if(ke(t))return e.value=null,e.children.clear(),!0
if(null!==e.value){if(e.value.isLeafNode())return!1
{const n=e.value
return e.value=null,n.forEachChild(Qe,((t,n)=>{Tt(e,new pe(t),n)})),xt(e,t)}}if(e.children.size>0){const n=_e(t)
return t=me(t),e.children.has(n)&&xt(e.children.get(n),t)&&e.children.delete(n),0===e.children.size}return!0}function Pt(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}(e,((e,r)=>{Pt(r,new pe(t.toString()+"/"+e),n)}))}class It{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e)
return this.last_&&M(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}class Ot{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new It(e)
const n=1e4+2e4*Math.random()
B(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={}
let n=!1
M(e,((e,r)=>{r>0&&o.contains(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),B(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}var Nt
function At(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(Nt||(Nt={}))
class Dt{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Nt.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(ke(this.path)){if(null!=this.affectedTree.value)return o.assert(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this
{const t=this.affectedTree.subtree(new pe(e))
return new Dt(fe(),t,this.revert)}}return o.assert(_e(this.path)===e,"operationForChild called for unrelated child."),new Dt(me(this.path),this.affectedTree,this.revert)}}class Rt{constructor(e,t){this.source=e,this.path=t,this.type=Nt.LISTEN_COMPLETE}operationForChild(e){return ke(this.path)?new Rt(this.source,fe()):new Rt(this.source,me(this.path))}}class Lt{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Nt.OVERWRITE}operationForChild(e){return ke(this.path)?new Lt(this.source,fe(),this.snap.getImmediateChild(e)):new Lt(this.source,me(this.path),this.snap)}}class Mt{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Nt.MERGE}operationForChild(e){if(ke(this.path)){const t=this.children.subtree(new pe(e))
return t.isEmpty()?null:t.value?new Lt(this.source,fe(),t.value):new Mt(this.source,fe(),t)}return o.assert(_e(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Mt(this.source,me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}class jt{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ke(e))return this.isFullyInitialized()&&!this.filtered_
const t=_e(e)
return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}class Ft{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function zt(e,t,n,r,i,s){const a=r.filter((e=>e.type===n))
a.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw o.assertionError("Should only compare child_ events.")
const r=new De(t.childName,t.snapshotNode),i=new De(n.childName,n.snapshotNode)
return e.index_.compare(r,i)}(e,t,n))),a.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s)
i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function qt(e,t){return{eventCache:e,serverCache:t}}function Bt(e,t,n,r){return qt(new jt(t,n,r),e.serverCache)}function Ht(e,t,n,r){return qt(e.eventCache,new jt(t,n,r))}function Wt(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ut(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}let Vt
class $t{constructor(e,t=(()=>(Vt||(Vt=new qe(A)),Vt))()){this.value=e,this.children=t}static fromObject(e){let t=new $t(null)
return M(e,((e,n)=>{t=t.set(new pe(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:fe(),value:this.value}
if(ke(e))return null
{const n=_e(e),r=this.children.get(n)
if(null!==r){const i=r.findRootMostMatchingPathAndValue(me(e),t)
return null!=i?{path:we(new pe(n),i.path),value:i.value}:null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(ke(e))return this
{const t=_e(e),n=this.children.get(t)
return null!==n?n.subtree(me(e)):new $t(null)}}set(e,t){if(ke(e))return new $t(t,this.children)
{const n=_e(e),r=(this.children.get(n)||new $t(null)).set(me(e),t),i=this.children.insert(n,r)
return new $t(this.value,i)}}remove(e){if(ke(e))return this.children.isEmpty()?new $t(null):new $t(null,this.children)
{const t=_e(e),n=this.children.get(t)
if(n){const r=n.remove(me(e))
let i
return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new $t(null):new $t(this.value,i)}return this}}get(e){if(ke(e))return this.value
{const t=_e(e),n=this.children.get(t)
return n?n.get(me(e)):null}}setTree(e,t){if(ke(e))return t
{const n=_e(e),r=(this.children.get(n)||new $t(null)).setTree(me(e),t)
let i
return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new $t(this.value,i)}}fold(e){return this.fold_(fe(),e)}fold_(e,t){const n={}
return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(we(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,fe(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value)
if(r)return r
if(ke(e))return null
{const r=_e(e),i=this.children.get(r)
return i?i.findOnPath_(me(e),we(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,fe(),t)}foreachOnPath_(e,t,n){if(ke(e))return this
{this.value&&n(t,this.value)
const r=_e(e),i=this.children.get(r)
return i?i.foreachOnPath_(me(e),we(t,r),n):new $t(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(we(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}class Gt{constructor(e){this.writeTree_=e}static empty(){return new Gt(new $t(null))}}function Kt(e,t,n){if(ke(t))return new Gt(new $t(n))
{const r=e.writeTree_.findRootMostValueAndPath(t)
if(null!=r){const i=r.path
let o=r.value
const s=Ce(i,t)
return o=o.updateChild(s,n),new Gt(e.writeTree_.set(i,o))}{const r=new $t(n),i=e.writeTree_.setTree(t,r)
return new Gt(i)}}}function Yt(e,t,n){let r=e
return M(n,((e,n)=>{r=Kt(r,we(t,e),n)})),r}function Qt(e,t){if(ke(t))return Gt.empty()
{const n=e.writeTree_.setTree(t,new $t(null))
return new Gt(n)}}function Jt(e,t){return null!=Xt(e,t)}function Xt(e,t){const n=e.writeTree_.findRootMostValueAndPath(t)
return null!=n?e.writeTree_.get(n.path).getChild(Ce(n.path,t)):null}function Zt(e){const t=[],n=e.writeTree_.value
return null!=n?n.isLeafNode()||n.forEachChild(Qe,((e,n)=>{t.push(new De(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new De(e,n.value))})),t}function en(e,t){if(ke(t))return e
{const n=Xt(e,t)
return new Gt(null!=n?new $t(n):e.writeTree_.subtree(t))}}function tn(e){return e.writeTree_.isEmpty()}function nn(e,t){return rn(fe(),e.writeTree_,t)}function rn(e,t,n){if(null!=t.value)return n.updateChild(e,t.value)
{let r=null
return t.children.inorderTraversal(((t,i)=>{".priority"===t?(o.assert(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=rn(we(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(we(e,".priority"),r)),n}}function on(e,t){return gn(t,e)}function sn(e,t){if(e.snap)return Te(e.path,t)
for(const n in e.children)if(e.children.hasOwnProperty(n)&&Te(we(e.path,n),t))return!0
return!1}function an(e){return e.visible}function ln(e,t,n){let r=Gt.empty()
for(let i=0;i<e.length;++i){const s=e[i]
if(t(s)){const e=s.path
let t
if(s.snap)Te(n,e)?(t=Ce(n,e),r=Kt(r,t,s.snap)):Te(e,n)&&(t=Ce(e,n),r=Kt(r,fe(),s.snap.getChild(t)))
else{if(!s.children)throw o.assertionError("WriteRecord should have .snap or .children")
if(Te(n,e))t=Ce(n,e),r=Yt(r,t,s.children)
else if(Te(e,n))if(t=Ce(e,n),ke(t))r=Yt(r,fe(),s.children)
else{const e=o.safeGet(s.children,_e(t))
if(e){const n=e.getChild(me(t))
r=Kt(r,fe(),n)}}}}}return r}function cn(e,t,n,r,i){if(r||i){const o=en(e.visibleWrites,t)
if(!i&&tn(o))return n
if(i||null!=n||Jt(o,fe())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Te(e.path,t)||Te(t,e.path))}
return nn(ln(e.allWrites,o,t),n||it.EMPTY_NODE)}return null}{const r=Xt(e.visibleWrites,t)
if(null!=r)return r
{const r=en(e.visibleWrites,t)
return tn(r)?n:null!=n||Jt(r,fe())?nn(r,n||it.EMPTY_NODE):null}}}function un(e,t,n,r){return cn(e.writeTree,e.treePath,t,n,r)}function hn(e,t){return function(e,t,n){let r=it.EMPTY_NODE
const i=Xt(e.visibleWrites,t)
if(i)return i.isLeafNode()||i.forEachChild(Qe,((e,t)=>{r=r.updateImmediateChild(e,t)})),r
if(n){const i=en(e.visibleWrites,t)
return n.forEachChild(Qe,((e,t)=>{const n=nn(en(i,new pe(e)),t)
r=r.updateImmediateChild(e,n)})),Zt(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return Zt(en(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function dn(e,t,n,r){return function(e,t,n,r,i){o.assert(r||i,"Either existingEventSnap or existingServerSnap must exist")
const s=we(t,n)
if(Jt(e.visibleWrites,s))return null
{const t=en(e.visibleWrites,s)
return tn(t)?i.getChild(n):nn(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function pn(e,t){return function(e,t){return Xt(e.visibleWrites,t)}(e.writeTree,we(e.treePath,t))}function fn(e,t,n){return function(e,t,n,r){const i=we(t,n),o=Xt(e.visibleWrites,i)
return null!=o?o:r.isCompleteForChild(n)?nn(en(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function _n(e,t){return gn(we(e.treePath,t),e.writeTree)}function gn(e,t){return{treePath:e,writeTree:t}}class mn{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName
o.assert("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),o.assert(".priority"!==n,"Only non-priority child changes can be tracked.")
const r=this.changeMap.get(n)
if(r){const i=r.type
if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,pt(n,e.snapshotNode,r.snapshotNode))
else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n)
else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,dt(n,r.oldSnap))
else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,ht(n,e.snapshotNode))
else{if("child_changed"!==t||"child_changed"!==i)throw o.assertionError("Illegal combination of changes: "+e+" occurred after "+r)
this.changeMap.set(n,pt(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}const vn=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}
class yn{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache
if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e)
{const t=null!=this.optCompleteServerCache_?new jt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache
return fn(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ut(this.viewCache_),i=function(e,t,n,r,i,o){return function(e,t,n,r,i,o,s){let a
const l=en(e.visibleWrites,t),c=Xt(l,fe())
if(null!=c)a=c
else{if(null==n)return[]
a=nn(l,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[]
{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s)
let i=n.getNext()
for(;i&&e.length<1;)0!==t(i,r)&&e.push(i),i=n.getNext()
return e}}(e.writeTree,e.treePath,t,n,0,i,o)}(this.writes_,r,t,0,n,e)
return 0===i.length?null:i[0]}}function bn(e,t,n,r,i,s){const a=t.eventCache
if(null!=pn(r,n))return t
{let l,c
if(ke(n))if(o.assert(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Ut(t),i=hn(r,n instanceof it?n:it.EMPTY_NODE)
l=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=un(r,Ut(t))
l=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const u=_e(n)
if(".priority"===u){o.assert(1===ge(n),"Can't have a priority with additional path components")
const i=a.getNode()
c=t.serverCache.getNode()
const s=dn(r,n,i,c)
l=null!=s?e.filter.updatePriority(i,s):a.getNode()}else{const o=me(n)
let h
if(a.isCompleteForChild(u)){c=t.serverCache.getNode()
const e=dn(r,n,a.getNode(),c)
h=null!=e?a.getNode().getImmediateChild(u).updateChild(o,e):a.getNode().getImmediateChild(u)}else h=fn(r,u,t.serverCache)
l=null!=h?e.filter.updateChild(a.getNode(),u,h,o,i,s):a.getNode()}}return Bt(t,l,a.isFullyInitialized()||ke(n),e.filter.filtersNodes())}}function wn(e,t,n,r,i,o,s,a){const l=t.serverCache
let c
const u=s?e.filter:e.filter.getIndexedFilter()
if(ke(n))c=u.updateFullNode(l.getNode(),r,null)
else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r)
c=u.updateFullNode(l.getNode(),e,null)}else{const e=_e(n)
if(!l.isCompleteForPath(n)&&ge(n)>1)return t
const i=me(n),o=l.getNode().getImmediateChild(e).updateChild(i,r)
c=".priority"===e?u.updatePriority(l.getNode(),o):u.updateChild(l.getNode(),e,o,i,vn,null)}const h=Ht(t,c,l.isFullyInitialized()||ke(n),u.filtersNodes())
return bn(e,h,n,i,new yn(i,h,o),a)}function kn(e,t,n,r,i,o,s){const a=t.eventCache
let l,c
const u=new yn(i,t,o)
if(ke(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,s),l=Bt(t,c,!0,e.filter.filtersNodes())
else{const i=_e(n)
if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=Bt(t,c,a.isFullyInitialized(),a.isFiltered())
else{const o=me(n),c=a.getNode().getImmediateChild(i)
let h
if(ke(o))h=r
else{const e=u.getCompleteChild(i)
h=null!=e?".priority"===ve(o)&&e.getChild(be(o)).isEmpty()?e:e.updateChild(o,r):it.EMPTY_NODE}l=c.equals(h)?t:Bt(t,e.filter.updateChild(a.getNode(),i,h,o,u,s),a.isFullyInitialized(),e.filter.filtersNodes())}}return l}function Cn(e,t){return e.eventCache.isCompleteForChild(t)}function En(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Sn(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t
let l,c=t
l=ke(n)?r:new $t(null).setTree(n,r)
const u=t.serverCache.getNode()
return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=En(0,t.serverCache.getNode().getImmediateChild(n),r)
c=wn(e,c,new pe(n),l,i,o,s,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===r.value
if(!u.hasChild(n)&&!l){const l=En(0,t.serverCache.getNode().getImmediateChild(n),r)
c=wn(e,c,new pe(n),l,i,o,s,a)}})),c}class Tn{constructor(e,t){this.query_=e,this.eventRegistrations_=[]
const n=this.query_._queryParams,r=new ft(n.getIndex()),i=(o=n).loadsAllData()?new ft(o.getIndex()):o.hasLimit()?new gt(o):new _t(o)
var o
this.processor_=function(e){return{filter:e}}(i)
const s=t.serverCache,a=t.eventCache,l=r.updateFullNode(it.EMPTY_NODE,s.getNode(),null),c=i.updateFullNode(it.EMPTY_NODE,a.getNode(),null),u=new jt(l,s.isFullyInitialized(),r.filtersNodes()),h=new jt(c,a.isFullyInitialized(),i.filtersNodes())
this.viewCache_=qt(h,u),this.eventGenerator_=new Ft(this.query_)}get query(){return this.query_}}function xn(e,t){const n=Ut(e.viewCache_)
return n&&(e.query._queryParams.loadsAllData()||!ke(t)&&!n.getImmediateChild(_e(t)).isEmpty())?n.getChild(t):null}function Pn(e){return 0===e.eventRegistrations_.length}function In(e,t,n){const r=[]
if(n){o.assert(null==t,"A cancel should cancel all event registrations.")
const i=e.query._path
e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i)
t&&r.push(t)}))}if(t){let n=[]
for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r]
if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1))
break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[]
return r}function On(e,t,n,r){t.type===Nt.MERGE&&null!==t.source.queryId&&(o.assert(Ut(e.viewCache_),"We should always have a full cache before handling merges"),o.assert(Wt(e.viewCache_),"Missing event cache, even though we have a server cache"))
const i=e.viewCache_,s=function(e,t,n,r,i){const s=new mn
let a,l
if(n.type===Nt.OVERWRITE){const c=n
c.source.fromUser?a=kn(e,t,c.path,c.snap,r,i,s):(o.assert(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!ke(c.path),a=wn(e,t,c.path,c.snap,r,i,l,s))}else if(n.type===Nt.MERGE){const c=n
c.source.fromUser?a=function(e,t,n,r,i,o,s){let a=t
return r.foreach(((r,l)=>{const c=we(n,r)
Cn(t,_e(c))&&(a=kn(e,a,c,l,i,o,s))})),r.foreach(((r,l)=>{const c=we(n,r)
Cn(t,_e(c))||(a=kn(e,a,c,l,i,o,s))})),a}(e,t,c.path,c.children,r,i,s):(o.assert(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),a=Sn(e,t,c.path,c.children,r,i,l,s))}else if(n.type===Nt.ACK_USER_WRITE){const l=n
a=l.revert?function(e,t,n,r,i,s){let a
if(null!=pn(r,n))return t
{const l=new yn(r,t,i),c=t.eventCache.getNode()
let u
if(ke(n)||".priority"===_e(n)){let n
if(t.serverCache.isFullyInitialized())n=un(r,Ut(t))
else{const e=t.serverCache.getNode()
o.assert(e instanceof it,"serverChildren would be complete if leaf node"),n=hn(r,e)}u=e.filter.updateFullNode(c,n,s)}else{const i=_e(n)
let o=fn(r,i,t.serverCache)
null==o&&t.serverCache.isCompleteForChild(i)&&(o=c.getImmediateChild(i)),u=null!=o?e.filter.updateChild(c,i,o,me(n),l,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(c,i,it.EMPTY_NODE,me(n),l,s):c,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=un(r,Ut(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=pn(r,fe()),Bt(t,u,a,e.filter.filtersNodes())}}(e,t,l.path,r,i,s):function(e,t,n,r,i,o,s){if(null!=pn(i,n))return t
const a=t.serverCache.isFiltered(),l=t.serverCache
if(null!=r.value){if(ke(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return wn(e,t,n,l.getNode().getChild(n),i,o,a,s)
if(ke(n)){let r=new $t(null)
return l.getNode().forEachChild(je,((e,t)=>{r=r.set(new pe(e),t)})),Sn(e,t,n,r,i,o,a,s)}return t}{let c=new $t(null)
return r.foreach(((e,t)=>{const r=we(n,e)
l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),Sn(e,t,n,c,i,o,a,s)}}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==Nt.LISTEN_COMPLETE)throw o.assertionError("Unknown operation type: "+n.type)
a=function(e,t,n,r,i){const o=t.serverCache
return bn(e,Ht(t,o.getNode(),o.isFullyInitialized()||ke(n),o.isFiltered()),n,r,vn,i)}(e,t,n.path,r,s)}const c=s.getChanges()
return function(e,t,n){const r=t.eventCache
if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=Wt(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(ut(Wt(t)))}}(t,a,c),{viewCache:a,changes:c}}(e.processor_,i,t,n,r)
var a,l
return a=e.processor_,l=s.viewCache,o.assert(l.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),o.assert(l.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),o.assert(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Nn(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Nn(e,t,n,r){const i=r?[r]:e.eventRegistrations_
return function(e,t,n,r){const i=[],o=[]
return t.forEach((t=>{var n
"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),zt(e,i,"child_removed",t,r,n),zt(e,i,"child_added",t,r,n),zt(e,i,"child_moved",o,r,n),zt(e,i,"child_changed",t,r,n),zt(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}let An,Dn
class Rn{constructor(){this.views=new Map}}function Ln(e,t,n,r){const i=t.source.queryId
if(null!==i){const s=e.views.get(i)
return o.assert(null!=s,"SyncTree gave us an op for an invalid query."),On(s,t,n,r)}{let i=[]
for(const o of e.views.values())i=i.concat(On(o,t,n,r))
return i}}function Mn(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o)
if(!s){let e=un(n,i?r:null),o=!1
e?o=!0:r instanceof it?(e=hn(n,r),o=!1):(e=it.EMPTY_NODE,o=!1)
const s=qt(new jt(e,o,!1),new jt(r,i,!1))
return new Tn(t,s)}return s}function jn(e){const t=[]
for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n)
return t}function Fn(e,t){let n=null
for(const r of e.views.values())n=n||xn(r,t)
return n}function zn(e,t){if(t._queryParams.loadsAllData())return Hn(e)
{const n=t._queryIdentifier
return e.views.get(n)}}function qn(e,t){return null!=zn(e,t)}function Bn(e){return null!=Hn(e)}function Hn(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t
return null}let Wn=1
class Un{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $t(null),this.pendingWriteTree_={visibleWrites:Gt.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vn(e,t,n,r,i){return function(e,t,n,r,i){o.assert(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Kt(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Xn(e,new Lt({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function $n(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n]
if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t)
if(function(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t))
o.assert(n>=0,"removeWrite called with nonexistent writeId.")
const r=e.allWrites[n]
e.allWrites.splice(n,1)
let i=r.visible,s=!1,a=e.allWrites.length-1
for(;i&&a>=0;){const t=e.allWrites[a]
t.visible&&(a>=n&&sn(t,r.path)?i=!1:Te(r.path,t.path)&&(s=!0)),a--}return!!i&&(s?(function(e){e.visibleWrites=ln(e.allWrites,an,fe()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0):(r.snap?e.visibleWrites=Qt(e.visibleWrites,r.path):M(r.children,(t=>{e.visibleWrites=Qt(e.visibleWrites,we(r.path,t))})),!0))}(e.pendingWriteTree_,t)){let t=new $t(null)
return null!=r.snap?t=t.set(fe(),!0):M(r.children,(e=>{t=t.set(new pe(e),!0)})),Xn(e,new Dt(r.path,t,n))}return[]}function Gn(e,t,n){return Xn(e,new Lt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Kn(e,t,n,r,i=!1){const s=t._path,a=e.syncPointTree_.get(s)
let l=[]
if(a&&("default"===t._queryIdentifier||qn(a,t))){const c=function(e,t,n,r){const i=t._queryIdentifier,s=[]
let a=[]
const l=Bn(e)
if("default"===i)for(const[o,c]of e.views.entries())a=a.concat(In(c,n,r)),Pn(c)&&(e.views.delete(o),c.query._queryParams.loadsAllData()||s.push(c.query))
else{const t=e.views.get(i)
t&&(a=a.concat(In(t,n,r)),Pn(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return l&&!Bn(e)&&s.push(new(o.assert(An,"Reference.ts has not been loaded"),An)(t._repo,t._path)),{removed:s,events:a}}(a,t,n,r)
0===a.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s))
const u=c.removed
if(l=c.events,!i){const n=-1!==u.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(s,((e,t)=>Bn(t)))
if(n&&!i){const t=e.syncPointTree_.subtree(s)
if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Bn(t))return[Hn(t)]
{let e=[]
return t&&(e=jn(t)),M(n,((t,n)=>{e=e.concat(n)})),e}}))}(t)
for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=tr(e,r)
e.listenProvider_.startListening(ar(i),nr(e,i),o.hashFn,o.onComplete)}}}if(!i&&u.length>0&&!r)if(n){const n=null
e.listenProvider_.stopListening(ar(t),n)}else u.forEach((t=>{const n=e.queryToTagMap.get(rr(t))
e.listenProvider_.stopListening(ar(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const r=t[n]
if(!r._queryParams.loadsAllData()){const t=rr(r),n=e.queryToTagMap.get(t)
e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,u)}return l}function Yn(e,t,n,r){const i=ir(e,r)
if(null!=i){const r=or(i),o=r.path,s=r.queryId,a=Ce(o,t)
return sr(e,o,new Lt(At(s),a,n))}return[]}function Qn(e,t,n,r=!1){const i=t._path
let s=null,a=!1
e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=Ce(e,i)
s=s||Fn(t,n),a=a||Bn(t)}))
let l,c=e.syncPointTree_.get(i)
c?(a=a||Bn(c),s=s||Fn(c,fe())):(c=new Rn,e.syncPointTree_=e.syncPointTree_.set(i,c)),null!=s?l=!0:(l=!1,s=it.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild(((e,t)=>{const n=Fn(t,fe())
n&&(s=s.updateImmediateChild(e,n))})))
const u=qn(c,t)
if(!u&&!t._queryParams.loadsAllData()){const n=rr(t)
o.assert(!e.queryToTagMap.has(n),"View does not exist, but we have a tag")
const r=Wn++
e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let h=function(e,t,n,r,i,o){const s=Mn(e,t,r,i,o)
return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),function(e,t){e.eventRegistrations_.push(t)}(s,n),function(e,t){const n=e.viewCache_.eventCache,r=[]
return n.getNode().isLeafNode()||n.getNode().forEachChild(Qe,((e,t)=>{r.push(ht(e,t))})),n.isFullyInitialized()&&r.push(ut(n.getNode())),Nn(e,r,n.getNode(),t)}(s,n)}(c,t,n,on(e.pendingWriteTree_,i),s,l)
if(!u&&!a&&!r){const n=zn(c,t)
h=h.concat(function(e,t,n){const r=t._path,i=nr(e,t),s=tr(e,n),a=e.listenProvider_.startListening(ar(t),i,s.hashFn,s.onComplete),l=e.syncPointTree_.subtree(r)
if(i)o.assert(!Bn(l.value),"If we're adding a query, it shouldn't be shadowed")
else{const t=l.fold(((e,t,n)=>{if(!ke(e)&&t&&Bn(t))return[Hn(t).query]
{let e=[]
return t&&(e=e.concat(jn(t).map((e=>e.query)))),M(n,((t,n)=>{e=e.concat(n)})),e}}))
for(let n=0;n<t.length;++n){const r=t[n]
e.listenProvider_.stopListening(ar(r),nr(e,r))}}return a}(e,t,n))}return h}function Jn(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=Fn(n,Ce(e,t))
if(r)return r}))
return cn(r,t,i,n,!0)}function Xn(e,t){return Zn(t,e.syncPointTree_,null,on(e.pendingWriteTree_,fe()))}function Zn(e,t,n,r){if(ke(e.path))return er(e,t,n,r)
{const i=t.get(fe())
null==n&&null!=i&&(n=Fn(i,fe()))
let o=[]
const s=_e(e.path),a=e.operationForChild(s),l=t.children.get(s)
if(l&&a){const e=n?n.getImmediateChild(s):null,t=_n(r,s)
o=o.concat(Zn(a,l,e,t))}return i&&(o=o.concat(Ln(i,e,r,n))),o}}function er(e,t,n,r){const i=t.get(fe())
null==n&&null!=i&&(n=Fn(i,fe()))
let o=[]
return t.children.inorderTraversal(((t,i)=>{const s=n?n.getImmediateChild(t):null,a=_n(r,t),l=e.operationForChild(t)
l&&(o=o.concat(er(l,i,s,a)))})),i&&(o=o.concat(Ln(i,e,r,n))),o}function tr(e,t){const n=t.query,r=nr(e,n)
return{hashFn:()=>(function(e){return e.viewCache_.serverCache.getNode()}(t)||it.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=ir(e,n)
if(r){const n=or(r),i=n.path,o=n.queryId,s=Ce(i,t)
return sr(e,i,new Rt(At(o),s))}return[]}(e,n._path,r):function(e,t){return Xn(e,new Rt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path)
{const r=function(e,t){let n="Unknown Error"
"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable")
const r=new Error(e+" at "+t._path.toString()+": "+n)
return r.code=e.toUpperCase(),r}(t,n)
return Kn(e,n,null,r)}}}}function nr(e,t){const n=rr(t)
return e.queryToTagMap.get(n)}function rr(e){return e._path.toString()+"$"+e._queryIdentifier}function ir(e,t){return e.tagToQueryMap.get(t)}function or(e){const t=e.indexOf("$")
return o.assert(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new pe(e.substr(0,t))}}function sr(e,t,n){const r=e.syncPointTree_.get(t)
return o.assert(r,"Missing sync point for query tag that we're tracking"),Ln(r,n,on(e.pendingWriteTree_,t),null)}function ar(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(o.assert(Dn,"Reference.ts has not been loaded"),Dn)(e._repo,e._path):e}class lr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e)
return new lr(t)}node(){return this.node_}}class cr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=we(this.path_,e)
return new cr(this.syncTree_,t)}node(){return Jn(this.syncTree_,this.path_)}}const ur=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},hr=function(e,t,n){return e&&"object"==typeof e?(o.assert(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?dr(e[".sv"],t,n):"object"==typeof e[".sv"]?pr(e[".sv"],t):void o.assert(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},dr=function(e,t,n){if("timestamp"===e)return n.timestamp
o.assert(!1,"Unexpected server value: "+e)},pr=function(e,t,n){e.hasOwnProperty("increment")||o.assert(!1,"Unexpected server value: "+JSON.stringify(e,null,2))
const r=e.increment
"number"!=typeof r&&o.assert(!1,"Unexpected increment value: "+r)
const i=t.node()
if(o.assert(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r
const s=i.getValue()
return"number"!=typeof s?r:s+r},fr=function(e,t,n,r){return gr(t,new cr(n,e),r)},_r=function(e,t,n){return gr(e,new lr(t),n)}
function gr(e,t,n){const r=e.getPriority().val(),i=hr(r,t.getImmediateChild(".priority"),n)
let o
if(e.isLeafNode()){const r=e,o=hr(r.getValue(),t,n)
return o!==r.getValue()||i!==r.getPriority().val()?new Ye(o,at(i)):e}{const r=e
return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new Ye(i))),r.forEachChild(Qe,((e,r)=>{const i=gr(r,t.getImmediateChild(e),n)
i!==r&&(o=o.updateImmediateChild(e,i))})),o}}class mr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function vr(e,t){let n=t instanceof pe?t:new pe(t),r=e,i=_e(n)
for(;null!==i;){const e=o.safeGet(r.node.children,i)||{children:{},childCount:0}
r=new mr(i,r,e),n=me(n),i=_e(n)}return r}function yr(e){return e.node.value}function br(e,t){e.node.value=t,Sr(e)}function wr(e){return e.node.childCount>0}function kr(e,t){M(e.node.children,((n,r)=>{t(new mr(n,e,r))}))}function Cr(e,t,n,r){n&&!r&&t(e),kr(e,(e=>{Cr(e,t,!0,r)})),n&&r&&t(e)}function Er(e){return new pe(null===e.parent?e.name:Er(e.parent)+"/"+e.name)}function Sr(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===yr(e)&&!wr(e)}(n),i=o.contains(e.node.children,t)
r&&i?(delete e.node.children[t],e.node.childCount--,Sr(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Sr(e))}(e.parent,e.name,e)}const Tr=/[\[\].#$\/\u0000-\u001F\u007F]/,xr=/[\[\].#$\u0000-\u001F\u007F]/,Pr=10485760,Ir=function(e){return"string"==typeof e&&0!==e.length&&!Tr.test(e)},Or=function(e){return"string"==typeof e&&0!==e.length&&!xr.test(e)},Nr=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!P(e)||e&&"object"==typeof e&&o.contains(e,".sv")},Ar=function(e,t,n,r){r&&void 0===t||Dr(o.errorPrefix(e,"value"),t,n)},Dr=function(e,t,n){const r=n instanceof pe?new xe(n,e):n
if(void 0===t)throw new Error(e+"contains undefined "+Ie(r))
if("function"==typeof t)throw new Error(e+"contains a function "+Ie(r)+" with contents = "+t.toString())
if(P(t))throw new Error(e+"contains "+t.toString()+" "+Ie(r))
if("string"==typeof t&&t.length>Pr/3&&o.stringLength(t)>Pr)throw new Error(e+"contains a string greater than "+Pr+" utf8 bytes "+Ie(r)+" ('"+t.substring(0,50)+"...')")
if(t&&"object"==typeof t){let n=!1,i=!1
if(M(t,((t,s)=>{if(".value"===t)n=!0
else if(".priority"!==t&&".sv"!==t&&(i=!0,!Ir(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ie(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')
!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=o.stringLength(t),Pe(e)}(r,t),Dr(e,s,r),function(e){const t=e.parts_.pop()
e.byteLength_-=o.stringLength(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+Ie(r)+" in addition to actual children.")}},Rr=function(e,t,n,r){if(r&&void 0===t)return
const i=o.errorPrefix(e,"values")
if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.")
const s=[]
M(t,((e,t)=>{const r=new pe(e)
if(Dr(i,t,we(n,r)),".priority"===ve(r)&&!Nr(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).")
s.push(r)})),function(e,t){let n,r
for(n=0;n<t.length;n++){r=t[n]
const i=ye(r)
for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!Ir(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Ee)
let i=null
for(n=0;n<t.length;n++){if(r=t[n],null!==i&&Te(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString())
i=r}}(i,s)},Lr=function(e,t,n){if(!n||void 0!==t){if(P(t))throw new Error(o.errorPrefix(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).")
if(!Nr(t))throw new Error(o.errorPrefix(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Mr=function(e,t,n,r){if(!(r&&void 0===n||Ir(n)))throw new Error(o.errorPrefix(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},jr=function(e,t,n,r){if(!(r&&void 0===n||Or(n)))throw new Error(o.errorPrefix(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Fr=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jr(e,t,n,r)},zr=function(e,t){if(".info"===_e(t))throw new Error(e+" failed = Can't modify data under /.info/")},qr=function(e,t){const n=t.path.toString()
if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ir(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Or(e)}(n))throw new Error(o.errorPrefix(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')}
class Br{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hr(e,t){let n=null
for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath()
null===n||Se(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function Wr(e,t,n){Hr(e,n),Vr(e,(e=>Se(e,t)))}function Ur(e,t,n){Hr(e,n),Vr(e,(e=>Te(e,t)||Te(t,e)))}function Vr(e,t){e.recursionDepth_++
let n=!0
for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r]
i&&(t(i.path)?($r(e.eventLists_[r]),e.eventLists_[r]=null):n=!1)}n&&(e.eventLists_=[]),e.recursionDepth_--}function $r(e){for(let t=0;t<e.events.length;t++){const n=e.events[t]
if(null!==n){e.events[t]=null
const r=n.getEventRunner()
b&&C("event: "+n.toString()),q(r)}}}const Gr="repo_interrupt",Kr=25
class Yr{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Br,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=St(),this.transactionQueueTree_=new mr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Qr(e){const t=e.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0
return(new Date).getTime()+t}function Jr(e){return ur({timestamp:Qr(e)})}function Xr(e,t,n,r,i){e.dataUpdateCount++
const s=new pe(t)
n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n
let a=[]
if(i)if(r){const t=o.map(n,(e=>at(e)))
a=function(e,t,n,r){const i=ir(e,r)
if(i){const r=or(i),o=r.path,s=r.queryId,a=Ce(o,t),l=$t.fromObject(n)
return sr(e,o,new Mt(At(s),a,l))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=at(n)
a=Yn(e.serverSyncTree_,s,t,i)}else if(r){const t=o.map(n,(e=>at(e)))
a=function(e,t,n){const r=$t.fromObject(n)
return Xn(e,new Mt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=at(n)
a=Gn(e.serverSyncTree_,s,t)}let l=s
a.length>0&&(l=hi(e,s)),Ur(e.eventQueue_,l,a)}function Zr(e,t){ei(e,"connected",t),!1===t&&function(e){ai(e,"onDisconnectEvents")
const t=Jr(e),n=St()
Pt(e.onDisconnect_,fe(),((r,i)=>{const o=fr(r,i,e.serverSyncTree_,t)
Tt(n,r,o)}))
let r=[]
Pt(n,fe(),((t,n)=>{r=r.concat(Gn(e.serverSyncTree_,t,n))
const i=gi(e,t)
hi(e,i)})),e.onDisconnect_=St(),Ur(e.eventQueue_,fe(),r)}(e)}function ei(e,t,n){const r=new pe("/.info/"+t),i=at(n)
e.infoData_.updateSnapshot(r,i)
const o=Gn(e.infoSyncTree_,r,i)
Ur(e.eventQueue_,r,o)}function ti(e){return e.nextWriteId_++}function ni(e,t,n,r,i){ai(e,"set",{path:t.toString(),value:n,priority:r})
const o=Jr(e),s=at(n,r),a=Jn(e.serverSyncTree_,t),l=_r(s,a,o),c=ti(e),u=Vn(e.serverSyncTree_,t,l,c,!0)
Hr(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),((n,r)=>{const o="ok"===n
o||x("set at "+t+" failed: "+n)
const s=$n(e.serverSyncTree_,c,!o)
Ur(e.eventQueue_,t,s),li(0,i,n,r)}))
const h=gi(e,t)
hi(e,h),Ur(e.eventQueue_,h,[])}function ri(e,t,n){e.server_.onDisconnectCancel(t.toString(),((r,i)=>{"ok"===r&&xt(e.onDisconnect_,t),li(0,n,r,i)}))}function ii(e,t,n,r){const i=at(n)
e.server_.onDisconnectPut(t.toString(),i.val(!0),((n,o)=>{"ok"===n&&Tt(e.onDisconnect_,t,i),li(0,r,n,o)}))}function oi(e,t,n){let r
r=".info"===_e(t._path)?Kn(e.infoSyncTree_,t,n):Kn(e.serverSyncTree_,t,n),Wr(e.eventQueue_,t._path,r)}function si(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Gr)}function ai(e,...t){let n=""
e.persistentConnection_&&(n=e.persistentConnection_.id+":"),C(n,...t)}function li(e,t,n,r){t&&q((()=>{if("ok"===n)t(null)
else{const e=(n||"error").toUpperCase()
let i=e
r&&(i+=": "+r)
const o=new Error(i)
o.code=e,t(o)}}))}function ci(e,t,n){return Jn(e.serverSyncTree_,t,n)||it.EMPTY_NODE}function ui(e,t=e.transactionQueueTree_){if(t||_i(e,t),yr(t)){const n=pi(e,t)
o.assert(n.length>0,"Sending zero length transaction queue"),n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=ci(e,t,r)
let s=i
const a=i.hash()
for(let u=0;u<n.length;u++){const e=n[u]
o.assert(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++
const r=Ce(t,e.path)
s=s.updateChild(r,e.currentOutputSnapshotRaw)}const l=s.val(!0),c=t
e.server_.put(c.toString(),l,(r=>{ai(e,"transaction put response",{path:c.toString(),status:r})
let i=[]
if("ok"===r){const r=[]
for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat($n(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher()
_i(e,vr(e.transactionQueueTree_,t)),ui(e,e.transactionQueueTree_),Ur(e.eventQueue_,t,i)
for(let e=0;e<r.length;e++)q(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0
else{x("transaction at "+c.toString()+" failed: "+r)
for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}hi(e,t)}}),a)}(e,Er(t),n)}else wr(t)&&kr(t,(t=>{ui(e,t)}))}function hi(e,t){const n=di(e,t),r=Er(n)
return function(e,t,n){if(0===t.length)return
const r=[]
let i=[]
const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId))
for(let l=0;l<t.length;l++){const c=t[l],u=Ce(n,c.path)
let h,d=!1
if(o.assert(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)d=!0,h=c.abortReason,i=i.concat($n(e.serverSyncTree_,c.currentWriteId,!0))
else if(0===c.status)if(c.retryCount>=Kr)d=!0,h="maxretry",i=i.concat($n(e.serverSyncTree_,c.currentWriteId,!0))
else{const n=ci(e,c.path,s)
c.currentInputSnapshot=n
const r=t[l].update(n.val())
if(void 0!==r){Dr("transaction failed: Data returned ",r,c.path)
let t=at(r)
"object"==typeof r&&null!=r&&o.contains(r,".priority")||(t=t.updatePriority(n.getPriority()))
const a=c.currentWriteId,l=Jr(e),u=_r(t,n,l)
c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=u,c.currentWriteId=ti(e),s.splice(s.indexOf(a),1),i=i.concat(Vn(e.serverSyncTree_,c.path,u,c.currentWriteId,c.applyLocally)),i=i.concat($n(e.serverSyncTree_,a,!0))}else d=!0,h="nodata",i=i.concat($n(e.serverSyncTree_,c.currentWriteId,!0))}Ur(e.eventQueue_,n,i),i=[],d&&(t[l].status=2,a=t[l].unwatcher,setTimeout(a,Math.floor(0)),t[l].onComplete&&("nodata"===h?r.push((()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot))):r.push((()=>t[l].onComplete(new Error(h),!1,null)))))}var a
_i(e,e.transactionQueueTree_)
for(let o=0;o<r.length;o++)q(r[o])
ui(e,e.transactionQueueTree_)}(e,pi(e,n),r),r}function di(e,t){let n,r=e.transactionQueueTree_
for(n=_e(t);null!==n&&void 0===yr(r);)r=vr(r,n),n=_e(t=me(t))
return r}function pi(e,t){const n=[]
return fi(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function fi(e,t,n){const r=yr(t)
if(r)for(let i=0;i<r.length;i++)n.push(r[i])
kr(t,(t=>{fi(e,t,n)}))}function _i(e,t){const n=yr(t)
if(n){let e=0
for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++)
n.length=e,br(t,n.length>0?n:void 0)}kr(t,(t=>{_i(e,t)}))}function gi(e,t){const n=Er(di(e,t)),r=vr(e.transactionQueueTree_,t)
return function(e,t,n){let r=e.parent
for(;null!==r;){if(t(r))return!0
r=r.parent}}(r,(t=>{mi(e,t)})),mi(e,r),Cr(r,(t=>{mi(e,t)})),n}function mi(e,t){const n=yr(t)
if(n){const r=[]
let i=[],s=-1
for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(o.assert(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(o.assert(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat($n(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?br(t,void 0):n.length=s+1,Ur(e.eventQueue_,Er(t),i)
for(let e=0;e<r.length;e++)q(r[e])}}const vi=function(e,t){const n=yi(e),r=n.namespace
"firebase.com"===n.domain&&T(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||T("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&x("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")
const i="ws"===n.scheme||"wss"===n.scheme
return{repoInfo:new Q(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new pe(n.pathString)}},yi=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",l=443
if("string"==typeof e){let c=e.indexOf("//")
c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2))
let u=e.indexOf("/");-1===u&&(u=e.length)
let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t=""
const n=e.split("/")
for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r]
try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,h)))
const d=function(e){const t={}
"?"===e.charAt(0)&&(e=e.substring(1))
for(const n of e.split("&")){if(0===n.length)continue
const r=n.split("=")
2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):x(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)))
c=t.indexOf(":"),c>=0?(s="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length
const p=t.slice(0,c)
if("localhost"===p.toLowerCase())n="localhost"
else if(p.split(".").length<=2)n=p
else{const e=t.indexOf(".")
r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}},bi="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",wi=function(){let e=0
const t=[]
return function(n){const r=n===e
let i
e=n
const s=new Array(8)
for(i=7;i>=0;i--)s[i]=bi.charAt(n%64),n=Math.floor(n/64)
o.assert(0===n,"Cannot push at time == 0")
let a=s.join("")
if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0
t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random())
for(i=0;i<12;i++)a+=bi.charAt(t[i])
return o.assert(20===a.length,"nextPushId: Length should be 20."),a}}()
class ki{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref
return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+o.stringify(this.snapshot.exportVal())}}class Ci{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}class Ei{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return o.assert(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}class Si{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new o.Deferred
return ri(this._repo,this._path,e.wrapCallback((()=>{}))),e.promise}remove(){zr("OnDisconnect.remove",this._path)
const e=new o.Deferred
return ii(this._repo,this._path,null,e.wrapCallback((()=>{}))),e.promise}set(e){zr("OnDisconnect.set",this._path),Ar("OnDisconnect.set",e,this._path,!1)
const t=new o.Deferred
return ii(this._repo,this._path,e,t.wrapCallback((()=>{}))),t.promise}setWithPriority(e,t){zr("OnDisconnect.setWithPriority",this._path),Ar("OnDisconnect.setWithPriority",e,this._path,!1),Lr("OnDisconnect.setWithPriority",t,!1)
const n=new o.Deferred
return function(e,t,n,r,i){const o=at(n,r)
e.server_.onDisconnectPut(t.toString(),o.val(!0),((n,r)=>{"ok"===n&&Tt(e.onDisconnect_,t,o),li(0,i,n,r)}))}(this._repo,this._path,e,t,n.wrapCallback((()=>{}))),n.promise}update(e){zr("OnDisconnect.update",this._path),Rr("OnDisconnect.update",e,this._path,!1)
const t=new o.Deferred
return function(e,t,n,r){if(o.isEmpty(n))return C("onDisconnect().update() called with empty data.  Don't do anything."),void li(0,r,"ok",void 0)
e.server_.onDisconnectMerge(t.toString(),n,((i,o)=>{"ok"===i&&M(n,((n,r)=>{const i=at(r)
Tt(e.onDisconnect_,we(t,n),i)})),li(0,r,i,o)}))}(this._repo,this._path,e,t.wrapCallback((()=>{}))),t.promise}}class Ti{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return ke(this._path)?null:ve(this._path)}get ref(){return new Oi(this._repo,this._path)}get _queryIdentifier(){const e=kt(this._queryParams),t=R(e)
return"{}"===t?"default":t}get _queryObject(){return kt(this._queryParams)}isEqual(e){if(!((e=o.getModularInstance(e))instanceof Ti))return!1
const t=this._repo===e._repo,n=Se(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier
return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t=""
for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])))
return t||"/"}(this._path)}}function xi(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function Pi(e){let t=null,n=null
if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===je){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string."
if(e.hasStart()){if(e.getIndexStartName()!==I)throw new Error(r)
if("string"!=typeof t)throw new Error(i)}if(e.hasEnd()){if(e.getIndexEndName()!==O)throw new Error(r)
if("string"!=typeof n)throw new Error(i)}}else if(e.getIndex()===Qe){if(null!=t&&!Nr(t)||null!=n&&!Nr(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(o.assert(e.getIndex()instanceof lt||e.getIndex()===ct,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Ii(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Oi extends Ti{constructor(e,t){super(e,t,new mt,!1)}get parent(){const e=be(this._path)
return null===e?null:new Oi(this._repo,e)}get root(){let e=this
for(;null!==e.parent;)e=e.parent
return e}}class Ni{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new pe(e),n=Di(this.ref,e)
return new Ni(this._node.getChild(t),n,Qe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,((t,n)=>e(new Ni(n,Di(this.ref,t),Qe))))}hasChild(e){const t=new pe(e)
return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ai(e,t){return(e=o.getModularInstance(e))._checkNotDeleted("ref"),void 0!==t?Di(e._root,t):e._root}function Di(e,t){return null===_e((e=o.getModularInstance(e))._path)?Fr("child","path",t,!1):jr("child","path",t,!1),new Oi(e._repo,we(e._path,t))}function Ri(e,t){e=o.getModularInstance(e),zr("set",e._path),Ar("set",t,e._path,!1)
const n=new o.Deferred
return ni(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}class Li{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex()
return new ki("value",this,new Ni(e.snapshotNode,new Oi(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ci(this,e,t):null}matches(e){return e instanceof Li&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Mi{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e
return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ci(this,e,t):null}createEvent(e,t){o.assert(null!=e.childName,"Child events should have a childName.")
const n=Di(new Oi(t._repo,t._path),e.childName),r=t._queryParams.getIndex()
return new ki(e.type,this,new Ni(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Mi&&this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext))}hasAnyCallback(){return!!this.callbackContext}}function ji(e,t,n,r,i){let o
if("object"==typeof r&&(o=void 0,i=r),"function"==typeof r&&(o=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{oi(e._repo,e,a),t(n,r)}
r.userCallback=n.userCallback,r.context=n.context,n=r}const s=new Ei(n,o||void 0),a="value"===t?new Li(s):new Mi(t,s)
return function(e,t,n){let r
r=".info"===_e(t._path)?Qn(e.infoSyncTree_,t,n):Qn(e.serverSyncTree_,t,n),Wr(e.eventQueue_,t._path,r)}(e._repo,e,a),()=>oi(e._repo,e,a)}function Fi(e,t,n,r){return ji(e,"value",t,n,r)}class zi{}class qi extends zi{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){Ar("endAt",this._value,e._path,!0)
const t=yt(e._queryParams,this._value,this._key)
if(Ii(t),Pi(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).")
return new Ti(e._repo,e._path,t,e._orderByCalled)}}class Bi extends zi{constructor(e,t){super(),this._value=e,this._key=t,this.type="endBefore"}_apply(e){Ar("endBefore",this._value,e._path,!1)
const t=function(e,t,n){let r
return r=e.index_===je||n?yt(e,t,n):yt(e,t,I),r.endBeforeSet_=!0,r}(e._queryParams,this._value,this._key)
if(Ii(t),Pi(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).")
return new Ti(e._repo,e._path,t,e._orderByCalled)}}class Hi extends zi{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAt"}_apply(e){Ar("startAt",this._value,e._path,!0)
const t=vt(e._queryParams,this._value,this._key)
if(Ii(t),Pi(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).")
return new Ti(e._repo,e._path,t,e._orderByCalled)}}class Wi extends zi{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAfter"}_apply(e){Ar("startAfter",this._value,e._path,!1)
const t=function(e,t,n){let r
return r=e.index_===je||n?vt(e,t,n):vt(e,t,O),r.startAfterSet_=!0,r}(e._queryParams,this._value,this._key)
if(Ii(t),Pi(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).")
return new Ti(e._repo,e._path,t,e._orderByCalled)}}class Ui extends zi{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).")
return new Ti(e._repo,e._path,function(e,t){const n=e.copy()
return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}(e._queryParams,this._limit),e._orderByCalled)}}class Vi extends zi{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).")
return new Ti(e._repo,e._path,function(e,t){const n=e.copy()
return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}(e._queryParams,this._limit),e._orderByCalled)}}class $i extends zi{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){xi(e,"orderByChild")
const t=new pe(this._path)
if(ke(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.")
const n=new lt(t),r=bt(e._queryParams,n)
return Pi(r),new Ti(e._repo,e._path,r,!0)}}class Gi extends zi{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){xi(e,"orderByKey")
const t=bt(e._queryParams,je)
return Pi(t),new Ti(e._repo,e._path,t,!0)}}class Ki extends zi{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){xi(e,"orderByPriority")
const t=bt(e._queryParams,Qe)
return Pi(t),new Ti(e._repo,e._path,t,!0)}}class Yi extends zi{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){xi(e,"orderByValue")
const t=bt(e._queryParams,ct)
return Pi(t),new Ti(e._repo,e._path,t,!0)}}class Qi extends zi{constructor(e,t){super(),this._value=e,this._key=t,this.type="equalTo"}_apply(e){if(Ar("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).")
if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).")
return new qi(this._value,this._key)._apply(new Hi(this._value,this._key)._apply(e))}}!function(e){o.assert(!An,"__referenceConstructor has already been defined"),An=e}(Oi),function(e){o.assert(!Dn,"__referenceConstructor has already been defined"),Dn=e}(Oi)
const Ji={}
let Xi=!1
function Zi(e,t,n,r,i){let o=r||e.options.databaseURL
void 0===o&&(e.options.projectId||T("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),C("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`)
let s,a,l=vi(o,i),c=l.repoInfo
"undefined"!=typeof process&&process.env&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(s=!0,o=`http://${a}?ns=${c.namespace}`,l=vi(o,i),c=l.repoInfo):s=!l.repoInfo.secure
const u=i&&s?new U(U.OWNER):new W(e.name,e.options,t)
qr("Invalid Firebase Database URL",l),ke(l.path)||T("Database URL must point to the root of a Firebase Database (not including a child path).")
const h=function(e,t,n,r){let i=Ji[t.name]
i||(i={},Ji[t.name]=i)
let o=i[e.toURLString()]
return o&&T("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Yr(e,Xi,n,r),i[e.toURLString()]=o,o}(c,e,u,new H(e.name,n))
return new eo(h,e)}class eo{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,n){if(e.stats_=te(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Ct(e.repoInfo_,((t,n,r,i)=>{Xr(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Zr(e,!0)),0)
else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride")
try{o.stringify(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Ae(e.repoInfo_,t,((t,n,r,i)=>{Xr(e,t,n,r,i)}),(t=>{Zr(e,t)}),(t=>{!function(e,t){M(t,((t,n)=>{ei(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(t,n){const r=t.toString()
return ee[r]||(ee[r]=new Ot(e.stats_,e.server_)),ee[r]}(e.repoInfo_),e.infoData_=new Et,e.infoSyncTree_=new Un({startListening:(t,n,r,i)=>{let o=[]
const s=e.infoData_.getNode(t._path)
return s.isEmpty()||(o=Gn(e.infoSyncTree_,t._path,s),setTimeout((()=>{i("ok")}),0)),o},stopListening:()=>{}}),ei(e,"connected",!1),e.serverSyncTree_=new Un({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const o=i(n,r)
Ur(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Oi(this._repo,fe())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){const n=Ji[t]
n&&n[e.key]===e||T(`Database ${t}(${e.repoInfo_}) has already been deleted.`),si(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&T("Cannot call "+e+" on a deleted database.")}}function to(){le.IS_TRANSPORT_INITIALIZED&&x("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function no(e,t,n,r={}){(e=o.getModularInstance(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&T("Cannot call useEmulator() after instance has already been initialized.")
const i=e._repoInternal
let s
if(i.repoInfo_.nodeAdmin)r.mockUserToken&&T('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new U(U.OWNER)
else if(r.mockUserToken){const t="string"==typeof r.mockUserToken?r.mockUserToken:o.createMockUserToken(r.mockUserToken,e.app.options.projectId)
s=new U(t)}!function(e,t,n,r){e.repoInfo_=new Q(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}(i,t,n,s)}const ro={".sv":"timestamp"}
class io{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}Ae.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ae.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},u(r.SDK_VERSION),r._registerComponent(new i.Component("database",((e,{instanceIdentifier:t})=>Zi(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),r.registerVersion(a,l,void 0),r.registerVersion(a,l,"cjs2017"),t.DataSnapshot=Ni,t.Database=eo,t.OnDisconnect=Si,t.QueryConstraint=zi,t.TransactionResult=io,t._QueryImpl=Ti,t._QueryParams=mt,t._ReferenceImpl=Oi,t._TEST_ACCESS_forceRestClient=function(e){!function(e){Xi=e}(e)},t._TEST_ACCESS_hijackHash=function(e){const t=Ae.prototype.put
return Ae.prototype.put=function(n,r,i,o){void 0!==o&&(o=e()),t.call(this,n,r,i,o)},function(){Ae.prototype.put=t}},t._initStandalone=function({app:e,url:t,version:n,customAuthImpl:r,customAppCheckImpl:o,nodeAdmin:s=!1}){u(n)
const a=new i.ComponentContainer("database-standalone"),l=new i.Provider("auth-internal",a)
let c
return o&&(c=new i.Provider("app-check-internal",a),c.setComponent(new i.Component("app-check-internal",(()=>o),"PRIVATE"))),l.setComponent(new i.Component("auth-internal",(()=>r),"PRIVATE")),Zi(e,l,c,t,s)},t._repoManagerDatabaseFromApp=Zi,t._setSDKVersion=u,t._validatePathString=jr,t._validateWritablePath=zr,t.child=Di,t.connectDatabaseEmulator=no,t.enableLogging=function(e,t){k(e,t)},t.endAt=function(e,t){return Mr("endAt","key",t,!0),new qi(e,t)},t.endBefore=function(e,t){return Mr("endBefore","key",t,!0),new Bi(e,t)},t.equalTo=function(e,t){return Mr("equalTo","key",t,!0),new Qi(e,t)},t.forceLongPolling=function(){to(),ae.forceDisallow(),ie.forceAllow()},t.forceWebSockets=function(){to(),ie.forceDisallow()},t.get=function(e){e=o.getModularInstance(e)
const t=new Ei((()=>{})),n=new Li(t)
return function(e,t,n){const r=function(e,t){const n=t._path
let r=null
e.syncPointTree_.foreachOnPath(n,((e,t)=>{const i=Ce(e,n)
r=r||Fn(t,i)}))
let i=e.syncPointTree_.get(n)
i?r=r||Fn(i,fe()):(i=new Rn,e.syncPointTree_=e.syncPointTree_.set(n,i))
const o=null!=r,s=o?new jt(r,!0,!1):null
return Wt(Mn(i,t,on(e.pendingWriteTree_,t._path),o?s.getNode():it.EMPTY_NODE,o).viewCache_)}(e.serverSyncTree_,t)
return null!=r?Promise.resolve(r):e.server_.get(t).then((r=>{const i=at(r).withIndex(t._queryParams.getIndex())
let o
if(Qn(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())o=Gn(e.serverSyncTree_,t._path,i)
else{const n=nr(e.serverSyncTree_,t)
o=Yn(e.serverSyncTree_,t._path,i,n)}return Ur(e.eventQueue_,t._path,o),Kn(e.serverSyncTree_,t,n,null,!0),i}),(n=>(ai(e,"get for query "+o.stringify(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Ni(t,new Oi(e._repo,e._path),e._queryParams.getIndex())))},t.getDatabase=function(e=r.getApp(),t){const n=r._getProvider(e,"database").getImmediate({identifier:t})
if(!n._instanceStarted){const e=o.getDefaultEmulatorHostnameAndPort("database")
e&&no(n,...e)}return n},t.goOffline=function(e){(e=o.getModularInstance(e))._checkNotDeleted("goOffline"),si(e._repo)},t.goOnline=function(e){var t;(e=o.getModularInstance(e))._checkNotDeleted("goOnline"),(t=e._repo).persistentConnection_&&t.persistentConnection_.resume(Gr)},t.increment=function(e){return{".sv":{increment:e}}},t.limitToFirst=function(e){if("number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.")
return new Ui(e)},t.limitToLast=function(e){if("number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.")
return new Vi(e)},t.off=function(e,t,n){let r=null
const i=n?new Ei(n):null
"value"===t?r=new Li(i):t&&(r=new Mi(t,i)),oi(e._repo,e,r)},t.onChildAdded=function(e,t,n,r){return ji(e,"child_added",t,n,r)},t.onChildChanged=function(e,t,n,r){return ji(e,"child_changed",t,n,r)},t.onChildMoved=function(e,t,n,r){return ji(e,"child_moved",t,n,r)},t.onChildRemoved=function(e,t,n,r){return ji(e,"child_removed",t,n,r)},t.onDisconnect=function(e){return e=o.getModularInstance(e),new Si(e._repo,e._path)},t.onValue=Fi,t.orderByChild=function(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.')
if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.')
if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.')
return jr("orderByChild","path",e,!1),new $i(e)},t.orderByKey=function(){return new Gi},t.orderByPriority=function(){return new Ki},t.orderByValue=function(){return new Yi},t.push=function(e,t){e=o.getModularInstance(e),zr("push",e._path),Ar("push",t,e._path,!0)
const n=Qr(e._repo),r=wi(n),i=Di(e,r),s=Di(e,r)
let a
return a=null!=t?Ri(s,t).then((()=>s)):Promise.resolve(s),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i},t.query=function(e,...t){let n=o.getModularInstance(e)
for(const r of t)n=r._apply(n)
return n},t.ref=Ai,t.refFromURL=function(e,t){(e=o.getModularInstance(e))._checkNotDeleted("refFromURL")
const n=vi(t,e._repo.repoInfo_.nodeAdmin)
qr("refFromURL",n)
const r=n.repoInfo
return e._repo.repoInfo_.isCustomHost()||r.host===e._repo.repoInfo_.host||T("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),Ai(e,n.path.toString())},t.remove=function(e){return zr("remove",e._path),Ri(e,null)},t.runTransaction=function(e,t,n){var r
if(e=o.getModularInstance(e),zr("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object."
const i=null===(r=null==n?void 0:n.applyLocally)||void 0===r||r,s=new o.Deferred,a=Fi(e,(()=>{}))
return function(t,n,r,i,a,l){ai(t,"transaction on "+n)
const c={path:n,update:r,onComplete:(t,n,r)=>{let i=null
t?s.reject(t):(i=new Ni(r,new Oi(e._repo,e._path),Qe),s.resolve(new io(n,i)))},status:null,order:m(),applyLocally:l,retryCount:0,unwatcher:a,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},u=ci(t,n,void 0)
c.currentInputSnapshot=u
const h=c.update(u.val())
if(void 0===h)c.unwatcher(),c.currentOutputSnapshotRaw=null,c.currentOutputSnapshotResolved=null,c.onComplete&&c.onComplete(null,!1,c.currentInputSnapshot)
else{Dr("transaction failed: Data returned ",h,c.path),c.status=0
const e=vr(t.transactionQueueTree_,n),r=yr(e)||[]
let i
r.push(c),br(e,r),"object"==typeof h&&null!==h&&o.contains(h,".priority")?(i=o.safeGet(h,".priority"),o.assert(Nr(i),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):i=(Jn(t.serverSyncTree_,n)||it.EMPTY_NODE).getPriority().val()
const s=Jr(t),a=at(h,i),l=_r(a,u,s)
c.currentOutputSnapshotRaw=a,c.currentOutputSnapshotResolved=l,c.currentWriteId=ti(t)
const d=Vn(t.serverSyncTree_,n,l,c.currentWriteId,c.applyLocally)
Ur(t.eventQueue_,n,d),ui(t,t.transactionQueueTree_)}}(e._repo,e._path,t,0,a,i),s.promise},t.serverTimestamp=function(){return ro},t.set=Ri,t.setPriority=function(e,t){e=o.getModularInstance(e),zr("setPriority",e._path),Lr("setPriority",t,!1)
const n=new o.Deferred
return ni(e._repo,we(e._path,".priority"),t,null,n.wrapCallback((()=>{}))),n.promise},t.setWithPriority=function(e,t,n){if(zr("setWithPriority",e._path),Ar("setWithPriority",t,e._path,!1),Lr("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object."
const r=new o.Deferred
return ni(e._repo,e._path,t,n,r.wrapCallback((()=>{}))),r.promise},t.startAfter=function(e,t){return Mr("startAfter","key",t,!0),new Wi(e,t)},t.startAt=function(e=null,t){return Mr("startAt","key",t,!0),new Hi(e,t)},t.update=function(e,t){Rr("update",t,e._path,!1)
const n=new o.Deferred
return function(e,t,n,r){ai(e,"update",{path:t.toString(),value:n})
let i=!0
const s=Jr(e),a={}
if(M(n,((n,r)=>{i=!1,a[n]=fr(we(t,n),at(r),e.serverSyncTree_,s)})),i)C("update() called with empty data.  Don't do anything."),li(0,r,"ok",void 0)
else{const i=ti(e),s=function(e,t,n,r){!function(e,t,n,r){o.assert(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Yt(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r)
const i=$t.fromObject(n)
return Xn(e,new Mt({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,t,a,i)
Hr(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,o)=>{const s="ok"===n
s||x("update at "+t+" failed: "+n)
const a=$n(e.serverSyncTree_,i,!s),l=a.length>0?hi(e,t):t
Ur(e.eventQueue_,l,a),li(0,r,n,o)})),M(n,(n=>{const r=gi(e,we(t,n))
hi(e,r)})),Ur(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}},918:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r,i,o=n(513),s=[]
t.LogLevel=void 0,(i=t.LogLevel||(t.LogLevel={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"
var a={debug:t.LogLevel.DEBUG,verbose:t.LogLevel.VERBOSE,info:t.LogLevel.INFO,warn:t.LogLevel.WARN,error:t.LogLevel.ERROR,silent:t.LogLevel.SILENT},l=t.LogLevel.INFO,c=((r={})[t.LogLevel.DEBUG]="log",r[t.LogLevel.VERBOSE]="log",r[t.LogLevel.INFO]="info",r[t.LogLevel.WARN]="warn",r[t.LogLevel.ERROR]="error",r),u=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
if(!(t<e.logLevel)){var i=(new Date).toISOString(),s=c[t]
if(!s)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"))
console[s].apply(console,o.__spreadArray(["[".concat(i,"]  ").concat(e.name,":")],n,!1))}},h=function(){function e(e){this.name=e,this._logLevel=l,this._logHandler=u,this._userLogHandler=null,s.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in t.LogLevel))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'))
this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?a[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function")
this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
this._userLogHandler&&this._userLogHandler.apply(this,o.__spreadArray([this,t.LogLevel.DEBUG],e,!1)),this._logHandler.apply(this,o.__spreadArray([this,t.LogLevel.DEBUG],e,!1))},e.prototype.log=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
this._userLogHandler&&this._userLogHandler.apply(this,o.__spreadArray([this,t.LogLevel.VERBOSE],e,!1)),this._logHandler.apply(this,o.__spreadArray([this,t.LogLevel.VERBOSE],e,!1))},e.prototype.info=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
this._userLogHandler&&this._userLogHandler.apply(this,o.__spreadArray([this,t.LogLevel.INFO],e,!1)),this._logHandler.apply(this,o.__spreadArray([this,t.LogLevel.INFO],e,!1))},e.prototype.warn=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
this._userLogHandler&&this._userLogHandler.apply(this,o.__spreadArray([this,t.LogLevel.WARN],e,!1)),this._logHandler.apply(this,o.__spreadArray([this,t.LogLevel.WARN],e,!1))},e.prototype.error=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
this._userLogHandler&&this._userLogHandler.apply(this,o.__spreadArray([this,t.LogLevel.ERROR],e,!1)),this._logHandler.apply(this,o.__spreadArray([this,t.LogLevel.ERROR],e,!1))},e}()
t.Logger=h,t.setLogLevel=function(e){s.forEach((function(t){t.setLogLevel(e)}))},t.setUserLogHandler=function(e,n){for(var r=function(r){var i=null
n&&n.level&&(i=a[n.level]),r.userLogHandler=null===e?null:function(n,r){for(var o=[],s=2;s<arguments.length;s++)o[s-2]=arguments[s]
var a=o.map((function(e){if(null==e)return null
if("string"==typeof e)return e
if("number"==typeof e||"boolean"==typeof e)return e.toString()
if(e instanceof Error)return e.message
try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ")
r>=(null!=i?i:n.logLevel)&&e({level:t.LogLevel[r].toLowerCase(),message:a,args:o,type:n.name})}},i=0,o=s;i<o.length;i++)r(o[i])}},202:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const n={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw i(t)},i=function(e){return new Error("Firebase Database ("+n.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[]
let n=0
for(let r=0;r<e.length;r++){let i=e.charCodeAt(r)
i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter")
this.init_()
const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[]
for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,c=t>>2,u=(3&t)<<4|s>>4
let h=(15&s)<<2|l>>6,d=63&l
a||(d=64,o||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[]
let n=0,r=0
for(;n<e.length;){const i=e[n++]
if(i<128)t[r++]=String.fromCharCode(i)
else if(i>191&&i<224){const o=e[n++]
t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536
t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++]
t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_()
const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[]
for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i
const s=i<e.length?n[e.charAt(i)]:64;++i
const l=i<e.length?n[e.charAt(i)]:64
if(++i,null==t||null==o||null==s||null==l)throw new a
const c=t<<2|o>>4
if(r.push(c),64!==s){const e=o<<4&240|s>>2
if(r.push(e),64!==l){const e=s<<6&192|l
r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={}
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}}
class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l=function(e){const t=o(e)
return s.encodeByteArray(t,!0)},c=function(e){return l(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}
function h(e,t){if(!(t instanceof Object))return t
switch(t.constructor){case Date:return new Date(t.getTime())
case Object:void 0===e&&(e={})
break
case Array:e=[]
break
default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=h(e[n],t[n]))
return e}function d(){if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if("undefined"!=typeof global)return global
throw new Error("Unable to locate global object.")}const p=()=>{try{return d().__FIREBASE_DEFAULTS__||(()=>{if("undefined"==typeof process||void 0===process.env)return
const e=process.env.__FIREBASE_DEFAULTS__
return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return
let e
try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&u(e[1])
return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},f=e=>{var t,n
return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]}
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}function g(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function m(){var e
const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment
if("node"===t)return!0
if("browser"===t)return!1
try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}class v extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,y.prototype.create)}}class y{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(b,((e,n)=>{const r=t[n]
return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`
return new v(r,s,n)}}const b=/\{\$([^}]+)}/g
function w(e){return JSON.parse(e)}const k=function(e){let t={},n={},r={},i=""
try{const o=e.split(".")
t=w(u(o[0])||""),n=w(u(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}}
function C(e){return null!==e&&"object"==typeof e}class E{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r
if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.")
r=function(e,t){if("object"!=typeof e||null===e)return!1
for(const n of["next","error","complete"])if(n in e&&"function"==typeof e[n])return!0
return!1}(e)?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=S),void 0===r.error&&(r.error=S),void 0===r.complete&&(r.complete=S)
const i=this.unsubscribeOne.bind(this,this.observers.length)
return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function S(){}function T(e,t){return`${e} failed: ${t} argument `}const x=144e5
t.CONSTANTS=n,t.DecodeBase64StringError=a,t.Deferred=_,t.ErrorFactory=y,t.FirebaseError=v,t.MAX_VALUE_MILLIS=x,t.RANDOM_FACTOR=.5,t.Sha1=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128
for(let e=1;e<this.blockSize;++e)this.pad_[e]=0
this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0)
const n=this.W_
if("string"==typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4
else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4
for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16]
n[u]=4294967295&(e<<1|e>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4]
for(let u=0;u<80;u++){u<40?u<20?(r=l^s&(a^l),i=1518500249):(r=s^a^l,i=1859775393):u<60?(r=s&a|l&(s|a),i=2400959708):(r=s^a^l,i=3395469782)
const e=(o<<5|o>>>27)+r+c+i+n[u]&4294967295
c=l,l=a,a=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return
void 0===t&&(t=e.length)
const n=t-this.blockSize
let r=0
const i=this.buf_
let o=this.inbuf_
for(;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize
if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0
break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0
break}}this.inbuf_=o,this.total_+=t}digest(){const e=[]
let t=8*this.total_
this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56))
for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256
this.compress_(this.buf_)
let n=0
for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n
return e}},t.areCookiesEnabled=function(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)},t.assert=r,t.assertionError=i,t.async=function(e,t){return(...n)=>{Promise.resolve(!0).then((()=>{e(...n)})).catch((e=>{t&&t(e)}))}},t.base64=s,t.base64Decode=u,t.base64Encode=l,t.base64urlEncodeWithoutPadding=c,t.calculateBackoffMillis=function(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2)
return Math.min(x,r+i)},t.contains=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.createMockUserToken=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.')
const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id
if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!")
const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e)
return[c(JSON.stringify({alg:"none",type:"JWT"})),c(JSON.stringify(o)),""].join(".")},t.createSubscribe=function(e,t){const n=new E(e,t)
return n.subscribe.bind(n)},t.decode=k,t.deepCopy=function(e){return h(void 0,e)},t.deepEqual=function e(t,n){if(t===n)return!0
const r=Object.keys(t),i=Object.keys(n)
for(const o of r){if(!i.includes(o))return!1
const r=t[o],s=n[o]
if(C(r)&&C(s)){if(!e(r,s))return!1}else if(r!==s)return!1}for(const o of i)if(!r.includes(o))return!1
return!0},t.deepExtend=h,t.errorPrefix=T,t.extractQuerystring=function(e){const t=e.indexOf("?")
if(!t)return""
const n=e.indexOf("#",t)
return e.substring(t,n>0?n:void 0)},t.getDefaultAppConfig=()=>{var e
return null===(e=p())||void 0===e?void 0:e.config},t.getDefaultEmulatorHost=f,t.getDefaultEmulatorHostnameAndPort=e=>{const t=f(e)
if(!t)return
const n=t.lastIndexOf(":")
if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`)
const r=parseInt(t.substring(n+1),10)
return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},t.getDefaults=p,t.getExperimentalSetting=e=>{var t
return null===(t=p())||void 0===t?void 0:t[`_${e}`]},t.getGlobal=d,t.getModularInstance=function(e){return e&&e._delegate?e._delegate:e},t.getUA=g,t.isAdmin=function(e){const t=k(e).claims
return"object"==typeof t&&!0===t.admin},t.isBrowser=function(){return"object"==typeof self&&self.self===self},t.isBrowserExtension=function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0
return"object"==typeof e&&void 0!==e.id},t.isElectron=function(){return g().indexOf("Electron/")>=0},t.isEmpty=function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1
return!0},t.isIE=function(){const e=g()
return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0},t.isIndexedDBAvailable=function(){try{return"object"==typeof indexedDB}catch(e){return!1}},t.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())},t.isNode=m,t.isNodeSdk=function(){return!0===n.NODE_CLIENT||!0===n.NODE_ADMIN},t.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},t.isSafari=function(){return!m()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")},t.isUWP=function(){return g().indexOf("MSAppHost/")>=0},t.isValidFormat=function(e){const t=k(e).claims
return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},t.isValidTimestamp=function(e){const t=k(e).claims,n=Math.floor((new Date).getTime()/1e3)
let r=0,i=0
return"object"==typeof t&&(t.hasOwnProperty("nbf")?r=t.nbf:t.hasOwnProperty("iat")&&(r=t.iat),i=t.hasOwnProperty("exp")?t.exp:r+86400),!!n&&!!r&&!!i&&n>=r&&n<=i},t.issuedAtTime=function(e){const t=k(e).claims
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
for(let i=0;i<e.length;i++){let o=e.charCodeAt(i)
if(o>=55296&&o<=56319){const t=o-55296
i++,r(i<e.length,"Surrogate pair missing trail surrogate."),o=65536+(t<<10)+(e.charCodeAt(i)-56320)}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},t.stringify=function(e){return JSON.stringify(e)},t.uuidv4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0
return("x"===e?t:3&t|8).toString(16)}))},t.validateArgCount=function(e,t,n,r){let i
if(r<t?i="at least "+t:r>n&&(i=0===n?"none":"no more than "+n),i)throw new Error(e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".")},t.validateCallback=function(e,t,n,r){if((!r||n)&&"function"!=typeof n)throw new Error(T(e,t)+"must be a valid function.")},t.validateContextObject=function(e,t,n,r){if((!r||n)&&("object"!=typeof n||null===n))throw new Error(T(e,t)+"must be a valid context object.")},t.validateIndexedDBOpenable=function(){return new Promise(((e,t)=>{try{let n=!0
const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r)
i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e
t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))},t.validateNamespace=function(e,t,n){if((!n||t)&&"string"!=typeof t)throw new Error(T(e,"namespace")+"must be a valid firebase namespace.")}},843:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{afterMain:()=>k,afterRead:()=>y,afterWrite:()=>S,applyStyles:()=>A,arrow:()=>X,auto:()=>a,basePlacements:()=>l,beforeMain:()=>b,beforeRead:()=>m,beforeWrite:()=>C,bottom:()=>i,clippingParents:()=>h,computeStyles:()=>ne,createPopper:()=>Ne,createPopperBase:()=>Oe,createPopperLite:()=>Ae,detectOverflow:()=>me,end:()=>u,eventListeners:()=>ie,flip:()=>ve,hide:()=>we,left:()=>s,main:()=>w,modifierPhases:()=>T,offset:()=>ke,placements:()=>g,popper:()=>p,popperGenerator:()=>Ie,popperOffsets:()=>Ce,preventOverflow:()=>Ee,read:()=>v,reference:()=>f,right:()=>o,start:()=>c,top:()=>r,variationPlacements:()=>_,viewport:()=>d,write:()=>E})
var r="top",i="bottom",o="right",s="left",a="auto",l=[r,i,o,s],c="start",u="end",h="clippingParents",d="viewport",p="popper",f="reference",_=l.reduce((function(e,t){return e.concat([t+"-"+c,t+"-"+u])}),[]),g=[].concat(l,[a]).reduce((function(e,t){return e.concat([t,t+"-"+c,t+"-"+u])}),[]),m="beforeRead",v="read",y="afterRead",b="beforeMain",w="main",k="afterMain",C="beforeWrite",E="write",S="afterWrite",T=[m,v,y,b,w,k,C,E,S]
function x(e){return e?(e.nodeName||"").toLowerCase():null}function P(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}function I(e){return e instanceof P(e).Element||e instanceof Element}function O(e){return e instanceof P(e).HTMLElement||e instanceof HTMLElement}function N(e){return"undefined"!=typeof ShadowRoot&&(e instanceof P(e).ShadowRoot||e instanceof ShadowRoot)}const A={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e]
O(i)&&x(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e]
!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{})
O(r)&&x(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]}
function D(e){return e.split("-")[0]}var R=Math.max,L=Math.min,M=Math.round
function j(){var e=navigator.userAgentData
return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function F(){return!/^((?!chrome|android).)*safari/i.test(j())}function z(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1)
var r=e.getBoundingClientRect(),i=1,o=1
t&&O(e)&&(i=e.offsetWidth>0&&M(r.width)/e.offsetWidth||1,o=e.offsetHeight>0&&M(r.height)/e.offsetHeight||1)
var s=(I(e)?P(e):window).visualViewport,a=!F()&&n,l=(r.left+(a&&s?s.offsetLeft:0))/i,c=(r.top+(a&&s?s.offsetTop:0))/o,u=r.width/i,h=r.height/o
return{width:u,height:h,top:c,right:l+u,bottom:c+h,left:l,x:l,y:c}}function q(e){var t=z(e),n=e.offsetWidth,r=e.offsetHeight
return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function B(e,t){var n=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(n&&N(n)){var r=t
do{if(r&&e.isSameNode(r))return!0
r=r.parentNode||r.host}while(r)}return!1}function H(e){return P(e).getComputedStyle(e)}function W(e){return["table","td","th"].indexOf(x(e))>=0}function U(e){return((I(e)?e.ownerDocument:e.document)||window.document).documentElement}function V(e){return"html"===x(e)?e:e.assignedSlot||e.parentNode||(N(e)?e.host:null)||U(e)}function $(e){return O(e)&&"fixed"!==H(e).position?e.offsetParent:null}function G(e){for(var t=P(e),n=$(e);n&&W(n)&&"static"===H(n).position;)n=$(n)
return n&&("html"===x(n)||"body"===x(n)&&"static"===H(n).position)?t:n||function(e){var t=/firefox/i.test(j())
if(/Trident/i.test(j())&&O(e)&&"fixed"===H(e).position)return null
var n=V(e)
for(N(n)&&(n=n.host);O(n)&&["html","body"].indexOf(x(n))<0;){var r=H(n)
if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n
n=n.parentNode}return null}(e)||t}function K(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Y(e,t,n){return R(e,L(t,n))}function Q(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function J(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}const X={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,a=e.name,c=e.options,u=n.elements.arrow,h=n.modifiersData.popperOffsets,d=D(n.placement),p=K(d),f=[s,o].indexOf(d)>=0?"height":"width"
if(u&&h){var _=function(e,t){return Q("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:J(e,l))}(c.padding,n),g=q(u),m="y"===p?r:s,v="y"===p?i:o,y=n.rects.reference[f]+n.rects.reference[p]-h[p]-n.rects.popper[f],b=h[p]-n.rects.reference[p],w=G(u),k=w?"y"===p?w.clientHeight||0:w.clientWidth||0:0,C=y/2-b/2,E=_[m],S=k-g[f]-_[v],T=k/2-g[f]/2+C,x=Y(E,T,S),P=p
n.modifiersData[a]=((t={})[P]=x,t.centerOffset=x-T,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n
null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&B(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}
function Z(e){return e.split("-")[1]}var ee={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function te(e){var t,n=e.popper,a=e.popperRect,l=e.placement,c=e.variation,h=e.offsets,d=e.position,p=e.gpuAcceleration,f=e.adaptive,_=e.roundOffsets,g=e.isFixed,m=h.x,v=void 0===m?0:m,y=h.y,b=void 0===y?0:y,w="function"==typeof _?_({x:v,y:b}):{x:v,y:b}
v=w.x,b=w.y
var k=h.hasOwnProperty("x"),C=h.hasOwnProperty("y"),E=s,S=r,T=window
if(f){var x=G(n),I="clientHeight",O="clientWidth"
x===P(n)&&"static"!==H(x=U(n)).position&&"absolute"===d&&(I="scrollHeight",O="scrollWidth"),(l===r||(l===s||l===o)&&c===u)&&(S=i,b-=(g&&x===T&&T.visualViewport?T.visualViewport.height:x[I])-a.height,b*=p?1:-1),l!==s&&(l!==r&&l!==i||c!==u)||(E=o,v-=(g&&x===T&&T.visualViewport?T.visualViewport.width:x[O])-a.width,v*=p?1:-1)}var N,A=Object.assign({position:d},f&&ee),D=!0===_?function(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1
return{x:M(n*i)/i||0,y:M(r*i)/i||0}}({x:v,y:b},P(n)):{x:v,y:b}
return v=D.x,b=D.y,p?Object.assign({},A,((N={})[S]=C?"0":"",N[E]=k?"0":"",N.transform=(T.devicePixelRatio||1)<=1?"translate("+v+"px, "+b+"px)":"translate3d("+v+"px, "+b+"px, 0)",N)):Object.assign({},A,((t={})[S]=C?b+"px":"",t[E]=k?v+"px":"",t.transform="",t))}const ne={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,o=n.adaptive,s=void 0===o||o,a=n.roundOffsets,l=void 0===a||a,c={placement:D(t.placement),variation:Z(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,te(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,te(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}
var re={passive:!0}
const ie={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,o=void 0===i||i,s=r.resize,a=void 0===s||s,l=P(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return o&&c.forEach((function(e){e.addEventListener("scroll",n.update,re)})),a&&l.addEventListener("resize",n.update,re),function(){o&&c.forEach((function(e){e.removeEventListener("scroll",n.update,re)})),a&&l.removeEventListener("resize",n.update,re)}},data:{}}
var oe={left:"right",right:"left",bottom:"top",top:"bottom"}
function se(e){return e.replace(/left|right|bottom|top/g,(function(e){return oe[e]}))}var ae={start:"end",end:"start"}
function le(e){return e.replace(/start|end/g,(function(e){return ae[e]}))}function ce(e){var t=P(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ue(e){return z(U(e)).left+ce(e).scrollLeft}function he(e){var t=H(e),n=t.overflow,r=t.overflowX,i=t.overflowY
return/auto|scroll|overlay|hidden/.test(n+i+r)}function de(e){return["html","body","#document"].indexOf(x(e))>=0?e.ownerDocument.body:O(e)&&he(e)?e:de(V(e))}function pe(e,t){var n
void 0===t&&(t=[])
var r=de(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),o=P(r),s=i?[o].concat(o.visualViewport||[],he(r)?r:[]):r,a=t.concat(s)
return i?a:a.concat(pe(V(s)))}function fe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function _e(e,t,n){return t===d?fe(function(e,t){var n=P(e),r=U(e),i=n.visualViewport,o=r.clientWidth,s=r.clientHeight,a=0,l=0
if(i){o=i.width,s=i.height
var c=F();(c||!c&&"fixed"===t)&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a+ue(e),y:l}}(e,n)):I(t)?function(e,t){var n=z(e,!1,"fixed"===t)
return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):fe(function(e){var t,n=U(e),r=ce(e),i=null==(t=e.ownerDocument)?void 0:t.body,o=R(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=R(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+ue(e),l=-r.scrollTop
return"rtl"===H(i||n).direction&&(a+=R(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:s,x:a,y:l}}(U(e)))}function ge(e){var t,n=e.reference,a=e.element,l=e.placement,h=l?D(l):null,d=l?Z(l):null,p=n.x+n.width/2-a.width/2,f=n.y+n.height/2-a.height/2
switch(h){case r:t={x:p,y:n.y-a.height}
break
case i:t={x:p,y:n.y+n.height}
break
case o:t={x:n.x+n.width,y:f}
break
case s:t={x:n.x-a.width,y:f}
break
default:t={x:n.x,y:n.y}}var _=h?K(h):null
if(null!=_){var g="y"===_?"height":"width"
switch(d){case c:t[_]=t[_]-(n[g]/2-a[g]/2)
break
case u:t[_]=t[_]+(n[g]/2-a[g]/2)}}return t}function me(e,t){void 0===t&&(t={})
var n=t,s=n.placement,a=void 0===s?e.placement:s,c=n.strategy,u=void 0===c?e.strategy:c,_=n.boundary,g=void 0===_?h:_,m=n.rootBoundary,v=void 0===m?d:m,y=n.elementContext,b=void 0===y?p:y,w=n.altBoundary,k=void 0!==w&&w,C=n.padding,E=void 0===C?0:C,S=Q("number"!=typeof E?E:J(E,l)),T=b===p?f:p,P=e.rects.popper,N=e.elements[k?T:b],A=function(e,t,n,r){var i="clippingParents"===t?function(e){var t=pe(V(e)),n=["absolute","fixed"].indexOf(H(e).position)>=0&&O(e)?G(e):e
return I(n)?t.filter((function(e){return I(e)&&B(e,n)&&"body"!==x(e)})):[]}(e):[].concat(t),o=[].concat(i,[n]),s=o[0],a=o.reduce((function(t,n){var i=_e(e,n,r)
return t.top=R(i.top,t.top),t.right=L(i.right,t.right),t.bottom=L(i.bottom,t.bottom),t.left=R(i.left,t.left),t}),_e(e,s,r))
return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(I(N)?N:N.contextElement||U(e.elements.popper),g,v,u),D=z(e.elements.reference),M=ge({reference:D,element:P,strategy:"absolute",placement:a}),j=fe(Object.assign({},P,M)),F=b===p?j:D,q={top:A.top-F.top+S.top,bottom:F.bottom-A.bottom+S.bottom,left:A.left-F.left+S.left,right:F.right-A.right+S.right},W=e.modifiersData.offset
if(b===p&&W){var $=W[a]
Object.keys(q).forEach((function(e){var t=[o,i].indexOf(e)>=0?1:-1,n=[r,i].indexOf(e)>=0?"y":"x"
q[e]+=$[n]*t}))}return q}const ve={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,u=e.name
if(!t.modifiersData[u]._skip){for(var h=n.mainAxis,d=void 0===h||h,p=n.altAxis,f=void 0===p||p,m=n.fallbackPlacements,v=n.padding,y=n.boundary,b=n.rootBoundary,w=n.altBoundary,k=n.flipVariations,C=void 0===k||k,E=n.allowedAutoPlacements,S=t.options.placement,T=D(S),x=m||(T!==S&&C?function(e){if(D(e)===a)return[]
var t=se(e)
return[le(e),t,le(t)]}(S):[se(S)]),P=[S].concat(x).reduce((function(e,n){return e.concat(D(n)===a?function(e,t){void 0===t&&(t={})
var n=t,r=n.placement,i=n.boundary,o=n.rootBoundary,s=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?g:c,h=Z(r),d=h?a?_:_.filter((function(e){return Z(e)===h})):l,p=d.filter((function(e){return u.indexOf(e)>=0}))
0===p.length&&(p=d)
var f=p.reduce((function(t,n){return t[n]=me(e,{placement:n,boundary:i,rootBoundary:o,padding:s})[D(n)],t}),{})
return Object.keys(f).sort((function(e,t){return f[e]-f[t]}))}(t,{placement:n,boundary:y,rootBoundary:b,padding:v,flipVariations:C,allowedAutoPlacements:E}):n)}),[]),I=t.rects.reference,O=t.rects.popper,N=new Map,A=!0,R=P[0],L=0;L<P.length;L++){var M=P[L],j=D(M),F=Z(M)===c,z=[r,i].indexOf(j)>=0,q=z?"width":"height",B=me(t,{placement:M,boundary:y,rootBoundary:b,altBoundary:w,padding:v}),H=z?F?o:s:F?i:r
I[q]>O[q]&&(H=se(H))
var W=se(H),U=[]
if(d&&U.push(B[j]<=0),f&&U.push(B[H]<=0,B[W]<=0),U.every((function(e){return e}))){R=M,A=!1
break}N.set(M,U)}if(A)for(var V=function(e){var t=P.find((function(t){var n=N.get(t)
if(n)return n.slice(0,e).every((function(e){return e}))}))
if(t)return R=t,"break"},$=C?3:1;$>0&&"break"!==V($);$--);t.placement!==R&&(t.modifiersData[u]._skip=!0,t.placement=R,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}
function ye(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function be(e){return[r,o,i,s].some((function(t){return e[t]>=0}))}const we={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,s=me(t,{elementContext:"reference"}),a=me(t,{altBoundary:!0}),l=ye(s,r),c=ye(a,i,o),u=be(l),h=be(c)
t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}},ke={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,a=n.offset,l=void 0===a?[0,0]:a,c=g.reduce((function(e,n){return e[n]=function(e,t,n){var i=D(e),a=[s,r].indexOf(i)>=0?-1:1,l="function"==typeof n?n(Object.assign({},t,{placement:e})):n,c=l[0],u=l[1]
return c=c||0,u=(u||0)*a,[s,o].indexOf(i)>=0?{x:u,y:c}:{x:c,y:u}}(n,t.rects,l),e}),{}),u=c[t.placement],h=u.x,d=u.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=h,t.modifiersData.popperOffsets.y+=d),t.modifiersData[i]=c}},Ce={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name
t.modifiersData[n]=ge({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},Ee={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,a=e.name,l=n.mainAxis,u=void 0===l||l,h=n.altAxis,d=void 0!==h&&h,p=n.boundary,f=n.rootBoundary,_=n.altBoundary,g=n.padding,m=n.tether,v=void 0===m||m,y=n.tetherOffset,b=void 0===y?0:y,w=me(t,{boundary:p,rootBoundary:f,padding:g,altBoundary:_}),k=D(t.placement),C=Z(t.placement),E=!C,S=K(k),T="x"===S?"y":"x",x=t.modifiersData.popperOffsets,P=t.rects.reference,I=t.rects.popper,O="function"==typeof b?b(Object.assign({},t.rects,{placement:t.placement})):b,N="number"==typeof O?{mainAxis:O,altAxis:O}:Object.assign({mainAxis:0,altAxis:0},O),A=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0}
if(x){if(u){var j,F="y"===S?r:s,z="y"===S?i:o,B="y"===S?"height":"width",H=x[S],W=H+w[F],U=H-w[z],V=v?-I[B]/2:0,$=C===c?P[B]:I[B],Q=C===c?-I[B]:-P[B],J=t.elements.arrow,X=v&&J?q(J):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[F],ne=ee[z],re=Y(0,P[B],X[B]),ie=E?P[B]/2-V-re-te-N.mainAxis:$-re-te-N.mainAxis,oe=E?-P[B]/2+V+re+ne+N.mainAxis:Q+re+ne+N.mainAxis,se=t.elements.arrow&&G(t.elements.arrow),ae=se?"y"===S?se.clientTop||0:se.clientLeft||0:0,le=null!=(j=null==A?void 0:A[S])?j:0,ce=H+oe-le,ue=Y(v?L(W,H+ie-le-ae):W,H,v?R(U,ce):U)
x[S]=ue,M[S]=ue-H}if(d){var he,de="x"===S?r:s,pe="x"===S?i:o,fe=x[T],_e="y"===T?"height":"width",ge=fe+w[de],ve=fe-w[pe],ye=-1!==[r,s].indexOf(k),be=null!=(he=null==A?void 0:A[T])?he:0,we=ye?ge:fe-P[_e]-I[_e]-be+N.altAxis,ke=ye?fe+P[_e]+I[_e]-be-N.altAxis:ve,Ce=v&&ye?function(e,t,n){var r=Y(e,t,n)
return r>n?n:r}(we,fe,ke):Y(v?we:ge,fe,v?ke:ve)
x[T]=Ce,M[T]=Ce-fe}t.modifiersData[a]=M}},requiresIfExists:["offset"]}
function Se(e,t,n){void 0===n&&(n=!1)
var r,i,o=O(t),s=O(t)&&function(e){var t=e.getBoundingClientRect(),n=M(t.width)/e.offsetWidth||1,r=M(t.height)/e.offsetHeight||1
return 1!==n||1!==r}(t),a=U(t),l=z(e,s,n),c={scrollLeft:0,scrollTop:0},u={x:0,y:0}
return(o||!o&&!n)&&(("body"!==x(t)||he(a))&&(c=(r=t)!==P(r)&&O(r)?{scrollLeft:(i=r).scrollLeft,scrollTop:i.scrollTop}:ce(r)),O(t)?((u=z(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):a&&(u.x=ue(a))),{x:l.left+c.scrollLeft-u.x,y:l.top+c.scrollTop-u.y,width:l.width,height:l.height}}function Te(e){var t=new Map,n=new Set,r=[]
function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e)
r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}var xe={placement:"bottom",modifiers:[],strategy:"absolute"}
function Pe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Ie(e){void 0===e&&(e={})
var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,o=void 0===i?xe:i
return function(e,t,n){void 0===n&&(n=o)
var i,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},xe,o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},l=[],c=!1,u={state:a,setOptions:function(n){var i="function"==typeof n?n(a.options):n
h(),a.options=Object.assign({},o,a.options,i),a.scrollParents={reference:I(e)?pe(e):e.contextElement?pe(e.contextElement):[],popper:pe(t)}
var s,c,d=function(e){var t=Te(e)
return T.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(r,a.options.modifiers),c=s.reduce((function(e,t){var n=e[t.name]
return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))))
return a.orderedModifiers=d.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect
if("function"==typeof i){var o=i({state:a,name:t,instance:u,options:r})
l.push(o||function(){})}})),u.update()},forceUpdate:function(){if(!c){var e=a.elements,t=e.reference,n=e.popper
if(Pe(t,n)){a.rects={reference:Se(t,G(n),"fixed"===a.options.strategy),popper:q(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}))
for(var r=0;r<a.orderedModifiers.length;r++)if(!0!==a.reset){var i=a.orderedModifiers[r],o=i.fn,s=i.options,l=void 0===s?{}:s,h=i.name
"function"==typeof o&&(a=o({state:a,options:l,name:h,instance:u})||a)}else a.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(a)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){h(),c=!0}}
if(!Pe(e,t))return u
function h(){l.forEach((function(e){return e()})),l=[]}return u.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var Oe=Ie(),Ne=Ie({defaultModifiers:[ie,Ce,ne,A,ke,ve,Ee,X,we]}),Ae=Ie({defaultModifiers:[ie,Ce,ne,A]})},929:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>h})
var r=n(663),i=n.n(r),o=n(336),s=n.n(o),a=n(603),l=n(630)
function c(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var n=e[Symbol.toPrimitive]
if(void 0!==n){var r=n.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){}class h extends(s()){constructor(...e){super(...e),c(this,"tagName",u),c(this,"componentClass",void 0)}compute(e,t){(0,a.assert)("The `element` helper takes a single positional argument",1===e.length),(0,a.assert)("The `element` helper does not take any named arguments",0===Object.keys(t).length)
let n=e[0]
return n!==this.tagName&&(this.tagName=n,"string"==typeof n?this.componentClass=(0,l.ensureSafeComponent)(class extends(i()){constructor(...e){super(...e),c(this,"tagName",n)}},this):(this.componentClass=void 0,(0,a.runInDebug)((()=>{let e="The argument passed to the `element` helper must be a string"
try{e+=` (you passed \`${n}\`)`}catch(e){}(0,a.assert)(e,null==n)})))),this.componentClass}}},343:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>R})
var r=n(377),i=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=i.join(","),s="undefined"==typeof Element,a=s?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,l=!s&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},c=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(o))
return t&&a.call(e,o)&&r.unshift(e),r.filter(n)},u=function e(t,n,r){for(var i=[],s=Array.from(t);s.length;){var l=s.shift()
if("SLOT"===l.tagName){var c=l.assignedElements(),u=e(c.length?c:l.children,!0,r)
r.flatten?i.push.apply(i,u):i.push({scope:l,candidates:u})}else{a.call(l,o)&&r.filter(l)&&(n||!t.includes(l))&&i.push(l)
var h=l.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(l),d=!r.shadowRootFilter||r.shadowRootFilter(l)
if(h&&d){var p=e(!0===h?l.children:h.children,!0,r)
r.flatten?i.push.apply(i,p):i.push({scope:l,candidates:p})}else s.unshift.apply(s,l.children)}}return i},h=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},d=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},p=function(e){return"INPUT"===e.tagName},f=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height
return 0===n&&0===r},_=function(e,t){return!(t.disabled||function(e){return p(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,r=t.getShadowRoot
if("hidden"===getComputedStyle(e).visibility)return!0
var i=a.call(e,"details>summary:first-of-type")?e.parentElement:e
if(a.call(i,"details:not([open]) *"))return!0
var o=l(e).host,s=(null==o?void 0:o.ownerDocument.contains(o))||e.ownerDocument.contains(e)
if(n&&"full"!==n){if("non-zero-area"===n)return f(e)}else{if("function"==typeof r){for(var c=e;e;){var u=e.parentElement,h=l(e)
if(u&&!u.shadowRoot&&!0===r(u))return f(e)
e=e.assignedSlot?e.assignedSlot:u||h===e.ownerDocument?u:h.host}e=c}if(s)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n)
if("LEGEND"===r.tagName)return!!a.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},g=function(e,t){return!(function(e){return function(e){return p(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0
var t,n=e.form||l(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name))
else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var i=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form)
return!i||i===e}(e)}(t)||h(t)<0||!_(e,t))},m=function(e){var t=parseInt(e.getAttribute("tabindex"),10)
return!!(isNaN(t)||t>=0)},v=function e(t){var n=[],r=[]
return t.forEach((function(t,i){var o=!!t.scope,s=o?t.scope:t,a=h(s,o),l=o?e(t.candidates):s
0===a?o?n.push.apply(n,l):n.push(s):r.push({documentOrder:i,tabIndex:a,item:t,isScope:o,content:l})})),r.sort(d).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},y=function(e,t){var n
return n=(t=t||{}).getShadowRoot?u([e],t.includeContainer,{filter:g.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:m}):c(e,t.includeContainer,g.bind(null,t)),v(n)},b=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==a.call(e,o)&&g(t,e)},w=i.concat("iframe").join(","),k=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==a.call(e,w)&&_(t,e)}
function C(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?C(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T,x=(T=[],{activateTrap:function(e){if(T.length>0){var t=T[T.length-1]
t!==e&&t.pause()}var n=T.indexOf(e);-1===n||T.splice(n,1),T.push(e)},deactivateTrap:function(e){var t=T.indexOf(e);-1!==t&&T.splice(t,1),T.length>0&&T[T.length-1].unpause()}}),P=function(e){return setTimeout(e,0)},I=function(e,t){var n=-1
return e.every((function(e,r){return!t(e)||(n=r,!1)})),n},O=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return"function"==typeof e?e.apply(void 0,n):e},N=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},A=function(e,t){var n,r=(null==t?void 0:t.document)||document,i=E({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),o={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},s=function(e,t,n){return e&&void 0!==e[t]?e[t]:i[n||t]},a=function(e){return o.containerGroups.findIndex((function(t){var n=t.container,r=t.tabbableNodes
return n.contains(e)||r.find((function(t){return t===e}))}))},l=function(e){var t=i[e]
if("function"==typeof t){for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s]
t=t.apply(void 0,o)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t
throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var a=t
if("string"==typeof t&&!(a=r.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"))
return a},h=function(){var e=l("initialFocus")
if(!1===e)return!1
if(void 0===e)if(a(r.activeElement)>=0)e=r.activeElement
else{var t=o.tabbableGroups[0]
e=t&&t.firstTabbableNode||l("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element")
return e},d=function(){if(o.containerGroups=o.containers.map((function(e){var t,n,r=y(e,i.tabbableOptions),o=(t=e,(n=(n=i.tabbableOptions)||{}).getShadowRoot?u([t],n.includeContainer,{filter:_.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):c(t,n.includeContainer,_.bind(null,n)))
return{container:e,tabbableNodes:r,focusableNodes:o,firstTabbableNode:r.length>0?r[0]:null,lastTabbableNode:r.length>0?r[r.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=o.findIndex((function(t){return t===e}))
if(!(n<0))return t?o.slice(n+1).find((function(e){return b(e,i.tabbableOptions)})):o.slice(0,n).reverse().find((function(e){return b(e,i.tabbableOptions)}))}}})),o.tabbableGroups=o.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),o.tabbableGroups.length<=0&&!l("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},p=function e(t){!1!==t&&t!==r.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!i.preventScroll}),o.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(h()))},f=function(e){var t=l("setReturnFocus",e)
return t||!1!==t&&e},g=function(e){var t=N(e)
a(t)>=0||(O(i.clickOutsideDeactivates,e)?n.deactivate({returnFocus:i.returnFocusOnDeactivate&&!k(t,i.tabbableOptions)}):O(i.allowOutsideClick,e)||e.preventDefault())},m=function(e){var t=N(e),n=a(t)>=0
n||t instanceof Document?n&&(o.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),p(o.mostRecentlyFocusedNode||h()))},v=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==O(i.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=N(e)
d()
var n=null
if(o.tabbableGroups.length>0){var r=a(t),s=r>=0?o.containerGroups[r]:void 0
if(r<0)n=e.shiftKey?o.tabbableGroups[o.tabbableGroups.length-1].lastTabbableNode:o.tabbableGroups[0].firstTabbableNode
else if(e.shiftKey){var c=I(o.tabbableGroups,(function(e){var n=e.firstTabbableNode
return t===n}))
if(c<0&&(s.container===t||k(t,i.tabbableOptions)&&!b(t,i.tabbableOptions)&&!s.nextTabbableNode(t,!1))&&(c=r),c>=0){var u=0===c?o.tabbableGroups.length-1:c-1
n=o.tabbableGroups[u].lastTabbableNode}}else{var h=I(o.tabbableGroups,(function(e){var n=e.lastTabbableNode
return t===n}))
if(h<0&&(s.container===t||k(t,i.tabbableOptions)&&!b(t,i.tabbableOptions)&&!s.nextTabbableNode(t))&&(h=r),h>=0){var f=h===o.tabbableGroups.length-1?0:h+1
n=o.tabbableGroups[f].firstTabbableNode}}}else n=l("fallbackFocus")
n&&(e.preventDefault(),p(n))}(e)},w=function(e){var t=N(e)
a(t)>=0||O(i.clickOutsideDeactivates,e)||O(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},C=function(){if(o.active)return x.activateTrap(n),o.delayInitialFocusTimer=i.delayInitialFocus?P((function(){p(h())})):p(h()),r.addEventListener("focusin",m,!0),r.addEventListener("mousedown",g,{capture:!0,passive:!1}),r.addEventListener("touchstart",g,{capture:!0,passive:!1}),r.addEventListener("click",w,{capture:!0,passive:!1}),r.addEventListener("keydown",v,{capture:!0,passive:!1}),n},S=function(){if(o.active)return r.removeEventListener("focusin",m,!0),r.removeEventListener("mousedown",g,!0),r.removeEventListener("touchstart",g,!0),r.removeEventListener("click",w,!0),r.removeEventListener("keydown",v,!0),n}
return(n={get active(){return o.active},get paused(){return o.paused},activate:function(e){if(o.active)return this
var t=s(e,"onActivate"),n=s(e,"onPostActivate"),i=s(e,"checkCanFocusTrap")
i||d(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=r.activeElement,t&&t()
var a=function(){i&&d(),C(),n&&n()}
return i?(i(o.containers.concat()).then(a,a),this):(a(),this)},deactivate:function(e){if(!o.active)return this
var t=E({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},e)
clearTimeout(o.delayInitialFocusTimer),o.delayInitialFocusTimer=void 0,S(),o.active=!1,o.paused=!1,x.deactivateTrap(n)
var r=s(t,"onDeactivate"),a=s(t,"onPostDeactivate"),l=s(t,"checkCanReturnFocus"),c=s(t,"returnFocus","returnFocusOnDeactivate")
r&&r()
var u=function(){P((function(){c&&p(f(o.nodeFocusedBeforeActivation)),a&&a()}))}
return c&&l?(l(f(o.nodeFocusedBeforeActivation)).then(u,u),this):(u(),this)},pause:function(){return o.paused||!o.active||(o.paused=!0,S()),this},unpause:function(){return o.paused&&o.active?(o.paused=!1,d(),C(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean)
return o.containers=t.map((function(e){return"string"==typeof e?r.querySelector(e):e})),o.active&&d(),this}}).updateContainerElements(e),n}
let D
try{D=(0,r.capabilities)("3.22")}catch{D=(0,r.capabilities)("3.13")}var R=(0,r.setModifierManager)((()=>({capabilities:D,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(e,t,{named:{isActive:n,isPaused:r,shouldSelfFocus:i,focusTrapOptions:o,additionalElements:s,_createFocusTrap:a}}){e.focusTrapOptions={...o}||{},void 0!==n&&(e.isActive=n),void 0!==r&&(e.isPaused=r),e.focusTrapOptions&&void 0===e.focusTrapOptions.initialFocus&&i&&(e.focusTrapOptions.initialFocus=t)
let l=A
a&&(l=a),!1!==e.focusTrapOptions.returnFocusOnDeactivate&&(e.focusTrapOptions.returnFocusOnDeactivate=!0),e.focusTrap=l(void 0!==s?[t,...s]:t,e.focusTrapOptions),e.isActive&&e.focusTrap.activate(),e.isPaused&&e.focusTrap.pause()},updateModifier(e,{named:t}){const n=t.focusTrapOptions||{}
if(e.isActive&&!t.isActive){const{returnFocusOnDeactivate:t}=n,r=void 0===t
e.focusTrap.deactivate({returnFocus:r})}else!e.isActive&&t.isActive&&e.focusTrap.activate()
e.isPaused&&!t.isPaused?e.focusTrap.unpause():!e.isPaused&&t.isPaused&&e.focusTrap.pause(),e.focusTrapOptions=n,void 0!==t.isActive&&(e.isActive=t.isActive),void 0!==t.isPaused&&(e.isPaused=t.isPaused)},destroyModifier({focusTrap:e}){e.deactivate()}})),class{})},853:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>l,modifier:()=>u})
var r=n(294),i=n(377),o=n(130)
function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class a{constructor(e){this.owner=e,s(this,"capabilities",(0,i.capabilities)("3.22"))}createModifier(e,t){return{instance:new e(this.owner,t),element:null}}installModifier(e,t,n){const r=function(e,t){const n=e
return n.element=t,n}(e,t)
r.instance.modify(t,n.positional,n.named)}updateModifier(e,t){e.instance.modify(e.element,t.positional,t.named)}destroyModifier({instance:e}){(0,o.destroy)(e)}}class l{constructor(e,t){(0,r.setOwner)(this,e)}modify(e,t,n){}}(0,i.setModifierManager)((e=>new a(e)),l)
const c=new class{constructor(){s(this,"capabilities",(0,i.capabilities)("3.22"))}createModifier(e){return{element:null,instance:e}}installModifier(e,t,n){const r=function(e,t){const n=e
return n.element=t,n}(e,t),{positional:i,named:o}=n,s=e.instance(t,i,o)
"function"==typeof s&&(r.teardown=s)}updateModifier(e,t){"function"==typeof e.teardown&&e.teardown()
const n=e.instance(e.element,t.positional,t.named)
"function"==typeof n&&(e.teardown=n)}destroyModifier(e){"function"==typeof e.teardown&&e.teardown()}}
function u(e){return(0,i.setModifierManager)((()=>c),e)}},81:(e,t,n)=>{"use strict"
function r(e,t,n){return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e
var n=e[Symbol.toPrimitive]
if(void 0!==n){var r=n.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e
var r}function i(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function o(e,t,n,r,i){var o={}
return Object.keys(r).forEach((function(e){o[e]=r[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}n.d(t,{_:()=>o,a:()=>i,b:()=>r})},266:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>h})
var r,i,o,s=n(81),a=n(735),l=n(336),c=n.n(l),u=n(666)
let h=(r=(0,a.inject)("page-title"),i=class extends(c()){constructor(e){super(e),(0,s.a)(this,"tokens",o,this),(0,s.b)(this,"tokenId",(0,u.guidFor)(this)),this.tokens.push({id:this.tokenId})}compute(e,t){const n={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(n),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},o=(0,s._)(i.prototype,"tokens",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i)},299:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>m})
var r,i,o,s,a,l=n(81),c=n(223),u=n(735),h=n.n(u),d=n(553),p=n(603)
const f="undefined"!=typeof FastBoot,_="routeDidChange",g=["separator","prepend","replace"]
let m=(r=(0,u.inject)("router"),i=(0,u.inject)("-document"),o=class extends(h()){constructor(e){if(super(e),(0,l.a)(this,"router",s,this),(0,l.a)(this,"document",a,this),(0,l.b)(this,"tokens",[]),(0,l.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,l.b)(this,"scheduleTitleUpdate",(()=>{(0,c.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement(),function(e){return"resolveRegistration"in e}(e)){const n=e.resolveRegistration("config:environment")
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
for(let o=0;o<n.length;o++){const e=n[o]
e&&"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}const r=this.document.createElement("title"),i=this.document.createTextNode(e)
r.appendChild(i),t.appendChild(r)}titleDidUpdate(e){}},s=(0,l._)(o.prototype,"router",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=(0,l._)(o.prototype,"document",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o)},125:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>l})
var r=n(853),i=n(141),o=n(603),s=n(553)
function a(e){return"object"==typeof e&&Boolean(e)}class l extends r.default{constructor(...e){var t,n,r,i
super(...e),t=this,n="existingStyles",r=new Set,(n="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e
var n=e[Symbol.toPrimitive]
if(void 0!==n){var r=n.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n))?i:i+"")in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}setStyles(e,t){const{existingStyles:n}=this,r=new Set(n)
n.clear(),t.forEach((([t,i])=>{(0,o.assert)(`Your given value for property '${t}' is ${i} (${(0,s.typeOf)(i)}). Accepted types are string and undefined. Please change accordingly.`,void 0===i||"string"===(0,s.typeOf)(i))
let a=""
i&&i.includes("!important")&&(a="important",i=i.replace("!important","")),e.style.setProperty(t,i,a),r.delete(t),n.add(t)})),r.forEach((t=>e.style.removeProperty(t)))}modify(e,t,n){this.setStyles(e,function(e,t){return[...e.filter(a),t].map((e=>Object.entries(e).map((([e,t])=>[(0,i.dasherize)(e),t])))).flat()}(t,n))}}},59:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(797)
r.registerVersion("firebase","10.12.1","app"),Object.keys(r).forEach((function(e){"default"===e||t.hasOwnProperty(e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}))},627:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(830)
Object.keys(r).forEach((function(e){"default"===e||t.hasOwnProperty(e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}))},742:function(e,t,n){var r;(function(){function i(e){"use strict"
var t={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:"Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}}
if(!1===e)return JSON.parse(JSON.stringify(t))
var n={}
for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r].defaultValue)
return n}var o={},s={},a={},l=i(!0),c="vanilla",u={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:i(!0),allOn:function(){"use strict"
var e=i(!0),t={}
for(var n in e)e.hasOwnProperty(n)&&(t[n]=!0)
return t}()}
function h(e,t){"use strict"
var n=t?"Error in "+t+" extension->":"Error in unnamed extension",r={valid:!0,error:""}
o.helper.isArray(e)||(e=[e])
for(var i=0;i<e.length;++i){var s=n+" sub-extension "+i+": ",a=e[i]
if("object"!=typeof a)return r.valid=!1,r.error=s+"must be an object, but "+typeof a+" given",r
if(!o.helper.isString(a.type))return r.valid=!1,r.error=s+'property "type" must be a string, but '+typeof a.type+" given",r
var l=a.type=a.type.toLowerCase()
if("language"===l&&(l=a.type="lang"),"html"===l&&(l=a.type="output"),"lang"!==l&&"output"!==l&&"listener"!==l)return r.valid=!1,r.error=s+"type "+l+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',r
if("listener"===l){if(o.helper.isUndefined(a.listeners))return r.valid=!1,r.error=s+'. Extensions of type "listener" must have a property called "listeners"',r}else if(o.helper.isUndefined(a.filter)&&o.helper.isUndefined(a.regex))return r.valid=!1,r.error=s+l+' extensions must define either a "regex" property or a "filter" method',r
if(a.listeners){if("object"!=typeof a.listeners)return r.valid=!1,r.error=s+'"listeners" property must be an object but '+typeof a.listeners+" given",r
for(var c in a.listeners)if(a.listeners.hasOwnProperty(c)&&"function"!=typeof a.listeners[c])return r.valid=!1,r.error=s+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+c+" must be a function but "+typeof a.listeners[c]+" given",r}if(a.filter){if("function"!=typeof a.filter)return r.valid=!1,r.error=s+'"filter" must be a function, but '+typeof a.filter+" given",r}else if(a.regex){if(o.helper.isString(a.regex)&&(a.regex=new RegExp(a.regex,"g")),!(a.regex instanceof RegExp))return r.valid=!1,r.error=s+'"regex" property must either be a string or a RegExp object, but '+typeof a.regex+" given",r
if(o.helper.isUndefined(a.replace))return r.valid=!1,r.error=s+'"regex" extensions must implement a replace string or function',r}}return r}function d(e,t){"use strict"
return"¨E"+t.charCodeAt(0)+"E"}o.helper={},o.extensions={},o.setOption=function(e,t){"use strict"
return l[e]=t,this},o.getOption=function(e){"use strict"
return l[e]},o.getOptions=function(){"use strict"
return l},o.resetOptions=function(){"use strict"
l=i(!0)},o.setFlavor=function(e){"use strict"
if(!u.hasOwnProperty(e))throw Error(e+" flavor was not found")
o.resetOptions()
var t=u[e]
for(var n in c=e,t)t.hasOwnProperty(n)&&(l[n]=t[n])},o.getFlavor=function(){"use strict"
return c},o.getFlavorOptions=function(e){"use strict"
if(u.hasOwnProperty(e))return u[e]},o.getDefaultOptions=function(e){"use strict"
return i(e)},o.subParser=function(e,t){"use strict"
if(o.helper.isString(e)){if(void 0===t){if(s.hasOwnProperty(e))return s[e]
throw Error("SubParser named "+e+" not registered!")}s[e]=t}},o.extension=function(e,t){"use strict"
if(!o.helper.isString(e))throw Error("Extension 'name' must be a string")
if(e=o.helper.stdExtName(e),o.helper.isUndefined(t)){if(!a.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!")
return a[e]}"function"==typeof t&&(t=t()),o.helper.isArray(t)||(t=[t])
var n=h(t,e)
if(!n.valid)throw Error(n.error)
a[e]=t},o.getAllExtensions=function(){"use strict"
return a},o.removeExtension=function(e){"use strict"
delete a[e]},o.resetExtensions=function(){"use strict"
a={}},o.validateExtension=function(e){"use strict"
var t=h(e,null)
return!!t.valid||(console.warn(t.error),!1)},o.hasOwnProperty("helper")||(o.helper={}),o.helper.isString=function(e){"use strict"
return"string"==typeof e||e instanceof String},o.helper.isFunction=function(e){"use strict"
return e&&"[object Function]"==={}.toString.call(e)},o.helper.isArray=function(e){"use strict"
return Array.isArray(e)},o.helper.isUndefined=function(e){"use strict"
return void 0===e},o.helper.forEach=function(e,t){"use strict"
if(o.helper.isUndefined(e))throw new Error("obj param is required")
if(o.helper.isUndefined(t))throw new Error("callback param is required")
if(!o.helper.isFunction(t))throw new Error("callback param must be a function/closure")
if("function"==typeof e.forEach)e.forEach(t)
else if(o.helper.isArray(e))for(var n=0;n<e.length;n++)t(e[n],n,e)
else{if("object"!=typeof e)throw new Error("obj does not seem to be an array or an iterable object")
for(var r in e)e.hasOwnProperty(r)&&t(e[r],r,e)}},o.helper.stdExtName=function(e){"use strict"
return e.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()},o.helper.escapeCharactersCallback=d,o.helper.escapeCharacters=function(e,t,n){"use strict"
var r="(["+t.replace(/([\[\]\\])/g,"\\$1")+"])"
n&&(r="\\\\"+r)
var i=new RegExp(r,"g")
return e.replace(i,d)},o.helper.unescapeHTMLEntities=function(e){"use strict"
return e.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}
var p=function(e,t,n,r){"use strict"
var i,o,s,a,l,c=r||"",u=c.indexOf("g")>-1,h=new RegExp(t+"|"+n,"g"+c.replace(/g/g,"")),d=new RegExp(t,c.replace(/g/g,"")),p=[]
do{for(i=0;s=h.exec(e);)if(d.test(s[0]))i++||(a=(o=h.lastIndex)-s[0].length)
else if(i&&! --i){l=s.index+s[0].length
var f={left:{start:a,end:o},match:{start:o,end:s.index},right:{start:s.index,end:l},wholeMatch:{start:a,end:l}}
if(p.push(f),!u)return p}}while(i&&(h.lastIndex=o))
return p}
o.helper.matchRecursiveRegExp=function(e,t,n,r){"use strict"
for(var i=p(e,t,n,r),o=[],s=0;s<i.length;++s)o.push([e.slice(i[s].wholeMatch.start,i[s].wholeMatch.end),e.slice(i[s].match.start,i[s].match.end),e.slice(i[s].left.start,i[s].left.end),e.slice(i[s].right.start,i[s].right.end)])
return o},o.helper.replaceRecursiveRegExp=function(e,t,n,r,i){"use strict"
if(!o.helper.isFunction(t)){var s=t
t=function(){return s}}var a=p(e,n,r,i),l=e,c=a.length
if(c>0){var u=[]
0!==a[0].wholeMatch.start&&u.push(e.slice(0,a[0].wholeMatch.start))
for(var h=0;h<c;++h)u.push(t(e.slice(a[h].wholeMatch.start,a[h].wholeMatch.end),e.slice(a[h].match.start,a[h].match.end),e.slice(a[h].left.start,a[h].left.end),e.slice(a[h].right.start,a[h].right.end))),h<c-1&&u.push(e.slice(a[h].wholeMatch.end,a[h+1].wholeMatch.start))
a[c-1].wholeMatch.end<e.length&&u.push(e.slice(a[c-1].wholeMatch.end)),l=u.join("")}return l},o.helper.regexIndexOf=function(e,t,n){"use strict"
if(!o.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string"
if(t instanceof RegExp==0)throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp"
var r=e.substring(n||0).search(t)
return r>=0?r+(n||0):r},o.helper.splitAtIndex=function(e,t){"use strict"
if(!o.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string"
return[e.substring(0,t),e.substring(t)]},o.helper.encodeEmailAddress=function(e){"use strict"
var t=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+e.charCodeAt(0).toString(16)+";"},function(e){return e}]
return e.replace(/./g,(function(e){if("@"===e)e=t[Math.floor(2*Math.random())](e)
else{var n=Math.random()
e=n>.9?t[2](e):n>.45?t[1](e):t[0](e)}return e}))},o.helper.padEnd=function(e,t,n){"use strict"
return t|=0,n=String(n||" "),e.length>t?String(e):((t-=e.length)>n.length&&(n+=n.repeat(t/n.length)),String(e)+n.slice(0,t))},"undefined"==typeof console&&(console={warn:function(e){"use strict"
alert(e)},log:function(e){"use strict"
alert(e)},error:function(e){"use strict"
throw e}}),o.helper.regexes={asteriskDashAndColon:/([*_:~])/g},o.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:"<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"},o.Converter=function(e){"use strict"
var t={},n=[],r=[],i={},s=c,d={parsed:{},raw:"",format:""}
function p(e,t){if(t=t||null,o.helper.isString(e)){if(t=e=o.helper.stdExtName(e),o.extensions[e])return console.warn("DEPRECATION WARNING: "+e+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),void function(e,t){"function"==typeof e&&(e=e(new o.Converter)),o.helper.isArray(e)||(e=[e])
var i=h(e,t)
if(!i.valid)throw Error(i.error)
for(var s=0;s<e.length;++s)switch(e[s].type){case"lang":n.push(e[s])
break
case"output":r.push(e[s])
break
default:throw Error("Extension loader error: Type unrecognized!!!")}}(o.extensions[e],e)
if(o.helper.isUndefined(a[e]))throw Error('Extension "'+e+'" could not be loaded. It was either not found or is not a valid extension.')
e=a[e]}"function"==typeof e&&(e=e()),o.helper.isArray(e)||(e=[e])
var i=h(e,t)
if(!i.valid)throw Error(i.error)
for(var s=0;s<e.length;++s){switch(e[s].type){case"lang":n.push(e[s])
break
case"output":r.push(e[s])}if(e[s].hasOwnProperty("listeners"))for(var l in e[s].listeners)e[s].listeners.hasOwnProperty(l)&&f(l,e[s].listeners[l])}}function f(e,t){if(!o.helper.isString(e))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof e+" given")
if("function"!=typeof t)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof t+" given")
i.hasOwnProperty(e)||(i[e]=[]),i[e].push(t)}!function(){for(var n in e=e||{},l)l.hasOwnProperty(n)&&(t[n]=l[n])
if("object"!=typeof e)throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.")
for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])
t.extensions&&o.helper.forEach(t.extensions,p)}(),this._dispatch=function(e,t,n,r){if(i.hasOwnProperty(e))for(var o=0;o<i[e].length;++o){var s=i[e][o](e,t,this,n,r)
s&&void 0!==s&&(t=s)}return t},this.listen=function(e,t){return f(e,t),this},this.makeHtml=function(e){if(!e)return e
var i={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:n,outputModifiers:r,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}}
return e=(e=(e=(e=(e=e.replace(/¨/g,"¨T")).replace(/\$/g,"¨D")).replace(/\r\n/g,"\n")).replace(/\r/g,"\n")).replace(/\u00A0/g,"&nbsp;"),t.smartIndentationFix&&(e=function(e){var t=e.match(/^\s*/)[0].length,n=new RegExp("^\\s{0,"+t+"}","gm")
return e.replace(n,"")}(e)),e="\n\n"+e+"\n\n",e=(e=o.subParser("detab")(e,t,i)).replace(/^[ \t]+$/gm,""),o.helper.forEach(n,(function(n){e=o.subParser("runExtension")(n,e,t,i)})),e=o.subParser("metadata")(e,t,i),e=o.subParser("hashPreCodeTags")(e,t,i),e=o.subParser("githubCodeBlocks")(e,t,i),e=o.subParser("hashHTMLBlocks")(e,t,i),e=o.subParser("hashCodeTags")(e,t,i),e=o.subParser("stripLinkDefinitions")(e,t,i),e=o.subParser("blockGamut")(e,t,i),e=o.subParser("unhashHTMLSpans")(e,t,i),e=(e=(e=o.subParser("unescapeSpecialChars")(e,t,i)).replace(/¨D/g,"$$")).replace(/¨T/g,"¨"),e=o.subParser("completeHTMLDocument")(e,t,i),o.helper.forEach(r,(function(n){e=o.subParser("runExtension")(n,e,t,i)})),d=i.metadata,e},this.makeMarkdown=this.makeMd=function(e,t){if(e=(e=(e=e.replace(/\r\n/g,"\n")).replace(/\r/g,"\n")).replace(/>[ \t]+</,">¨NBSP;<"),!t){if(!window||!window.document)throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM")
t=window.document}var n=t.createElement("div")
n.innerHTML=e
var r={preList:function(e){for(var t=e.querySelectorAll("pre"),n=[],r=0;r<t.length;++r)if(1===t[r].childElementCount&&"code"===t[r].firstChild.tagName.toLowerCase()){var i=t[r].firstChild.innerHTML.trim(),s=t[r].firstChild.getAttribute("data-language")||""
if(""===s)for(var a=t[r].firstChild.className.split(" "),l=0;l<a.length;++l){var c=a[l].match(/^language-(.+)$/)
if(null!==c){s=c[1]
break}}i=o.helper.unescapeHTMLEntities(i),n.push(i),t[r].outerHTML='<precode language="'+s+'" precodenum="'+r.toString()+'"></precode>'}else n.push(t[r].innerHTML),t[r].innerHTML="",t[r].setAttribute("prenum",r.toString())
return n}(n)}
!function e(t){for(var n=0;n<t.childNodes.length;++n){var r=t.childNodes[n]
3===r.nodeType?/\S/.test(r.nodeValue)||/^[ ]+$/.test(r.nodeValue)?(r.nodeValue=r.nodeValue.split("\n").join(" "),r.nodeValue=r.nodeValue.replace(/(\s)+/g,"$1")):(t.removeChild(r),--n):1===r.nodeType&&e(r)}}(n)
for(var i=n.childNodes,s="",a=0;a<i.length;a++)s+=o.subParser("makeMarkdown.node")(i[a],r)
return s},this.setOption=function(e,n){t[e]=n},this.getOption=function(e){return t[e]},this.getOptions=function(){return t},this.addExtension=function(e,t){p(e,t=t||null)},this.useExtension=function(e){p(e)},this.setFlavor=function(e){if(!u.hasOwnProperty(e))throw Error(e+" flavor was not found")
var n=u[e]
for(var r in s=e,n)n.hasOwnProperty(r)&&(t[r]=n[r])},this.getFlavor=function(){return s},this.removeExtension=function(e){o.helper.isArray(e)||(e=[e])
for(var t=0;t<e.length;++t){for(var i=e[t],s=0;s<n.length;++s)n[s]===i&&n.splice(s,1)
for(var a=0;a<r.length;++a)r[a]===i&&r.splice(a,1)}},this.getAllExtensions=function(){return{language:n,output:r}},this.getMetadata=function(e){return e?d.raw:d.parsed},this.getMetadataFormat=function(){return d.format},this._setMetadataPair=function(e,t){d.parsed[e]=t},this._setMetadataFormat=function(e){d.format=e},this._setMetadataRaw=function(e){d.raw=e}},o.subParser("anchors",(function(e,t,n){"use strict"
var r=function(e,r,i,s,a,l,c){if(o.helper.isUndefined(c)&&(c=""),i=i.toLowerCase(),e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)s=""
else if(!s){if(i||(i=r.toLowerCase().replace(/ ?\n/g," ")),s="#"+i,o.helper.isUndefined(n.gUrls[i]))return e
s=n.gUrls[i],o.helper.isUndefined(n.gTitles[i])||(c=n.gTitles[i])}var u='<a href="'+(s=s.replace(o.helper.regexes.asteriskDashAndColon,o.helper.escapeCharactersCallback))+'"'
return""!==c&&null!==c&&(u+=' title="'+(c=(c=c.replace(/"/g,"&quot;")).replace(o.helper.regexes.asteriskDashAndColon,o.helper.escapeCharactersCallback))+'"'),t.openLinksInNewWindow&&!/^#/.test(s)&&(u+=' rel="noopener noreferrer" target="¨E95Eblank"'),u+">"+r+"</a>"}
return e=(e=(e=(e=(e=n.converter._dispatch("anchors.before",e,t,n)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,r)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,r)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,r)).replace(/\[([^\[\]]+)]()()()()()/g,r),t.ghMentions&&(e=e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim,(function(e,n,r,i,s){if("\\"===r)return n+i
if(!o.helper.isString(t.ghMentionsLink))throw new Error("ghMentionsLink option must be a string")
var a=t.ghMentionsLink.replace(/\{u}/g,s),l=""
return t.openLinksInNewWindow&&(l=' rel="noopener noreferrer" target="¨E95Eblank"'),n+'<a href="'+a+'"'+l+">"+i+"</a>"}))),n.converter._dispatch("anchors.after",e,t,n)}))
var f=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,_=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,g=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,m=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,v=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,y=function(e){"use strict"
return function(t,n,r,i,s,a,l){var c=r=r.replace(o.helper.regexes.asteriskDashAndColon,o.helper.escapeCharactersCallback),u="",h="",d=n||"",p=l||""
return/^www\./i.test(r)&&(r=r.replace(/^www\./i,"http://www.")),e.excludeTrailingPunctuationFromURLs&&a&&(u=a),e.openLinksInNewWindow&&(h=' rel="noopener noreferrer" target="¨E95Eblank"'),d+'<a href="'+r+'"'+h+">"+c+"</a>"+u+p}},b=function(e,t){"use strict"
return function(n,r,i){var s="mailto:"
return r=r||"",i=o.subParser("unescapeSpecialChars")(i,e,t),e.encodeEmails?(s=o.helper.encodeEmailAddress(s+i),i=o.helper.encodeEmailAddress(i)):s+=i,r+'<a href="'+s+'">'+i+"</a>"}}
o.subParser("autoLinks",(function(e,t,n){"use strict"
return e=(e=(e=n.converter._dispatch("autoLinks.before",e,t,n)).replace(g,y(t))).replace(v,b(t,n)),n.converter._dispatch("autoLinks.after",e,t,n)})),o.subParser("simplifiedAutoLinks",(function(e,t,n){"use strict"
return t.simplifiedAutoLink?(e=n.converter._dispatch("simplifiedAutoLinks.before",e,t,n),e=(e=t.excludeTrailingPunctuationFromURLs?e.replace(_,y(t)):e.replace(f,y(t))).replace(m,b(t,n)),e=n.converter._dispatch("simplifiedAutoLinks.after",e,t,n)):e})),o.subParser("blockGamut",(function(e,t,n){"use strict"
return e=n.converter._dispatch("blockGamut.before",e,t,n),e=o.subParser("blockQuotes")(e,t,n),e=o.subParser("headers")(e,t,n),e=o.subParser("horizontalRule")(e,t,n),e=o.subParser("lists")(e,t,n),e=o.subParser("codeBlocks")(e,t,n),e=o.subParser("tables")(e,t,n),e=o.subParser("hashHTMLBlocks")(e,t,n),e=o.subParser("paragraphs")(e,t,n),n.converter._dispatch("blockGamut.after",e,t,n)})),o.subParser("blockQuotes",(function(e,t,n){"use strict"
e=n.converter._dispatch("blockQuotes.before",e,t,n),e+="\n\n"
var r=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm
return t.splitAdjacentBlockquotes&&(r=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),e=e.replace(r,(function(e){return e=(e=(e=e.replace(/^[ \t]*>[ \t]?/gm,"")).replace(/¨0/g,"")).replace(/^[ \t]+$/gm,""),e=o.subParser("githubCodeBlocks")(e,t,n),e=(e=(e=o.subParser("blockGamut")(e,t,n)).replace(/(^|\n)/g,"$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,(function(e,t){return t.replace(/^  /gm,"¨0").replace(/¨0/g,"")})),o.subParser("hashBlock")("<blockquote>\n"+e+"\n</blockquote>",t,n)})),n.converter._dispatch("blockQuotes.after",e,t,n)})),o.subParser("codeBlocks",(function(e,t,n){"use strict"
return e=n.converter._dispatch("codeBlocks.before",e,t,n),e=(e=(e+="¨0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g,(function(e,r,i){var s=r,a=i,l="\n"
return s=o.subParser("outdent")(s,t,n),s=o.subParser("encodeCode")(s,t,n),s=(s=(s=o.subParser("detab")(s,t,n)).replace(/^\n+/g,"")).replace(/\n+$/g,""),t.omitExtraWLInCodeBlocks&&(l=""),s="<pre><code>"+s+l+"</code></pre>",o.subParser("hashBlock")(s,t,n)+a}))).replace(/¨0/,""),n.converter._dispatch("codeBlocks.after",e,t,n)})),o.subParser("codeSpans",(function(e,t,n){"use strict"
return void 0===(e=n.converter._dispatch("codeSpans.before",e,t,n))&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,(function(e,r,i,s){var a=s
return a=(a=a.replace(/^([ \t]*)/g,"")).replace(/[ \t]*$/g,""),a=r+"<code>"+(a=o.subParser("encodeCode")(a,t,n))+"</code>",o.subParser("hashHTMLSpans")(a,t,n)})),n.converter._dispatch("codeSpans.after",e,t,n)})),o.subParser("completeHTMLDocument",(function(e,t,n){"use strict"
if(!t.completeHTMLDocument)return e
e=n.converter._dispatch("completeHTMLDocument.before",e,t,n)
var r="html",i="<!DOCTYPE HTML>\n",o="",s='<meta charset="utf-8">\n',a="",l=""
for(var c in void 0!==n.metadata.parsed.doctype&&(i="<!DOCTYPE "+n.metadata.parsed.doctype+">\n","html"!==(r=n.metadata.parsed.doctype.toString().toLowerCase())&&"html5"!==r||(s='<meta charset="utf-8">')),n.metadata.parsed)if(n.metadata.parsed.hasOwnProperty(c))switch(c.toLowerCase()){case"doctype":break
case"title":o="<title>"+n.metadata.parsed.title+"</title>\n"
break
case"charset":s="html"===r||"html5"===r?'<meta charset="'+n.metadata.parsed.charset+'">\n':'<meta name="charset" content="'+n.metadata.parsed.charset+'">\n'
break
case"language":case"lang":a=' lang="'+n.metadata.parsed[c]+'"',l+='<meta name="'+c+'" content="'+n.metadata.parsed[c]+'">\n'
break
default:l+='<meta name="'+c+'" content="'+n.metadata.parsed[c]+'">\n'}return e=i+"<html"+a+">\n<head>\n"+o+s+l+"</head>\n<body>\n"+e.trim()+"\n</body>\n</html>",n.converter._dispatch("completeHTMLDocument.after",e,t,n)})),o.subParser("detab",(function(e,t,n){"use strict"
return e=(e=(e=(e=(e=(e=n.converter._dispatch("detab.before",e,t,n)).replace(/\t(?=\t)/g,"    ")).replace(/\t/g,"¨A¨B")).replace(/¨B(.+?)¨A/g,(function(e,t){for(var n=t,r=4-n.length%4,i=0;i<r;i++)n+=" "
return n}))).replace(/¨A/g,"    ")).replace(/¨B/g,""),n.converter._dispatch("detab.after",e,t,n)})),o.subParser("ellipsis",(function(e,t,n){"use strict"
return t.ellipsis?(e=(e=n.converter._dispatch("ellipsis.before",e,t,n)).replace(/\.\.\./g,"…"),e=n.converter._dispatch("ellipsis.after",e,t,n)):e})),o.subParser("emoji",(function(e,t,n){"use strict"
return t.emoji?(e=(e=n.converter._dispatch("emoji.before",e,t,n)).replace(/:([\S]+?):/g,(function(e,t){return o.helper.emojis.hasOwnProperty(t)?o.helper.emojis[t]:e})),n.converter._dispatch("emoji.after",e,t,n)):e})),o.subParser("encodeAmpsAndAngles",(function(e,t,n){"use strict"
return e=(e=(e=(e=(e=n.converter._dispatch("encodeAmpsAndAngles.before",e,t,n)).replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;")).replace(/<(?![a-z\/?$!])/gi,"&lt;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;"),n.converter._dispatch("encodeAmpsAndAngles.after",e,t,n)})),o.subParser("encodeBackslashEscapes",(function(e,t,n){"use strict"
return e=(e=(e=n.converter._dispatch("encodeBackslashEscapes.before",e,t,n)).replace(/\\(\\)/g,o.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,o.helper.escapeCharactersCallback),n.converter._dispatch("encodeBackslashEscapes.after",e,t,n)})),o.subParser("encodeCode",(function(e,t,n){"use strict"
return e=(e=n.converter._dispatch("encodeCode.before",e,t,n)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,o.helper.escapeCharactersCallback),n.converter._dispatch("encodeCode.after",e,t,n)})),o.subParser("escapeSpecialCharsWithinTagAttributes",(function(e,t,n){"use strict"
return e=(e=(e=n.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",e,t,n)).replace(/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,(function(e){return e.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,o.helper.escapeCharactersCallback)}))).replace(/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi,(function(e){return e.replace(/([\\`*_~=|])/g,o.helper.escapeCharactersCallback)})),n.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",e,t,n)})),o.subParser("githubCodeBlocks",(function(e,t,n){"use strict"
return t.ghCodeBlocks?(e=n.converter._dispatch("githubCodeBlocks.before",e,t,n),e=(e=(e+="¨0").replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,(function(e,r,i,s){var a=t.omitExtraWLInCodeBlocks?"":"\n"
return s=o.subParser("encodeCode")(s,t,n),s="<pre><code"+(i?' class="'+i+" language-"+i+'"':"")+">"+(s=(s=(s=o.subParser("detab")(s,t,n)).replace(/^\n+/g,"")).replace(/\n+$/g,""))+a+"</code></pre>",s=o.subParser("hashBlock")(s,t,n),"\n\n¨G"+(n.ghCodeBlocks.push({text:e,codeblock:s})-1)+"G\n\n"}))).replace(/¨0/,""),n.converter._dispatch("githubCodeBlocks.after",e,t,n)):e})),o.subParser("hashBlock",(function(e,t,n){"use strict"
return e=(e=n.converter._dispatch("hashBlock.before",e,t,n)).replace(/(^\n+|\n+$)/g,""),e="\n\n¨K"+(n.gHtmlBlocks.push(e)-1)+"K\n\n",n.converter._dispatch("hashBlock.after",e,t,n)})),o.subParser("hashCodeTags",(function(e,t,n){"use strict"
return e=n.converter._dispatch("hashCodeTags.before",e,t,n),e=o.helper.replaceRecursiveRegExp(e,(function(e,r,i,s){var a=i+o.subParser("encodeCode")(r,t,n)+s
return"¨C"+(n.gHtmlSpans.push(a)-1)+"C"}),"<code\\b[^>]*>","</code>","gim"),n.converter._dispatch("hashCodeTags.after",e,t,n)})),o.subParser("hashElement",(function(e,t,n){"use strict"
return function(e,t){var r=t
return r=(r=(r=r.replace(/\n\n/g,"\n")).replace(/^\n/,"")).replace(/\n+$/g,""),"\n\n¨K"+(n.gHtmlBlocks.push(r)-1)+"K\n\n"}})),o.subParser("hashHTMLBlocks",(function(e,t,n){"use strict"
e=n.converter._dispatch("hashHTMLBlocks.before",e,t,n)
var r=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],i=function(e,t,r,i){var o=e
return-1!==r.search(/\bmarkdown\b/)&&(o=r+n.converter.makeHtml(t)+i),"\n\n¨K"+(n.gHtmlBlocks.push(o)-1)+"K\n\n"}
t.backslashEscapesHTMLTags&&(e=e.replace(/\\<(\/?[^>]+?)>/g,(function(e,t){return"&lt;"+t+"&gt;"})))
for(var s=0;s<r.length;++s)for(var a,l=new RegExp("^ {0,3}(<"+r[s]+"\\b[^>]*>)","im"),c="<"+r[s]+"\\b[^>]*>",u="</"+r[s]+">";-1!==(a=o.helper.regexIndexOf(e,l));){var h=o.helper.splitAtIndex(e,a),d=o.helper.replaceRecursiveRegExp(h[1],i,c,u,"im")
if(d===h[1])break
e=h[0].concat(d)}return e=e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,o.subParser("hashElement")(e,t,n)),e=(e=o.helper.replaceRecursiveRegExp(e,(function(e){return"\n\n¨K"+(n.gHtmlBlocks.push(e)-1)+"K\n\n"}),"^ {0,3}\x3c!--","--\x3e","gm")).replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,o.subParser("hashElement")(e,t,n)),n.converter._dispatch("hashHTMLBlocks.after",e,t,n)})),o.subParser("hashHTMLSpans",(function(e,t,n){"use strict"
function r(e){return"¨C"+(n.gHtmlSpans.push(e)-1)+"C"}return e=(e=(e=(e=(e=n.converter._dispatch("hashHTMLSpans.before",e,t,n)).replace(/<[^>]+?\/>/gi,(function(e){return r(e)}))).replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,(function(e){return r(e)}))).replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,(function(e){return r(e)}))).replace(/<[^>]+?>/gi,(function(e){return r(e)})),n.converter._dispatch("hashHTMLSpans.after",e,t,n)})),o.subParser("unhashHTMLSpans",(function(e,t,n){"use strict"
e=n.converter._dispatch("unhashHTMLSpans.before",e,t,n)
for(var r=0;r<n.gHtmlSpans.length;++r){for(var i=n.gHtmlSpans[r],o=0;/¨C(\d+)C/.test(i);){var s=RegExp.$1
if(i=i.replace("¨C"+s+"C",n.gHtmlSpans[s]),10===o){console.error("maximum nesting of 10 spans reached!!!")
break}++o}e=e.replace("¨C"+r+"C",i)}return n.converter._dispatch("unhashHTMLSpans.after",e,t,n)})),o.subParser("hashPreCodeTags",(function(e,t,n){"use strict"
return e=n.converter._dispatch("hashPreCodeTags.before",e,t,n),e=o.helper.replaceRecursiveRegExp(e,(function(e,r,i,s){var a=i+o.subParser("encodeCode")(r,t,n)+s
return"\n\n¨G"+(n.ghCodeBlocks.push({text:e,codeblock:a})-1)+"G\n\n"}),"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),n.converter._dispatch("hashPreCodeTags.after",e,t,n)})),o.subParser("headers",(function(e,t,n){"use strict"
e=n.converter._dispatch("headers.before",e,t,n)
var r=isNaN(parseInt(t.headerLevelStart))?1:parseInt(t.headerLevelStart),i=t.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,s=t.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm
e=(e=e.replace(i,(function(e,i){var s=o.subParser("spanGamut")(i,t,n),a=t.noHeaderId?"":' id="'+l(i)+'"',c="<h"+r+a+">"+s+"</h"+r+">"
return o.subParser("hashBlock")(c,t,n)}))).replace(s,(function(e,i){var s=o.subParser("spanGamut")(i,t,n),a=t.noHeaderId?"":' id="'+l(i)+'"',c=r+1,u="<h"+c+a+">"+s+"</h"+c+">"
return o.subParser("hashBlock")(u,t,n)}))
var a=t.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm
function l(e){var r,i
if(t.customizedHeaderId){var s=e.match(/\{([^{]+?)}\s*$/)
s&&s[1]&&(e=s[1])}return r=e,i=o.helper.isString(t.prefixHeaderId)?t.prefixHeaderId:!0===t.prefixHeaderId?"section-":"",t.rawPrefixHeaderId||(r=i+r),r=t.ghCompatibleHeaderId?r.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():t.rawHeaderId?r.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():r.replace(/[^\w]/g,"").toLowerCase(),t.rawPrefixHeaderId&&(r=i+r),n.hashLinkCounts[r]?r=r+"-"+n.hashLinkCounts[r]++:n.hashLinkCounts[r]=1,r}return e=e.replace(a,(function(e,i,s){var a=s
t.customizedHeaderId&&(a=s.replace(/\s?\{([^{]+?)}\s*$/,""))
var c=o.subParser("spanGamut")(a,t,n),u=t.noHeaderId?"":' id="'+l(s)+'"',h=r-1+i.length,d="<h"+h+u+">"+c+"</h"+h+">"
return o.subParser("hashBlock")(d,t,n)})),n.converter._dispatch("headers.after",e,t,n)})),o.subParser("horizontalRule",(function(e,t,n){"use strict"
e=n.converter._dispatch("horizontalRule.before",e,t,n)
var r=o.subParser("hashBlock")("<hr />",t,n)
return e=(e=(e=e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,r)).replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,r)).replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,r),n.converter._dispatch("horizontalRule.after",e,t,n)})),o.subParser("images",(function(e,t,n){"use strict"
function r(e,t,r,i,s,a,l,c){var u=n.gUrls,h=n.gTitles,d=n.gDimensions
if(r=r.toLowerCase(),c||(c=""),e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)i=""
else if(""===i||null===i){if(""!==r&&null!==r||(r=t.toLowerCase().replace(/ ?\n/g," ")),i="#"+r,o.helper.isUndefined(u[r]))return e
i=u[r],o.helper.isUndefined(h[r])||(c=h[r]),o.helper.isUndefined(d[r])||(s=d[r].width,a=d[r].height)}t=t.replace(/"/g,"&quot;").replace(o.helper.regexes.asteriskDashAndColon,o.helper.escapeCharactersCallback)
var p='<img src="'+(i=i.replace(o.helper.regexes.asteriskDashAndColon,o.helper.escapeCharactersCallback))+'" alt="'+t+'"'
return c&&o.helper.isString(c)&&(p+=' title="'+(c=c.replace(/"/g,"&quot;").replace(o.helper.regexes.asteriskDashAndColon,o.helper.escapeCharactersCallback))+'"'),s&&a&&(p+=' width="'+(s="*"===s?"auto":s)+'"',p+=' height="'+(a="*"===a?"auto":a)+'"'),p+" />"}return e=(e=(e=(e=(e=(e=n.converter._dispatch("images.before",e,t,n)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,r)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,(function(e,t,n,i,o,s,a,l){return r(e,t,n,i=i.replace(/\s/g,""),o,s,0,l)}))).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,r)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,r)).replace(/!\[([^\[\]]+)]()()()()()/g,r),n.converter._dispatch("images.after",e,t,n)})),o.subParser("italicsAndBold",(function(e,t,n){"use strict"
function r(e,t,n){return t+e+n}return e=n.converter._dispatch("italicsAndBold.before",e,t,n),e=t.literalMidWordUnderscores?(e=(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,(function(e,t){return r(t,"<strong><em>","</em></strong>")}))).replace(/\b__(\S[\s\S]*?)__\b/g,(function(e,t){return r(t,"<strong>","</strong>")}))).replace(/\b_(\S[\s\S]*?)_\b/g,(function(e,t){return r(t,"<em>","</em>")})):(e=(e=e.replace(/___(\S[\s\S]*?)___/g,(function(e,t){return/\S$/.test(t)?r(t,"<strong><em>","</em></strong>"):e}))).replace(/__(\S[\s\S]*?)__/g,(function(e,t){return/\S$/.test(t)?r(t,"<strong>","</strong>"):e}))).replace(/_([^\s_][\s\S]*?)_/g,(function(e,t){return/\S$/.test(t)?r(t,"<em>","</em>"):e})),e=t.literalMidWordAsterisks?(e=(e=e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,(function(e,t,n){return r(n,t+"<strong><em>","</em></strong>")}))).replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,(function(e,t,n){return r(n,t+"<strong>","</strong>")}))).replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,(function(e,t,n){return r(n,t+"<em>","</em>")})):(e=(e=e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,(function(e,t){return/\S$/.test(t)?r(t,"<strong><em>","</em></strong>"):e}))).replace(/\*\*(\S[\s\S]*?)\*\*/g,(function(e,t){return/\S$/.test(t)?r(t,"<strong>","</strong>"):e}))).replace(/\*([^\s*][\s\S]*?)\*/g,(function(e,t){return/\S$/.test(t)?r(t,"<em>","</em>"):e})),n.converter._dispatch("italicsAndBold.after",e,t,n)})),o.subParser("lists",(function(e,t,n){"use strict"
function r(e,r){n.gListLevel++,e=e.replace(/\n{2,}$/,"\n")
var i=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,s=/\n[ \t]*\n(?!¨0)/.test(e+="¨0")
return t.disableForced4SpacesIndentedSublists&&(i=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),e=(e=e.replace(i,(function(e,r,i,a,l,c,u){u=u&&""!==u.trim()
var h=o.subParser("outdent")(l,t,n),d=""
return c&&t.tasklists&&(d=' class="task-list-item" style="list-style-type: none;"',h=h.replace(/^[ \t]*\[(x|X| )?]/m,(function(){var e='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"'
return u&&(e+=" checked"),e+">"}))),h=h.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,(function(e){return"¨A"+e})),r||h.search(/\n{2,}/)>-1?(h=o.subParser("githubCodeBlocks")(h,t,n),h=o.subParser("blockGamut")(h,t,n)):(h=(h=o.subParser("lists")(h,t,n)).replace(/\n$/,""),h=(h=o.subParser("hashHTMLBlocks")(h,t,n)).replace(/\n\n+/g,"\n\n"),h=s?o.subParser("paragraphs")(h,t,n):o.subParser("spanGamut")(h,t,n)),"<li"+d+">"+(h=h.replace("¨A",""))+"</li>\n"}))).replace(/¨0/g,""),n.gListLevel--,r&&(e=e.replace(/\s+$/,"")),e}function i(e,t){if("ol"===t){var n=e.match(/^ *(\d+)\./)
if(n&&"1"!==n[1])return' start="'+n[1]+'"'}return""}function s(e,n,o){var s=t.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,a=t.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,l="ul"===n?s:a,c=""
if(-1!==e.search(l))!function t(u){var h=u.search(l),d=i(e,n);-1!==h?(c+="\n\n<"+n+d+">\n"+r(u.slice(0,h),!!o)+"</"+n+">\n",l="ul"==(n="ul"===n?"ol":"ul")?s:a,t(u.slice(h))):c+="\n\n<"+n+d+">\n"+r(u,!!o)+"</"+n+">\n"}(e)
else{var u=i(e,n)
c="\n\n<"+n+u+">\n"+r(e,!!o)+"</"+n+">\n"}return c}return e=n.converter._dispatch("lists.before",e,t,n),e+="¨0",e=(e=n.gListLevel?e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,(function(e,t,n){return s(t,n.search(/[*+-]/g)>-1?"ul":"ol",!0)})):e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,(function(e,t,n,r){return s(n,r.search(/[*+-]/g)>-1?"ul":"ol",!1)}))).replace(/¨0/,""),n.converter._dispatch("lists.after",e,t,n)})),o.subParser("metadata",(function(e,t,n){"use strict"
if(!t.metadata)return e
function r(e){n.metadata.raw=e,(e=(e=e.replace(/&/g,"&amp;").replace(/"/g,"&quot;")).replace(/\n {4}/g," ")).replace(/^([\S ]+): +([\s\S]+?)$/gm,(function(e,t,r){return n.metadata.parsed[t]=r,""}))}return e=(e=(e=(e=n.converter._dispatch("metadata.before",e,t,n)).replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,(function(e,t,n){return r(n),"¨M"}))).replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,(function(e,t,i){return t&&(n.metadata.format=t),r(i),"¨M"}))).replace(/¨M/g,""),n.converter._dispatch("metadata.after",e,t,n)})),o.subParser("outdent",(function(e,t,n){"use strict"
return e=(e=(e=n.converter._dispatch("outdent.before",e,t,n)).replace(/^(\t|[ ]{1,4})/gm,"¨0")).replace(/¨0/g,""),n.converter._dispatch("outdent.after",e,t,n)})),o.subParser("paragraphs",(function(e,t,n){"use strict"
for(var r=(e=(e=(e=n.converter._dispatch("paragraphs.before",e,t,n)).replace(/^\n+/g,"")).replace(/\n+$/g,"")).split(/\n{2,}/g),i=[],s=r.length,a=0;a<s;a++){var l=r[a]
l.search(/¨(K|G)(\d+)\1/g)>=0?i.push(l):l.search(/\S/)>=0&&(l=(l=o.subParser("spanGamut")(l,t,n)).replace(/^([ \t]*)/g,"<p>"),l+="</p>",i.push(l))}for(s=i.length,a=0;a<s;a++){for(var c="",u=i[a],h=!1;/¨(K|G)(\d+)\1/.test(u);){var d=RegExp.$1,p=RegExp.$2
c=(c="K"===d?n.gHtmlBlocks[p]:h?o.subParser("encodeCode")(n.ghCodeBlocks[p].text,t,n):n.ghCodeBlocks[p].codeblock).replace(/\$/g,"$$$$"),u=u.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,c),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u)&&(h=!0)}i[a]=u}return e=(e=(e=i.join("\n")).replace(/^\n+/g,"")).replace(/\n+$/g,""),n.converter._dispatch("paragraphs.after",e,t,n)})),o.subParser("runExtension",(function(e,t,n,r){"use strict"
if(e.filter)t=e.filter(t,r.converter,n)
else if(e.regex){var i=e.regex
i instanceof RegExp||(i=new RegExp(i,"g")),t=t.replace(i,e.replace)}return t})),o.subParser("spanGamut",(function(e,t,n){"use strict"
return e=n.converter._dispatch("spanGamut.before",e,t,n),e=o.subParser("codeSpans")(e,t,n),e=o.subParser("escapeSpecialCharsWithinTagAttributes")(e,t,n),e=o.subParser("encodeBackslashEscapes")(e,t,n),e=o.subParser("images")(e,t,n),e=o.subParser("anchors")(e,t,n),e=o.subParser("autoLinks")(e,t,n),e=o.subParser("simplifiedAutoLinks")(e,t,n),e=o.subParser("emoji")(e,t,n),e=o.subParser("underline")(e,t,n),e=o.subParser("italicsAndBold")(e,t,n),e=o.subParser("strikethrough")(e,t,n),e=o.subParser("ellipsis")(e,t,n),e=o.subParser("hashHTMLSpans")(e,t,n),e=o.subParser("encodeAmpsAndAngles")(e,t,n),t.simpleLineBreaks?/\n\n¨K/.test(e)||(e=e.replace(/\n+/g,"<br />\n")):e=e.replace(/  +\n/g,"<br />\n"),n.converter._dispatch("spanGamut.after",e,t,n)})),o.subParser("strikethrough",(function(e,t,n){"use strict"
return t.strikethrough&&(e=(e=n.converter._dispatch("strikethrough.before",e,t,n)).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,(function(e,r){return function(e){return t.simplifiedAutoLink&&(e=o.subParser("simplifiedAutoLinks")(e,t,n)),"<del>"+e+"</del>"}(r)})),e=n.converter._dispatch("strikethrough.after",e,t,n)),e})),o.subParser("stripLinkDefinitions",(function(e,t,n){"use strict"
var r=function(r,i,s,a,l,c,u){return i=i.toLowerCase(),e.toLowerCase().split(i).length-1<2?r:(s.match(/^data:.+?\/.+?;base64,/)?n.gUrls[i]=s.replace(/\s/g,""):n.gUrls[i]=o.subParser("encodeAmpsAndAngles")(s,t,n),c?c+u:(u&&(n.gTitles[i]=u.replace(/"|'/g,"&quot;")),t.parseImgDimensions&&a&&l&&(n.gDimensions[i]={width:a,height:l}),""))}
return e=(e=(e=(e+="¨0").replace(/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm,r)).replace(/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,r)).replace(/¨0/,"")})),o.subParser("tables",(function(e,t,n){"use strict"
if(!t.tables)return e
function r(e,r){return"<td"+r+">"+o.subParser("spanGamut")(e,t,n)+"</td>\n"}function i(e){var i,s=e.split("\n")
for(i=0;i<s.length;++i)/^ {0,3}\|/.test(s[i])&&(s[i]=s[i].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(s[i])&&(s[i]=s[i].replace(/\|[ \t]*$/,"")),s[i]=o.subParser("codeSpans")(s[i],t,n)
var a,l,c,u,h=s[0].split("|").map((function(e){return e.trim()})),d=s[1].split("|").map((function(e){return e.trim()})),p=[],f=[],_=[],g=[]
for(s.shift(),s.shift(),i=0;i<s.length;++i)""!==s[i].trim()&&p.push(s[i].split("|").map((function(e){return e.trim()})))
if(h.length<d.length)return e
for(i=0;i<d.length;++i)_.push((a=d[i],/^:[ \t]*--*$/.test(a)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(a)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(a)?' style="text-align:center;"':""))
for(i=0;i<h.length;++i)o.helper.isUndefined(_[i])&&(_[i]=""),f.push((l=h[i],c=_[i],u=void 0,u="",l=l.trim(),(t.tablesHeaderId||t.tableHeaderId)&&(u=' id="'+l.replace(/ /g,"_").toLowerCase()+'"'),"<th"+u+c+">"+(l=o.subParser("spanGamut")(l,t,n))+"</th>\n"))
for(i=0;i<p.length;++i){for(var m=[],v=0;v<f.length;++v)o.helper.isUndefined(p[i][v]),m.push(r(p[i][v],_[v]))
g.push(m)}return function(e,t){for(var n="<table>\n<thead>\n<tr>\n",r=e.length,i=0;i<r;++i)n+=e[i]
for(n+="</tr>\n</thead>\n<tbody>\n",i=0;i<t.length;++i){n+="<tr>\n"
for(var o=0;o<r;++o)n+=t[i][o]
n+="</tr>\n"}return n+"</tbody>\n</table>\n"}(f,g)}return e=(e=(e=(e=n.converter._dispatch("tables.before",e,t,n)).replace(/\\(\|)/g,o.helper.escapeCharactersCallback)).replace(/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,i)).replace(/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm,i),n.converter._dispatch("tables.after",e,t,n)})),o.subParser("underline",(function(e,t,n){"use strict"
return t.underline?(e=n.converter._dispatch("underline.before",e,t,n),e=(e=t.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,(function(e,t){return"<u>"+t+"</u>"}))).replace(/\b__(\S[\s\S]*?)__\b/g,(function(e,t){return"<u>"+t+"</u>"})):(e=e.replace(/___(\S[\s\S]*?)___/g,(function(e,t){return/\S$/.test(t)?"<u>"+t+"</u>":e}))).replace(/__(\S[\s\S]*?)__/g,(function(e,t){return/\S$/.test(t)?"<u>"+t+"</u>":e}))).replace(/(_)/g,o.helper.escapeCharactersCallback),e=n.converter._dispatch("underline.after",e,t,n)):e})),o.subParser("unescapeSpecialChars",(function(e,t,n){"use strict"
return e=(e=n.converter._dispatch("unescapeSpecialChars.before",e,t,n)).replace(/¨E(\d+)E/g,(function(e,t){var n=parseInt(t)
return String.fromCharCode(n)})),n.converter._dispatch("unescapeSpecialChars.after",e,t,n)})),o.subParser("makeMarkdown.blockquote",(function(e,t){"use strict"
var n=""
if(e.hasChildNodes())for(var r=e.childNodes,i=r.length,s=0;s<i;++s){var a=o.subParser("makeMarkdown.node")(r[s],t)
""!==a&&(n+=a)}return"> "+(n=n.trim()).split("\n").join("\n> ")})),o.subParser("makeMarkdown.codeBlock",(function(e,t){"use strict"
var n=e.getAttribute("language"),r=e.getAttribute("precodenum")
return"```"+n+"\n"+t.preList[r]+"\n```"})),o.subParser("makeMarkdown.codeSpan",(function(e){"use strict"
return"`"+e.innerHTML+"`"})),o.subParser("makeMarkdown.emphasis",(function(e,t){"use strict"
var n=""
if(e.hasChildNodes()){n+="*"
for(var r=e.childNodes,i=r.length,s=0;s<i;++s)n+=o.subParser("makeMarkdown.node")(r[s],t)
n+="*"}return n})),o.subParser("makeMarkdown.header",(function(e,t,n){"use strict"
var r=new Array(n+1).join("#"),i=""
if(e.hasChildNodes()){i=r+" "
for(var s=e.childNodes,a=s.length,l=0;l<a;++l)i+=o.subParser("makeMarkdown.node")(s[l],t)}return i})),o.subParser("makeMarkdown.hr",(function(){"use strict"
return"---"})),o.subParser("makeMarkdown.image",(function(e){"use strict"
var t=""
return e.hasAttribute("src")&&(t+="!["+e.getAttribute("alt")+"](",t+="<"+e.getAttribute("src")+">",e.hasAttribute("width")&&e.hasAttribute("height")&&(t+=" ="+e.getAttribute("width")+"x"+e.getAttribute("height")),e.hasAttribute("title")&&(t+=' "'+e.getAttribute("title")+'"'),t+=")"),t})),o.subParser("makeMarkdown.links",(function(e,t){"use strict"
var n=""
if(e.hasChildNodes()&&e.hasAttribute("href")){var r=e.childNodes,i=r.length
n="["
for(var s=0;s<i;++s)n+=o.subParser("makeMarkdown.node")(r[s],t)
n+="](",n+="<"+e.getAttribute("href")+">",e.hasAttribute("title")&&(n+=' "'+e.getAttribute("title")+'"'),n+=")"}return n})),o.subParser("makeMarkdown.list",(function(e,t,n){"use strict"
var r=""
if(!e.hasChildNodes())return""
for(var i=e.childNodes,s=i.length,a=e.getAttribute("start")||1,l=0;l<s;++l)void 0!==i[l].tagName&&"li"===i[l].tagName.toLowerCase()&&(r+=("ol"===n?a.toString()+". ":"- ")+o.subParser("makeMarkdown.listItem")(i[l],t),++a)
return(r+="\n\x3c!-- --\x3e\n").trim()})),o.subParser("makeMarkdown.listItem",(function(e,t){"use strict"
for(var n="",r=e.childNodes,i=r.length,s=0;s<i;++s)n+=o.subParser("makeMarkdown.node")(r[s],t)
return/\n$/.test(n)?n=n.split("\n").join("\n    ").replace(/^ {4}$/gm,"").replace(/\n\n+/g,"\n\n"):n+="\n",n})),o.subParser("makeMarkdown.node",(function(e,t,n){"use strict"
n=n||!1
var r=""
if(3===e.nodeType)return o.subParser("makeMarkdown.txt")(e,t)
if(8===e.nodeType)return"\x3c!--"+e.data+"--\x3e\n\n"
if(1!==e.nodeType)return""
switch(e.tagName.toLowerCase()){case"h1":n||(r=o.subParser("makeMarkdown.header")(e,t,1)+"\n\n")
break
case"h2":n||(r=o.subParser("makeMarkdown.header")(e,t,2)+"\n\n")
break
case"h3":n||(r=o.subParser("makeMarkdown.header")(e,t,3)+"\n\n")
break
case"h4":n||(r=o.subParser("makeMarkdown.header")(e,t,4)+"\n\n")
break
case"h5":n||(r=o.subParser("makeMarkdown.header")(e,t,5)+"\n\n")
break
case"h6":n||(r=o.subParser("makeMarkdown.header")(e,t,6)+"\n\n")
break
case"p":n||(r=o.subParser("makeMarkdown.paragraph")(e,t)+"\n\n")
break
case"blockquote":n||(r=o.subParser("makeMarkdown.blockquote")(e,t)+"\n\n")
break
case"hr":n||(r=o.subParser("makeMarkdown.hr")(e,t)+"\n\n")
break
case"ol":n||(r=o.subParser("makeMarkdown.list")(e,t,"ol")+"\n\n")
break
case"ul":n||(r=o.subParser("makeMarkdown.list")(e,t,"ul")+"\n\n")
break
case"precode":n||(r=o.subParser("makeMarkdown.codeBlock")(e,t)+"\n\n")
break
case"pre":n||(r=o.subParser("makeMarkdown.pre")(e,t)+"\n\n")
break
case"table":n||(r=o.subParser("makeMarkdown.table")(e,t)+"\n\n")
break
case"code":r=o.subParser("makeMarkdown.codeSpan")(e,t)
break
case"em":case"i":r=o.subParser("makeMarkdown.emphasis")(e,t)
break
case"strong":case"b":r=o.subParser("makeMarkdown.strong")(e,t)
break
case"del":r=o.subParser("makeMarkdown.strikethrough")(e,t)
break
case"a":r=o.subParser("makeMarkdown.links")(e,t)
break
case"img":r=o.subParser("makeMarkdown.image")(e,t)
break
default:r=e.outerHTML+"\n\n"}return r})),o.subParser("makeMarkdown.paragraph",(function(e,t){"use strict"
var n=""
if(e.hasChildNodes())for(var r=e.childNodes,i=r.length,s=0;s<i;++s)n+=o.subParser("makeMarkdown.node")(r[s],t)
return n.trim()})),o.subParser("makeMarkdown.pre",(function(e,t){"use strict"
var n=e.getAttribute("prenum")
return"<pre>"+t.preList[n]+"</pre>"})),o.subParser("makeMarkdown.strikethrough",(function(e,t){"use strict"
var n=""
if(e.hasChildNodes()){n+="~~"
for(var r=e.childNodes,i=r.length,s=0;s<i;++s)n+=o.subParser("makeMarkdown.node")(r[s],t)
n+="~~"}return n})),o.subParser("makeMarkdown.strong",(function(e,t){"use strict"
var n=""
if(e.hasChildNodes()){n+="**"
for(var r=e.childNodes,i=r.length,s=0;s<i;++s)n+=o.subParser("makeMarkdown.node")(r[s],t)
n+="**"}return n})),o.subParser("makeMarkdown.table",(function(e,t){"use strict"
var n,r,i="",s=[[],[]],a=e.querySelectorAll("thead>tr>th"),l=e.querySelectorAll("tbody>tr")
for(n=0;n<a.length;++n){var c=o.subParser("makeMarkdown.tableCell")(a[n],t),u="---"
if(a[n].hasAttribute("style"))switch(a[n].getAttribute("style").toLowerCase().replace(/\s/g,"")){case"text-align:left;":u=":---"
break
case"text-align:right;":u="---:"
break
case"text-align:center;":u=":---:"}s[0][n]=c.trim(),s[1][n]=u}for(n=0;n<l.length;++n){var h=s.push([])-1,d=l[n].getElementsByTagName("td")
for(r=0;r<a.length;++r){var p=" "
void 0!==d[r]&&(p=o.subParser("makeMarkdown.tableCell")(d[r],t)),s[h].push(p)}}var f=3
for(n=0;n<s.length;++n)for(r=0;r<s[n].length;++r){var _=s[n][r].length
_>f&&(f=_)}for(n=0;n<s.length;++n){for(r=0;r<s[n].length;++r)1===n?":"===s[n][r].slice(-1)?s[n][r]=o.helper.padEnd(s[n][r].slice(-1),f-1,"-")+":":s[n][r]=o.helper.padEnd(s[n][r],f,"-"):s[n][r]=o.helper.padEnd(s[n][r],f)
i+="| "+s[n].join(" | ")+" |\n"}return i.trim()})),o.subParser("makeMarkdown.tableCell",(function(e,t){"use strict"
var n=""
if(!e.hasChildNodes())return""
for(var r=e.childNodes,i=r.length,s=0;s<i;++s)n+=o.subParser("makeMarkdown.node")(r[s],t,!0)
return n.trim()})),o.subParser("makeMarkdown.txt",(function(e){"use strict"
var t=e.nodeValue
return t=(t=t.replace(/ +/g," ")).replace(/¨NBSP;/g," "),(t=(t=(t=(t=(t=(t=(t=(t=o.helper.unescapeHTMLEntities(t)).replace(/([*_~|`])/g,"\\$1")).replace(/^(\s*)>/g,"\\$1>")).replace(/^#/gm,"\\#")).replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3")).replace(/^( {0,3}\d+)\./gm,"$1\\.")).replace(/^( {0,3})([+-])/gm,"$1\\$2")).replace(/]([\s]*)\(/g,"\\]$1\\(")).replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:")})),void 0===(r=function(){"use strict"
return o}.call(t,n,t,e))||(e.exports=r)}).call(this)},361:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{cached:()=>y,dedupeTracked:()=>b,localCopy:()=>m,trackedReset:()=>v})
var r,i,o=n(603),s=n(471),a=n(473),l=n(217)
function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let u=(r=class{constructor(){var e
c(this,"prevRemote",void 0),c(this,"peek",void 0),(e=i)&&Object.defineProperty(this,"value",{enumerable:e.enumerable,configurable:e.configurable,writable:e.writable,value:e.initializer?e.initializer.call(this):void 0})}},h=r.prototype,d="value",p=[a.tracked],f={configurable:!0,enumerable:!0,writable:!0,initializer:null},_={},Object.keys(f).forEach((function(e){_[e]=f[e]})),_.enumerable=!!_.enumerable,_.configurable=!!_.configurable,("value"in _||_.initializer)&&(_.writable=!0),void 0===(_=p.slice().reverse().reduce((function(e,t){return t(h,d,e)||e}),_)).initializer&&(Object.defineProperty(h,d,_),_=null),i=_,r)
var h,d,p,f,_
function g(e,t,n){let r=t.get(e)
return void 0===r&&(r=new u,t.set(e,r),r.value=r.peek="function"==typeof n?n.call(e):n),r}function m(e,t){(0,o.assert)(`@localCopy() must be given a memo path as its first argument, received \`${String(e)}\``,"string"==typeof e)
let n=new WeakMap
return()=>{let r=t=>(0,s.get)(t,e)
return{get(){let e=g(this,n,t),{prevRemote:i}=e,o=r(this)
return i!==o&&(e.value=e.prevRemote=o),e.value},set(e){if(!n.has(this)){let i=g(this,n,t)
return i.prevRemote=r(this),void(i.value=e)}g(this,n,t).value=e}}}}function v(e){(0,o.assert)(`@trackedReset() must be given a memo path, a memo function, or config object with a memo path or function as its first argument, received \`${String(e)}\``,"string"==typeof e||"function"==typeof e||"object"==typeof e&&null!==e&&void 0!==e.memo)
let t=new WeakMap
return(n,r,i)=>{let o,a,l=i.initializer??(()=>{})
"object"==typeof e?(o=e.memo,a=e.update??l):(o=e,a=l)
let c="function"==typeof o?(e,t)=>o.call(e,e,r,t):e=>(0,s.get)(e,o)
return{get(){let e=g(this,t,l),{prevRemote:n}=e,i=c(this,n)
return i!==n&&(e.prevRemote=i,e.value=e.peek=a.call(this,this,r,e.peek)),e.value},set(e){g(this,t,l).value=e}}}}function y(e,t,n){(0,o.assert)("@cached can only be used on getters",n&&n.get)
let{get:r,set:i}=n,s=new WeakMap
return{get(){let e=s.get(this)
return void 0===e&&(e=(0,l.createCache)(r.bind(this)),s.set(this,e)),(0,l.getValue)(e)},set:i}}function b(){let e
const t=function(t,n,r){let{initializer:i}=r,{get:o,set:s}=(0,a.tracked)(t,n,r),l=new WeakMap
return{get(){if(!l.has(this)){let e=i?.call(this)
l.set(this,e),s.call(this,e)}return o.call(this)},set(t){l.has(this)&&e(t,l.get(this))||(l.set(this,t),s.call(this,t))}}}
return 3===arguments.length?(e=(e,t)=>e===t,t(...arguments)):1===arguments.length&&"function"==typeof arguments[0]?(e=arguments[0],t):void(0,o.assert)(`@dedupeTracked() can either be invoked without arguments or with one comparator function, received \`${String(arguments)}\``,!1)}},244:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{deleteDB:()=>_,openDB:()=>f,unwrap:()=>p,wrap:()=>d})
const r=(e,t)=>t.some((t=>e instanceof t))
let i,o
const s=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap
let h={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return a.get(e)
if("objectStoreNames"===t)return e.objectStoreNames||l.get(e)
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return d(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}
function d(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(d(e.result)),r()},o=()=>{n(e.error),r()}
e.addEventListener("success",i),e.addEventListener("error",o)}))
return t.then((t=>{t instanceof IDBCursor&&s.set(t,e)})).catch((()=>{})),u.set(t,e),t}(e)
if(c.has(e))return c.get(e)
const t=function(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(p(this),e),d(s.get(this))}:function(...e){return d(t.apply(p(this),e))}:function(e,...n){const r=t.call(p(this),e,...n)
return l.set(r,e.sort?e.sort():[e]),d(r)}:(e instanceof IDBTransaction&&function(e){if(a.has(e))return
const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()}
e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}))
a.set(e,t)}(e),r(e,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,h):e)
var t}(e)
return t!==e&&(c.set(e,t),u.set(t,e)),t}const p=e=>u.get(e)
function f(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=d(s)
return r&&s.addEventListener("upgradeneeded",(e=>{r(d(s.result),e.oldVersion,e.newVersion,d(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}function _(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e)
return t&&n.addEventListener("blocked",(e=>t(e.oldVersion,e))),d(n).then((()=>{}))}const g=["get","getKey","getAll","getAllKeys","count"],m=["put","add","delete","clear"],v=new Map
function y(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return
if(v.get(t))return v.get(t)
const n=t.replace(/FromIndex$/,""),r=t!==n,i=m.includes(n)
if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!g.includes(n))return
const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly")
let s=o.store
return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]}
return v.set(t,o),o}var b
b=h,h={...b,get:(e,t,n)=>y(e,t)||b.get(e,t,n),has:(e,t)=>!!y(e,t)||b.has(e,t)}},513:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{__addDisposableResource:()=>R,__assign:()=>o,__asyncDelegator:()=>S,__asyncGenerator:()=>E,__asyncValues:()=>T,__await:()=>C,__awaiter:()=>f,__classPrivateFieldGet:()=>N,__classPrivateFieldIn:()=>D,__classPrivateFieldSet:()=>A,__createBinding:()=>g,__decorate:()=>a,__disposeResources:()=>M,__esDecorate:()=>c,__exportStar:()=>m,__extends:()=>i,__generator:()=>_,__importDefault:()=>O,__importStar:()=>I,__makeTemplateObject:()=>x,__metadata:()=>p,__param:()=>l,__propKey:()=>h,__read:()=>y,__rest:()=>s,__runInitializers:()=>u,__setFunctionName:()=>d,__spread:()=>b,__spreadArray:()=>k,__spreadArrays:()=>w,__values:()=>v,default:()=>j})
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)}
function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},o.apply(this,arguments)}
function s(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function a(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r)
else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s)
return o>3&&s&&Object.defineProperty(t,n,s),s}function l(e,t){return function(n,r){t(n,r,e)}}function c(e,t,n,r,i,o){function s(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected")
return e}for(var a,l=r.kind,c="getter"===l?"get":"setter"===l?"set":"value",u=!t&&e?r.static?e:e.prototype:null,h=t||(u?Object.getOwnPropertyDescriptor(u,r.name):{}),d=!1,p=n.length-1;p>=0;p--){var f={}
for(var _ in r)f[_]="access"===_?{}:r[_]
for(var _ in r.access)f.access[_]=r.access[_]
f.addInitializer=function(e){if(d)throw new TypeError("Cannot add initializers after decoration has completed")
o.push(s(e||null))}
var g=(0,n[p])("accessor"===l?{get:h.get,set:h.set}:h[c],f)
if("accessor"===l){if(void 0===g)continue
if(null===g||"object"!=typeof g)throw new TypeError("Object expected");(a=s(g.get))&&(h.get=a),(a=s(g.set))&&(h.set=a),(a=s(g.init))&&i.unshift(a)}else(a=s(g))&&("field"===l?i.unshift(a):h[c]=a)}u&&Object.defineProperty(u,r.name,h),d=!0}function u(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e)
return r?n:void 0}function h(e){return"symbol"==typeof e?e:"".concat(e)}function d(e,t,n){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})}function p(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))}function _(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.")
for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i
switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a
break
case 4:return s.label++,{value:a[1],done:!1}
case 5:s.label++,r=a[1],a=[0]
continue
case 7:a=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0
continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1]
break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1]
return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}var g=Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}
function m(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||g(t,e,n)}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0
if(n)return n.call(e)
if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}
throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),s=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]))
return e}function w(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),i=0
for(t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s]
return r}function k(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i])
return e.concat(r||Array.prototype.slice.call(t))}function C(e){return this instanceof C?(this.v=e,this):new C(e)}function E(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,i=n.apply(e,t||[]),o=[]
return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r
function s(e){i[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||a(e,t)}))})}function a(e,t){try{(n=i[e](t)).value instanceof C?Promise.resolve(n.value.v).then(l,c):u(o[0][2],n)}catch(e){u(o[0][3],e)}var n}function l(e){a("next",e)}function c(e){a("throw",e)}function u(e,t){e(t),o.shift(),o.length&&a(o[0][0],o[0][1])}}function S(e){var t,n
return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t
function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:C(e[r](t)),done:!1}:i?i(t):t}:i}}function T(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var t,n=e[Symbol.asyncIterator]
return n?n.call(e):(e=v(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t)
function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,i,(t=e[n](t)).done,t.value)}))}}}function x(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var P=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}
function I(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&g(t,e,n)
return P(t,e),t}function O(e){return e&&e.__esModule?e:{default:e}}function N(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter")
if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it")
return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function A(e,t,n,r,i){if("m"===r)throw new TypeError("Private method is not writable")
if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter")
if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it")
return"a"===r?i.call(e,n):i?i.value=n:t.set(e,n),n}function D(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object")
return"function"==typeof e?t===e:e.has(t)}function R(e,t,n){if(null!=t){if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object expected.")
var r
if(n){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.")
r=t[Symbol.asyncDispose]}if(void 0===r){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.")
r=t[Symbol.dispose]}if("function"!=typeof r)throw new TypeError("Object not disposable.")
e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0})
return t}var L="function"==typeof SuppressedError?SuppressedError:function(e,t,n){var r=new Error(n)
return r.name="SuppressedError",r.error=e,r.suppressed=t,r}
function M(e){function t(t){e.error=e.hasError?new L(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}return function n(){for(;e.stack.length;){var r=e.stack.pop()
try{var i=r.dispose&&r.dispose.call(r.value)
if(r.async)return Promise.resolve(i).then(n,(function(e){return t(e),n()}))}catch(e){t(e)}}if(e.hasError)throw e.error}()}const j={__extends:i,__assign:o,__rest:s,__decorate:a,__param:l,__metadata:p,__awaiter:f,__generator:_,__createBinding:g,__exportStar:m,__values:v,__read:y,__spread:b,__spreadArrays:w,__spreadArray:k,__await:C,__asyncGenerator:E,__asyncDelegator:S,__asyncValues:T,__makeTemplateObject:x,__importStar:I,__importDefault:O,__classPrivateFieldGet:N,__classPrivateFieldSet:A,__classPrivateFieldIn:D,__addDisposableResource:R,__disposeResources:M}}}])
