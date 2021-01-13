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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/display.ts":
/*!***************************!*\
  !*** ./src/ts/display.ts ***!
  \***************************/
/*! exports provided: Display */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Display\", function() { return Display; });\nconst DEFAULT_DISPLAY_COLORS = {\n    display: '#aad751',\n    emptyPixel: '#4a752c',\n};\nclass Display {\n    constructor(context, pixelSize, colors = DEFAULT_DISPLAY_COLORS) {\n        this.context = context;\n        this.pixelSize = pixelSize;\n        this._width = Math.floor(context.canvas.width / pixelSize);\n        this._height = Math.floor(context.canvas.height / pixelSize);\n        this.colors = colors;\n    }\n    width() {\n        return this._width;\n    }\n    height() {\n        return this._height;\n    }\n    drawPixels(color, ...pixels) {\n        pixels.forEach((pixel) => {\n            this._drawPixel(color, pixel);\n        });\n    }\n    clear() {\n        const { context, pixelSize, colors } = this;\n        context.beginPath();\n        context.rect(0, 0, context.canvas.width, context.canvas.height);\n        context.fillStyle = colors.display;\n        context.fill();\n        for (let i = 0; i < this.width(); i++) {\n            for (let j = 0; j < this.height(); j++) {\n                context.beginPath();\n                context.arc(i * pixelSize + pixelSize / 2, j * pixelSize + pixelSize / 2, 1, // pixelSize / 10,\n                0, 2 * Math.PI);\n                context.fillStyle = colors.emptyPixel;\n                context.fill();\n            }\n        }\n    }\n    _drawPixel(color, pixel) {\n        const { context, pixelSize } = this;\n        context.beginPath();\n        context.rect(pixel.x * pixelSize + 1, pixel.y * pixelSize + 1, pixelSize - 1, pixelSize - 1);\n        context.fillStyle = color;\n        context.fill();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/display.ts?");

/***/ }),

/***/ "./src/ts/factories.ts":
/*!*****************************!*\
  !*** ./src/ts/factories.ts ***!
  \*****************************/
/*! exports provided: FoodFactory, SnakeFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FoodFactory\", function() { return FoodFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SnakeFactory\", function() { return SnakeFactory; });\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake */ \"./src/ts/snake.ts\");\n\nfunction random(from, to) {\n    return Math.floor(Math.random() * (to - from)) + from;\n}\nclass FoodFactory {\n    constructor(width, height, energy) {\n        this.widthLimit = width;\n        this.heightLimit = height;\n        this.energyLimit = energy;\n    }\n    getFood(energy) {\n        const pixel = {\n            x: random(0, this.widthLimit),\n            y: random(0, this.heightLimit),\n        };\n        // @TODO: Generated pixel have to be validated, maybe generated position\n        // is not available (on this position can be an obstacle, or the snake)\n        return {\n            pixel,\n            energy: energy || random(1, this.energyLimit),\n        };\n    }\n}\nclass SnakeFactory {\n    constructor(snakePixel, direction, maxLength) {\n        this.snakePixels = snakePixel;\n        this.direction = direction;\n        this.maxLength = maxLength;\n    }\n    getSnake() {\n        const snake = new _snake__WEBPACK_IMPORTED_MODULE_0__[\"Snake\"]([...this.snakePixels], this.direction);\n        if (this.maxLength > 0) {\n            snake.maxLength = this.maxLength;\n        }\n        return snake;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/factories.ts?");

/***/ }),

/***/ "./src/ts/game.ts":
/*!************************!*\
  !*** ./src/ts/game.ts ***!
  \************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\nconst DIRECTIONS = {\n    left: { dx: -1, dy: 0 },\n    right: { dx: 1, dy: 0 },\n    top: { dx: 0, dy: -1 },\n    bottom: { dx: 0, dy: 1 },\n};\nclass Game {\n    constructor(display, snakeFactory, foodFactory, settings) {\n        this._score = 0;\n        this._bestScore = 0;\n        this._runningTimer = false;\n        this._delay = 100;\n        this._finished = false;\n        this._requestDirection = [];\n        this.events = {};\n        this.display = display;\n        this.snakeFactory = snakeFactory;\n        this.foodFactory = foodFactory;\n        this._settings = settings;\n        this.reset();\n    }\n    isRunning() {\n        return this._runningTimer !== false;\n    }\n    isFinished() {\n        return this._finished;\n    }\n    score() {\n        return this._score;\n    }\n    reset() {\n        this.snake = this.snakeFactory.getSnake();\n        this.food = this.foodFactory.getFood(1);\n        this._finished = false;\n        if (this._score != 0) {\n            this._score = 0;\n            this.trigger('scoreUpdated', this._score);\n        }\n        this._draw();\n    }\n    exec(action, ...args) {\n        if (this.isFinished()) {\n            return;\n        }\n        switch (action) {\n            case 'play':\n                this.play();\n                break;\n            case 'pause':\n                this.pause();\n                break;\n            case 'changeDirection':\n                if (this.isRunning()) {\n                    this._requestDirection.push(DIRECTIONS[args[0]]);\n                }\n        }\n    }\n    on(action, callback) {\n        if (this.isFinished()) {\n            return;\n        }\n        if (!this.events[action]) {\n            this.events[action] = [];\n        }\n        this.events[action].push(callback);\n        return this;\n    }\n    trigger(action, ...args) {\n        if (this.events[action]) {\n            this.events[action].forEach((callback) => {\n                callback.apply(this, args);\n            });\n        }\n    }\n    play() {\n        if (!this._runningTimer) {\n            this._tic();\n            this.trigger('resumed');\n        }\n    }\n    pause(trigger = true) {\n        if (this._runningTimer) {\n            clearTimeout(this._runningTimer);\n            this._runningTimer = false;\n            if (trigger) {\n                this.trigger('stopped');\n            }\n        }\n    }\n    _tic() {\n        this.pause(false);\n        this._update();\n        this._checkCollisions();\n        if (this.isFinished()) {\n            const hasNewBestScore = this._bestScore < this._score;\n            if (hasNewBestScore) {\n                this._bestScore = this._score;\n            }\n            this.trigger('gameOver');\n            if (hasNewBestScore) {\n                this.trigger('bestscoreUpdated', this._bestScore);\n            }\n            return;\n        }\n        this._draw();\n        this._runningTimer = setTimeout(() => {\n            this._tic();\n        }, this._delay);\n    }\n    _checkCollisions() {\n        let gameOver = false;\n        const head = this.snake.pixels[0];\n        // Collison with walls\n        const { display } = this;\n        if (this._settings.displayHasWall &&\n            (head.x < 0 || head.y < 0 || display.width() <= head.x || display.height() <= head.y)) {\n            gameOver = true;\n        }\n        // Collistions with snake\n        if (!gameOver) {\n            for (let i = 1; i < this.snake.pixels.length; i++) {\n                const pixel = this.snake.pixels[i];\n                if (pixel.x == head.x && pixel.y == head.y) {\n                    gameOver = true;\n                    break;\n                }\n            }\n        }\n        if (gameOver) {\n            this.pause(false);\n            this._finished = true;\n        }\n    }\n    _update() {\n        if (this._requestDirection.length) {\n            this.snake.changeDirection(this._requestDirection.shift());\n        }\n        const nextPixel = this.snake.nextPixel();\n        const { snake, food } = this;\n        if (nextPixel.x == food.pixel.x && nextPixel.y == food.pixel.y) {\n            snake.eatFrom(nextPixel);\n            // this.trigger('eatFood');\n            this._score += food.energy;\n            this.trigger('scoreUpdated', this._score);\n            this.food = this.foodFactory.getFood(1);\n            // this.trigger('newFood', this.food);\n        }\n        else {\n            snake.goTo(nextPixel);\n            // this.trigger('movedTo', this.nextPixel);\n        }\n    }\n    _draw() {\n        const { display, snake, food } = this;\n        const { colors } = this._settings;\n        display.clear();\n        display.drawPixels(colors.snakeHead, snake.pixels[0]);\n        display.drawPixels(colors.snake, ...snake.pixels.slice(1));\n        display.drawPixels(colors.food, food.pixel);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/game.ts?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/ts/display.ts\");\n/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories */ \"./src/ts/factories.ts\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/ts/game.ts\");\n\n\n\nclass GameModal {\n    constructor($window) {\n        this.$window = $window;\n        const { classList } = this.$window;\n        this._isOpened = classList.contains('modal-instructions') ||\n            classList.contains('modal-game-over') ||\n            classList.contains('modal-resume');\n    }\n    isOpened() {\n        return this._isOpened;\n    }\n    close() {\n        const { classList } = this.$window;\n        classList.remove('modal-instructions');\n        classList.remove('modal-game-over');\n        classList.remove('modal-resume');\n        this._isOpened = false;\n    }\n    gameOver() {\n        this._openType('modal-game-over');\n    }\n    resume() {\n        this._openType('modal-resume');\n    }\n    instructions() {\n        this._openType('modal-instructions');\n    }\n    _openType(type) {\n        if (!this.$window.classList.contains(type)) {\n            this.close();\n            this.$window.classList.add(type);\n            this._isOpened = true;\n        }\n    }\n}\nfunction createGame($canvas) {\n    const display = new _display__WEBPACK_IMPORTED_MODULE_0__[\"Display\"]($canvas.getContext('2d'), 20);\n    const snakeFactory = new _factories__WEBPACK_IMPORTED_MODULE_1__[\"SnakeFactory\"]([\n        { x: 2, y: 12 }, { x: 1, y: 12 }, { x: 0, y: 12 }\n    ], { dx: 1, dy: 0 }, 256);\n    const foodFactory = new _factories__WEBPACK_IMPORTED_MODULE_1__[\"FoodFactory\"](25, 25, 5);\n    const game = new _game__WEBPACK_IMPORTED_MODULE_2__[\"Game\"](display, snakeFactory, foodFactory, {\n        colors: {\n            snakeHead: '#1c469d',\n            snake: '#4875eb',\n            food: '#e7471d',\n        },\n        displayHasWall: true,\n    });\n    return game;\n}\nfunction main() {\n    const $closeModal = document.querySelector('.close-modal');\n    const $bestScore = document.querySelectorAll('.game-best-score span');\n    const $bestScoreWrapper = document.querySelectorAll('.game-best-score');\n    const $gameScore = document.querySelectorAll('.game-score span');\n    const modal = new GameModal(document.querySelector('.game-modal'));\n    const $canvas = document.getElementById('display');\n    const game = createGame($canvas);\n    game\n        .on('scoreUpdated', function (score) {\n        const strScore = score.toString();\n        for (let i = 0; i < $gameScore.length; i++) {\n            $gameScore[i].innerHTML = strScore;\n        }\n    })\n        .on('bestscoreUpdated', function (score) {\n        const strScore = score.toString();\n        for (let i = 0; i < $bestScore.length; i++) {\n            $bestScore[i].innerHTML = strScore;\n        }\n        if (score > 0) {\n            for (let i = 0; i < $bestScoreWrapper.length; i++) {\n                $bestScoreWrapper[i].classList.remove('invisible');\n            }\n        }\n    })\n        .on('gameOver', function () {\n        modal.gameOver();\n    });\n    document.addEventListener('keypress', function (event) {\n        switch (event.code) {\n            case 'KeyW':\n                game.exec('changeDirection', 'top');\n                break;\n            case 'KeyS':\n                game.exec('changeDirection', 'bottom');\n                break;\n            case 'KeyA':\n                game.exec('changeDirection', 'left');\n                break;\n            case 'KeyD':\n                game.exec('changeDirection', 'right');\n                break;\n            case 'Space':\n                if (modal.isOpened()) {\n                    $closeModal.dispatchEvent(new Event('click'));\n                }\n                else {\n                    if (game.isRunning()) {\n                        game.exec('pause');\n                        modal.resume();\n                    }\n                    else {\n                        game.exec('play');\n                    }\n                }\n                break;\n        }\n    });\n    $closeModal.addEventListener('click', function () {\n        modal.close();\n        if (game.isFinished()) {\n            game.reset();\n        }\n        else if (!game.isRunning()) {\n            game.exec('play');\n        }\n    });\n}\nmain();\n\n\n//# sourceURL=webpack:///./src/ts/main.ts?");

/***/ }),

/***/ "./src/ts/snake.ts":
/*!*************************!*\
  !*** ./src/ts/snake.ts ***!
  \*************************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Snake\", function() { return Snake; });\nclass Snake {\n    constructor(pixels, direction) {\n        this.maxLength = 0;\n        this.pixels = pixels;\n        this.direction = direction;\n    }\n    nextPixel() {\n        const head = this.pixels[0];\n        const { direction } = this;\n        return {\n            x: head.x + direction.dx,\n            y: head.y + direction.dy,\n        };\n    }\n    changeDirection(direction) {\n        if (Math.abs(direction.dx) == Math.abs(this.direction.dx) && Math.abs(direction.dy) == Math.abs(this.direction.dy)) {\n            return;\n        }\n        this.direction = direction;\n    }\n    goTo(pixel) {\n        this._moveHeadTo(pixel);\n        this._moveTail();\n    }\n    eatFrom(pixel) {\n        if (0 < this.maxLength && this.maxLength <= this.pixels.length) {\n            this.goTo(pixel);\n        }\n        else {\n            this._moveHeadTo(pixel);\n        }\n    }\n    _moveHeadTo(pixel) {\n        this.pixels.unshift(pixel);\n    }\n    _moveTail() {\n        this.pixels.pop();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/snake.ts?");

/***/ })

/******/ });