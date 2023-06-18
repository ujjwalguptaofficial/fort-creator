#!/usr/bin/env node
/*!
 * @license :fort-creator - V1.2.1 - 18/06/2023
 * https://github.com/ujjwalguptaofficial/fort-creator
 * Copyright (c) 2023 @Ujjwal Gupta; Licensed Apache-2.0
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***************************!*\
  !*** external "inquirer" ***!
  \***************************/
/*! no static exports found */
/*! exports used: prompt */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("inquirer");

/***/ }),
/* 1 */
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/*! exports used: existsSync, mkdirSync, writeFileSync */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/*! exports used: pathExistsSync, readFileSync */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 3 */
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/*! exports used: exec, execSync */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 4 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/*! exports used: join */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/*!****************************!*\
  !*** external "commander" ***!
  \****************************/
/*! no static exports found */
/*! exports used: Command */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("commander");

/***/ }),
/* 6 */
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/*! exports used: EOL */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 7 */
/*!******************************!*\
  !*** external "cli-spinner" ***!
  \******************************/
/*! no static exports found */
/*! exports used: Spinner */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("cli-spinner");

/***/ }),
/* 8 */
/*!**********************************************!*\
  !*** external "github-directory-downloader" ***!
  \**********************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("github-directory-downloader");

/***/ }),
/* 9 */
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/geralt/Documents/projects/opensource/fort-creator/src/index.ts */10);


/***/ }),
/* 10 */
/*!***********************************!*\
  !*** ./src/index.ts + 23 modules ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with external "child_process" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "cli-spinner" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "commander" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "fs" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "fs-extra" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "github-directory-downloader" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "inquirer" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "os" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "path" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "commander"
var external_commander_ = __webpack_require__(5);

// EXTERNAL MODULE: external "inquirer"
var external_inquirer_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/helpers/ask_for_add.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;

var askToChooseComponent = function () { return __awaiter(_this, void 0, void 0, function () {
    var questions, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                questions = [{
                        name: 'componentChoice',
                        message: "Choose the component to add",
                        type: 'list',
                        choices: ["Controller", "Shield", "Wall", "Guard"]
                    }];
                return [4 /*yield*/, Object(external_inquirer_["prompt"])(questions)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result.componentChoice];
        }
    });
}); };

// CONCATENATED MODULE: ./src/helpers/ask_for_project_language.ts
var ask_for_project_language_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ask_for_project_language_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var askForProjectLanguage = function () {
    return ask_for_project_language_awaiter(this, void 0, void 0, function () {
        var questions, answers;
        return ask_for_project_language_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    questions = [{
                            name: 'project_language',
                            message: "Choose project language",
                            type: 'list',
                            choices: ["typescript", "javascript"]
                        }];
                    return [4 /*yield*/, Object(external_inquirer_["prompt"])(questions)];
                case 1:
                    answers = _a.sent();
                    return [2 /*return*/, answers.project_language];
            }
        });
    });
};

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/helpers/ensure_dir.ts

var ensureDir = function (dir) {
    if (!Object(external_fs_["existsSync"])(dir)) {
        Object(external_fs_["mkdirSync"])(dir);
    }
};

// EXTERNAL MODULE: external "child_process"
var external_child_process_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/helpers/run_command.ts

var runCommand = function (cmd, finishMessage) {
    return new Promise(function (res, rej) {
        var command = Object(external_child_process_["exec"])(cmd);
        command.on("error", function (err) {
            console.error(err);
        });
        command.stdout.on('data', function (data) {
            console.log(data.toString());
        });
        command.stderr.on('data', function (data) {
            console.log(data.toString());
        });
        command.on('exit', function (code) {
            res(code);
        });
    });
};

// CONCATENATED MODULE: ./src/helpers/get_snake_case.ts
var getSnakeCase = function (value) {
    return value.replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map(function (word) { return word.toLowerCase(); })
        .join('_');
};

// EXTERNAL MODULE: external "fs-extra"
var external_fs_extra_ = __webpack_require__(2);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(4);

// CONCATENATED MODULE: ./src/helpers/getPackageVersion.ts


var getPackageVersion = function () {
    var pathOfPackage = external_path_["join"](__dirname, ".././package.json");
    var contents = Object(external_fs_extra_["readFileSync"])(pathOfPackage, {
        encoding: "utf8"
    });
    var packageInfo = JSON.parse(contents);
    return packageInfo.version;
};

// CONCATENATED MODULE: ./src/helpers/run_cmd_sync .ts

var runCmdSync = function (cmd) {
    Object(external_child_process_["execSync"])(cmd, { stdio: 'inherit' });
};

// CONCATENATED MODULE: ./src/helpers/set_env.ts
var setEnv = function (key, value) {
    process.env[key] = value;
};

// CONCATENATED MODULE: ./src/helpers/ask_for_folder_name.ts
var ask_for_folder_name_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ask_for_folder_name_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var askForFolderName = function () {
    return ask_for_folder_name_awaiter(this, void 0, void 0, function () {
        var questions, answers;
        return ask_for_folder_name_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Enter folder name to create project inside folder, leave blank for current folder');
                    questions = [{
                            name: 'folder_name',
                            message: "Folder name - ",
                            type: 'input',
                        }];
                    return [4 /*yield*/, Object(external_inquirer_["prompt"])(questions)];
                case 1:
                    answers = _a.sent();
                    return [2 /*return*/, answers.folder_name];
            }
        });
    });
};

// EXTERNAL MODULE: external "os"
var external_os_ = __webpack_require__(6);

// EXTERNAL MODULE: external "cli-spinner"
var external_cli_spinner_ = __webpack_require__(7);

// EXTERNAL MODULE: external "github-directory-downloader"
var external_github_directory_downloader_ = __webpack_require__(8);
var external_github_directory_downloader_default = /*#__PURE__*/__webpack_require__.n(external_github_directory_downloader_);

// CONCATENATED MODULE: ./src/helpers/create_project.ts
var create_project_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var create_project_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var create_project_SpinnerHelper = /** @class */ (function () {
    function SpinnerHelper() {
    }
    SpinnerHelper.init = function (text) {
        var spinnerInstance = SpinnerHelper.spinnerInstance = new external_cli_spinner_["Spinner"](text + ".. %s");
        spinnerInstance.setSpinnerString(18);
        spinnerInstance.start();
    };
    SpinnerHelper.stop = function () {
        SpinnerHelper.spinnerInstance.stop();
    };
    return SpinnerHelper;
}());
var createProject = function (type, folderName) {
    return create_project_awaiter(this, void 0, void 0, function () {
        var projectPath, templatePath, downloadStat, err, exitCode, err_1;
        return create_project_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    projectPath = external_path_["join"](process.cwd(), folderName);
                    templatePath = "https://github.com/ujjwalguptaofficial/fortjs-templates/tree/main/" + type;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    create_project_SpinnerHelper.init("Setting up project");
                    return [4 /*yield*/, external_github_directory_downloader_default()(templatePath, projectPath, {
                            muteLog: true
                        })];
                case 2:
                    downloadStat = _a.sent();
                    if (!downloadStat.success) {
                        err = "error - " + downloadStat.error + ", project path = " + projectPath + ", template path = " + templatePath;
                        throw new Error(err || 'Can not download the template repo, please contact author if you are seeing this error.');
                    }
                    create_project_SpinnerHelper.stop();
                    create_project_SpinnerHelper.init("Installing dependency");
                    return [4 /*yield*/, runCommand("cd " + projectPath + " && npm i")];
                case 3:
                    exitCode = _a.sent();
                    create_project_SpinnerHelper.stop();
                    if (exitCode != 0) {
                        console.log("Unable to install dependencies, process exited with code " + exitCode.toString());
                    }
                    else {
                        console.log(external_os_["EOL"] + "new project '" + projectPath + "' initiated");
                        if (folderName) {
                            console.log("Execute command 'cd " + folderName + "' to enter into project directory.");
                        }
                        console.log("Execute command - 'fort-creator dev' for startin dev server.");
                    }
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.error(err_1);
                    create_project_SpinnerHelper.stop();
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
};

// CONCATENATED MODULE: ./src/constants/index.ts
var ERROR_MSG_FOR_INVALID_PROJECT_DIRECTORY = "Seems like you are not inside project directory. Please move to project directory and run the command again";

// CONCATENATED MODULE: ./src/helpers/get_project_package_info.ts


var getProjectPackageInfo = function () {
    var content;
    try {
        var pathOfPackage = "./package.json";
        if (!Object(external_fs_extra_["pathExistsSync"])(pathOfPackage)) {
            console.error(ERROR_MSG_FOR_INVALID_PROJECT_DIRECTORY);
            return false;
        }
        content = Object(external_fs_extra_["readFileSync"])(pathOfPackage, {
            encoding: "utf8"
        });
    }
    catch (ex) {
        console.error(ERROR_MSG_FOR_INVALID_PROJECT_DIRECTORY);
        return false;
    }
    var packageInfo = JSON.parse(content);
    return packageInfo;
};

// CONCATENATED MODULE: ./src/helpers/is_fort_project.ts

var isFortProject = function () {
    var packageInfo = getProjectPackageInfo();
    return packageInfo && packageInfo.project && packageInfo.project.framework === "fortjs";
};

// CONCATENATED MODULE: ./src/helpers/index.ts













// CONCATENATED MODULE: ./src/handlers/deploy_handler.ts
var deploy_handler_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var deploy_handler_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var handleDeploy = function (deployFolderName) {
    return deploy_handler_awaiter(this, void 0, void 0, function () {
        var code;
        return deploy_handler_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setEnv('BUILD_FOLDER', deployFolderName);
                    setEnv('NODE_ENV', 'production');
                    return [4 /*yield*/, runCommand("npm run deploy")];
                case 1:
                    code = _a.sent();
                    if (code == 0) {
                        console.log("Build created for deploy");
                    }
                    else {
                        console.log("Unable to create build for deploy, process exited with code " + code.toString());
                    }
                    return [2 /*return*/];
            }
        });
    });
};

// CONCATENATED MODULE: ./src/handlers/handle_start.ts

var handleStart = function () {
    runCommand("npm run start").then(function (code) {
        if (code != 0) {
            console.log("Unable to start dev server, process exited with code " + code);
        }
    });
};

// CONCATENATED MODULE: ./src/templates/get_controller_template.ts
var getControllerTemplate = function (controllerName) {
    return "\nimport { Controller, defaultWorker, worker, textResult } from \"fortjs\";\n\nexport class " + controllerName + " extends Controller {\n\n    @defaultWorker()\n    async index() {\n        \n    }\n}";
};

// CONCATENATED MODULE: ./src/templates/get_guard_template.ts
var getGuardTemplate = function (guardName) {
    return "\nimport { Guard, textResult } from \"fortjs\";\n\nexport class " + guardName + " extends Guard {\n    async check() {\n        \n    }\n}";
};

// CONCATENATED MODULE: ./src/templates/get_shield_template.ts
var getShieldTemplate = function (shieldName) {
    return "\nimport { Shield, textResult } from \"fortjs\";\nexport class " + shieldName + " extends Shield {\n    async protect() {\n        \n    }\n}";
};

// CONCATENATED MODULE: ./src/templates/get_wall_template.ts
var getWallTemplate = function (wallName) {
    return "\nimport { Wall, textResult } from \"fortjs\";\n\nexport class " + wallName + " extends Wall {\n    async onIncoming() {\n        \n    }\n}    \n";
};

// CONCATENATED MODULE: ./src/templates/index.ts





// CONCATENATED MODULE: ./src/handlers/handler_file_add.ts
var handler_file_add_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var handler_file_add_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var handler_file_add_this = undefined;




var handleFileAdd = function (language) { return handler_file_add_awaiter(handler_file_add_this, void 0, void 0, function () {
    var fileType, componentName, indexOfFileType, extension, fileNameWithExtension, folderName, content, filePath;
    return handler_file_add_generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, askToChooseComponent()];
            case 1:
                fileType = _a.sent();
                return [4 /*yield*/, askForComponentName(fileType)];
            case 2:
                componentName = _a.sent();
                componentName = componentName[0].toUpperCase() + componentName.substr(1);
                indexOfFileType = componentName.length - fileType.length - 1;
                if (componentName.toLowerCase().includes(fileType.toLowerCase(), indexOfFileType)) {
                    componentName = componentName.substr(0, indexOfFileType + 1);
                }
                componentName += fileType;
                extension = language === "typescript" ? "ts" : "js";
                fileNameWithExtension = getSnakeCase(componentName) + "." + extension;
                folderName = fileType.toLowerCase() + "s";
                ensureDir(folderName);
                content = createContentBasedOnFileType(fileType, componentName);
                filePath = "src/" + folderName + "/" + fileNameWithExtension;
                external_fs_["writeFileSync"](filePath, content, {
                    encoding: "utf-8"
                });
                console.log("file created at - \"" + filePath + "\"");
                return [2 /*return*/];
        }
    });
}); };
var createContentBasedOnFileType = function (fileType, componentName) {
    switch (fileType.toLowerCase()) {
        case "controller": return getControllerTemplate(componentName);
        case "shield": return getShieldTemplate(componentName);
        case "guard": return getGuardTemplate(componentName);
        case "wall": return getWallTemplate(componentName);
    }
    return "";
};
var askForComponentName = function (type) {
    return handler_file_add_awaiter(this, void 0, void 0, function () {
        var questions, answers;
        return handler_file_add_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    questions = [
                        {
                            name: 'componentName',
                            message: "Enter " + type + " name",
                            type: 'input'
                        }
                    ];
                    return [4 /*yield*/, Object(external_inquirer_["prompt"])(questions)];
                case 1:
                    answers = _a.sent();
                    return [2 /*return*/, answers.componentName];
            }
        });
    });
};

// CONCATENATED MODULE: ./src/handlers/index.ts




// CONCATENATED MODULE: ./src/index.ts
var src_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var src_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var src_this = undefined;

var program = new external_commander_["Command"]();


program.version(getPackageVersion(), '-v, --version');
program.command('dev').description('start development server').action(function () {
    if (isFortProject()) {
        handleStart();
    }
});
program.command('deploy').description('Create build for deployment').action(function () {
    if (isFortProject()) {
        handleDeploy('');
    }
});
program.command('add').description('Add component').action(function () {
    if (isFortProject()) {
        var packageInfo = getProjectPackageInfo();
        var language = packageInfo && packageInfo.project && packageInfo.project.language;
        handleFileAdd(language);
    }
});
program.command('init').description('Initiate new project').action(function () { return src_awaiter(src_this, void 0, void 0, function () {
    var language, folderName;
    return src_generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, askForProjectLanguage()];
            case 1:
                language = _a.sent();
                return [4 /*yield*/, askForFolderName()];
            case 2:
                folderName = _a.sent();
                createProject(language, folderName);
                return [2 /*return*/];
        }
    });
}); });
var parsed = program.parse(process.argv);
// console.log('parsed', parsed);
// processCommand(program.opts());


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map