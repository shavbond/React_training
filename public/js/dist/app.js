(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        app: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/components/app.js", "vendors~app" ]);
    return checkDeferredModules();
})({
    "./assets/js/components/Advanced/BoxComp.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst BoxComp = () => {\n  const ComponentDidMount = () => {\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n      console.log('ComponentDidMount');\n      return () => {\n        console.log('ComponentWillUnmount');\n      };\n    }, []);\n  };\n\n  const ComponentDidUpdate = () => {\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n      console.log('ComponentDidUpdate');\n    });\n  };\n\n  ComponentDidMount();\n  ComponentDidUpdate();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"box\",\n    style: {\n      width: '100%',\n      height: '200px',\n      display: 'flex',\n      justifyContent: 'center',\n      alignItems: 'center',\n      background: 'blue',\n      color: 'white'\n    }\n  }, \"This is a blue box\");\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (BoxComp);\n\n//# sourceURL=webpack:///./assets/js/components/Advanced/BoxComp.js?");
    },
    "./assets/js/components/Advanced/Hooks.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BoxComp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoxComp */ "./assets/js/components/Advanced/BoxComp.js");\n\n // USING CLASS COMPONENTS FOR STATE\n// export default class Hooks extends Component {\n// \tconstructor() {\n// \t\tsuper();\n// \t\tthis.state = {\n// \t\t\tname: \'Shav\'\n// \t\t};\n// \t}\n// \trender() {\n// \t\treturn (\n// \t\t\t<div id="HooksApp">\n// \t\t\t\t<h1>Hooks Training {this.state.name}</h1>\n// \t\t\t</div>\n// \t\t);\n// \t}\n// }\n// USING HOOKS INSTEAD\n\nconst Hooks = () => {\n  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({\n    name: \'Shav\',\n    total: 0\n  });\n\n  const btnClick = () => {\n    setState({\n      name: \'Shaviel\',\n      total: state.total + 1\n    });\n  };\n\n  const displayBox = () => {\n    if (state.total === 0) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading.....");\n    } else if (state.total === 1) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BoxComp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null);\n    } else {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "No box left!");\n    }\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    id: "HooksApp"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Working on Hooks with ", state.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "btn",\n    onClick: btnClick,\n    style: {\n      background: \'red\',\n      color: \'white\',\n      padding: \'20px\'\n    }\n  }, "Change Name"), displayBox());\n};\n\n/* unused harmony default export */ var _unused_webpack_default_export = (Hooks);\n\n//# sourceURL=webpack:///./assets/js/components/Advanced/Hooks.js?');
    },
    "./assets/js/components/app.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Immutable_Immutable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Immutable/Immutable.js */ "./assets/js/components/components/Immutable/Immutable.js");\n/* harmony import */ var _components_BillsApp_Billsapp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/BillsApp/Billsapp.js */ "./assets/js/components/components/BillsApp/Billsapp.js");\n/* harmony import */ var _Advanced_Hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Advanced/Hooks */ "./assets/js/components/Advanced/Hooks.js");\n\n // import Counter from \'./components/Counter/Counter.js\';\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {};\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: \'container\'\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BillsApp_Billsapp_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null));\n  }\n\n}\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById(\'app\'));\n\n//# sourceURL=webpack:///./assets/js/components/app.js?');
    },
    "./assets/js/components/components/BillsApp/AddBill.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bills; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Bills extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.inputChange = () => {\n      const name = event.target.name;\n      const value = event.target.type == \'checkbox\' ? event.target.checked : event.target.value;\n      this.setState({\n        [name]: value\n      });\n    };\n\n    this.handleSubmit = () => {\n      event.preventDefault();\n      this.setState({\n        business_name: \'\',\n        price: 0\n      });\n      this.props.saveBills(this.state);\n      console.log(this.state);\n    };\n\n    this.state = {\n      business_name: \'\',\n      price: \'\',\n      status: \'unpaid\'\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "addBill",\n      className: "".concat(this.props.AddBillOpen == true ? \'active\' : \'\')\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Add Bill"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {\n      onSubmit: this.handleSubmit\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "form-group"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "business_name"\n    }, "Bill"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      id: "business_name",\n      onChange: this.inputChange,\n      value: this.state.business_name,\n      name: "business_name"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "form-group"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "price"\n    }, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      id: "price",\n      onChange: this.inputChange,\n      name: "price",\n      value: this.state.price\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {\n      type: "submit"\n    }, "Save"))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/components/BillsApp/AddBill.js?');
    },
    "./assets/js/components/components/BillsApp/Bills.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bills; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Bills extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.showAllBills = () => {\n      const bills = this.props.allBills;\n\n      if (bills.length > 0) {\n        return bills.map((bill, index) => {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n            className: "bill ".concat(bill.status == \'paid\' ? \'active\' : \'\'),\n            key: index\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "company"\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "logo"\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n            src: "/img/billsapp/money.png"\n          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "title"\n          }, bill.business_name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "price"\n          }, "-$", bill.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "buttons"\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "paid",\n            onClick: this.props.changeBillStatus.bind(null, index)\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n            className: "fas fa-check"\n          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "delete",\n            onClick: this.props.deleteBill.bind(null, index)\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n            className: "far fa-trash-alt"\n          }))));\n        });\n      } else {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n          className: "bill"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "no-bills"\n        }, "No bills to display..."));\n      }\n    };\n\n    this.billsTotalAmount = () => {\n      const bills = this.props.allBills;\n      let total = 0;\n\n      for (var i = 0; i < bills.length; i++) {\n        total += parseInt(bills[i].price);\n      }\n\n      if (bills.length > 0) {\n        return total;\n      } else {\n        return 0;\n      }\n    };\n\n    this.state = {};\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "Bills"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "total-bills"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "text"\n    }, "Total Amount: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "number"\n    }, "$", this.billsTotalAmount())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {\n      className: "billsList"\n    }, this.showAllBills())));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/components/BillsApp/Bills.js?');
    },
    "./assets/js/components/components/BillsApp/Billsapp.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillsApp; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./assets/js/components/components/BillsApp/Header.js");\n/* harmony import */ var _Bills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bills */ "./assets/js/components/components/BillsApp/Bills.js");\n/* harmony import */ var _FloatingMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FloatingMenu */ "./assets/js/components/components/BillsApp/FloatingMenu.js");\n/* harmony import */ var _AddBill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddBill */ "./assets/js/components/components/BillsApp/AddBill.js");\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js");\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nclass BillsApp extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super();\n\n    this.addBillClick = () => {\n      this.setState({\n        AddBillOpen: !this.state.AddBillOpen\n      });\n    };\n\n    this.saveBills = bill => {\n      const newBill = immutability_helper__WEBPACK_IMPORTED_MODULE_5___default()(this.state.allBills, {\n        $push: [bill]\n      });\n      this.setState({\n        allBills: newBill,\n        AddBillOpen: !this.state.AddBillOpen\n      }, () => {\n        console.log(this.state);\n      });\n    };\n\n    this.changeBillStatus = billIndex => {\n      const allBills = this.state.allBills;\n      const bill = allBills[billIndex];\n\n      if (bill.status == \'unpaid\') {\n        bill.status = \'paid\';\n      } else {\n        bill.status = \'unpaid\';\n      }\n\n      const newState = immutability_helper__WEBPACK_IMPORTED_MODULE_5___default()(this.state, {\n        allBills: {\n          $set: allBills\n        }\n      });\n      this.setState(newState, () => {\n        console.log(this.state);\n      });\n    };\n\n    this.deleteBill = billIndex => {\n      const allBills = this.state.allBills;\n      allBills.splice(billIndex, 1);\n      const newState = immutability_helper__WEBPACK_IMPORTED_MODULE_5___default()(this.state, {\n        allBills: {\n          $set: allBills\n        }\n      });\n      this.setState(newState);\n      console.log(billIndex);\n    };\n\n    this.state = {\n      AddBillOpen: false,\n      allBills: [{\n        business_name: \'PARTYMOBILE\',\n        price: 50,\n        status: \'unpaid\'\n      }]\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      id: "billsapp"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bills__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {\n      allBills: this.state.allBills,\n      changeBillStatus: this.changeBillStatus,\n      deleteBill: this.deleteBill\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddBill__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n      AddBillOpen: this.state.AddBillOpen,\n      saveBills: this.saveBills\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "content-background"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FloatingMenu__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {\n      addBillClick: this.addBillClick\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/components/BillsApp/Billsapp.js?');
    },
    "./assets/js/components/components/BillsApp/FloatingMenu.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloatingMenu; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass FloatingMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {\n      id: "FloatingMenu"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "link"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "icon"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fa fa-credit-card"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "text"\n    }, "Spend")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "link"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "icon"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-piggy-bank"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "text"\n    }, "Save")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "link"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "icon"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-exchange-alt"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "text"\n    }, "Transfer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "link"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "icon"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-cogs"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "text"\n    }, "Settings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "link"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "add-button",\n      onClick: this.props.addBillClick\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "icon"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-plus"\n    })))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/components/BillsApp/FloatingMenu.js?');
    },
    "./assets/js/components/components/BillsApp/Header.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super();\n    this.state = {};\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Bills Application"));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/components/BillsApp/Header.js?');
    },
    "./assets/js/components/components/Immutable/Immutable.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* unused harmony export default */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutability-helper */ \"./node_modules/immutability-helper/index.js\");\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Immutable extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {\n      const newDons = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(this.state.dons, {\n        $push: ['Masicka']\n      });\n      const newState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(this.state, {\n        dons: {\n          $set: newDons\n        }\n      }); // console.log(newDons);\n\n      this.setState(newState, () => {\n        console.log(this.state);\n      });\n      alert('CLICKED BTN');\n    };\n\n    this.changeToActive = () => {\n      if (this.state.dons[3] == 'Masicka') {\n        return 'active';\n      } else {\n        return '';\n      }\n    };\n\n    this.state = {\n      background: 'black',\n      names: ['Shayza', 'connell', 'jean'],\n      both: [],\n      dons: ['kartel', 'gullygad', 'sparta'],\n      user: {\n        name: 'Shav',\n        age: 24,\n        location: 'Jamrock',\n        grades: {\n          math: 'A',\n          english: 'B+',\n          science: 'C-',\n          gym: 'D'\n        }\n      }\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"Immutable-comp\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"box \".concat(this.changeToActive())\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"button\",\n      onClick: this.clickedBtn\n    }, \"Press Mi\"));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/components/Immutable/Immutable.js?");
    }
});