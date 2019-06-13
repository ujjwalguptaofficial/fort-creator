#!/usr/bin/env node
/*!
 * @license :fort-creator - V1.1.2 - 13/06/2019
 * https://github.com/ujjwalguptaofficial/fort-creator
 * Copyright (c) 2019 @Ujjwal Gupta; Licensed Apache-2.0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/*! exports used: moveSync, pathExistsSync, readFileSync, removeSync */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 1 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/*! exports used: join, parse */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/*!***************************!*\
  !*** external "inquirer" ***!
  \***************************/
/*! no static exports found */
/*! exports used: prompt */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("inquirer");

/***/ }),
/* 3 */
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/*! exports used: existsSync, mkdirSync, writeFileSync */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/*!****************************!*\
  !*** external "commander" ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("commander");

/***/ }),
/* 5 */
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/*! exports used: exec */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 6 */
/*!******************************!*\
  !*** external "cli-spinner" ***!
  \******************************/
/*! no static exports found */
/*! exports used: Spinner */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("cli-spinner");

/***/ }),
/* 7 */
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/*! exports used: EOL */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 8 */
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ujjwal/projects/opensource/fort-creator/src/index.ts */9);


/***/ }),
/* 9 */
/*!***********************************!*\
  !*** ./src/index.ts + 16 modules ***!
  \***********************************/
/*! exports provided: processCommand */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with external "child_process" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "cli-spinner" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "commander" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "fs" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "fs-extra" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "inquirer" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "os" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "path" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "inquirer"
var external_inquirer_ = __webpack_require__(2);

// CONCATENATED MODULE: ./src/helpers/ask_for_add.ts

var askForAdd = function () {
    return new Promise(function (res, rej) {
        var questions = [{
                name: 'add_info',
                message: "what do you want to add",
                type: 'list',
                choices: ["controller", "shield", "wall", "guard"]
            }];
        Object(external_inquirer_["prompt"])(questions).then(function (answers) {
            res(answers.add_info);
        });
    });
};

// CONCATENATED MODULE: ./src/helpers/ask_for_project_language.ts

var askForProjectLanguage = function () {
    return new Promise(function (res, rej) {
        var questions = [{
                name: 'project_language',
                message: "choose project language",
                type: 'list',
                choices: ["typescript", "javascript"]
            }];
        Object(external_inquirer_["prompt"])(questions).
            then(function (answers) {
            res(answers.project_language);
        });
    });
};

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/helpers/ensure_dir.ts

var ensureDir = function (dir) {
    if (!Object(external_fs_["existsSync"])(dir)) {
        Object(external_fs_["mkdirSync"])(dir);
    }
};

// EXTERNAL MODULE: external "child_process"
var external_child_process_ = __webpack_require__(5);

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

// CONCATENATED MODULE: ./src/helpers/index.ts






// CONCATENATED MODULE: ./src/handlers/deploy_handler.ts

var handleDeploy = function (deployFolderName) {
    runCommand("BUILD_FOLDER=" + deployFolderName + " npm run deploy").then(function (code) {
        if (code == 0) {
            console.log("build created for deploy");
        }
        else {
            console.log("unable to create build for deploy, process exited with code " + code.toString());
        }
    });
};

// CONCATENATED MODULE: ./src/handlers/handle_start.ts

var handleStart = function () {
    runCommand("npm run start").then(function (code) {
        if (code != 0) {
            console.log("unable to start dev server, process exited with code " + code);
        }
    });
};

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/tshelpers/get_controller_template.ts
var getControllerTemplate = function (controllerName) {
    return "\nimport { Controller, DefaultWorker, Worker, textResult } from \"fortjs\";\n\nexport class " + controllerName + " extends Controller {\n\n    @DefaultWorker()\n    async index() {\n        \n    }\n}";
};

// CONCATENATED MODULE: ./src/tshelpers/get_guard_template.ts
var getGuardTemplate = function (guardName) {
    return "\nimport { Guard, textResult } from \"fortjs\";\n\nexport class " + guardName + " extends Guard {\n    async check() {\n        \n    }\n}";
};

// CONCATENATED MODULE: ./src/tshelpers/get_shield_template.ts
var getShieldTemplate = function (shieldName) {
    return "\nimport { Shield, textResult } from \"fortjs\";\nexport class " + shieldName + " extends Shield {\n    async protect() {\n        \n    }\n}";
};

// CONCATENATED MODULE: ./src/tshelpers/get_wall_template.ts
var getWallTemplate = function (wallName) {
    return "\nimport { Wall, textResult } from \"fortjs\";\n\nexport class " + wallName + " extends Wall {\n    async onIncoming() {\n        \n    }\n}    \n";
};

// CONCATENATED MODULE: ./src/tshelpers/index.ts





// CONCATENATED MODULE: ./src/handlers/handler_file_add.ts






var handleFileAdd = function (language) {
    askForAdd().
        then(function (fileType) {
        askForControllerName().then(function (file) {
            var fileInfo = external_path_["parse"](file);
            var componentName = fileInfo.name;
            var extension = language == "typescript" ? "ts" : "js";
            var fileNameWithExtension = getSnakeCase(componentName) + "." + extension;
            var folderName = fileType + "s";
            ensureDir(folderName);
            var content = createContentBasedOnFileType(fileType, componentName);
            var filePath = folderName + "/" + fileNameWithExtension;
            external_fs_["writeFileSync"](filePath, content, {
                encoding: "utf-8"
            });
            console.log("file created at - \"" + filePath + "\"");
        });
    });
};
var createContentBasedOnFileType = function (fileType, componentName) {
    switch (fileType) {
        case "controller": return getControllerTemplate(componentName);
        case "shield": return getShieldTemplate(componentName);
        case "guard": return getGuardTemplate(componentName);
        case "wall": return getWallTemplate(componentName);
    }
    return "";
};
var askForControllerName = function () {
    return new Promise(function (res, rej) {
        var questions = [{
                name: 'controller_name',
                message: "Enter controller name",
                type: 'input',
                choices: ["controller", "shield", "wall",]
            }];
        Object(external_inquirer_["prompt"])(questions).
            then(function (answers) {
            res(answers.controller_name);
        });
    });
};

// EXTERNAL MODULE: external "fs-extra"
var external_fs_extra_ = __webpack_require__(0);

// EXTERNAL MODULE: external "cli-spinner"
var external_cli_spinner_ = __webpack_require__(6);

// EXTERNAL MODULE: external "os"
var external_os_ = __webpack_require__(7);

// CONCATENATED MODULE: ./src/handlers/handle_clone.ts
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





var typescriptProjectUrl = "https://github.com/ujjwalguptaofficial/fortjs-typescript-starter";
var javascriptProjectUrl = "https://github.com/ujjwalguptaofficial/fortjs-javascript-starter";
var handle_clone_SpinnerHelper = /** @class */ (function () {
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
var handleClone = function (type, name) {
    return __awaiter(this, void 0, void 0, function () {
        var cloneProjPath, command, exitCode, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (Object(external_fs_extra_["pathExistsSync"])(name)) {
                        console.error("A folder with name " + name + " already exist in the current directoy");
                        return [2 /*return*/];
                    }
                    cloneProjPath = external_path_["join"](__dirname, name);
                    command = "git clone --depth=1 ";
                    // create the url based on type
                    command += type === "typescript" ? typescriptProjectUrl : javascriptProjectUrl;
                    // clone inside the provided name
                    command += " " + ("" + cloneProjPath);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, runCommand(command)];
                case 2:
                    exitCode = _a.sent();
                    if (!(exitCode != 0)) return [3 /*break*/, 3];
                    console.log("unable to clone, process exited with code " + exitCode.toString());
                    return [3 /*break*/, 5];
                case 3:
                    handle_clone_SpinnerHelper.init("setting up project");
                    // Remove the .git directory
                    Object(external_fs_extra_["removeSync"])(external_path_["join"](cloneProjPath, '.git/'));
                    // copy project directory
                    // ensureDir(name);
                    Object(external_fs_extra_["moveSync"])(cloneProjPath, name);
                    handle_clone_SpinnerHelper.stop();
                    handle_clone_SpinnerHelper.init("downloading dependency");
                    return [4 /*yield*/, runCommand("cd " + name + " && npm install")];
                case 4:
                    // downloading dependencies
                    exitCode = _a.sent();
                    handle_clone_SpinnerHelper.stop();
                    if (exitCode != 0) {
                        console.log("unable to install dependencies, process exited with code " + exitCode.toString());
                    }
                    else {
                        console.log(external_os_["EOL"] + "new project " + name + " created");
                    }
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    console.error(err_1);
                    handle_clone_SpinnerHelper.stop();
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
};

// CONCATENATED MODULE: ./src/handlers/index.ts





// EXTERNAL MODULE: external "commander"
var external_commander_ = __webpack_require__(4);

// CONCATENATED MODULE: ./src/index.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processCommand", function() { return processCommand; });





var errorMessageForInvalidProjectDirectory = "Seems like you are not inside project directory.Please move to project dir & run the command again";
var processCommand = function (commander) {
    if (commander.new) {
        var appname_1 = typeof commander.new != "string" ? "fortjs-app" : commander.new;
        askForProjectLanguage().
            then(function (language) {
            handleClone(language, appname_1);
        });
    }
    else if (commander.version) {
        var pathOfPackage = external_path_["join"](__dirname, ".././package.json");
        var contents = Object(external_fs_extra_["readFileSync"])(pathOfPackage, {
            encoding: "utf8"
        });
        var packageInfo = JSON.parse(contents);
        console.log(packageInfo.version);
    }
    else if (commander.add || commander.start || commander.deploy) {
        var content;
        try {
            var pathOfPackage = "./package.json";
            if (!Object(external_fs_extra_["pathExistsSync"])(pathOfPackage)) {
                console.error(errorMessageForInvalidProjectDirectory);
                return;
            }
            content = Object(external_fs_extra_["readFileSync"])(pathOfPackage, {
                encoding: "utf8"
            });
        }
        catch (ex) {
            console.error(errorMessageForInvalidProjectDirectory);
        }
        var packageInfo = JSON.parse(content);
        if (packageInfo && packageInfo.project && packageInfo.project.framework === "fortjs") {
            if (commander.start) {
                handleStart();
            }
            else if (commander.deploy) {
                var deployFolderName = typeof commander.deploy == "string" ? commander.deploy : "bin";
                handleDeploy(deployFolderName);
            }
            else if (commander.add) {
                handleFileAdd(packageInfo.project.language);
            }
        }
        else {
            console.error(errorMessageForInvalidProjectDirectory);
        }
    }
    else {
        console.log('invalid command');
    }
};
external_commander_["option"]('new [folderName]', 'Create new project & put the content inside the specified folder').
    option('-v, --version', 'get current version').
    option('start', 'start development server').
    option('deploy [deploymentFolderName]', 'create build for deployment').
    option('add', 'add the components').
    parse(process.argv);
processCommand(external_commander_);


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map