/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var player_1 = __webpack_require__(/*! ./player */ "./src/player.ts");
function deferImg() {
    Array.from(document.getElementsByTagName("img")).forEach(function (el) {
        if (el.getAttribute("data-src") != null) {
            el.setAttribute("src", el.getAttribute("data-src"));
        }
    });
}
window.onload = function () {
    document.querySelectorAll(".sr-audio").forEach(function (el) {
        player_1.default("audio", el);
    });
    document.querySelectorAll(".sr-video").forEach(function (el) {
        player_1.default("video", el);
    });
    //  deferImg();
};


/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @param n: normalized */
function formatPercent(n) {
    return n * 100 + "%";
}
/** @param t: time in seconds */
function formatTime(t) {
    var m = Math.floor(t / 60);
    var s = ("00" + (t % 60)).slice(-2);
    return m + ":" + s;
}
function player(tag, el) {
    // TODO error if any of these are null
    var media = el.querySelector(tag);
    var bufferBar = el.querySelector(".buffer-bar"); // TODO with this typed, can it not be null? or is that included?
    var progressBar = el.querySelector(".progress-bar");
    var status = el.querySelector(".status");
    var play = el.querySelector(".play");
    var pause = el.querySelector(".pause");
    function setStatus(msg) {
        status.innerHTML = msg;
    }
    function setTime() {
        setStatus(formatTime(Math.floor(media.currentTime)) + " / " + formatTime(Math.round(media.duration)));
    }
    function updateBuffer() {
        var duration = media.duration;
        if (duration > 0) {
            for (var i = 0; i < media.buffered.length; i++) {
                if (media.buffered.start(media.buffered.length - 1 - i) <
                    media.currentTime) {
                    bufferBar.style.width = formatPercent(media.buffered.end(media.buffered.length - 1 - i) / duration);
                    break;
                }
            }
        }
    }
    media.addEventListener("progress", updateBuffer);
    function displayControls() {
        play.disabled = false;
        pause.disabled = false;
        if (media.duration > 0) {
            setTime();
        }
    }
    // check that the media is ready before displaying the controls
    if (media.paused) {
        displayControls();
    }
    else {
        media.addEventListener("canplay", function () {
            displayControls();
        });
    }
    play.addEventListener("click", function () {
        media.play();
        play.style.display = "none";
        pause.style.display = "block";
    });
    pause.addEventListener("click", function () {
        media.pause();
        play.style.display = "block";
        pause.style.display = "none";
    });
    media.addEventListener("timeupdate", function () {
        progressBar.style.width = formatPercent(media.currentTime / media.duration);
        setTime();
    });
    media.addEventListener("ended", function () {
        play.style.display = "block";
        pause.style.display = "none";
    });
}
exports.default = player;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGlsbHJlc29uYXRpbmcuY29tLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vc3RpbGxyZXNvbmF0aW5nLmNvbS8uL3NyYy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vc3RpbGxyZXNvbmF0aW5nLmNvbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdGlsbHJlc29uYXRpbmcuY29tL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsZUFBZSxtQkFBTyxDQUFDLGlDQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7OztBQ2xCYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwyQkFBMkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlOzs7Ozs7O1VDMUVmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHBsYXllcl8xID0gcmVxdWlyZShcIi4vcGxheWVyXCIpO1xuZnVuY3Rpb24gZGVmZXJJbWcoKSB7XG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKSkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgaWYgKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpICE9IG51bGwpIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShcInNyY1wiLCBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zci1hdWRpb1wiKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBwbGF5ZXJfMS5kZWZhdWx0KFwiYXVkaW9cIiwgZWwpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3ItdmlkZW9cIikuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgcGxheWVyXzEuZGVmYXVsdChcInZpZGVvXCIsIGVsKTtcbiAgICB9KTtcbiAgICAvLyAgZGVmZXJJbWcoKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBAcGFyYW0gbjogbm9ybWFsaXplZCAqL1xuZnVuY3Rpb24gZm9ybWF0UGVyY2VudChuKSB7XG4gICAgcmV0dXJuIG4gKiAxMDAgKyBcIiVcIjtcbn1cbi8qKiBAcGFyYW0gdDogdGltZSBpbiBzZWNvbmRzICovXG5mdW5jdGlvbiBmb3JtYXRUaW1lKHQpIHtcbiAgICB2YXIgbSA9IE1hdGguZmxvb3IodCAvIDYwKTtcbiAgICB2YXIgcyA9IChcIjAwXCIgKyAodCAlIDYwKSkuc2xpY2UoLTIpO1xuICAgIHJldHVybiBtICsgXCI6XCIgKyBzO1xufVxuZnVuY3Rpb24gcGxheWVyKHRhZywgZWwpIHtcbiAgICAvLyBUT0RPIGVycm9yIGlmIGFueSBvZiB0aGVzZSBhcmUgbnVsbFxuICAgIHZhciBtZWRpYSA9IGVsLnF1ZXJ5U2VsZWN0b3IodGFnKTtcbiAgICB2YXIgYnVmZmVyQmFyID0gZWwucXVlcnlTZWxlY3RvcihcIi5idWZmZXItYmFyXCIpOyAvLyBUT0RPIHdpdGggdGhpcyB0eXBlZCwgY2FuIGl0IG5vdCBiZSBudWxsPyBvciBpcyB0aGF0IGluY2x1ZGVkP1xuICAgIHZhciBwcm9ncmVzc0JhciA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3MtYmFyXCIpO1xuICAgIHZhciBzdGF0dXMgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLnN0YXR1c1wiKTtcbiAgICB2YXIgcGxheSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIucGxheVwiKTtcbiAgICB2YXIgcGF1c2UgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLnBhdXNlXCIpO1xuICAgIGZ1bmN0aW9uIHNldFN0YXR1cyhtc2cpIHtcbiAgICAgICAgc3RhdHVzLmlubmVySFRNTCA9IG1zZztcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0VGltZSgpIHtcbiAgICAgICAgc2V0U3RhdHVzKGZvcm1hdFRpbWUoTWF0aC5mbG9vcihtZWRpYS5jdXJyZW50VGltZSkpICsgXCIgLyBcIiArIGZvcm1hdFRpbWUoTWF0aC5yb3VuZChtZWRpYS5kdXJhdGlvbikpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlQnVmZmVyKCkge1xuICAgICAgICB2YXIgZHVyYXRpb24gPSBtZWRpYS5kdXJhdGlvbjtcbiAgICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZWRpYS5idWZmZXJlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChtZWRpYS5idWZmZXJlZC5zdGFydChtZWRpYS5idWZmZXJlZC5sZW5ndGggLSAxIC0gaSkgPFxuICAgICAgICAgICAgICAgICAgICBtZWRpYS5jdXJyZW50VGltZSkge1xuICAgICAgICAgICAgICAgICAgICBidWZmZXJCYXIuc3R5bGUud2lkdGggPSBmb3JtYXRQZXJjZW50KG1lZGlhLmJ1ZmZlcmVkLmVuZChtZWRpYS5idWZmZXJlZC5sZW5ndGggLSAxIC0gaSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBtZWRpYS5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgdXBkYXRlQnVmZmVyKTtcbiAgICBmdW5jdGlvbiBkaXNwbGF5Q29udHJvbHMoKSB7XG4gICAgICAgIHBsYXkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcGF1c2UuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG1lZGlhLmR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgc2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNoZWNrIHRoYXQgdGhlIG1lZGlhIGlzIHJlYWR5IGJlZm9yZSBkaXNwbGF5aW5nIHRoZSBjb250cm9sc1xuICAgIGlmIChtZWRpYS5wYXVzZWQpIHtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xzKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtZWRpYS5hZGRFdmVudExpc3RlbmVyKFwiY2FucGxheVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbHMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWVkaWEucGxheSgpO1xuICAgICAgICBwbGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcGF1c2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KTtcbiAgICBwYXVzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZWRpYS5wYXVzZSgpO1xuICAgICAgICBwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHBhdXNlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgICBtZWRpYS5hZGRFdmVudExpc3RlbmVyKFwidGltZXVwZGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gZm9ybWF0UGVyY2VudChtZWRpYS5jdXJyZW50VGltZSAvIG1lZGlhLmR1cmF0aW9uKTtcbiAgICAgICAgc2V0VGltZSgpO1xuICAgIH0pO1xuICAgIG1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgcGF1c2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gcGxheWVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4udHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9