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
        // audio.addEventListener("loadstart", updateBuffer);
        // audio.addEventListener("durationchange", updateBuffer);
        // audio.addEventListener("loadedmetadata", updateBuffer);
        // audio.addEventListener("loadeddata", updateBuffer);
        // audio.addEventListener("progress", updateBuffer);
        function displayControls() {
            status.innerHTML = "ready";
            //updateBuffer();
        }
        // check that the media is ready before displaying the controls
        if (audio.paused) {
            displayControls();
        }
        else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGlsbHJlc29uYXRpbmcuY29tLy4vc3JjL2F1ZGlvLnRzIiwid2VicGFjazovL3N0aWxscmVzb25hdGluZy5jb20vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9zdGlsbHJlc29uYXRpbmcuY29tL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0aWxscmVzb25hdGluZy5jb20vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMkJBQTJCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLGVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ2pFRjtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGF1ZGlvKCkge1xuICAgIHZhciBhdWRpb0Jsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3ItYXVkaW9cIik7XG4gICAgYXVkaW9CbG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICAvLyBUT0RPIGVycm9yIGlmIGFueSBvZiB0aGVzZSBhcmUgbnVsbFxuICAgICAgICB2YXIgYXVkaW8gPSBiLnF1ZXJ5U2VsZWN0b3IoXCJhdWRpb1wiKTtcbiAgICAgICAgdmFyIGJ1ZmZlckJhciA9IGIucXVlcnlTZWxlY3RvcihcIi5idWZmZXItYmFyXCIpOyAvLyBUT0RPIHdpdGggdGhpcyB0eXBlZCwgY2FuIGl0IG5vdCBiZSBudWxsPyBvciBpcyB0aGF0IGluY2x1ZGVkP1xuICAgICAgICB2YXIgcHJvZ3Jlc3NCYXIgPSBiLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3MtYmFyXCIpO1xuICAgICAgICB2YXIgc3RhdHVzID0gYi5xdWVyeVNlbGVjdG9yKFwiLnN0YXR1c1wiKTtcbiAgICAgICAgdmFyIHBsYXkgPSBiLnF1ZXJ5U2VsZWN0b3IoXCIucGxheVwiKTtcbiAgICAgICAgdmFyIHBhdXNlID0gYi5xdWVyeVNlbGVjdG9yKFwiLnBhdXNlXCIpO1xuICAgICAgICBmdW5jdGlvbiB1cGRhdGVCdWZmZXIoKSB7XG4gICAgICAgICAgICB2YXIgZHVyYXRpb24gPSBhdWRpby5kdXJhdGlvbjtcbiAgICAgICAgICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF1ZGlvLmJ1ZmZlcmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdWRpby5idWZmZXJlZC5zdGFydChhdWRpby5idWZmZXJlZC5sZW5ndGggLSAxIC0gaSkgPFxuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW8uY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlckJhci5zdHlsZS53aWR0aCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGF1ZGlvLmJ1ZmZlcmVkLmVuZChhdWRpby5idWZmZXJlZC5sZW5ndGggLSAxIC0gaSkgLyBkdXJhdGlvbikgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2Fkc3RhcnRcIiwgdXBkYXRlQnVmZmVyKTtcbiAgICAgICAgLy8gYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImR1cmF0aW9uY2hhbmdlXCIsIHVwZGF0ZUJ1ZmZlcik7XG4gICAgICAgIC8vIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZWRtZXRhZGF0YVwiLCB1cGRhdGVCdWZmZXIpO1xuICAgICAgICAvLyBhdWRpby5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVkZGF0YVwiLCB1cGRhdGVCdWZmZXIpO1xuICAgICAgICAvLyBhdWRpby5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgdXBkYXRlQnVmZmVyKTtcbiAgICAgICAgZnVuY3Rpb24gZGlzcGxheUNvbnRyb2xzKCkge1xuICAgICAgICAgICAgc3RhdHVzLmlubmVySFRNTCA9IFwicmVhZHlcIjtcbiAgICAgICAgICAgIC8vdXBkYXRlQnVmZmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgbWVkaWEgaXMgcmVhZHkgYmVmb3JlIGRpc3BsYXlpbmcgdGhlIGNvbnRyb2xzXG4gICAgICAgIGlmIChhdWRpby5wYXVzZWQpIHtcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9scygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9scygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcGxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICAgICAgc3RhdHVzLmlubmVySFRNTCA9IFwicGxheWluZ1wiO1xuICAgICAgICAgICAgcGxheS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBwYXVzZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcGF1c2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgICAgICAgICBzdGF0dXMuaW5uZXJIVE1MID0gXCJwYXVzZWRcIjtcbiAgICAgICAgICAgIHBsYXkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHBhdXNlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1ldXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID1cbiAgICAgICAgICAgICAgICAoYXVkaW8uY3VycmVudFRpbWUgLyBhdWRpby5kdXJhdGlvbikgKiAxMDAgKyBcIiVcIjtcbiAgICAgICAgICAgIHN0YXR1cy5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoYXVkaW8uY3VycmVudFRpbWUpICsgXCIvXCIgKyBNYXRoLnJvdW5kKGF1ZGlvLmR1cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBhdWRpbztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGF1ZGlvXzEgPSByZXF1aXJlKFwiLi9hdWRpb1wiKTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9cbiAgICBhdWRpb18xLmRlZmF1bHQoKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=