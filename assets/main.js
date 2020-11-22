/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/audio.ts":
/*!**********************!*\
  !*** ./src/audio.ts ***!
  \**********************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function audio() {
    var audioBlocks = document.querySelectorAll(".sr-audio");
    audioBlocks.forEach(function (b) {
        // TODO error if any of these are null
        var audio = b.querySelector("audio");
        var bufferBar = b.querySelector(".buffer-bar"); // TODO with this typed, can it not be null? or is that included?
        var progressBar = b.querySelector(".progress-bar");
        var status = b.querySelector(".status");
        var play = b.querySelector(".play");
        var pause = b.querySelector(".pause");
        function updateBuffer() {
            var duration = audio.duration;
            if (duration > 0) {
                for (var i = 0; i < audio.buffered.length; i++) {
                    if (audio.buffered.start(audio.buffered.length - 1 - i) <
                        audio.currentTime) {
                        bufferBar.style.width =
                            (audio.buffered.end(audio.buffered.length - 1 - i) / duration) *
                                100 +
                                "%";
                        break;
                    }
                }
            }
        }
        audio.addEventListener("progress", updateBuffer);
        function displayControls() {
            status.innerHTML = "ready";
            updateBuffer();
        }
        // check that the media is ready before displaying the controls
        if (audio.paused) {
            displayControls();
        }
        else {
            // not ready yet - wait for canplay event
            audio.addEventListener("canplay", function () {
                displayControls();
            });
        }
        play.addEventListener("click", function () {
            audio.play();
            status.innerHTML = "playing";
            play.disabled = true;
            pause.disabled = false;
        });
        pause.addEventListener("click", function () {
            audio.pause();
            status.innerHTML = "paused";
            play.disabled = false;
            pause.disabled = true;
        });
        audio.addEventListener("timeupdate", function () {
            progressBar.style.width =
                (audio.currentTime / audio.duration) * 100 + "%";
            status.innerHTML =
                Math.floor(audio.currentTime) + "/" + Math.round(audio.duration);
        });
    });
}
exports.default = audio;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var audio_1 = __webpack_require__(/*! ./audio */ "./src/audio.ts");
window.onload = function () {
    //
    audio_1.default();
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGlsbHJlc29uYXRpbmcuY29tLy4vc3JjL2F1ZGlvLnRzIiwid2VicGFjazovL3N0aWxscmVzb25hdGluZy5jb20vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9zdGlsbHJlc29uYXRpbmcuY29tL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0aWxscmVzb25hdGluZy5jb20vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMkJBQTJCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLGVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzlERjtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGF1ZGlvKCkge1xuICAgIHZhciBhdWRpb0Jsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3ItYXVkaW9cIik7XG4gICAgYXVkaW9CbG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICAvLyBUT0RPIGVycm9yIGlmIGFueSBvZiB0aGVzZSBhcmUgbnVsbFxuICAgICAgICB2YXIgYXVkaW8gPSBiLnF1ZXJ5U2VsZWN0b3IoXCJhdWRpb1wiKTtcbiAgICAgICAgdmFyIGJ1ZmZlckJhciA9IGIucXVlcnlTZWxlY3RvcihcIi5idWZmZXItYmFyXCIpOyAvLyBUT0RPIHdpdGggdGhpcyB0eXBlZCwgY2FuIGl0IG5vdCBiZSBudWxsPyBvciBpcyB0aGF0IGluY2x1ZGVkP1xuICAgICAgICB2YXIgcHJvZ3Jlc3NCYXIgPSBiLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3MtYmFyXCIpO1xuICAgICAgICB2YXIgc3RhdHVzID0gYi5xdWVyeVNlbGVjdG9yKFwiLnN0YXR1c1wiKTtcbiAgICAgICAgdmFyIHBsYXkgPSBiLnF1ZXJ5U2VsZWN0b3IoXCIucGxheVwiKTtcbiAgICAgICAgdmFyIHBhdXNlID0gYi5xdWVyeVNlbGVjdG9yKFwiLnBhdXNlXCIpO1xuICAgICAgICBmdW5jdGlvbiB1cGRhdGVCdWZmZXIoKSB7XG4gICAgICAgICAgICB2YXIgZHVyYXRpb24gPSBhdWRpby5kdXJhdGlvbjtcbiAgICAgICAgICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF1ZGlvLmJ1ZmZlcmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdWRpby5idWZmZXJlZC5zdGFydChhdWRpby5idWZmZXJlZC5sZW5ndGggLSAxIC0gaSkgPFxuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW8uY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlckJhci5zdHlsZS53aWR0aCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGF1ZGlvLmJ1ZmZlcmVkLmVuZChhdWRpby5idWZmZXJlZC5sZW5ndGggLSAxIC0gaSkgLyBkdXJhdGlvbikgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCB1cGRhdGVCdWZmZXIpO1xuICAgICAgICBmdW5jdGlvbiBkaXNwbGF5Q29udHJvbHMoKSB7XG4gICAgICAgICAgICBzdGF0dXMuaW5uZXJIVE1MID0gXCJyZWFkeVwiO1xuICAgICAgICAgICAgdXBkYXRlQnVmZmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgbWVkaWEgaXMgcmVhZHkgYmVmb3JlIGRpc3BsYXlpbmcgdGhlIGNvbnRyb2xzXG4gICAgICAgIGlmIChhdWRpby5wYXVzZWQpIHtcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9scygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gbm90IHJlYWR5IHlldCAtIHdhaXQgZm9yIGNhbnBsYXkgZXZlbnRcbiAgICAgICAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHBsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgICAgIHN0YXR1cy5pbm5lckhUTUwgPSBcInBsYXlpbmdcIjtcbiAgICAgICAgICAgIHBsYXkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcGF1c2UuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdXNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhdWRpby5wYXVzZSgpO1xuICAgICAgICAgICAgc3RhdHVzLmlubmVySFRNTCA9IFwicGF1c2VkXCI7XG4gICAgICAgICAgICBwbGF5LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBwYXVzZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKFwidGltZXVwZGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9XG4gICAgICAgICAgICAgICAgKGF1ZGlvLmN1cnJlbnRUaW1lIC8gYXVkaW8uZHVyYXRpb24pICogMTAwICsgXCIlXCI7XG4gICAgICAgICAgICBzdGF0dXMuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGF1ZGlvLmN1cnJlbnRUaW1lKSArIFwiL1wiICsgTWF0aC5yb3VuZChhdWRpby5kdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gYXVkaW87XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhdWRpb18xID0gcmVxdWlyZShcIi4vYXVkaW9cIik7XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIC8vXG4gICAgYXVkaW9fMS5kZWZhdWx0KCk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4udHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9