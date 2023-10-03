function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/header/header.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/header/header.component.html ***!
    \************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesHomeComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<h1>My to-do-list</h1>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/todo-button-delete-all/todo-button-delete-all.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/todo-button-delete-all/todo-button-delete-all.component.html ***!
    \********************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesHomeComponentsTodoButtonDeleteAllTodoButtonDeleteAllComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<button>Deletar todos</button>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/todo-input-add-itens/todo-input-add-itens.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/todo-input-add-itens/todo-input-add-itens.component.html ***!
    \****************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesHomeComponentsTodoInputAddItensTodoInputAddItensComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<input type=\"text\" \r\n       placeholder=\"Digite sua nova Task aqui...\" \r\n       [(ngModel)]=\"addItemTaskList\"\r\n       (keyup.enter)=\"submitItemTaskList()\">";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/todo-list/todo-list.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/todo-list/todo-list.component.html ***!
    \******************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesHomeComponentsTodoListTodoListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section [ngClass]=\"{'loading': !taskList.length}\">\n    <ul *ngIf=\"taskList.length\">\n        <li *ngFor=\"let item of taskList; let i = index\">\n            <input type=\"checkbox\" [(ngModel)]=\"item.checked\">\n            <input type=\"text\" [(ngModel)]=\"item.task\" [ngClass]=\"{'checked': item.checked}\">\n\n            <button (click)=\"deleteItemTaskList(i)\">\n                <img src=\"../../../../../assets/icons/icon-trash.svg\" alt=\"\">\n            </button>\n        </li>\n    </ul>\n</section>\n\n<app-todo-input-add-itens (emitItemTaskList)=\"setEmitTaskList($event)\"></app-todo-input-add-itens>\n<app-todo-button-delete-all *ngIf=\"taskList.length\" (click)=\"deleteAllTaskList()\"></app-todo-button-delete-all>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/home/home.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/home/home.component.html ***!
    \***************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesHomePagesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"container\">\n    <app-header></app-header>\n    <app-todo-list></app-todo-list>\n</section>\n\n";

    /***/
  },

  /***/"./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  },

  /***/"./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _modules_home_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./modules/home/pages/home/home.component */"./src/app/modules/home/pages/home/home.component.ts");
    var routes = [{
      path: "",
      component: _modules_home_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  },

  /***/"./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: "<router-outlet></router-outlet>"
    })], AppComponent);

    /***/
  },

  /***/"./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./modules/home/home.module */"./src/app/modules/home/home.module.ts");

    //Module Home

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);

    /***/
  },

  /***/"./src/app/modules/home/components/header/header.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/home/components/header/header.component.scss ***!
    \**********************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppModulesHomeComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "h1 {\n  width: 100%;\n  padding: 15px 0;\n  text-align: center;\n  font-size: 18px;\n  color: #FFFFFF;\n  background-color: #AF7EEB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcV3lzbGFuXFxEZXNrdG9wXFxBbmd1bGFyXFxhcHAtdG9kby9zcmNcXGFwcFxcbW9kdWxlc1xcaG9tZVxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2hlYWRlci9DOlxcVXNlcnNcXFd5c2xhblxcRGVza3RvcFxcQW5ndWxhclxcYXBwLXRvZG8vc3JjXFxhcHBcXGRpc3RcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQ05lO0VEUWYseUJDVmM7QUNPaEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vZGlzdC9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbmgxe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktYmFja2dyb3VuZC1jb2xvcjtcclxufSIsIiRwcmltYXJ5LWNvbG9yOiAjQUY3RUVCO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjOTM5Q0JEO1xyXG4kdGVydGlhcnktY29sb3I6ICNGRkZGRkY7XHJcblxyXG4kcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjRTNFOUZGO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcclxuJHRlcnRpYXJ5LWJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG5cclxuJHByaW1hcnktdGV4dC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAkdGVydGlhcnktY29sb3I7XHJcblxyXG4kZGFuZ2VyLWNvbG9yOiAjRkYwMDJFOyIsImgxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUY3RUVCO1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/modules/home/components/header/header.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/home/components/header/header.component.ts ***!
    \********************************************************************/
  /*! exports provided: HeaderComponent */
  /***/
  function srcAppModulesHomeComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }
      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return HeaderComponent;
    }();
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./header.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./header.component.scss */"./src/app/modules/home/components/header/header.component.scss"))["default"]]
    })], HeaderComponent);

    /***/
  },

  /***/"./src/app/modules/home/components/todo-button-delete-all/todo-button-delete-all.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/modules/home/components/todo-button-delete-all/todo-button-delete-all.component.scss ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppModulesHomeComponentsTodoButtonDeleteAllTodoButtonDeleteAllComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ":host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n}\n:host button {\n  border: none;\n  border-radius: 50px;\n  background: #FF002E;\n  font-size: 16px;\n  color: #FFFFFF;\n  width: 60%;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvdG9kby1idXR0b24tZGVsZXRlLWFsbC9DOlxcVXNlcnNcXFd5c2xhblxcRGVza3RvcFxcQW5ndWxhclxcYXBwLXRvZG8vc3JjXFxhcHBcXG1vZHVsZXNcXGhvbWVcXGNvbXBvbmVudHNcXHRvZG8tYnV0dG9uLWRlbGV0ZS1hbGxcXHRvZG8tYnV0dG9uLWRlbGV0ZS1hbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL3RvZG8tYnV0dG9uLWRlbGV0ZS1hbGwvdG9kby1idXR0b24tZGVsZXRlLWFsbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvdG9kby1idXR0b24tZGVsZXRlLWFsbC9DOlxcVXNlcnNcXFd5c2xhblxcRGVza3RvcFxcQW5ndWxhclxcYXBwLXRvZG8vc3JjXFxhcHBcXGRpc3RcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtBQ0hGO0FES0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkVGVztFRklYLGVBQUE7RUFDQSxjRWRhO0VGZ0JiLFVBQUE7RUFDQSxhQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy90b2RvLWJ1dHRvbi1kZWxldGUtYWxsL3RvZG8tYnV0dG9uLWRlbGV0ZS1hbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9hcHAvZGlzdC9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcblxyXG46aG9zdHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIG1hcmdpbi10b3A6MjBweDtcclxuXHJcbiAgYnV0dG9ue1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICRkYW5nZXItY29sb3I7XHJcblxyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuXHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuOmhvc3QgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjRkYwMDJFO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAxMHB4O1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjQUY3RUVCO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjOTM5Q0JEO1xyXG4kdGVydGlhcnktY29sb3I6ICNGRkZGRkY7XHJcblxyXG4kcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjRTNFOUZGO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcclxuJHRlcnRpYXJ5LWJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG5cclxuJHByaW1hcnktdGV4dC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAkdGVydGlhcnktY29sb3I7XHJcblxyXG4kZGFuZ2VyLWNvbG9yOiAjRkYwMDJFOyJdfQ== */";

    /***/
  },

  /***/"./src/app/modules/home/components/todo-button-delete-all/todo-button-delete-all.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/modules/home/components/todo-button-delete-all/todo-button-delete-all.component.ts ***!
    \****************************************************************************************************/
  /*! exports provided: TodoButtonDeleteAllComponent */
  /***/
  function srcAppModulesHomeComponentsTodoButtonDeleteAllTodoButtonDeleteAllComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TodoButtonDeleteAllComponent", function () {
      return TodoButtonDeleteAllComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var TodoButtonDeleteAllComponent = /*#__PURE__*/function () {
      function TodoButtonDeleteAllComponent() {
        _classCallCheck(this, TodoButtonDeleteAllComponent);
      }
      _createClass(TodoButtonDeleteAllComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return TodoButtonDeleteAllComponent;
    }();
    TodoButtonDeleteAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo-button-delete-all',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./todo-button-delete-all.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/todo-button-delete-all/todo-button-delete-all.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./todo-button-delete-all.component.scss */"./src/app/modules/home/components/todo-button-delete-all/todo-button-delete-all.component.scss"))["default"]]
    })], TodoButtonDeleteAllComponent);

    /***/
  },

  /***/"./src/app/modules/home/components/todo-input-add-itens/todo-input-add-itens.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/modules/home/components/todo-input-add-itens/todo-input-add-itens.component.scss ***!
    \**************************************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppModulesHomeComponentsTodoInputAddItensTodoInputAddItensComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ":host {\n  display: flex;\n  justify-content: center;\n  margin-top: -20px;\n}\n:host input {\n  width: 80%;\n  border: none;\n  background: #AF7EEB;\n  font-size: 16px;\n  color: #FFFFFF;\n  text-align: center;\n  padding: 10px;\n  box-sizing: border-box;\n}\n:host input::-webkit-input-placeholder {\n  color: #FFFFFF;\n}\n:host input::-moz-placeholder {\n  color: #FFFFFF;\n}\n:host input::-ms-input-placeholder {\n  color: #FFFFFF;\n}\n:host input::placeholder {\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvdG9kby1pbnB1dC1hZGQtaXRlbnMvQzpcXFVzZXJzXFxXeXNsYW5cXERlc2t0b3BcXEFuZ3VsYXJcXGFwcC10b2RvL3NyY1xcYXBwXFxtb2R1bGVzXFxob21lXFxjb21wb25lbnRzXFx0b2RvLWlucHV0LWFkZC1pdGVuc1xcdG9kby1pbnB1dC1hZGQtaXRlbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL3RvZG8taW5wdXQtYWRkLWl0ZW5zL3RvZG8taW5wdXQtYWRkLWl0ZW5zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy90b2RvLWlucHV0LWFkZC1pdGVucy9DOlxcVXNlcnNcXFd5c2xhblxcRGVza3RvcFxcQW5ndWxhclxcYXBwLXRvZG8vc3JjXFxhcHBcXGRpc3RcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNGRjtBRElFO0VBQ0UsVUFBQTtFQUVBLFlBQUE7RUFDQSxtQkVaWTtFRmNaLGVBQUE7RUFDQSxjRWJhO0VGY2Isa0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUNMSjtBRE9JO0VBQ0UsY0VwQlc7QURlakI7QURJSTtFQUNFLGNFcEJXO0FEZWpCO0FESUk7RUFDRSxjRXBCVztBRGVqQjtBRElJO0VBQ0UsY0VwQlc7QURlakIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy90b2RvLWlucHV0LWFkZC1pdGVucy90b2RvLWlucHV0LWFkZC1pdGVucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvZGlzdC9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi8vaG9zdCBlc3RhIHJlZmVyZW5jaWFuZG8gbyBjb21wb25lbnRlIHRvZG8taW5wdXQtYWRkLWl0ZW5zXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG5cclxuICBpbnB1dHtcclxuICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogJHRlcnRpYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcblxyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAmOjpwbGFjZWhvbGRlcntcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cbjpob3N0IGlucHV0IHtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjQUY3RUVCO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG46aG9zdCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI0ZGRkZGRjtcbn0iLCIkcHJpbWFyeS1jb2xvcjogI0FGN0VFQjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzkzOUNCRDtcclxuJHRlcnRpYXJ5LWNvbG9yOiAjRkZGRkZGO1xyXG5cclxuJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI0UzRTlGRjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XHJcbiR0ZXJ0aWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuXHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xyXG5cclxuJGRhbmdlci1jb2xvcjogI0ZGMDAyRTsiXX0= */";

    /***/
  },

  /***/"./src/app/modules/home/components/todo-input-add-itens/todo-input-add-itens.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/modules/home/components/todo-input-add-itens/todo-input-add-itens.component.ts ***!
    \************************************************************************************************/
  /*! exports provided: TodoInputAddItensComponent */
  /***/
  function srcAppModulesHomeComponentsTodoInputAddItensTodoInputAddItensComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TodoInputAddItensComponent", function () {
      return TodoInputAddItensComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var TodoInputAddItensComponent = /*#__PURE__*/function () {
      function TodoInputAddItensComponent() {
        _classCallCheck(this, TodoInputAddItensComponent);
        //decoration
        this.emitItemTaskList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addItemTaskList = "";
      }
      _createClass(TodoInputAddItensComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submitItemTaskList",
        value: function submitItemTaskList() {
          this.addItemTaskList = this.addItemTaskList.trim();
          if (this.addItemTaskList) {
            this.emitItemTaskList.emit(this.addItemTaskList);
            this.addItemTaskList = "";
          }
        }
      }]);
      return TodoInputAddItensComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TodoInputAddItensComponent.prototype, "emitItemTaskList", void 0);
    TodoInputAddItensComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo-input-add-itens',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./todo-input-add-itens.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/todo-input-add-itens/todo-input-add-itens.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./todo-input-add-itens.component.scss */"./src/app/modules/home/components/todo-input-add-itens/todo-input-add-itens.component.scss"))["default"]]
    })], TodoInputAddItensComponent);

    /***/
  },

  /***/"./src/app/modules/home/components/todo-list/todo-list.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/home/components/todo-list/todo-list.component.scss ***!
    \****************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppModulesHomeComponentsTodoListTodoListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "section {\n  width: 100%;\n  min-height: 250px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);\n  margin-top: 20px;\n}\nsection.loading {\n  background-image: url('bg-task.png');\n  background-repeat: no-repeat;\n  background-position: center 30px;\n}\nsection ul {\n  padding: 20px;\n}\nsection ul li {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\nsection ul li input[type=checkbox] {\n  width: 5%;\n}\nsection ul li input[type=text] {\n  width: 80%;\n  padding: 5px 10px;\n  border: none;\n  font-size: 16px;\n  color: #939CBD;\n}\nsection ul li input[type=text].checked {\n  text-decoration: line-through;\n}\nsection ul li button {\n  width: 5%;\n  background: none;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvdG9kby1saXN0L0M6XFxVc2Vyc1xcV3lzbGFuXFxEZXNrdG9wXFxBbmd1bGFyXFxhcHAtdG9kby9zcmNcXGFwcFxcbW9kdWxlc1xcaG9tZVxcY29tcG9uZW50c1xcdG9kby1saXN0XFx0b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL3RvZG8tbGlzdC9DOlxcVXNlcnNcXFd5c2xhblxcRGVza3RvcFxcQW5ndWxhclxcYXBwLXRvZG8vc3JjXFxhcHBcXGRpc3RcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBRUEsbUJDSmU7RURLZiw0Q0FBQTtFQUVBLGdCQUFBO0FFSEY7QUZLRTtFQUNFLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtBRUhKO0FGTUU7RUFDRSxhQUFBO0FFSko7QUZNSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7QUVMTjtBRlFRO0VBQ0UsU0FBQTtBRU5WO0FGUVE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUNBLGNDcENRO0FDNkJsQjtBRlFVO0VBQ0UsNkJBQUE7QUVOWjtBRldNO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRVRSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2FwcC9kaXN0L3Njc3MvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuc2VjdGlvbntcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuXHJcbiAgYmFja2dyb3VuZDogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG5cclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAmLmxvYWRpbmd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2JnLXRhc2sucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAzMHB4O1xyXG4gIH1cclxuXHJcbiAgdWx7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgIGxpe1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgaW5wdXR7XHJcbiAgICAgICAgJlt0eXBlPVwiY2hlY2tib3hcIl17XHJcbiAgICAgICAgICB3aWR0aDogNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZbdHlwZT1cInRleHRcIl17XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgICAmLmNoZWNrZWR7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiA1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsIiRwcmltYXJ5LWNvbG9yOiAjQUY3RUVCO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjOTM5Q0JEO1xyXG4kdGVydGlhcnktY29sb3I6ICNGRkZGRkY7XHJcblxyXG4kcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjRTNFOUZGO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcclxuJHRlcnRpYXJ5LWJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG5cclxuJHByaW1hcnktdGV4dC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAkdGVydGlhcnktY29sb3I7XHJcblxyXG4kZGFuZ2VyLWNvbG9yOiAjRkYwMDJFOyIsInNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuc2VjdGlvbi5sb2FkaW5nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy10YXNrLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDMwcHg7XG59XG5zZWN0aW9uIHVsIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbnNlY3Rpb24gdWwgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5zZWN0aW9uIHVsIGxpIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgd2lkdGg6IDUlO1xufVxuc2VjdGlvbiB1bCBsaSBpbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzkzOUNCRDtcbn1cbnNlY3Rpb24gdWwgbGkgaW5wdXRbdHlwZT10ZXh0XS5jaGVja2VkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5zZWN0aW9uIHVsIGxpIGJ1dHRvbiB7XG4gIHdpZHRoOiA1JTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/modules/home/components/todo-list/todo-list.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/home/components/todo-list/todo-list.component.ts ***!
    \**************************************************************************/
  /*! exports provided: TodoListComponent */
  /***/
  function srcAppModulesHomeComponentsTodoListTodoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TodoListComponent", function () {
      return TodoListComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var TodoListComponent = /*#__PURE__*/function () {
      function TodoListComponent() {
        _classCallCheck(this, TodoListComponent);
        this.taskList = [];
      }
      _createClass(TodoListComponent, [{
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.taskList.sort(function (first, last) {
            return Number(first.checked) - Number(last.checked);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setEmitTaskList",
        value: function setEmitTaskList(event) {
          this.taskList.push({
            task: event,
            checked: false
          });
        }
      }, {
        key: "deleteItemTaskList",
        value: function deleteItemTaskList(event) {
          this.taskList.splice(event, 1);
        }
      }, {
        key: "deleteAllTaskList",
        value: function deleteAllTaskList() {
          var confirm = window.confirm("Você deseja realmente deletar tudo?");
          if (confirm) {
            this.taskList = [];
          }
        }
      }]);
      return TodoListComponent;
    }();
    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./todo-list.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/todo-list/todo-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./todo-list.component.scss */"./src/app/modules/home/components/todo-list/todo-list.component.scss"))["default"]]
    })], TodoListComponent);

    /***/
  },

  /***/"./src/app/modules/home/home.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/modules/home/home.module.ts ***!
    \*********************************************/
  /*! exports provided: HomeModule */
  /***/
  function srcAppModulesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./components/header/header.component */"./src/app/modules/home/components/header/header.component.ts");
    /* harmony import */
    var _components_todo_button_delete_all_todo_button_delete_all_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./components/todo-button-delete-all/todo-button-delete-all.component */"./src/app/modules/home/components/todo-button-delete-all/todo-button-delete-all.component.ts");
    /* harmony import */
    var _components_todo_input_add_itens_todo_input_add_itens_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./components/todo-input-add-itens/todo-input-add-itens.component */"./src/app/modules/home/components/todo-input-add-itens/todo-input-add-itens.component.ts");
    /* harmony import */
    var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./components/todo-list/todo-list.component */"./src/app/modules/home/components/todo-list/todo-list.component.ts");
    /* harmony import */
    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./pages/home/home.component */"./src/app/modules/home/pages/home/home.component.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");

    //Components

    //Page

    var HomeModule = /*#__PURE__*/_createClass(function HomeModule() {
      _classCallCheck(this, HomeModule);
    });
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_todo_button_delete_all_todo_button_delete_all_component__WEBPACK_IMPORTED_MODULE_4__["TodoButtonDeleteAllComponent"], _components_todo_input_add_itens_todo_input_add_itens_component__WEBPACK_IMPORTED_MODULE_5__["TodoInputAddItensComponent"], _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__["TodoListComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]]
    })], HomeModule);

    /***/
  },

  /***/"./src/app/modules/home/pages/home/home.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/modules/home/pages/home/home.component.scss ***!
    \*************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppModulesHomePagesHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */";

    /***/
  },

  /***/"./src/app/modules/home/pages/home/home.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/home/pages/home/home.component.ts ***!
    \***********************************************************/
  /*! exports provided: HomeComponent */
  /***/
  function srcAppModulesHomePagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }
      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return HomeComponent;
    }();
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./home.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./home.component.scss */"./src/app/modules/home/pages/home/home.component.scss"))["default"]]
    })], HomeComponent);

    /***/
  },

  /***/"./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/"./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  },

  /***/0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! C:\Users\Wyslan\Desktop\Angular\app-todo\src\main.ts */"./src/main.ts");

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map