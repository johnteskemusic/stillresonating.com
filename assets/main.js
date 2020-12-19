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
window.onload = function () {
    document.querySelectorAll(".sr-audio").forEach(function (el) {
        player_1.default("audio", el);
    });
    document.querySelectorAll(".sr-video").forEach(function (el) {
        player_1.default("video", el);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGlsbHJlc29uYXRpbmcuY29tLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vc3RpbGxyZXNvbmF0aW5nLmNvbS8uL3NyYy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vc3RpbGxyZXNvbmF0aW5nLmNvbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdGlsbHJlc29uYXRpbmcuY29tL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsZUFBZSxtQkFBTyxDQUFDLGlDQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7OztBQ1ZhO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJCQUEyQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWU7Ozs7Ozs7VUMxRWY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcGxheWVyXzEgPSByZXF1aXJlKFwiLi9wbGF5ZXJcIik7XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3ItYXVkaW9cIikuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgcGxheWVyXzEuZGVmYXVsdChcImF1ZGlvXCIsIGVsKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNyLXZpZGVvXCIpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHBsYXllcl8xLmRlZmF1bHQoXCJ2aWRlb1wiLCBlbCk7XG4gICAgfSk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQHBhcmFtIG46IG5vcm1hbGl6ZWQgKi9cbmZ1bmN0aW9uIGZvcm1hdFBlcmNlbnQobikge1xuICAgIHJldHVybiBuICogMTAwICsgXCIlXCI7XG59XG4vKiogQHBhcmFtIHQ6IHRpbWUgaW4gc2Vjb25kcyAqL1xuZnVuY3Rpb24gZm9ybWF0VGltZSh0KSB7XG4gICAgdmFyIG0gPSBNYXRoLmZsb29yKHQgLyA2MCk7XG4gICAgdmFyIHMgPSAoXCIwMFwiICsgKHQgJSA2MCkpLnNsaWNlKC0yKTtcbiAgICByZXR1cm4gbSArIFwiOlwiICsgcztcbn1cbmZ1bmN0aW9uIHBsYXllcih0YWcsIGVsKSB7XG4gICAgLy8gVE9ETyBlcnJvciBpZiBhbnkgb2YgdGhlc2UgYXJlIG51bGxcbiAgICB2YXIgbWVkaWEgPSBlbC5xdWVyeVNlbGVjdG9yKHRhZyk7XG4gICAgdmFyIGJ1ZmZlckJhciA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIuYnVmZmVyLWJhclwiKTsgLy8gVE9ETyB3aXRoIHRoaXMgdHlwZWQsIGNhbiBpdCBub3QgYmUgbnVsbD8gb3IgaXMgdGhhdCBpbmNsdWRlZD9cbiAgICB2YXIgcHJvZ3Jlc3NCYXIgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzLWJhclwiKTtcbiAgICB2YXIgc3RhdHVzID0gZWwucXVlcnlTZWxlY3RvcihcIi5zdGF0dXNcIik7XG4gICAgdmFyIHBsYXkgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlcIik7XG4gICAgdmFyIHBhdXNlID0gZWwucXVlcnlTZWxlY3RvcihcIi5wYXVzZVwiKTtcbiAgICBmdW5jdGlvbiBzZXRTdGF0dXMobXNnKSB7XG4gICAgICAgIHN0YXR1cy5pbm5lckhUTUwgPSBtc2c7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFRpbWUoKSB7XG4gICAgICAgIHNldFN0YXR1cyhmb3JtYXRUaW1lKE1hdGguZmxvb3IobWVkaWEuY3VycmVudFRpbWUpKSArIFwiIC8gXCIgKyBmb3JtYXRUaW1lKE1hdGgucm91bmQobWVkaWEuZHVyYXRpb24pKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZUJ1ZmZlcigpIHtcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gbWVkaWEuZHVyYXRpb247XG4gICAgICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWVkaWEuYnVmZmVyZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobWVkaWEuYnVmZmVyZWQuc3RhcnQobWVkaWEuYnVmZmVyZWQubGVuZ3RoIC0gMSAtIGkpIDxcbiAgICAgICAgICAgICAgICAgICAgbWVkaWEuY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyQmFyLnN0eWxlLndpZHRoID0gZm9ybWF0UGVyY2VudChtZWRpYS5idWZmZXJlZC5lbmQobWVkaWEuYnVmZmVyZWQubGVuZ3RoIC0gMSAtIGkpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWVkaWEuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIHVwZGF0ZUJ1ZmZlcik7XG4gICAgZnVuY3Rpb24gZGlzcGxheUNvbnRyb2xzKCkge1xuICAgICAgICBwbGF5LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHBhdXNlLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChtZWRpYS5kdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgIHNldFRpbWUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjaGVjayB0aGF0IHRoZSBtZWRpYSBpcyByZWFkeSBiZWZvcmUgZGlzcGxheWluZyB0aGUgY29udHJvbHNcbiAgICBpZiAobWVkaWEucGF1c2VkKSB7XG4gICAgICAgIGRpc3BsYXlDb250cm9scygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWVkaWEuYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwbGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1lZGlhLnBsYXkoKTtcbiAgICAgICAgcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHBhdXNlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSk7XG4gICAgcGF1c2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWVkaWEucGF1c2UoKTtcbiAgICAgICAgcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBwYXVzZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG4gICAgbWVkaWEuYWRkRXZlbnRMaXN0ZW5lcihcInRpbWV1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGZvcm1hdFBlcmNlbnQobWVkaWEuY3VycmVudFRpbWUgLyBtZWRpYS5kdXJhdGlvbik7XG4gICAgICAgIHNldFRpbWUoKTtcbiAgICB9KTtcbiAgICBtZWRpYS5hZGRFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHBhdXNlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHBsYXllcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==