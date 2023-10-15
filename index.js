// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6B2j6":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "78fcd0ac8e9bd240";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1jwFz":[function(require,module,exports) {
var _frame = require("./frame");
var _hacks = require("./hacks");
var _audio = require("./audio");

},{"./frame":"8tcsq","./hacks":"hWhIE","./audio":"1HZY9"}],"8tcsq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _models = require("./models");
var _regl = require("./regl");
var _reglDefault = parcelHelpers.interopDefault(_regl);
var _state = require("./state");
var _particles = require("./particles");
var _audio = require("./audio");
var _text = require("./text");
var _math = require("./math");
let prevTime = null;
const texts = [
    "beat",
    "rocks",
    "press Q to start",
    "mind the rhythm",
    "level 1/6\nwarm up the engines",
    "level 2/6\naura sense",
    "level 3/6\nmy house is full of traps",
    "level 4/6\nmagicland dizzy",
    "level 5/6\nminefield mahjong",
    "level 6/6\nseason finale",
    "well done",
    "excellent",
    "astounding",
    "astoneding",
    "q",
    "w",
    "e",
    "beat\nmiss",
    "POW",
    "  Aura\nunlocked\n / W /",
    " Mortar\nunlocked\n / E /",
    " Cannon\namplified",
    "  Aura\nempowered"
].map((0, _text.makeTextDrawcall));
(0, _reglDefault.default).frame((context)=>{
    const cbf = (0, _audio.currentBeatFraction)();
    const dt = context.time - (prevTime || context.time);
    prevTime = context.time;
    (0, _state.step)(dt);
    (0, _particles.particles).map((system)=>system.update(dt));
    (0, _particles.particles).splice(0, (0, _particles.particles).length, ...(0, _particles.particles).filter((x)=>x.alive));
    (0, _reglDefault.default).clear({
        color: [
            0,
            0,
            0,
            1
        ]
    });
    const levelColors = [
        [
            [
                0,
                0,
                1
            ],
            [
                0,
                1,
                0
            ]
        ],
        [
            [
                0,
                0,
                1
            ],
            [
                1,
                0,
                1
            ]
        ],
        [
            [
                0.5,
                0.5,
                0
            ],
            [
                1,
                0.5,
                0
            ]
        ],
        [
            [
                0.2,
                0.2,
                1
            ],
            [
                1,
                0.2,
                0
            ]
        ],
        [
            [
                1,
                0.3,
                0
            ],
            [
                0.5,
                0,
                0
            ]
        ],
        [
            [
                1,
                0,
                1
            ],
            [
                0,
                1,
                0
            ]
        ]
    ];
    const l = (0, _state.state).title ? 4 : (0, _state.state).level;
    const lights = [
        [
            -6,
            l * 69 % 16 - 8
        ],
        [
            6,
            l * 32 % 16 - 8
        ]
    ];
    const lightColors = [
        ...levelColors[l]
    ];
    if (!(0, _state.state).title) {
        lights.push((0, _state.state).ship.pos);
        lightColors.push([
            0.2,
            0.2,
            1
        ]);
    }
    (0, _models.drawLine)({
        translation: [
            0,
            -9
        ],
        thickness: 100,
        scale: 1.2,
        lights,
        lightColors
    });
    (0, _state.state).asteroids.forEach((a)=>{
        [
            (0, _models.drawAsteroid),
            (0, _models.drawAsteroid2),
            (0, _models.drawAsteroid3)
        ][a.generation]({
            translation: a.pos,
            rotation: a.rotation + (0, _state.state).rotation,
            rotationZ: a.rZ * 6,
            scale: 0.1 * a.colliderSize / 1.6,
            thickness: 0.2,
            color: a.color
        });
        (0, _state.state).renderHitboxes && (0, _models.drawCircle)({
            translation: a.pos,
            scale: a.colliderSize / 16,
            thickness: 0.4,
            color: a.collides ? [
                1,
                0,
                0
            ] : [
                0.2,
                0.2,
                0.2
            ]
        });
    });
    (0, _state.state).mines.forEach((e)=>{
        (0, _models.drawMine)({
            translation: e.pos,
            scale: 0.05,
            thickness: 0.2,
            rotationY: (0, _state.state).rotation * 2 + (0, _math.pow)(2, 1.2 - (0, _math.min)(e.life, 1.2) + 1) * 4,
            color: [
                0.3,
                0,
                0
            ]
        });
        (e.life > 1.2 ? (0, _models.drawEye2) : (0, _models.drawEye))({
            translation: e.pos,
            scale: 0.008,
            thickness: 0.2,
            color: [
                1,
                0,
                0
            ]
        });
        (0, _models.drawCircle)({
            translation: e.pos,
            scale: e.colliderSize / 16,
            thickness: 0.2,
            color: [
                0.3,
                0,
                0
            ]
        });
    });
    (0, _state.state).aliens.forEach((e)=>{
        (0, _models.drawCube)({
            translation: e.pos,
            rotation: -(0, _state.state).rotation,
            rotationY: -(0, _state.state).rotation * 2,
            scale: 0.1,
            thickness: 0.2,
            color: [
                1,
                1,
                1
            ]
        });
        (0, _models.drawCube)({
            translation: e.pos,
            rotation: -(0, _state.state).rotation * 2,
            rotationY: -(0, _state.state).rotation,
            scale: 0.1,
            thickness: 0.2,
            color: [
                1,
                1,
                1
            ]
        });
        ((0, _audio.currentBeatFraction)() > 0.2 ? (0, _models.drawEye) : (0, _models.drawEye2))({
            translation: e.pos,
            scale: 0.01,
            thickness: 0.2,
            color: [
                1,
                1,
                1
            ]
        });
        const sc = e.shootCooldown;
        if (sc > 0.6) // warmup
        (0, _models.drawLine)({
            translation: e.pos,
            rotationZ: e.shootAngle,
            scale: 2.5,
            thickness: 0.1,
            color: [
                1,
                1,
                1
            ]
        });
        else if (sc) {
            //actual shoot
            // shadow, widening
            (0, _models.drawLine)({
                translation: e.pos,
                rotationZ: e.shootAngle,
                scale: 2.5,
                thickness: (1 - sc) * 2,
                color: [
                    sc,
                    sc,
                    sc
                ]
            });
            // shoot, narrowing
            (0, _models.drawLine)({
                translation: e.pos,
                rotationZ: e.shootAngle,
                scale: 2.5,
                thickness: sc * 2,
                color: [
                    sc * 2,
                    sc * 1,
                    sc * 2
                ]
            });
        }
    });
    [
        ...(0, _state.state).bullets,
        ...(0, _state.state).mortars
    ].forEach((b)=>{
        (0, _models.drawLine)({
            translation: b.pos,
            rotationZ: b.rotation,
            scale: 0.05,
            thickness: 0.3,
            color: [
                1,
                0,
                0
            ]
        });
    });
    (0, _state.state).enemyBullets.forEach((b)=>{
        (0, _models.drawLine)({
            translation: b.pos,
            rotationZ: b.rotation,
            scale: 0.05,
            thickness: 0.3,
            color: [
                1,
                1,
                0
            ]
        });
    });
    if ((0, _state.state).title) {
        function easeOutElastic(x) {
            const c4 = (0, _math.TAU) / 3;
            return x === 0 ? 0 : x === 1 ? 1 : (0, _math.pow)(2, -10 * x) * (0, _math.sin)((x * 10 - 0.75) * c4) + 1;
        }
        const rotationY = (easeOutElastic(cbf) - 1) * 0.1;
        texts[0]({
            translation: [
                0,
                4
            ],
            scale: 0.02,
            color: [
                1,
                1,
                1
            ],
            thickness: (0, _math.lerp)(0.9, 0.3, cbf),
            rotationY
        });
        texts[1]({
            translation: [
                0,
                0
            ],
            scale: 0.02,
            color: [
                1,
                1,
                1
            ],
            thickness: (0, _math.lerp)(0.9, 0.3, cbf),
            rotationY
        });
        texts[2]({
            translation: [
                0,
                -6
            ],
            scale: 0.008,
            color: [
                0.5,
                0.5,
                0.5
            ],
            thickness: 0.3
        });
        texts[3]({
            translation: [
                0,
                -8
            ],
            scale: 0.008,
            color: [
                0.5,
                0.5,
                0.5
            ],
            thickness: 0.3
        });
    } else {
        (0, _state.state).hp && (0, _models.drawLeship)({
            translation: (0, _state.state).ship.pos,
            rotation: (0, _state.state).ship.hitTimer ? (0, _math.pow)((0, _state.state).ship.hitTimer / 1.2, 3) * 7 : 0,
            rotationY: (0, _state.state).ship.thrust,
            rotationZ: (0, _state.state).ship.angle,
            scale: 0.05,
            thickness: (0, _math.lerp)(0.6, 0.1, cbf),
            color: [
                0.2,
                0.2,
                1
            ]
        });
        (0, _state.state).renderHitboxes && (0, _models.drawCircle)({
            translation: (0, _state.state).ship.pos,
            scale: (0, _state.state).ship.colliderSize / 16,
            thickness: 0.4,
            color: (0, _state.state).ship.collides ? [
                1,
                0,
                0
            ] : [
                0.2,
                0.2,
                0.2
            ]
        });
        if ((0, _state.state).ship.aura) {
            const { pos, aura } = (0, _state.state).ship;
            const { auraSize: aus } = (0, _state.state);
            const auraThickness = 3 * (0.6 - aura);
            (0, _models.drawCircle)({
                translation: pos,
                scale: aura * aus / 16,
                thickness: auraThickness,
                color: [
                    1,
                    0,
                    1
                ]
            });
            [
                0.8,
                0.9,
                1.1,
                1.3
            ].forEach((x)=>{
                (0, _models.drawCircle)({
                    translation: pos,
                    scale: x * (aura * aus) / 16,
                    thickness: auraThickness * 0.5,
                    color: [
                        0.4 * x,
                        0,
                        0.4 / x
                    ]
                });
            });
        }
    }
    (0, _state.state).blasts.map(({ pos, size: aura })=>{
        const aus = 3;
        const auraThickness = 3 * (0.6 - aura);
        (0, _models.drawCircle)({
            translation: pos,
            scale: aura * aus / 16,
            thickness: auraThickness,
            color: [
                1,
                0,
                1
            ]
        });
        [
            0.8,
            0.9,
            1.1,
            1.3
        ].forEach((x)=>{
            (0, _models.drawCircle)({
                translation: pos,
                scale: x * (aura * aus) / 16,
                thickness: auraThickness * 0.5,
                color: [
                    0.4 * x,
                    0.4 / x,
                    1
                ]
            });
        });
    });
    (0, _state.state).powerups.map(({ pos })=>{
        const color = [
            0,
            1,
            0
        ];
        (0, _models.drawCube)({
            translation: pos,
            rotation: (0, _state.state).rotation * 3,
            rotationY: (0, _state.state).rotation * 0.02,
            scale: 0.08,
            thickness: 0.3,
            color
        });
        (0, _models.drawCircle)({
            translation: pos,
            scale: 1 / 16,
            thickness: 0.3,
            color
        });
        texts[18]({
            translation: [
                pos[0],
                pos[1] - 0.3
            ],
            scale: 0.004,
            thickness: 0.3,
            color
        });
    });
    (0, _particles.particles).forEach((p)=>{
        p.render();
    });
    (0, _state.shipParticles) && (0, _state.shipParticles).render();
    (0, _state.state).signs.forEach((s)=>{
        const { v = 1 } = s;
        const a = (0, _math.max)(0, -s.life + 1);
        const f = (0, _math.pow)(a, 3) * 30;
        texts[s.index]({
            translation: s.pos,
            color: s.color || [
                1 - a,
                1 - a,
                1 - a
            ],
            scale: s.size || 0.004,
            thickness: 0.2,
            rotation: f * v
        });
    });
    // hud
    if (!(0, _state.state).title) {
        [
            -1,
            0,
            1
        ].forEach((x, i)=>{
            const locked = (0, _state.state).ship.powerups < i;
            const hot = !locked && ((0, _state.state).cooldowns[i] > 0 ? 0 : 1);
            const color = locked ? [
                0.03,
                0.03,
                0.03
            ] : hot ? [
                0.7,
                0.7,
                0.7
            ] : [
                0.3,
                0.3,
                0.3
            ];
            (0, _models.drawCube)({
                translation: [
                    x * 2,
                    -7.4
                ],
                rotation: -0.2,
                rotationY: -0.15,
                rotationZ: 0.04,
                scale: 0.08,
                thickness: 0.2,
                color
            });
            texts[15 + x]({
                translation: [
                    x * 2,
                    -7.7
                ],
                scale: (0, _math.lerp)(0.005, 0.0055, (0, _math.pow)(1 - cbf, 2) * hot),
                thickness: 0.2,
                color
            });
            if ((0, _state.state).cooldowns[i] > 0) {
                const beats = Math.ceil(((0, _state.state).cooldowns[i] + 0.2) / 0.6);
                (0, _text.makeOneOffText)("" + beats)({
                    translation: [
                        x * 2,
                        -8.5
                    ],
                    scale: 0.002,
                    thickness: 0.2,
                    color: [
                        1,
                        1,
                        1
                    ]
                });
            }
        });
        (0, _models.drawLeship)({
            translation: [
                -15,
                -8
            ],
            scale: 0.03,
            thickness: 0.2,
            rotationY: 0.2,
            rotationZ: 0.2,
            color: [
                0.2,
                0.2,
                1
            ]
        });
        (0, _text.makeOneOffText)(`x${(0, _state.state).hp}`)({
            translation: [
                -14,
                -8
            ],
            scale: 0.005,
            thickness: 0.2,
            color: [
                1,
                1,
                1
            ]
        });
        (0, _text.makeOneOffText)("" + (0, _state.state).score * 10)({
            translation: [
                12,
                -8
            ],
            scale: 0.005,
            thickness: 0.2,
            color: [
                1,
                1,
                1
            ]
        });
        (0, _text.makeOneOffText)("streak " + (0, _state.state).combo)({
            translation: [
                12,
                -8.6
            ],
            scale: 0.002,
            thickness: 0.15,
            color: [
                1,
                1,
                1
            ]
        });
    }
    if ((0, _state.state).win && (0, _state.state).level == 5) (0, _text.makeOneOffText)("Congratulations!\n\nFinal score\n" + (0, _state.state).score * 10 + "\n\nDouble click to tweet and share")({
        translation: [
            0,
            4
        ],
        scale: 0.008,
        thickness: 0.2,
        color: [
            1,
            1,
            1
        ]
    });
    if (!(0, _state.state).title && (0, _state.state).hp == 0) (0, _text.makeOneOffText)("Game over!\n\nFinal score\n" + (0, _state.state).score * 10 + "\n\nDouble click to tweet and share\nR to start over")({
        translation: [
            0,
            4
        ],
        scale: 0.008,
        thickness: 0.2,
        color: [
            1,
            1,
            1
        ]
    });
});

},{"./models":"3xcXy","./regl":"eoRlh","./state":"d4y3Q","./particles":"g2Acl","./audio":"1HZY9","./text":"aVldF","./math":"4GTMw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3xcXy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "preprocessModel", ()=>preprocessModel);
parcelHelpers.export(exports, "makeMeshDrawCall", ()=>makeMeshDrawCall);
parcelHelpers.export(exports, "drawCube", ()=>drawCube);
parcelHelpers.export(exports, "drawAsteroid", ()=>drawAsteroid);
parcelHelpers.export(exports, "drawAsteroid2", ()=>drawAsteroid2);
parcelHelpers.export(exports, "drawAsteroid3", ()=>drawAsteroid3);
parcelHelpers.export(exports, "drawLeship", ()=>drawLeship);
parcelHelpers.export(exports, "drawCircle", ()=>drawCircle);
parcelHelpers.export(exports, "drawLine", ()=>drawLine);
parcelHelpers.export(exports, "drawMine", ()=>drawMine);
parcelHelpers.export(exports, "drawEye", ()=>drawEye);
parcelHelpers.export(exports, "drawEye2", ()=>drawEye2);
var _regl = require("./regl");
var _reglDefault = parcelHelpers.interopDefault(_regl);
var _cubeJson = require("./models/cube.json");
var _cubeJsonDefault = parcelHelpers.interopDefault(_cubeJson);
var _asteroidJson = require("./models/asteroid.json");
var _asteroidJsonDefault = parcelHelpers.interopDefault(_asteroidJson);
var _asteroid2Json = require("./models/asteroid2.json");
var _asteroid2JsonDefault = parcelHelpers.interopDefault(_asteroid2Json);
var _asteroid3Json = require("./models/asteroid3.json");
var _asteroid3JsonDefault = parcelHelpers.interopDefault(_asteroid3Json);
var _leshipJson = require("./models/leship.json");
var _leshipJsonDefault = parcelHelpers.interopDefault(_leshipJson);
var _math = require("./math");
function preprocessModel(m) {
    // Explode indexing
    const PositionSingle = m.elements.flatMap(([a, b])=>[
            m.verts[a],
            m.verts[b]
        ]);
    // Duplicate vertices
    const Position = PositionSingle.flatMap((vert)=>[
            vert,
            vert
        ]);
    // Generate sister elements and sides
    const Normal = [];
    const Side = [];
    const Elements = [];
    for(let i = 0; i < Position.length; i += 4){
        const v = [
            Position[i],
            Position[i + 2]
        ];
        const normal = [
            v[1][0] - v[0][0],
            v[1][1] - v[0][1],
            v[1][2] - v[0][2]
        ];
        Normal.push(normal, normal, normal, normal);
        Side.push(-1, 1, -1, 1);
        Elements.push(i, i + 1, i + 2);
        Elements.push(i + 2, i + 1, i + 3);
    }
    return {
        Position: (0, _reglDefault.default).buffer(Position.flatMap((x)=>x)),
        Normal: (0, _reglDefault.default).buffer(Normal.flatMap((x)=>x)),
        Side: (0, _reglDefault.default).buffer(Side),
        Elements: (0, _reglDefault.default).elements(Elements)
    };
}
function makeCircle() {
    const count = 40;
    const verts = [];
    const elements = [];
    for(let i = 0; i < count; ++i){
        const angle = (0, _math.TAU) * i / count;
        verts.push([
            (0, _math.cos)(angle),
            (0, _math.sin)(angle),
            0
        ]);
        elements.push([
            i,
            i + 1
        ]);
    }
    elements[elements.length - 1][1] = 0;
    return {
        verts,
        elements
    };
}
function makeLine() {
    return {
        verts: [
            [
                0,
                0,
                0
            ],
            [
                0,
                1,
                0
            ]
        ],
        elements: [
            [
                0,
                1
            ]
        ]
    };
}
function makeMine() {
    const verts = [], elements = [];
    for(let h = -0.7; h <= 0.8; h += 0.7)for(let a = 0; a < (0, _math.TAU); a += 1.2){
        const r = (0, _math.sqrt)(1 - h * h);
        verts.push([
            (0, _math.cos)(a) * r,
            h,
            (0, _math.sin)(a) * r
        ]);
        verts.push([
            (0, _math.cos)(a) * (r * 0.5),
            h * 0.5,
            (0, _math.sin)(a) * (r * 0.5)
        ]);
        const l = verts.length;
        elements.push([
            l - 2,
            l - 1
        ]);
    }
    return {
        verts,
        elements
    };
}
function makeEye() {
    return {
        verts: [
            [
                -2,
                0,
                0
            ],
            [
                -2,
                -1,
                0
            ],
            [
                0,
                -2,
                0
            ],
            [
                2,
                -1,
                0
            ],
            [
                2,
                0,
                0
            ],
            [
                2,
                1,
                0
            ],
            [
                0,
                2,
                0
            ],
            [
                -2,
                1,
                0
            ],
            // ...
            [
                -0.5,
                -1,
                0
            ],
            [
                -0.5,
                1,
                0
            ],
            [
                0.5,
                1,
                0
            ],
            [
                0.5,
                -1,
                0
            ]
        ],
        elements: [
            [
                0,
                1
            ],
            [
                1,
                2
            ],
            [
                2,
                3
            ],
            [
                3,
                4
            ],
            [
                4,
                5
            ],
            [
                5,
                6
            ],
            [
                6,
                7
            ],
            [
                7,
                0
            ],
            // here
            [
                8,
                9
            ],
            [
                9,
                10
            ],
            [
                10,
                11
            ],
            [
                11,
                8
            ]
        ]
    };
}
// Fix orientation that I messed up earlier
(0, _leshipJsonDefault.default).verts.forEach((vert)=>{
    [vert[2], vert[1]] = [
        vert[1],
        -vert[2]
    ];
    vert[1] -= 0.8;
});
(0, _cubeJsonDefault.default).verts.forEach((vert)=>vert[1] -= 0.5);
function makeMeshDrawCall(model, count) {
    return (0, _reglDefault.default)({
        vert: (0, _regl.vert),
        frag: (0, _regl.frag),
        primitive: "triangles",
        attributes: {
            Position: model.Position,
            Normal: model.Normal,
            Side: model.Side,
            Life: {
                constant: [
                    1
                ]
            }
        },
        elements: model.Elements,
        // @ts-ignore
        count: count ? (context, props)=>count : undefined,
        uniforms: {
            Translation: (context, props)=>props.translation,
            Rotation: (context, props)=>props.rotation || 0,
            RotationY: (context, props)=>props.rotationY || 0,
            RotationZ: (context, props)=>props.rotationZ || 0,
            Thickness: (context, props)=>props.thickness * 0.01 || 0.01,
            Scale: (context, props)=>props.scale || 0.5,
            Color: (context, props)=>props.color || [
                    1,
                    1,
                    0
                ],
            LifeMax: ()=>1
        }
    });
}
const drawCube = makeMeshDrawCall(preprocessModel((0, _cubeJsonDefault.default)));
const drawAsteroid = makeMeshDrawCall(preprocessModel((0, _asteroidJsonDefault.default)));
const drawAsteroid2 = makeMeshDrawCall(preprocessModel((0, _asteroid2JsonDefault.default)));
const drawAsteroid3 = makeMeshDrawCall(preprocessModel((0, _asteroid3JsonDefault.default)));
const drawLeship = makeMeshDrawCall(preprocessModel((0, _leshipJsonDefault.default)));
const drawCircle = makeMeshDrawCall(preprocessModel(makeCircle()));
const drawLine = makeMeshDrawCall(preprocessModel(makeLine()));
const drawMine = makeMeshDrawCall(preprocessModel(makeMine()));
const drawEye = makeMeshDrawCall(preprocessModel(makeEye()));
const drawEye2 = makeMeshDrawCall(preprocessModel(makeEye()), 24);

},{"./regl":"eoRlh","./models/cube.json":"c7hI2","./models/asteroid.json":"cXyhv","./models/asteroid2.json":"Deywn","./models/asteroid3.json":"hgoRC","./models/leship.json":"aKX7J","./math":"4GTMw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eoRlh":[function(require,module,exports) {
// import initRegl from "regl";
// const regl = initRegl(gl);
// export default regl;
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gl", ()=>gl);
parcelHelpers.export(exports, "vert", ()=>(0, _shaderVertDefault.default));
parcelHelpers.export(exports, "frag", ()=>(0, _shaderFragDefault.default));
parcelHelpers.export(exports, "lightFrag", ()=>(0, _lightFragDefault.default));
// TMP
// import initRegl from "regl";
// const oldRegl = initRegl(gl);
// END TMP
// @ts-ignore
var _shaderVert = require("./shader.vert");
var _shaderVertDefault = parcelHelpers.interopDefault(_shaderVert);
// @ts-ignore
var _shaderFrag = require("./shader.frag");
var _shaderFragDefault = parcelHelpers.interopDefault(_shaderFrag);
// @ts-ignore
var _lightFrag = require("./light.frag");
var _lightFragDefault = parcelHelpers.interopDefault(_lightFrag);
const canvas = document.getElementById("C");
const gl = canvas.getContext("webgl");
const vs = gl.createShader(gl.VERTEX_SHADER);
const fs = gl.createShader(gl.FRAGMENT_SHADER);
const ls = gl.createShader(gl.FRAGMENT_SHADER);
const vprog = gl.createProgram();
const lprog = gl.createProgram();
gl.shaderSource(vs, (0, _shaderVertDefault.default));
gl.shaderSource(fs, (0, _shaderFragDefault.default));
gl.shaderSource(ls, (0, _lightFragDefault.default));
gl.compileShader(vs);
gl.compileShader(fs);
gl.compileShader(ls);
gl.attachShader(vprog, vs);
gl.attachShader(vprog, fs);
gl.attachShader(lprog, vs);
gl.attachShader(lprog, ls);
gl.linkProgram(vprog);
gl.linkProgram(lprog);
// TMP just validate shader
// oldRegl({
//   vert,
//   frag: lightFrag,
// });
const positionLoc = gl.getAttribLocation(vprog, "Position");
const normalLoc = gl.getAttribLocation(vprog, "Normal");
const sideLoc = gl.getAttribLocation(vprog, "Side");
const lifeLoc = gl.getAttribLocation(vprog, "Life");
function bufferFromSize(n) {
    const b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, n, gl.STREAM_DRAW);
    return b;
}
function bufferFromData(data) {
    const b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    return b;
}
function buffer(data) {
    let buf;
    if (Array.isArray(data)) buf = bufferFromData(data);
    else if (data.data) buf = bufferFromData(data.data);
    else buf = bufferFromSize(data.length);
    return {
        buf,
        subdata (data) {
            gl.bindBuffer(gl.ARRAY_BUFFER, buf);
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(data.flatMap((x)=>x)));
        }
    };
}
function elements(data) {
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buf);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Int16Array(data.flatMap((x)=>x)), gl.STATIC_DRAW);
    return {
        buffer: buf,
        length: data.length,
        subdata (data) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buf);
            gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER, 0, new Int16Array(data.flatMap((x)=>x)));
        }
    };
}
let previousTime = null;
function frame(cb) {
    function handler(currentTime) {
        const delta = currentTime - (previousTime || currentTime);
        previousTime = currentTime;
        const context = {
            time: currentTime / 1000
        };
        cb(context);
        window.requestAnimationFrame(handler);
    }
    window.requestAnimationFrame(handler);
}
function clear({ color }) {
    gl.clearColor(...color);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}
const LIGHTS = 4;
const lightbuf = new Float32Array(2 * LIGHTS);
const lightcolbuf = new Float32Array(3 * LIGHTS);
function myRegl({ attributes, uniforms, elements, count }) {
    return (props)=>{
        let prog = props.lights ? lprog : vprog;
        gl.useProgram(prog);
        gl.enableVertexAttribArray(positionLoc);
        gl.bindBuffer(gl.ARRAY_BUFFER, attributes.Position.buf);
        gl.vertexAttribPointer(positionLoc, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(normalLoc);
        gl.bindBuffer(gl.ARRAY_BUFFER, attributes.Normal.buf);
        gl.vertexAttribPointer(normalLoc, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(sideLoc);
        gl.bindBuffer(gl.ARRAY_BUFFER, attributes.Side.buf);
        gl.vertexAttribPointer(sideLoc, 1, gl.FLOAT, false, 0, 0);
        if ("constant" in attributes.Life) {
            gl.disableVertexAttribArray(lifeLoc);
            gl.vertexAttrib4f(lifeLoc, 1, 0, 0, 0);
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, attributes.Life.buf);
            gl.vertexAttribPointer(lifeLoc, 1, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(lifeLoc);
        }
        gl.uniform1f(gl.getUniformLocation(prog, "Rotation"), uniforms.Rotation(0, props));
        gl.uniform1f(gl.getUniformLocation(prog, "RotationY"), uniforms.RotationY(0, props));
        gl.uniform1f(gl.getUniformLocation(prog, "RotationZ"), uniforms.RotationZ(0, props));
        gl.uniform2fv(gl.getUniformLocation(prog, "Translation"), uniforms.Translation(0, props));
        gl.uniform1f(gl.getUniformLocation(prog, "Thickness"), uniforms.Thickness(0, props));
        gl.uniform1f(gl.getUniformLocation(prog, "Scale"), uniforms.Scale(0, props));
        gl.uniform3fv(gl.getUniformLocation(prog, "Color"), uniforms.Color(0, props));
        gl.uniform1f(gl.getUniformLocation(prog, "LifeMax"), uniforms.LifeMax(0, props));
        if (props.lights) {
            lightbuf.set(props.lights.flat());
            gl.uniform2fv(gl.getUniformLocation(prog, "Lights"), lightbuf);
            lightcolbuf.fill(0);
            lightcolbuf.set(props.lightColors.flat());
            gl.uniform3fv(gl.getUniformLocation(prog, "LightColors"), lightcolbuf);
        }
        gl.disable(gl.DEPTH_TEST);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elements.buffer);
        gl.drawElements(gl.TRIANGLES, count ? count(0, props) : elements.length, gl.UNSIGNED_SHORT, 0);
        gl.enableVertexAttribArray(lifeLoc);
    };
}
myRegl.buffer = buffer;
myRegl.elements = elements;
myRegl.frame = frame;
myRegl.clear = clear;
exports.default = myRegl;

},{"./shader.vert":"99rkk","./shader.frag":"cD2X8","./light.frag":"c4yCh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"99rkk":[function(require,module,exports) {
module.exports = "precision mediump float;\n#define GLSLIFY 1\n\nattribute vec3 Position;\nattribute vec3 Normal;\nattribute float Side;\nattribute float Life;\n\nuniform vec2 Translation;\nuniform float Rotation;\nuniform float RotationY;\nuniform float RotationZ;\nuniform float Thickness;\nuniform float Scale;\nuniform vec3 Color;\n\nvarying float VBar;\nvarying vec3 VColor;\nvarying float VLife;\nvarying float VBar2;\nvarying vec2 VPos;\n\nvec2 rotate(vec2 v, float a) {\n	float s = sin(a);\n	float c = cos(a);\n	mat2 m = mat2(c, -s, s, c);\n	return m * v;\n}\n\nmat4 rotationMatrix(vec3 axis, float angle) {\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n    \n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                0.0,                                0.0,                                0.0,                                1.0);\n}\n\nvec3 rotate(vec3 v, vec3 axis, float angle) {\n	mat4 m = rotationMatrix(axis, angle);\n	return (m * vec4(v, 1.0)).xyz;\n}\n\nvoid main() {\n    float depthMultiplier = 6.0;\n    float Aspect = 16./9.;\n    \n    // MODEL SPACE\n\n    // Rotate and scale the model\n    vec3 pos = Position;\n    vec3 norm = Normal;\n\n    pos *= Scale;\n\n    vec3 rotationAxis = vec3(1.0, 1.0, 0.2);\n    pos = rotate(pos, rotationAxis, Rotation);\n    norm = rotate(norm, rotationAxis, Rotation);\n\n    mat3 RY = mat3(\n        cos(RotationY),    0,    -sin(RotationY),\n        0,                 1,    0,\n        sin(RotationY),    0,    cos(RotationY)\n    );\n    pos = RY*pos;\n    norm = RY*norm;\n\n    // Downcast model to 2D\n    vec2 pos2d = pos.xy;\n    vec2 norm2d = norm.xy;\n    vec2 binormal = normalize(vec2(norm2d.y, -norm2d.x));\n\n    // Faux perspective\n    // float pseudoDepth = (pos.z*depthMultiplier + 1.0) * 0.5;\n    // float depthScaleFactor = pow(2.0, pseudoDepth) *0.5;\n\n    float pseudoDepth = pos.z*7.0;\n    float depthScaleFactor = pow(2.0, pseudoDepth);\n    pos2d *= depthScaleFactor; // This effect is somewhat fishy\n\n    // Extrude the line\n    pos2d = pos2d + binormal * Side * Thickness * depthScaleFactor;\n\n    \n    // Rotate again (not entirely clear why I didn't do that in model space)\n    mat2 RZ = mat2(cos(RotationZ), -sin(RotationZ), sin(RotationZ), cos(RotationZ));\n    pos2d = RZ * pos2d;\n\n    // Scale everything to match screen aspect ratio\n    pos2d *= vec2(1, Aspect);\n\n    // Move to right place\n    pos2d += Translation * vec2(1./16.0, 1./9.);\n\n    // Output   \n    gl_Position = vec4(pos2d, -pos.z, 1);\n    VBar = Side;\n    VColor = Color;\n    VLife = Life;\n    VPos=pos2d;\n}\n";

},{}],"cD2X8":[function(require,module,exports) {
module.exports = "precision mediump float;\n#define GLSLIFY 1\n\nvarying float VBar;\nvarying vec3 VColor;\nvarying float VLife;\n\nuniform float LifeMax;\n\nvoid main() {\n    // Left and right edges\n    float r1 = max(0., VBar);\n    float r2 = -min(0., VBar);\n\n    // Distance from center\n    float r3 = abs(VBar);\n    r3 *= r3;\n    r3 = 1.0-r3;\n\n    float f = pow(\n        pow(sin(gl_FragCoord.y), 2.0),\n        0.4);\n    vec3 color = VColor * (VLife/LifeMax) * f;\n\n    gl_FragColor = vec4(color, 1);\n}\n";

},{}],"c4yCh":[function(require,module,exports) {
module.exports = "precision mediump float;\n#define GLSLIFY 1\n\n#define LN 4\n\nvarying vec2 VPos;\nuniform vec2 Lights[LN];\nuniform vec3 LightColors[LN];\n\nfloat rand(vec2 c){\n	return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nfloat noise(vec2 p, float freq ){\n	float unit = 10.0/freq;\n	vec2 ij = floor(p/unit);\n	vec2 xy = mod(p,unit)/unit;\n	//xy = 3.*xy*xy-2.*xy*xy*xy;\n	xy = .5*(1.-cos(3.14159*xy));\n	float a = rand((ij+vec2(0.,0.)));\n	float b = rand((ij+vec2(1.,0.)));\n	float c = rand((ij+vec2(0.,1.)));\n	float d = rand((ij+vec2(1.,1.)));\n	float x1 = mix(a, b, xy.x);\n	float x2 = mix(c, d, xy.x);\n	return mix(x1, x2, xy.y);\n}\n\nfloat pNoise(vec2 p){\n	float persistance = .5;\n	float n = 0.;\n	float normK = 0.;\n	float f = 4.;\n	float amp = 1.;\n	for (int i = 0; i<8; i++){\n		n+=amp*noise(p, f);\n		f*=2.;\n		normK+=amp;\n		amp*=persistance;\n	}\n	float nf = n/normK;\n	return nf*nf*nf*nf;\n}\n\nfloat sq(float x) {return x*x;}\n\nvoid main() {\n    vec3 color = vec3(0., 0., 0.);\n\n    for (int i=0; i<3;++i) {\n        vec2 lightPos = Lights[i];\n        vec2 adjustedLightPos = lightPos/vec2(16.,9.);\n        vec3 light = LightColors[i];\n        float dist2 = sq(adjustedLightPos[0]-VPos[0]) + sq((adjustedLightPos[1]-VPos[1])*9./16.);\n        float intensity = clamp(1.0 - dist2, 0.0, 1.0);\n        color += light * intensity * 0.1;\n    }\n\n    // float n = clamp(pNoise(VPos+vec2(8.,4.), 2000), 0., 1.);\n    float n = pNoise(VPos+vec2(8.,4.))*20.0;\n    float cl=clamp(n,0.0,1.0);\n    color *= vec3(cl,cl,cl);\n\n    gl_FragColor = vec4(\n        color,\n        1.\n    );\n}\n";

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"c7hI2":[function(require,module,exports) {
module.exports = JSON.parse('{"verts":[[0.5,0,0.5],[-0.5,0,0.5],[-0.5,0,-0.5],[0.5,0,-0.5],[0.5,1,0.5],[-0.5,1,0.5],[0.5,1,-0.5],[-0.5,1,-0.5]],"elements":[[0,1],[1,2],[2,3],[3,0],[1,0],[0,4],[4,5],[5,1],[0,3],[3,6],[6,4],[4,0],[3,2],[2,7],[7,6],[6,3],[2,1],[1,5],[5,7],[7,2],[5,4],[4,6],[6,7],[7,5]]}');

},{}],"cXyhv":[function(require,module,exports) {
module.exports = JSON.parse('{"verts":[[0.27823292387637866,0.6731197734314913,0.5504444219489406],[1,0,0.2576565192551816],[0.422046679721816,0,0.9424770574950171],[0.9124665040009029,0.4394209657319785,0],[0.8249330080018058,0,-0.6211854122087753],[0.9124665040009029,2.1521448493247274e-18,0],[-0.7799474303347215,-0.483444278830994,0],[-1.012761932022466,0,0],[-0.6314468526269124,0.7918087664978339,0],[0.2253607328569716,0.9873695503187574,0],[0.9124665040009029,-0.4394209657319785,0],[0.2253607328569716,-0.9873695503187574,0],[-0.6314468526269124,-0.7918087664978339,0],[-0.7891756289917398,0,-0.666023217687051],[0.02867513506028989,-0.5877144296633471,-1.0322620431424978],[0.02867513506028989,0,-1.0322620431424978],[-0.1587073307804815,0.6731197734314913,-0.6333888351711773],[-0.4737169127015432,0,0.917594315308617],[-0.4737169127015432,-0.6873152120414554,0.917594315308617],[0.3476404737553102,-0.7226874525121854,0.917594315308617]],"elements":[[0,1],[1,2],[2,0],[3,1],[1,0],[0,3],[1,3],[3,4],[4,1],[3,5],[5,1],[1,3],[3,5],[5,4],[4,3],[12,13],[13,7],[7,6],[6,12],[13,14],[14,12],[12,13],[14,13],[13,15],[15,14],[13,16],[16,15],[15,13],[8,16],[16,13],[13,8],[16,8],[8,9],[9,16],[0,8],[8,9],[9,0],[8,0],[0,17],[17,8],[0,17],[17,2],[2,0],[18,2],[2,17],[17,18],[2,18],[18,19],[19,2],[19,11],[11,18],[18,19],[19,10],[10,11],[11,19],[1,19],[19,10],[10,1],[19,1],[1,2],[2,19],[4,10],[10,1],[1,4],[14,4],[4,10],[10,14],[4,14],[14,15],[15,4],[16,15],[15,4],[4,16],[16,4],[4,3],[3,16],[9,3],[3,16],[16,9],[3,9],[9,0],[0,3],[10,4],[4,5],[5,10],[4,1],[1,5],[5,4],[10,1],[1,5],[5,10],[14,10],[10,11],[11,14],[14,12],[12,11],[11,14],[18,11],[11,12],[12,18],[7,18],[18,12],[12,6],[6,7],[18,7],[7,17],[17,18],[7,17],[17,8],[8,7],[13,7],[7,8],[8,13]]}');

},{}],"Deywn":[function(require,module,exports) {
module.exports = JSON.parse('{"verts":[[-0.26616498934972227,0.778708328983637,-0.17873764778787402],[-0.9804203694613558,0.1331051501144988,-0.18733027855085146],[-0.5146089826597042,-0.505206530985756,0.7267038778560846],[0.09680047443155947,0.23085404344069496,1],[0.7403153548352706,0.500408908474245,-0.1279157217645478],[-0.2501093902355055,0.13761091725655952,-0.9354515429020729],[0.2327166759583584,-0.84028847926472,-0.31853414863301077],[0.954179595444924,-0.34139393145174723,-0.16851426959528945]],"elements":[[0,1],[1,2],[2,3],[3,0],[0,3],[3,4],[4,0],[2,1],[1,5],[5,6],[6,2],[3,7],[7,4],[4,3],[5,4],[4,7],[7,5],[5,1],[1,0],[0,5],[3,2],[2,6],[6,7],[7,3],[5,0],[0,4],[4,5],[5,7],[7,6],[6,5]]}');

},{}],"hgoRC":[function(require,module,exports) {
module.exports = JSON.parse('{"verts":[[0,-0.3308774366732588,-0.8620745881937901],[0.9804048934048908,-0.3308774366732588,0.41187707131751694],[-0.9804048934048908,-0.3308774366732588,0.41187707131751694],[0,1,-0.012773354861002903]],"elements":[[0,3],[3,1],[1,0],[0,1],[1,2],[2,0],[1,3],[3,2],[2,1],[2,3],[3,0],[0,2]]}');

},{}],"aKX7J":[function(require,module,exports) {
module.exports = JSON.parse('{"verts":[[0,-0.24274690774293603,-0.37162310398305404],[1,0,-0.4054525853916859],[0,0,0],[0,0,-2.6617713810190264],[-1,0,-0.4054525853916859],[0,0.9031849302114461,-0.5181185459772288]],"elements":[[0,1],[1,2],[2,0],[0,3],[3,1],[1,0],[3,0],[0,4],[4,3],[4,0],[0,2],[2,4],[5,4],[4,2],[2,5],[5,3],[3,4],[4,5],[3,5],[5,1],[1,3],[1,5],[5,2],[2,1],[4,3],[3,1],[1,2],[2,4]]}');

},{}],"4GTMw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cos", ()=>cos);
parcelHelpers.export(exports, "sin", ()=>sin);
parcelHelpers.export(exports, "random", ()=>random);
parcelHelpers.export(exports, "TAU", ()=>TAU);
parcelHelpers.export(exports, "pow", ()=>pow);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "sq", ()=>sq);
parcelHelpers.export(exports, "sqrt", ()=>sqrt);
parcelHelpers.export(exports, "r1", ()=>r1);
parcelHelpers.export(exports, "r2", ()=>r2);
parcelHelpers.export(exports, "r11", ()=>r11);
parcelHelpers.export(exports, "lerp", ()=>lerp);
parcelHelpers.export(exports, "sign", ()=>sign);
const { cos, sin, random, PI, pow, min, max, sqrt, sign } = Math;
const r1 = ()=>random() * 0.1;
const r2 = ()=>random() * 0.2;
const r11 = ()=>random() * 2 - 1;
const sq = (x)=>x * x;
const TAU = 2 * PI; // what?
function lerp(a, b, c) {
    c = max(0, min(1, c));
    return a * (1 - c) + b * c;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d4y3Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// mutators
parcelHelpers.export(exports, "newAsteroid", ()=>newAsteroid);
parcelHelpers.export(exports, "titleScreen", ()=>titleScreen);
parcelHelpers.export(exports, "setLevel", ()=>setLevel);
parcelHelpers.export(exports, "boom", ()=>boom);
parcelHelpers.export(exports, "shipParticles", ()=>shipParticles);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "step", ()=>step);
var _audio = require("./audio");
var _input = require("./input");
var _inputDefault = parcelHelpers.interopDefault(_input);
var _math = require("./math");
var _particles = require("./particles");
function newAsteroid(args = {}) {
    const x = (0, _math.random)() * 6.28;
    const t = (0, _math.random)() * 6.28;
    state.asteroids.push({
        pos: [
            (0, _math.cos)(t) * 16,
            (0, _math.sin)(t) * 9
        ],
        vec: [
            (0, _math.cos)(x) * 4,
            (0, _math.sin)(x) * 4
        ],
        rotation: 0,
        rZ: (0, _math.random)(),
        color: [
            0.7 + (0, _math.r2)(),
            0.4 + (0, _math.r2)(),
            0.1 + (0, _math.r2)()
        ],
        colliderSize: 1.6,
        children: [
            4,
            3
        ],
        generation: 0,
        ...args
    });
}
function baseState() {
    return {
        title: false,
        level: 0,
        asteroids: [],
        bullets: [],
        mortars: [],
        enemyBullets: [],
        rotation: 0,
        ship: {
            pos: [
                0,
                0
            ],
            vec: [
                0,
                0
            ],
            thrust: 0,
            angle: 1,
            colliderSize: 0.5,
            aura: 0,
            hitTimer: 0,
            powerups: 0
        },
        auraSize: 5,
        blasts: [],
        cooldowns: [
            0,
            0,
            0
        ],
        scheduledBullets: [],
        mines: [],
        aliens: [],
        signs: [],
        powerups: [],
        win: 0,
        score: 0,
        combo: 0,
        hp: 9
    };
}
function titleScreen() {
    Object.assign(state, {
        ...baseState(),
        title: true,
        asteroids: [
            {
                pos: [
                    -11,
                    2
                ],
                vec: [
                    0,
                    0
                ],
                rotation: 0,
                rZ: (0, _math.random)(),
                color: [
                    0.7 + (0, _math.r2)(),
                    0.4 + (0, _math.r2)(),
                    0.1 + (0, _math.r2)()
                ],
                colliderSize: 2.6,
                children: [],
                generation: 0
            },
            {
                pos: [
                    11,
                    2
                ],
                vec: [
                    0,
                    0
                ],
                rotation: 0,
                rZ: (0, _math.random)(),
                color: [
                    0.7 + (0, _math.r2)(),
                    0.4 + (0, _math.r2)(),
                    0.1 + (0, _math.r2)()
                ],
                colliderSize: 2.6,
                children: [],
                generation: 0
            }
        ],
        mines: [
            {
                pos: [
                    0,
                    -2
                ],
                vec: [
                    0,
                    0
                ],
                life: 1,
                colliderSize: 0.5
            }
        ],
        win: 0
    });
}
function setLevel(n = 0) {
    state.title = false;
    state.level = n;
    state.asteroids = [];
    state.mines = [];
    state.aliens = [];
    state.win = 0;
    state.ship.pos = [
        0,
        0
    ];
    state.ship.vec = [
        0,
        0
    ];
    state.signs.push({
        index: n + 4,
        life: 2,
        pos: [
            0,
            0
        ]
    });
    const asteroidCount = [
        1,
        2,
        2,
        3,
        3,
        3
    ][n];
    const extraAsteroids = [
        [],
        [
            "p"
        ],
        [
            "p"
        ],
        [
            "p",
            "a"
        ],
        [
            "p"
        ],
        [
            "a"
        ]
    ];
    for(let i = 0; i < asteroidCount; ++i)newAsteroid();
    if (n > 0) Array(n + 1).fill(0).map((_, i)=>newAsteroid({
            colliderSize: 1,
            children: [
                5
            ],
            generation: 1,
            has: extraAsteroids[n][i],
            color: extraAsteroids[n][i] == "a" ? [
                1,
                1,
                1
            ] : undefined
        }));
}
// initial state
const state = baseState();
titleScreen();
// save state on refresh
Object.assign(state, JSON.parse(sessionStorage.getItem("state") || '"{}"'));
window.onbeforeunload = ()=>{
    sessionStorage.setItem("state", JSON.stringify(state));
};
// Step
function step(dt) {
    if (dt > 1) return;
    state.rotation += dt;
    state.signs = state.signs.flatMap((x)=>{
        x.life -= dt;
        return x.life > 0 ? [
            x
        ] : [];
    });
    if (state.title) return;
    state.ship.collides = false;
    [
        ...state.asteroids,
        ...state.mines,
        ...state.aliens
    ].forEach((a)=>{
        move(a, dt);
        // @ts-ignore
        if (a.rotation !== undefined) a.rotation += dt;
        // @ts-ignore
        if (a.life !== undefined) a.life -= dt;
        // @ts-ignore
        if (a.inv !== undefined) a.inv -= dt;
        a.collides = false;
        if (state.ship.hitTimer === 0) collide(a, state.ship, state.ship.colliderSize);
        if (state.ship.aura) collideAura(a, state.ship, state.ship.aura * state.auraSize);
        state.blasts.forEach((b)=>{
            collideAura(a, b, b.size * 3);
        });
    });
    state.powerups = state.powerups.flatMap((p)=>{
        move(p, dt);
        collide(state.ship, p, 1);
        if (p.collides) {
            state.ship.collides = false; //:)
            applyPowerup();
            return [];
        }
        return [
            p
        ];
    });
    state.bullets = state.bullets.flatMap((b)=>{
        move(b, dt);
        b.life -= dt;
        if (b.life > 0 && !b.collides) return [
            b
        ];
        return [];
    });
    state.mortars = state.mortars.flatMap((m)=>{
        move(m, dt);
        m.life -= dt;
        if (m.life > 0) return [
            m
        ];
        else {
            state.blasts.push({
                pos: m.pos,
                life: 0.3,
                size: 0
            });
            return [];
        }
    });
    state.enemyBullets.map((b)=>{
        move(b, dt);
        b.life -= dt;
    });
    // O(n^2) party [INSERT QUADTREE HERE]
    [
        ...state.bullets,
        ...state.enemyBullets
    ].forEach((b)=>{
        state.asteroids.forEach((a)=>{
            collide(a, b, 0);
        });
    });
    state.bullets.forEach((b)=>{
        [
            ...state.mines,
            ...state.aliens
        ].forEach((a)=>{
            collide(a, b, 0);
        });
    });
    // end O(N^2) party
    if (state.ship.hitTimer === 0) state.enemyBullets.forEach((b)=>{
        collide(state.ship, b, 0);
    });
    state.enemyBullets = state.enemyBullets.flatMap((b)=>{
        if (b.life > 0 && !b.collides) return [
            b
        ];
        if (state.ship.collides) boom(b.pos);
        return [];
    });
    state.asteroids = state.asteroids.flatMap((a)=>{
        if (!a.collides) return [
            a
        ];
        score();
        boom(a.pos);
        const children = [
            ...a.children
        ];
        if (!children.length) return [];
        const n = children.shift();
        if (a.has === "m") state.mines.push({
            pos: [
                ...a.pos
            ],
            vec: [
                (0, _math.random)(),
                (0, _math.random)()
            ],
            colliderSize: 0.5,
            life: 3,
            inv: 1
        });
        if (a.has === "p") state.powerups.push({
            pos: [
                ...a.pos
            ],
            vec: [
                (0, _math.random)(),
                (0, _math.random)()
            ]
        });
        if (a.has === "a") state.aliens.push({
            pos: [
                ...a.pos
            ],
            vec: [
                (0, _math.random)(),
                (0, _math.random)()
            ],
            inv: 1,
            colliderSize: 1,
            hits: state.level < 5 ? 3 : 5,
            shootTimer: 2.4
        });
        return Array(n).fill(0).map((_)=>{
            const x = (0, _math.random)() * 6;
            let has;
            const thres = [
                0,
                0,
                0.5,
                0,
                0.8,
                0.3
            ][state.level];
            if (a.generation === 0 && (0, _math.random)() < thres) has = "m";
            return {
                pos: [
                    ...a.pos
                ],
                vec: [
                    (0, _math.cos)(x) * 4,
                    (0, _math.sin)(x) * 4
                ],
                rotation: 0,
                rZ: (0, _math.random)(),
                color: has === "m" ? [
                    1,
                    0,
                    0
                ] : [
                    0.7 + (0, _math.r2)(),
                    0.4 + (0, _math.r2)(),
                    0.1 + (0, _math.r2)()
                ],
                colliderSize: a.colliderSize / 2,
                children: [
                    ...children
                ],
                generation: a.generation + 1,
                has
            };
        });
    });
    state.mines = state.mines.flatMap((m)=>{
        if (m.collides && m.inv < 0) {
            score(25);
            boom(m.pos);
            return [];
        }
        if (m.life < 0 && (0, _audio.currentBeatFraction)() < 0.05) {
            boom(m.pos);
            // spawn bullets
            for(let i = 0; i < (0, _math.TAU); i += (0, _math.TAU) / 8)[
                15,
                8
            ].map((v)=>state.enemyBullets.push({
                    life: 0.6,
                    pos: [
                        ...m.pos
                    ],
                    vec: [
                        (0, _math.sin)(i) * v,
                        (0, _math.cos)(i) * v
                    ],
                    rotation: i
                }));
            return [];
        }
        return [
            m
        ];
    });
    state.aliens = state.aliens.flatMap((a)=>{
        if (a.collides && a.inv < 0 && a.hits === 0) {
            booms(a.pos, 4);
            return [];
        }
        if (a.collides && a.inv < 0) {
            score(50);
            // teleport
            boom(a.pos);
            a.hits -= 1;
            a.pos = [
                (0, _math.r11)() * 6,
                (0, _math.r11)() * 3
            ];
            // Reset shot timer
            a.shootTimer = (4 - (0, _audio.currentBeatFraction)()) * 0.6;
            a.shootCooldown = 0;
            boom(a.pos);
            // Small invulnerability to avoid lucky hits after teleport
            a.inv = 0.3;
        }
        a.shootTimer -= dt;
        if (a.shootTimer <= 0 && state.hp) {
            (0, _audio.playS)();
            a.shootTimer = (4 - (0, _audio.currentBeatFraction)()) * 0.6;
            a.shootCooldown = 1.2;
            a.shootAngle = Math.atan2(state.ship.pos[0] - a.pos[0], state.ship.pos[1] - a.pos[1]);
        }
        a.shootCooldown = (0, _math.max)(0, a.shootCooldown - dt);
        if (a.shootCooldown > 0.1 && a.shootCooldown <= 0.6 && !state.ship.hitTimer && state.hp) {
            // hit moment, scan collision
            const co = (0, _math.cos)(a.shootAngle), si = (0, _math.sin)(a.shootAngle);
            for(let i = 0; i < 30; ++i){
                const p = [
                    a.pos[0] + si * i,
                    a.pos[1] + co * i
                ];
                collide(state.ship, {
                    pos: p
                }, 0);
                if (state.ship.collides) {
                    boom(state.ship.pos);
                    break;
                }
            }
        }
        if (a.shootTimer) return [
            a
        ];
    });
    updateShip(state.ship, dt);
    checkWin();
}
let shipParticles = null;
function updateShip(s, dt) {
    const sens = 4;
    const accel = 48;
    s.angle += ((0, _inputDefault.default).right - (0, _inputDefault.default).left) * sens * dt;
    if (state.hp > 0) {
        if (s.collides) {
            state.combo = 0;
            if (--state.hp == 0) {
                booms(s.pos, 5);
                return;
            }
            s.hitTimer = 1.2;
        } else s.hitTimer = (0, _math.max)(0, s.hitTimer - dt);
    }
    const si = (0, _math.sin)(s.angle), co = (0, _math.cos)(s.angle);
    if (state.hp > 0) {
        if ((0, _inputDefault.default).thrust) {
            s.vec[0] += accel * dt * si;
            s.vec[1] += accel * dt * co;
        }
        s.thrust += ((0, _inputDefault.default).right - (0, _inputDefault.default).left) * dt * 4;
        s.vec[0] *= (0, _math.pow)(0.5, dt * 2);
        s.vec[1] *= (0, _math.pow)(0.5, dt * 2);
        s.thrust *= (0, _math.pow)(0.5, dt * 3);
        move(s, dt);
    }
    if (!shipParticles) shipParticles = (0, _particles.makeExhaust)();
    shipParticles.pos = [
        s.pos[0] - si * 0.6,
        s.pos[1] - co * 0.6
    ];
    shipParticles.vec = [
        s.vec[0] - si * 10,
        s.vec[1] - co * 10
    ];
    shipParticles.variance = 3;
    shipParticles.rate = state.hp && (0, _inputDefault.default).thrust ? 0.02 : 100;
    shipParticles.update(dt);
    if (state.hp) state.scheduledBullets = state.scheduledBullets.flatMap((delay)=>{
        delay -= dt;
        if (delay > 0) return [
            delay
        ];
        else {
            if (s.powerups < 3) state.bullets.push({
                life: 1,
                pos: [
                    s.pos[0] + si,
                    s.pos[1] + co
                ],
                vec: [
                    si * 33 + s.vec[0],
                    co * 33 + s.vec[1]
                ],
                rotation: s.angle
            });
            else {
                state.bullets.push({
                    life: 1,
                    pos: [
                        s.pos[0] + si + co * 0.2,
                        s.pos[1] + co - si * 0.2
                    ],
                    vec: [
                        si * 33 + s.vec[0],
                        co * 33 + s.vec[1]
                    ],
                    rotation: s.angle
                });
                state.bullets.push({
                    life: 1,
                    pos: [
                        s.pos[0] + si - co * 0.2,
                        s.pos[1] + co + si * 0.2
                    ],
                    vec: [
                        si * 33 + s.vec[0],
                        co * 33 + s.vec[1]
                    ],
                    rotation: s.angle
                });
            }
            return [];
        }
    });
    if (state.hp && state.scheduledMortar) {
        state.scheduledMortar = (0, _math.max)(0, state.scheduledMortar - dt);
        if (!state.scheduledMortar) fireMortars(s, 0.3);
    }
    if (state.ship.aura) {
        state.ship.aura += dt;
        if (state.ship.aura >= 0.6) state.ship.aura = 0;
    }
    state.blasts = state.blasts.flatMap((b)=>{
        b.life -= dt;
        b.size += dt * 2;
        return b.life < 0 ? [] : [
            b
        ];
    });
    if (state.hp) {
        state.cooldowns = state.cooldowns.map((x)=>(0, _math.max)(0, x - dt));
        const adj = (0, _audio.currentBeatFraction)() * 0.6 + 0.2;
        if (!state.ship.hitTimer) {
            if ((0, _inputDefault.default).skill1 && state.cooldowns[0] === 0) {
                state.cooldowns[0] = 1.2;
                if (checkBeat()) {
                    state.cooldowns[0] = 2.4 - adj;
                    (0, _audio.playQ)();
                    state.scheduledBullets.push(0.15, 0.3, 0.45, 0.6, 0.75);
                }
            }
            if ((0, _inputDefault.default).skill2 && state.cooldowns[1] === 0 && state.ship.powerups >= 1) {
                state.cooldowns[1] = 1.2;
                if (checkBeat()) {
                    state.cooldowns[1] = 4.8 - adj;
                    (0, _audio.playW)();
                    state.ship.aura = 0.1;
                }
            }
            if ((0, _inputDefault.default).skill3 && state.cooldowns[2] === 0 && state.ship.powerups >= 2) {
                state.cooldowns[2] = 1.2;
                if (checkBeat()) {
                    state.cooldowns[2] = 4.8 - adj;
                    (0, _audio.playE)();
                    fireMortars(s);
                    state.scheduledMortar = 0.6 * (3 / 16) * 4;
                }
            }
        }
    }
}
function applyPowerup() {
    if (state.ship.powerups >= 4) return;
    const v = state.ship.powerups += 1;
    // v=1: unlocks aura
    // v=2: unlocks mortar
    // v=3: improves gun
    if (v === 4) state.auraSize *= 1.6;
    state.signs.push({
        pos: [
            0,
            2
        ],
        life: 4.8,
        size: 0.004,
        index: 18 + v
    });
}
function score(n = 10) {
    if (state.hp) state.score += n + state.combo++;
}
function checkBeat(t = 0.2) {
    const f = (0, _audio.currentBeatFraction)();
    if (f > 0.75 || f < 0.2) {
        console.debug("checkBeat", f, "true");
        return true;
    }
    const { pos } = state.ship;
    state.signs.push({
        index: 17,
        life: 0.7,
        v: 0,
        pos: [
            pos[0],
            pos[1] - (0, _math.sign)(pos[1])
        ],
        size: 0.0025,
        color: [
            1,
            0.5,
            0.5
        ]
    });
    console.debug("checkBeat", f, "false");
    state.combo = 0;
    return false;
}
function fireMortars(s, o = 0) {
    state.mortars.push(...[
        -0.3 - o,
        0.3 + o
    ].map((q)=>({
            pos: [
                ...s.pos
            ],
            vec: [
                (0, _math.sin)(s.angle + q) * 8,
                (0, _math.cos)(s.angle + q) * 8
            ],
            rotation: s.angle + q,
            life: 0.6 * (7 / 16) * 4
        })));
}
function collide(a, s, colliderSize) {
    const dist2 = (0, _math.sq)(a.pos[0] - s.pos[0]) + (0, _math.sq)(a.pos[1] - s.pos[1]);
    const rng2 = (0, _math.sq)(a.colliderSize + colliderSize);
    if (dist2 < rng2) a.collides = s.collides = true;
}
function collideAura(a, s, size) {
    const dist2 = (0, _math.sq)(a.pos[0] - s.pos[0]) + (0, _math.sq)(a.pos[1] - s.pos[1]);
    if (dist2 < (0, _math.sq)(size + a.colliderSize)) a.collides = true;
}
function checkWin() {
    if (!state.win && state.hp && // don't advance level if died on last asteroid
    ![
        ...state.asteroids,
        ...state.mines,
        ...state.aliens
    ].length) {
        state.win = 1;
        state.signs.push({
            index: 10 + (0 | (0, _math.random)() * 4),
            life: 2,
            pos: [
                0,
                -5
            ]
        });
        setTimeout(()=>{
            if (state.level < 5) {
                setLevel(state.level + 1);
                state.hp++;
            }
        }, 2200);
    }
}
function boom(p) {
    (0, _audio.playBoom)();
    if ((0, _particles.particles).length < 20) (0, _particles.particles).push(...(0, _particles.makeExplosion)(p));
}
function booms(p, n) {
    for(let i = 0; i < n; ++i)setTimeout(()=>boom([
            p[0] + (0, _math.r11)(),
            p[1] + (0, _math.r11)()
        ]), i * 300);
}
function move({ pos, vec }, dt) {
    pos[0] += vec[0] * dt;
    pos[1] += vec[1] * dt;
    wraparound(pos);
}
function wraparound(p) {
    // wraparound with a little deadzone for simplicity
    // idea: different deadzone for different objects
    if (p[0] > 17) p[0] -= 34;
    if (p[0] < -17) p[0] += 34;
    if (p[1] > 10) p[1] -= 20;
    if (p[1] < -10) p[1] += 20;
}
window.addEventListener("keyup", (e)=>{
    if (e.code == "KeyQ" && state.title) setLevel();
    if (e.key == "Escape") titleScreen();
    if (e.code == "KeyR") {
        if (state.win && state.level == 5 || !state.title && state.hp == 0) {
            titleScreen();
            setLevel();
        }
    }
});
window.addEventListener("dblclick", (e)=>{
    if (state.win && state.level == 5) {
        const text = `I just beat ALL the rocks and scored ${state.score * 10} in Beat Rocks! #js13k @beat_rocks_game`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`);
    } else if (!state.title && state.hp == 0) {
        const text = `I just reached level ${state.level + 1} and scored ${state.score * 10} in Beat Rocks! #js13k @beat_rocks_game`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`);
    }
});
// @ts-ignore
window.state = state;

},{"./audio":"1HZY9","./input":"8J5yZ","./math":"4GTMw","./particles":"g2Acl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1HZY9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "currentBeatFraction", ()=>currentBeatFraction);
parcelHelpers.export(exports, "nextBeat", ()=>nextBeat);
parcelHelpers.export(exports, "playBGM", ()=>playBGM);
parcelHelpers.export(exports, "playQ", ()=>playQ);
parcelHelpers.export(exports, "playW", ()=>playW);
parcelHelpers.export(exports, "playE", ()=>playE);
parcelHelpers.export(exports, "playS", ()=>playS);
parcelHelpers.export(exports, "playBoom", ()=>playBoom);
var _playerSmall = require("./player-small");
var _playerSmallDefault = parcelHelpers.interopDefault(_playerSmall);
var _song = require("./song");
var _songDefault = parcelHelpers.interopDefault(_song);
const ac = new AudioContext();
const bgm = {
    ...(0, _songDefault.default),
    songData: (0, _songDefault.default).songData.slice(0, 6),
    numChannels: 6
};
function getFirstIndex({ endPattern }, instrument) {
    for(let px = 0; px <= endPattern; ++px){
        if ((0, _songDefault.default).songData[instrument].p[px]) return px;
    }
// throw new Error("Failed to find first pattern");
}
function trimEffect(song, instrument, m = 0) {
    const fx = getFirstIndex(song, instrument);
    const { i, p, c } = song.songData[instrument];
    return {
        ...song,
        songData: [
            {
                i,
                p: [
                    p[fx] + m
                ],
                c
            }
        ],
        numChannels: 1,
        endPattern: 1
    };
}
function trimEffect2(song, instrument) {
    const fx = getFirstIndex(song, instrument);
    const { i, p, c } = song.songData[instrument];
    const { i: i2, p: p2, c: c2 } = song.songData[instrument + 1];
    return {
        ...song,
        songData: [
            {
                i,
                p: p.slice(fx, fx + 1),
                c
            },
            {
                i: i2,
                p: p2.slice(fx, fx + 1),
                c: c2
            }
        ],
        numChannels: 2,
        endPattern: 1
    };
}
function toBuffer(song) {
    const p = (0, _playerSmallDefault.default)();
    p.init(song);
    while(p.generate() < 1);
    return p.createAudioBuffer(ac);
}
function trimPrefix(buffer, seconds) {
    const samplesToTrim = 0 | seconds * buffer.sampleRate;
    console.log("woudl trim", {
        samplesToTrim,
        seconds,
        secondsPerBeat
    });
    const result = ac.createBuffer(2, buffer.length - samplesToTrim, buffer.sampleRate);
    [
        0,
        1
    ].forEach((n)=>{
        const data = buffer.getChannelData(n);
        const source = data.subarray(samplesToTrim);
        const dest = result.getChannelData(n);
        dest.set(source);
    });
    return result;
}
function toSource(buffer, trimMs = 0) {
    const source = ac.createBufferSource();
    source.buffer = buffer;
    source.connect(ac.destination);
    return source;
}
const bpm = 100;
const secondsPerBeat = 60 / bpm;
function timeIntoNextBeat() {
    let { currentTime } = ac;
    const sbb = secondsPerBeat;
    const beatsSoFar = 0 | currentTime / sbb;
    const lastBeatTime = beatsSoFar * sbb;
    const timeIntoNextBeat = currentTime - lastBeatTime;
    return timeIntoNextBeat;
}
function currentBeatFraction() {
    return timeIntoNextBeat() / secondsPerBeat;
}
function nextBeat() {
    const frac = currentBeatFraction();
    const remainingFrac = frac ? 1 - frac : 0;
    const nextBeat = ac.currentTime + remainingFrac * secondsPerBeat;
    return nextBeat;
}
function play(song, { loop, now } = {}) {
    let buf = toBuffer(song);
    return ()=>{
        let source = toSource(buf);
        source.loop = loop;
        if (loop) {
            source.start(nextBeat());
            return;
        }
        if (now) {
            source.start();
            return;
        }
        // beat correction for the rest
        let cbf = currentBeatFraction();
        if (cbf > 0.2) source.start(nextBeat());
        else if (cbf > 0.08) {
            const trim = (cbf - 0.08) * 0.6;
            source = toSource(trimPrefix(buf, trim));
            source.start();
        } else source.start();
    };
}
const playBGM = play(bgm, {
    loop: true
});
const playQ = play(trimEffect((0, _songDefault.default), 6));
const playW = play(trimEffect((0, _songDefault.default), 7));
const playE = play(trimEffect((0, _songDefault.default), 9));
const playS = play(trimEffect2((0, _songDefault.default), 11));
const playBoom1 = play(trimEffect((0, _songDefault.default), 10), {
    now: true
});
const playBoom2 = play(trimEffect((0, _songDefault.default), 10, 1), {
    now: true
});
function playBoom() {
    (Math.random() < 0.5 ? playBoom1 : playBoom2)();
}
playBGM();

},{"./player-small":"5wiu6","./song":"dsJce","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5wiu6":[function(require,module,exports) {
/*
 * Copyright (c) 2011-2013 Marcus Geelnard
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 * 1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 * 2. Altered source versions must be plainly marked as such, and must not be
 *    misrepresented as being the original software.
 *
 * 3. This notice may not be removed or altered from any source
 *    distribution.
 */ /*
 * ----------------------------------------------------------
 *
 * Player code altered by Kos for js13k entry
 * based on version obtained from https://sb.bitsnbites.eu/player-small.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>CPlayer);
var _math = require("./math");
function CPlayer() {
    //--------------------------------------------------------------------------
    // Private methods
    //--------------------------------------------------------------------------
    // Oscillators
    var osc_sin = function(value) {
        return (0, _math.sin)(value * 6.283184);
    };
    var osc_saw = function(value) {
        return 2 * (value % 1) - 1;
    };
    var osc_square = function(value) {
        return value % 1 < 0.5 ? 1 : -1;
    };
    var osc_tri = function(value) {
        var v2 = value % 1 * 4;
        if (v2 < 2) return v2 - 1;
        return 3 - v2;
    };
    var getnotefreq = function(n) {
        // 174.61.. / 44100 = 0.003959503758 (F3)
        return 0.003959503758 * 2 ** ((n - 128) / 12);
    };
    var createNote = function(instr, n, rowLen) {
        var osc1 = mOscillators[instr.i[0]], o1vol = instr.i[1], o1xenv = instr.i[3] / 32, osc2 = mOscillators[instr.i[4]], o2vol = instr.i[5], o2xenv = instr.i[8] / 32, noiseVol = instr.i[9], attack = instr.i[10] * instr.i[10] * 4, sustain = instr.i[11] * instr.i[11] * 4, release = instr.i[12] * instr.i[12] * 4, releaseInv = 1 / release, expDecay = -instr.i[13] / 16, arp = instr.i[14], arpInterval = rowLen * 2 ** (2 - instr.i[15]);
        var noteBuf = new Int32Array(attack + sustain + release);
        // Re-trig oscillators
        var c1 = 0, c2 = 0;
        // Local variables.
        var j, j2, e, t, rsample, o1t, o2t;
        // Generate one note (attack + sustain + release)
        for(j = 0, j2 = 0; j < attack + sustain + release; j++, j2++){
            if (j2 >= 0) {
                // Switch arpeggio note.
                arp = arp >> 8 | (arp & 255) << 4;
                j2 -= arpInterval;
                // Calculate note frequencies for the oscillators
                o1t = getnotefreq(n + (arp & 15) + instr.i[2] - 128);
                o2t = getnotefreq(n + (arp & 15) + instr.i[6] - 128) * (1 + 0.0008 * instr.i[7]);
            }
            // Envelope
            e = 1;
            if (j < attack) e = j / attack;
            else if (j >= attack + sustain) {
                e = (j - attack - sustain) * releaseInv;
                e = (1 - e) * 3 ** (expDecay * e);
            }
            // Oscillator 1
            c1 += o1t * e ** o1xenv;
            rsample = osc1(c1) * o1vol;
            // Oscillator 2
            c2 += o2t * e ** o2xenv;
            rsample += osc2(c2) * o2vol;
            // Noise oscillator
            if (noiseVol) rsample += (2 * (0, _math.random)() - 1) * noiseVol;
            // Add to (mono) channel buffer
            noteBuf[j] = 80 * rsample * e | 0;
        }
        return noteBuf;
    };
    //--------------------------------------------------------------------------
    // Private members
    //--------------------------------------------------------------------------
    // Array of oscillator functions
    var mOscillators = [
        osc_sin,
        osc_square,
        osc_saw,
        osc_tri
    ];
    // Private variables set up by init()
    var mSong, mLastRow, mCurrentCol, mNumWords, mMixBuf;
    //--------------------------------------------------------------------------
    // Initialization
    //--------------------------------------------------------------------------
    return {
        init (song) {
            // Define the song
            mSong = song;
            // Init iteration state variables
            mLastRow = song.endPattern;
            mCurrentCol = 0;
            // Prepare song info
            mNumWords = song.rowLen * song.patternLen * (mLastRow + 1) * 2;
            // Create work buffer (initially cleared)
            mMixBuf = new Int32Array(mNumWords);
        },
        generate () {
            // Local variables
            var i, j, b, p, row, col, n, cp, k, t, lfor, e, x, rsample, rowStartSample, f, da;
            // Put performance critical items in local variables
            var chnBuf = new Int32Array(mNumWords), instr = mSong.songData[mCurrentCol], rowLen = mSong.rowLen, patternLen = mSong.patternLen;
            // Clear effect state
            var low = 0, band = 0, high;
            var lsample, filterActive = false;
            // Clear note cache.
            var noteCache = [];
            // Patterns
            for(p = 0; p <= mLastRow; ++p){
                cp = instr.p[p];
                // Pattern rows
                for(row = 0; row < patternLen; ++row){
                    // Execute effect command.
                    var cmdNo = cp ? instr.c[cp - 1].f[row] : 0;
                    if (cmdNo) {
                        instr.i[cmdNo - 1] = instr.c[cp - 1].f[row + patternLen] || 0;
                        // Clear the note cache since the instrument has changed.
                        if (cmdNo < 17) noteCache = [];
                    }
                    // Put performance critical instrument properties in local variables
                    var oscLFO = mOscillators[instr.i[16]], lfoAmt = instr.i[17] / 512, lfoFreq = 2 ** (instr.i[18] - 9) / rowLen, fxLFO = instr.i[19], fxFilter = instr.i[20], fxFreq = instr.i[21] * 135.82764118168 / 44100, q = 1 - instr.i[22] / 255, dist = instr.i[23] * 1e-5, drive = instr.i[24] / 32, panAmt = instr.i[25] / 512, panFreq = 6.283184 * 2 ** (instr.i[26] - 9) / rowLen, dlyAmt = instr.i[27] / 255, dly = instr.i[28] * rowLen & -2; // Must be an even number
                    // Calculate start sample number for this row in the pattern
                    rowStartSample = (p * patternLen + row) * rowLen;
                    // Generate notes for this pattern row
                    for(col = 0; col < 4; ++col){
                        n = cp ? instr.c[cp - 1].n[row + col * patternLen] : 0;
                        if (n) {
                            if (!noteCache[n]) noteCache[n] = createNote(instr, n, rowLen);
                            // Copy note from the note cache
                            var noteBuf = noteCache[n];
                            for(j = 0, i = rowStartSample * 2; j < noteBuf.length; j++, i += 2)chnBuf[i] += noteBuf[j];
                        }
                    }
                    // Perform effects for this pattern row
                    for(j = 0; j < rowLen; j++){
                        // Dry mono-sample
                        k = (rowStartSample + j) * 2;
                        rsample = chnBuf[k];
                        // We only do effects if we have some sound input
                        if (rsample || filterActive) {
                            // State variable filter
                            f = fxFreq;
                            if (fxLFO) f *= oscLFO(lfoFreq * k) * lfoAmt + 0.5;
                            f = 1.5 * (0, _math.sin)(f);
                            low += f * band;
                            high = q * (rsample - band) - low;
                            band += f * high;
                            rsample = fxFilter == 3 ? band : fxFilter == 1 ? high : low;
                            // Distortion
                            if (dist) {
                                rsample *= dist;
                                rsample = rsample < 1 ? rsample > -1 ? osc_sin(rsample * 0.25) : -1 : 1;
                                rsample /= dist;
                            }
                            // Drive
                            rsample *= drive;
                            // Is the filter active (i.e. still audiable)?
                            filterActive = rsample * rsample > 1e-5;
                            // Panning
                            t = (0, _math.sin)(panFreq * k) * panAmt + 0.5;
                            lsample = rsample * (1 - t);
                            rsample *= t;
                        } else lsample = 0;
                        // Delay is always done, since it does not need sound input
                        if (k >= dly) {
                            // Left channel = left + right[-p] * t
                            lsample += chnBuf[k - dly + 1] * dlyAmt;
                            // Right channel = right + left[-p] * t
                            rsample += chnBuf[k - dly] * dlyAmt;
                        }
                        // Store in stereo channel buffer (needed for the delay effect)
                        chnBuf[k] = lsample | 0;
                        chnBuf[k + 1] = rsample | 0;
                        // ...and add to stereo mix buffer
                        mMixBuf[k] += lsample | 0;
                        mMixBuf[k + 1] += rsample | 0;
                    }
                }
            }
            // Next iteration. Return progress (1.0 == done!).
            mCurrentCol++;
            return mCurrentCol / mSong.numChannels;
        },
        // Create a AudioBuffer from the generated audio data
        createAudioBuffer (context) {
            var buffer = context.createBuffer(2, mNumWords / 2, 44100);
            for(var i = 0; i < 2; i++){
                var data = buffer.getChannelData(i);
                for(var j = i; j < mNumWords; j += 2)data[j >> 1] = mMixBuf[j] / 65536;
            }
            return buffer;
        }
    };
// // Create a WAVE formatted Uint8Array from the generated audio data
// this.createWave = function () {
//   // Create WAVE header
//   var headerLen = 44;
//   var l1 = headerLen + mNumWords * 2 - 8;
//   var l2 = l1 - 36;
//   var wave = new Uint8Array(headerLen + mNumWords * 2);
//   wave.set([
//     82,
//     73,
//     70,
//     70,
//     l1 & 255,
//     (l1 >> 8) & 255,
//     (l1 >> 16) & 255,
//     (l1 >> 24) & 255,
//     87,
//     65,
//     86,
//     69,
//     102,
//     109,
//     116,
//     32,
//     16,
//     0,
//     0,
//     0,
//     1,
//     0,
//     2,
//     0,
//     68,
//     172,
//     0,
//     0,
//     16,
//     177,
//     2,
//     0,
//     4,
//     0,
//     16,
//     0,
//     100,
//     97,
//     116,
//     97,
//     l2 & 255,
//     (l2 >> 8) & 255,
//     (l2 >> 16) & 255,
//     (l2 >> 24) & 255,
//   ]);
//   // Append actual wave data
//   for (var i = 0, idx = headerLen; i < mNumWords; ++i) {
//     // Note: We clamp here
//     var y = mMixBuf[i];
//     y = y < -32767 ? -32767 : y > 32767 ? 32767 : y;
//     wave[idx++] = y & 255;
//     wave[idx++] = (y >> 8) & 255;
//   }
//   // Return the WAVE formatted typed array
//   return wave;
// };
// // Get n samples of wave data at time t [s]. Wave data in range [-2,2].
// this.getData = function (t, n) {
//   var i = 2 * Math.floor(t * 44100);
//   var d = new Array(n);
//   for (var j = 0; j < 2 * n; j += 1) {
//     var k = i + j;
//     d[j] = t > 0 && k < mMixBuf.length ? mMixBuf[k] / 32768 : 0;
//   }
//   return d;
// };
}

},{"./math":"4GTMw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dsJce":[function(require,module,exports) {
// This music has been exported by SoundBox. You can use it with
// http://sb.bitsnbites.eu/player-small.js in your own product.
// See http://sb.bitsnbites.eu/demo.html for an example of how to
// use it in a demo.
// Song data
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    songData: [
        {
            // Instrument 0
            i: [
                3,
                100,
                128,
                116,
                2,
                0,
                128,
                0,
                0,
                11,
                3,
                25,
                93,
                5,
                0,
                0,
                2,
                0,
                0,
                1,
                2,
                74,
                94,
                3,
                124,
                0,
                0,
                0,
                0
            ],
            // Patterns
            p: [
                ,
                ,
                ,
                11,
                1,
                2,
                1,
                1,
                1,
                2,
                ,
                ,
                1,
                2,
                ,
                ,
                ,
                ,
                1,
                2,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            // Columns
            c: [
                {
                    n: [
                        111,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        111
                    ],
                    f: []
                },
                {
                    n: [
                        111,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        111,
                        ,
                        ,
                        ,
                        115,
                        ,
                        ,
                        111
                    ],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        127
                    ],
                    f: []
                }
            ]
        },
        {
            // Instrument 1
            i: [
                0,
                160,
                128,
                64,
                0,
                160,
                128,
                0,
                64,
                210,
                4,
                7,
                52,
                85,
                0,
                0,
                0,
                60,
                4,
                1,
                2,
                255,
                0,
                0,
                32,
                61,
                5,
                32,
                6
            ],
            // Patterns
            p: [
                ,
                ,
                ,
                ,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                ,
                ,
                ,
                ,
                ,
                ,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            // Columns
            c: [
                {
                    n: [
                        ,
                        ,
                        ,
                        ,
                        129,
                        ,
                        ,
                        ,
                        ,
                        ,
                        110
                    ],
                    f: []
                }
            ]
        },
        {
            // Instrument 2
            i: [
                0,
                0,
                140,
                0,
                0,
                0,
                140,
                0,
                0,
                81,
                4,
                10,
                47,
                55,
                0,
                0,
                0,
                187,
                5,
                0,
                1,
                239,
                135,
                0,
                32,
                108,
                5,
                16,
                4
            ],
            // Patterns
            p: [
                ,
                ,
                1,
                1,
                2,
                1,
                1,
                2,
                1,
                1,
                1,
                2,
                1,
                2,
                ,
                ,
                1,
                1,
                1,
                2,
                1,
                1,
                1,
                2,
                1,
                1,
                1,
                1,
                1,
                2,
                1,
                2
            ],
            // Columns
            c: [
                {
                    n: [
                        ,
                        ,
                        ,
                        ,
                        141,
                        ,
                        ,
                        141,
                        157,
                        ,
                        ,
                        ,
                        127,
                        ,
                        141
                    ],
                    f: []
                },
                {
                    n: [
                        ,
                        ,
                        127,
                        ,
                        141,
                        123,
                        ,
                        ,
                        ,
                        ,
                        127,
                        ,
                        127,
                        ,
                        141,
                        125
                    ],
                    f: []
                }
            ]
        },
        {
            // Instrument 3
            i: [
                2,
                100,
                128,
                0,
                3,
                201,
                128,
                0,
                0,
                0,
                0,
                6,
                29,
                0,
                0,
                0,
                0,
                195,
                4,
                1,
                3,
                50,
                184,
                119,
                244,
                147,
                6,
                84,
                6
            ],
            // Patterns
            p: [
                2,
                3,
                2,
                3,
                2,
                3,
                ,
                ,
                2,
                3,
                ,
                ,
                ,
                ,
                2,
                3,
                2,
                3,
                2,
                3
            ],
            // Columns
            c: [
                {
                    n: [
                        123
                    ],
                    f: []
                },
                {
                    n: [
                        116,
                        118,
                        119,
                        ,
                        123,
                        ,
                        124,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        124,
                        123,
                        ,
                        116
                    ],
                    f: []
                },
                {
                    n: [
                        116,
                        118,
                        119,
                        ,
                        123,
                        ,
                        124,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        124,
                        119,
                        ,
                        115
                    ],
                    f: []
                }
            ]
        },
        {
            // Instrument 4
            i: [
                2,
                57,
                128,
                0,
                3,
                138,
                128,
                0,
                0,
                0,
                5,
                6,
                58,
                0,
                0,
                0,
                3,
                184,
                5,
                1,
                2,
                135,
                0,
                0,
                11,
                53,
                6,
                79,
                5
            ],
            // Patterns
            p: [
                ,
                ,
                ,
                ,
                ,
                ,
                27,
                27,
                27,
                33,
                27,
                27,
                27,
                33,
                ,
                ,
                15,
                15,
                15,
                28,
                15,
                15,
                15,
                28,
                15,
                15,
                15,
                28,
                15,
                15,
                15,
                30
            ],
            // Columns
            c: [
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [
                        152,
                        ,
                        140,
                        ,
                        ,
                        140,
                        ,
                        ,
                        140,
                        ,
                        ,
                        ,
                        140,
                        147,
                        146,
                        143
                    ],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [
                        ,
                        152,
                        ,
                        140,
                        143,
                        ,
                        ,
                        145,
                        ,
                        152,
                        ,
                        147,
                        155,
                        ,
                        151,
                        148
                    ],
                    f: [
                        8
                    ]
                },
                {
                    n: [
                        152,
                        ,
                        140,
                        ,
                        ,
                        140,
                        ,
                        ,
                        140,
                        ,
                        ,
                        ,
                        147,
                        146,
                        143,
                        140
                    ],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [
                        152,
                        ,
                        140,
                        ,
                        ,
                        140,
                        ,
                        ,
                        140
                    ],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [],
                    f: []
                },
                {
                    n: [
                        ,
                        152,
                        ,
                        140,
                        143,
                        ,
                        ,
                        145,
                        ,
                        152,
                        ,
                        152,
                        151,
                        ,
                        147
                    ],
                    f: [
                        8,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        8,
                        ,
                        8,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        14
                    ]
                }
            ]
        },
        {
            // Instrument 5
            i: [
                3,
                37,
                140,
                0,
                1,
                88,
                128,
                3,
                0,
                0,
                92,
                0,
                5,
                91,
                0,
                0,
                3,
                179,
                5,
                1,
                2,
                124,
                135,
                11,
                8,
                150,
                3,
                157,
                6
            ],
            // Patterns
            p: [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                1
            ],
            // Columns
            c: [
                {
                    n: [
                        128
                    ],
                    f: [
                        13,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        53
                    ]
                },
                {
                    n: [
                        131
                    ],
                    f: []
                },
                {
                    n: [
                        135
                    ],
                    f: []
                },
                {
                    n: [
                        139,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        142
                    ],
                    f: []
                },
                {
                    n: [
                        140
                    ],
                    f: []
                },
                {
                    n: [
                        143
                    ],
                    f: []
                },
                {
                    n: [
                        139
                    ],
                    f: []
                },
                {
                    n: [
                        136,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        135,
                        ,
                        ,
                        ,
                        131
                    ],
                    f: []
                }
            ]
        },
        {
            // Instrument 6
            i: [
                3,
                113,
                117,
                17,
                3,
                111,
                110,
                0,
                32,
                0,
                0,
                15,
                72,
                43,
                0,
                0,
                2,
                127,
                13,
                0,
                2,
                26,
                45,
                0,
                101,
                12,
                7,
                0,
                0
            ],
            // Patterns
            p: [
                ,
                1,
                1,
                ,
                1,
                ,
                1
            ],
            // Columns
            c: [
                {
                    n: [
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        123,
                        123,
                        123,
                        123,
                        123,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        123,
                        123,
                        123,
                        123,
                        123
                    ],
                    f: [
                        10,
                        ,
                        ,
                        ,
                        10,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        116
                    ]
                }
            ]
        },
        {
            // Instrument 7
            i: [
                2,
                83,
                128,
                0,
                3,
                174,
                128,
                9,
                93,
                0,
                7,
                81,
                55,
                19,
                115,
                3,
                0,
                139,
                4,
                1,
                3,
                22,
                185,
                51,
                119,
                107,
                10,
                89,
                3
            ],
            // Patterns
            p: [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                1
            ],
            // Columns
            c: [
                {
                    n: [
                        128
                    ],
                    f: []
                }
            ]
        },
        {
            // Instrument 8
            i: [
                2,
                100,
                128,
                0,
                3,
                201,
                128,
                0,
                0,
                0,
                5,
                6,
                58,
                0,
                0,
                0,
                0,
                195,
                6,
                1,
                2,
                135,
                0,
                0,
                32,
                147,
                6,
                121,
                6
            ],
            // Patterns
            p: [],
            // Columns
            c: []
        },
        {
            // Instrument 9
            i: [
                1,
                36,
                128,
                1,
                1,
                36,
                128,
                2,
                1,
                77,
                7,
                5,
                52,
                0,
                112,
                4,
                0,
                104,
                3,
                0,
                2,
                141,
                110,
                4,
                37,
                172,
                3,
                55,
                2
            ],
            // Patterns
            p: [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                1
            ],
            // Columns
            c: [
                {
                    n: [
                        128,
                        ,
                        ,
                        128,
                        ,
                        ,
                        ,
                        119,
                        ,
                        ,
                        116
                    ],
                    f: [
                        10,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        10,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        77
                    ]
                }
            ]
        },
        {
            // Instrument 10
            i: [
                0,
                45,
                152,
                0,
                0,
                76,
                152,
                12,
                0,
                130,
                0,
                0,
                60,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                15,
                0,
                1,
                28,
                13,
                3,
                45,
                1
            ],
            // Patterns
            p: [
                ,
                ,
                ,
                ,
                ,
                1,
                ,
                2
            ],
            // Columns
            c: [
                {
                    n: [
                        128,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        131,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        135
                    ],
                    f: []
                },
                {
                    n: [
                        116,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        119,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        123
                    ],
                    f: []
                }
            ]
        },
        {
            // Instrument 11
            i: [
                2,
                43,
                128,
                0,
                3,
                65,
                128,
                0,
                0,
                0,
                5,
                44,
                72,
                48,
                0,
                0,
                0,
                195,
                6,
                0,
                3,
                55,
                170,
                18,
                68,
                147,
                6,
                31,
                2
            ],
            // Patterns
            p: [
                ,
                ,
                ,
                1
            ],
            // Columns
            c: [
                {
                    n: [
                        128,
                        128,
                        128,
                        128,
                        128,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        135,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        140
                    ],
                    f: [
                        8,
                        8,
                        8,
                        8,
                        8,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        ,
                        18,
                        83,
                        145
                    ]
                }
            ]
        },
        {
            // Instrument 12
            i: [
                0,
                0,
                128,
                0,
                0,
                0,
                128,
                0,
                0,
                125,
                0,
                1,
                59,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                193,
                171,
                0,
                29,
                39,
                3,
                131,
                3
            ],
            // Patterns
            p: [
                ,
                ,
                ,
                1
            ],
            // Columns
            c: [
                {
                    n: [
                        ,
                        ,
                        ,
                        ,
                        128
                    ],
                    f: []
                }
            ]
        }
    ],
    rowLen: 6615,
    patternLen: 16,
    endPattern: 31,
    numChannels: 13
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8J5yZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const input = {
    left: 0,
    right: 0,
    thrust: 0,
    skill1: 0,
    skill2: 0,
    skill3: 0
};
const keymap = {
    ArrowLeft: "left",
    ArrowRight: "right",
    ArrowUp: "thrust",
    KeyQ: "skill1",
    KeyW: "skill2",
    KeyE: "skill3"
};
window.addEventListener("keydown", ({ code })=>{
    input[keymap[code]] = 1;
});
window.addEventListener("keyup", ({ code })=>{
    input[keymap[code]] = 0;
});
// window.addEventListener("touchstart", (e) => {
//   e.preventDefault();
//   input.skill1 = 1;
// });
// window.addEventListener("touchmove", (e) => {
//   e.preventDefault();
//   input.skill1 = 0;
//   for (let i = 0; i < e.touches.length; ++i) {
//     const t = e.touches[i];
//     const lq = window.innerWidth / 4,
//       rq = window.innerWidth - lq,
//       h = 1 - t.clientY / window.innerHeight;
//     if (t.clientX < lq) {
//       // left
//       input.left = 1 - h;
//       input.right = 0;
//       input.thrust = h;
//     }
//     if (t.clientX > rq) {
//       input.right = 1 - h;
//       input.left = 0;
//       input.thrust = h;
//     }
//   }
// });
// window.addEventListener("touchend", (e) => {
//   input.left = input.right = input.thrust = input.skill1 = 0;
// });
exports.default = input;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g2Acl":[function(require,module,exports) {
// particle system?
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeExhaust", ()=>makeExhaust);
parcelHelpers.export(exports, "makeExplosion", ()=>makeExplosion);
parcelHelpers.export(exports, "particles", ()=>particles);
var _math = require("./math");
var _regl = require("./regl");
var _reglDefault = parcelHelpers.interopDefault(_regl);
const particles = [];
function makeEffect(particleCount, settings) {
    // unlike models, geometry for particles need to be dynamic since we're going to draw whole system in one go ...
    // Init state
    const particles = Array(particleCount).fill(0).map(()=>({
            // TODO can be 2d
            life: 0,
            pos: [
                0,
                0,
                0
            ],
            vec: [
                0,
                0,
                0
            ],
            angle: 0,
            cos: 1,
            sin: 0,
            angular: 0
        }));
    const vertexCount = particleCount * 4; // one quad (two triangles) per particle
    const vertexSizeInBytes = 12; // 3 floats 4 byte each
    // Allocate buffers
    const buffers = {
        position: (0, _reglDefault.default).buffer({
            type: "float",
            length: vertexCount * vertexSizeInBytes,
            usage: "stream"
        }),
        normal: (0, _reglDefault.default).buffer({
            type: "float",
            length: vertexCount * vertexSizeInBytes,
            usage: "stream"
        }),
        side: (0, _reglDefault.default).buffer({
            type: "float",
            data: particles.flatMap(()=>[
                    -1,
                    1,
                    -1,
                    1
                ])
        }),
        life: (0, _reglDefault.default).buffer({
            type: "float",
            length: vertexCount * 4
        }),
        elements: (0, _reglDefault.default).elements(particles.flatMap((_, n)=>[
                4 * n,
                4 * n + 1,
                4 * n + 2,
                4 * n + 2,
                4 * n + 1,
                4 * n + 3
            ]))
    };
    const drawcall = (0, _reglDefault.default)({
        vert: (0, _regl.vert),
        frag: (0, _regl.frag),
        primitive: "triangles",
        attributes: {
            Position: buffers.position,
            Normal: buffers.normal,
            Side: buffers.side,
            Life: buffers.life
        },
        elements: buffers.elements,
        count: (context, props)=>props.aliveParticles * 6,
        uniforms: {
            Rotation: ()=>0,
            RotationY: ()=>0,
            RotationZ: ()=>0,
            Translation: (context, props)=>props.translation || [
                    0,
                    0
                ],
            Thickness: (context, props)=>settings.thickness,
            Scale: ()=>1,
            Color: ()=>settings.color,
            LifeMax: ()=>settings.life
        },
        depth: {
            enable: false
        }
    });
    let nextIndex = 0;
    let mana = 0;
    return {
        alive: true,
        pos: [
            0,
            0
        ],
        vec: [
            0,
            0
        ],
        variance: 2,
        angularVariance: 5,
        rate: 0,
        emit () {
            const newParticle = {
                life: settings.life,
                pos: [
                    this.pos[0],
                    this.pos[1],
                    0
                ],
                vec: [
                    this.vec[0] + this.variance * (0, _math.r11)(),
                    this.vec[1] + this.variance * (0, _math.r11)(),
                    0
                ],
                angle: 0,
                cos: 1,
                sin: 0,
                angular: this.angularVariance * (0, _math.r11)()
            };
            newParticle.angle = Math.atan2(newParticle.vec[1], newParticle.vec[0]);
            const index = nextIndex++;
            nextIndex %= particleCount;
            particles[index] = newParticle;
        },
        update (dt) {
            particles.forEach((p)=>{
                p.life -= dt;
                p.angle += p.angular * dt;
                p.pos[0] += p.vec[0] * dt;
                p.pos[1] += p.vec[1] * dt;
                p.pos[2] += p.vec[2] * dt;
                p.cos = (0, _math.cos)(p.angle);
                p.sin = (0, _math.sin)(p.angle);
            });
            if (this.rate === "instant") {
                this.rate = "expired";
                for(let i = 0; i < particleCount; ++i)this.emit();
            } else if (this.rate > 0) {
                mana += dt;
                while(mana >= this.rate){
                    mana -= this.rate;
                    this.emit();
                }
            }
            if (this.alive && this.rate === "expired" && !particles.some((x)=>x.life > 0)) this.alive = false;
        },
        render () {
            const { len = 0.005 } = settings;
            // const {len} = this.
            // const len = 0.06; // square particle
            const alive = particles.filter((a)=>a.life > 0);
            buffers.position.subdata(alive.flatMap(({ pos, cos, sin })=>{
                const pos1 = [
                    pos[0] / 16 - len * cos,
                    pos[1] / 16 - len * sin,
                    pos[2]
                ];
                const pos2 = [
                    pos[0] / 16 + len * cos,
                    pos[1] / 16 + len * sin,
                    pos[2]
                ];
                return [
                    pos1,
                    pos1,
                    pos2,
                    pos2
                ];
            }).flat());
            buffers.normal.subdata(alive.flatMap(({ cos, sin })=>{
                return [
                    [
                        cos,
                        sin,
                        0
                    ],
                    [
                        cos,
                        sin,
                        0
                    ],
                    [
                        cos,
                        sin,
                        0
                    ],
                    [
                        cos,
                        sin,
                        0
                    ]
                ];
            }).flat());
            buffers.life.subdata(alive.flatMap((p)=>[
                    p.life,
                    p.life,
                    p.life,
                    p.life
                ]));
            drawcall({
                aliveParticles: alive.length
            });
        }
    };
}
function makeExhaust() {
    const count = 15;
    const effect = makeEffect(count, {
        len: 0.01,
        thickness: 0.01,
        life: 0.7,
        color: [
            0.5,
            0.5,
            0.8
        ]
    });
    return {
        ...effect,
        rate: 1.2
    };
}
function makeExplosion(pos) {
    const count = 20;
    return [
        // Comic lines
        {
            ...makeEffect(3, {
                len: 0.1,
                thickness: 0.002,
                life: 0.3,
                color: [
                    1,
                    1,
                    1
                ]
            }),
            pos,
            rate: "instant",
            variance: 0.001,
            angularVariance: 0
        },
        // Chaff
        {
            ...makeEffect(60, {
                len: 0.005,
                thickness: 0.005,
                life: 1.2,
                color: [
                    0.2,
                    0.2,
                    0.2
                ]
            }),
            pos,
            rate: "instant",
            variance: 3
        },
        // Fire
        {
            ...makeEffect(20, {
                len: 0.005,
                thickness: 0.003,
                life: 0.5,
                color: [
                    0.7,
                    0.4,
                    0.2
                ]
            }),
            pos,
            rate: "instant",
            variance: 5
        },
        {
            ...makeEffect(20, {
                len: 0.005,
                thickness: 0.003,
                life: 0.5,
                color: [
                    0.7,
                    0.7,
                    0.2
                ]
            }),
            pos,
            rate: "instant",
            variance: 5
        },
        // Sparks
        {
            ...makeEffect(6, {
                len: 0.07,
                thickness: 0.003,
                life: 0.15,
                color: [
                    0.7,
                    0.7,
                    0
                ]
            }),
            pos,
            rate: "instant",
            variance: 20,
            angularVariance: 0
        }
    ];
}

},{"./math":"4GTMw","./regl":"eoRlh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aVldF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeTextDrawcall", ()=>makeTextDrawcall);
parcelHelpers.export(exports, "makeOneOffText", ()=>makeOneOffText);
var _math = require("./math");
var _models = require("./models");
var _regl = require("./regl");
const font = {
    A: [
        [
            -3,
            0,
            0,
            9,
            3,
            0
        ],
        [
            -1,
            5,
            1,
            5
        ]
    ],
    B: [
        [
            -2,
            0,
            -2,
            9,
            1,
            9,
            3,
            7,
            1,
            5,
            3,
            3,
            0,
            0,
            0,
            0,
            -3
        ]
    ],
    C: [
        [
            2,
            9,
            -1,
            9,
            -2,
            7,
            -2,
            2,
            0,
            0,
            2,
            0
        ]
    ],
    D: [
        [
            -2,
            9,
            0,
            9,
            2,
            7,
            2,
            3,
            -1,
            0,
            -2,
            0,
            -2,
            9
        ]
    ],
    E: [
        [
            2,
            8,
            2,
            9,
            -2,
            9,
            -2,
            0,
            2,
            0,
            2,
            1
        ],
        [
            -2,
            5,
            1,
            5
        ]
    ],
    F: [
        [
            2,
            8,
            2,
            9,
            -2,
            9,
            -2,
            0
        ],
        [
            -2,
            5,
            1,
            5
        ]
    ],
    G: [
        [
            2,
            9,
            -1,
            9,
            -2,
            7,
            -2,
            2,
            0,
            0,
            2,
            0,
            3,
            4,
            1,
            4
        ]
    ],
    H: [
        [
            -3,
            9,
            -2,
            9,
            -2,
            0,
            -3,
            0
        ],
        [
            3,
            9,
            2,
            9,
            2,
            0,
            3,
            0
        ],
        [
            -2,
            5,
            2,
            5
        ]
    ],
    I: [
        [
            0,
            9.5,
            0,
            -0.5
        ]
    ],
    J: [
        [
            1,
            9,
            1,
            1,
            0,
            0,
            -1,
            0,
            -2,
            1,
            -2,
            2
        ]
    ],
    K: [
        [
            -2,
            9,
            -2,
            0
        ],
        [
            -2,
            5,
            2,
            9
        ],
        [
            -2,
            5,
            2,
            0
        ]
    ],
    L: [
        [
            -2,
            9,
            -2,
            0,
            1,
            0,
            1,
            1
        ]
    ],
    M: [
        [
            -2,
            0,
            -2,
            9,
            0,
            3,
            2,
            9,
            2,
            0
        ]
    ],
    N: [
        [
            -2,
            0,
            -2,
            9,
            2,
            0,
            2,
            9
        ]
    ],
    O: [
        [
            -2,
            2,
            -2,
            7,
            -1,
            9,
            1,
            9,
            2,
            7,
            2,
            2,
            1,
            0,
            -1,
            0,
            -2,
            2
        ]
    ],
    P: [
        [
            -2,
            0,
            -2,
            9,
            1,
            9,
            2,
            8,
            2,
            6,
            0,
            5,
            -2,
            5
        ]
    ],
    Q: [
        [
            -2,
            2,
            -2,
            7,
            -1,
            9,
            1,
            9,
            2,
            7,
            2,
            2,
            1,
            0,
            -1,
            0,
            -2,
            2
        ],
        [
            0,
            2,
            3,
            0
        ]
    ],
    R: [
        [
            -2,
            0,
            -2,
            9,
            1,
            9,
            2,
            8,
            2,
            6,
            0,
            5,
            -2,
            5,
            2,
            0
        ]
    ],
    S: [
        [
            2,
            8,
            1,
            9,
            -1,
            9,
            -2,
            7,
            2,
            3,
            2,
            2,
            1,
            0,
            -1,
            0,
            -2,
            2
        ]
    ],
    T: [
        [
            0,
            0,
            0,
            9
        ],
        [
            -2,
            8,
            -2,
            9,
            2,
            9,
            2,
            8
        ]
    ],
    U: [
        [
            -2,
            9,
            -2,
            1,
            -1,
            0,
            1,
            0,
            2,
            1,
            2,
            9
        ]
    ],
    V: [
        [
            -3,
            9,
            -2,
            9,
            0,
            0,
            2,
            9,
            3,
            9
        ]
    ],
    W: [
        [
            -3,
            9,
            -2,
            0,
            0,
            9,
            2,
            0,
            3,
            9
        ]
    ],
    X: [
        [
            -2,
            9,
            2,
            0
        ],
        [
            2,
            9,
            -2,
            0
        ]
    ],
    Y: [
        [
            -2,
            9,
            0,
            5,
            2,
            9
        ],
        [
            0,
            5,
            0,
            0
        ]
    ],
    Z: [
        [
            -2,
            8,
            -2,
            9,
            2,
            9,
            -2,
            0,
            2,
            0,
            2,
            1
        ]
    ],
    0: [
        [
            -2,
            2,
            -2,
            7,
            -1,
            9,
            1,
            9,
            2,
            7,
            2,
            2,
            1,
            0,
            -1,
            0,
            -2,
            2
        ],
        [
            1,
            8,
            -1,
            1
        ]
    ],
    1: [
        [
            -2,
            5,
            0,
            9,
            0,
            0
        ],
        [
            -2,
            0,
            2,
            0
        ]
    ],
    2: [
        [
            -2,
            7,
            0,
            9,
            2,
            7,
            -2,
            0,
            2,
            0
        ]
    ],
    3: [
        [
            -2,
            7,
            0,
            9,
            2,
            7,
            0,
            5,
            2,
            2,
            0,
            0,
            -2,
            2
        ]
    ],
    4: [
        [
            1,
            9,
            -3,
            3,
            2,
            3
        ],
        [
            0,
            4,
            0,
            0
        ]
    ],
    5: [
        [
            2,
            9,
            -2,
            9,
            -2,
            6,
            1,
            6,
            2,
            3,
            0,
            0,
            -2,
            2
        ]
    ],
    6: [
        [
            0,
            9,
            -2,
            7,
            -2,
            2,
            0,
            0,
            2,
            2,
            2,
            5,
            -2,
            5
        ]
    ],
    7: [
        [
            -2,
            9,
            2,
            9,
            -1,
            0
        ],
        [
            -2,
            5,
            2,
            5
        ]
    ],
    8: [
        [
            0,
            9,
            2,
            7,
            -2,
            3,
            0,
            0,
            2,
            3,
            -2,
            7,
            0,
            9
        ]
    ],
    9: [
        [
            2,
            6,
            0,
            4,
            -2,
            6,
            0,
            9,
            2,
            6,
            2,
            2,
            -1,
            0
        ]
    ],
    "/": [
        [
            2,
            9,
            -2,
            0
        ]
    ],
    ".": [
        [
            0,
            0,
            1,
            0
        ]
    ]
};
function makeTextModel(text) {
    const verts = [], elements = [];
    let caret = 0;
    let dy = 0;
    for (const letter of text.toUpperCase()){
        const dx = caret;
        caret += 5.5;
        if (letter === "\n") {
            caret = 0;
            dy -= 11;
        }
        const glyph = font[letter];
        if (!glyph) continue;
        glyph.forEach((stroke)=>{
            for(let i = 0; i < stroke.length; i += 2){
                // add vertex
                verts.push([
                    stroke[i] + dx,
                    stroke[i + 1] + dy,
                    0
                ]);
                // if second or further vertex, add element pair
                if (i) elements.push([
                    verts.length - 2,
                    verts.length - 1
                ]);
            }
        });
    }
    // Centering
    const offset = (0, _math.max)(...verts.map((x)=>x[0]));
    for (let a of verts)a[0] -= offset / 2;
    return {
        verts,
        elements
    };
}
function makeTextDrawcall(text) {
    return (0, _models.makeMeshDrawCall)((0, _models.preprocessModel)(makeTextModel(text)));
}
function makeOneOffText(text) {
    const m = (0, _models.preprocessModel)(makeTextModel(text));
    return (props)=>{
        (0, _models.makeMeshDrawCall)(m)(props);
        [
            m.Elements.buffer,
            m.Normal.buf,
            m.Position.buf,
            m.Side.buf
        ].map((x)=>(0, _regl.gl).deleteBuffer(x));
    };
}

},{"./math":"4GTMw","./models":"3xcXy","./regl":"eoRlh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hWhIE":[function(require,module,exports) {
// Hacks - remove later
var _particles = require("./particles");
var _state = require("./state");
window.addEventListener("keypress", (e)=>{
    if (e.key === "a") (0, _state.newAsteroid)();
    if (e.key === "A") (0, _state.state).asteroids = [];
    if (e.key === "P") (0, _particles.particles).push(...(0, _particles.makeExplosion)([
        -3,
        4
    ]));
    if (e.key === "T") (0, _state.titleScreen)();
    if (e.code === "Digit1") {
        (0, _state.state).signs = [];
        (0, _state.setLevel)(0);
    }
    if (e.code === "Digit2") {
        (0, _state.state).signs = [];
        (0, _state.setLevel)(1);
    }
    if (e.code === "Digit3") {
        (0, _state.state).signs = [];
        (0, _state.setLevel)(2);
    }
    if (e.code === "Digit4") {
        (0, _state.state).signs = [];
        (0, _state.setLevel)(3);
    }
    if (e.code === "Digit5") {
        (0, _state.state).signs = [];
        (0, _state.setLevel)(4);
    }
    if (e.code === "Digit6") {
        (0, _state.state).signs = [];
        (0, _state.setLevel)(5);
    }
    if (e.key === "L") (0, _state.state).powerups.push({
        pos: [
            0,
            0
        ],
        vec: [
            0.1,
            0.1
        ]
    });
});
if ((0, _state.state).asteroids.length === 0) (0, _state.newAsteroid)();

},{"./particles":"g2Acl","./state":"d4y3Q"}]},["6B2j6","1jwFz"], "1jwFz", "parcelRequire9ed5")

//# sourceMappingURL=index.8e9bd240.js.map
