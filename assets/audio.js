"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function audio() {
    var audioBlocks = document.querySelectorAll(".sr-audio");
    audioBlocks.forEach(function (b) {
        var audio = b.querySelector("audio");
        var play = b.querySelector(".play");
        var pause = b.querySelector(".pause");
        play.addEventListener("click", function () {
            audio.play();
            //play.style.display = "none";
            //pause.style.display = "block";
        });
        pause.addEventListener('click', function () {
            audio.pause();
            //pause.style.display = "none";
            //play.style.display = "block";
        });
    });
}
exports.default = audio;
//# sourceMappingURL=audio.js.map