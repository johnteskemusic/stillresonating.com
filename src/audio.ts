export default function audio() {
  const audioBlocks = document.querySelectorAll(".sr-audio");

  audioBlocks.forEach((b) => {
    // TODO error if any of these are null
    const audio = b.querySelector("audio")!;
    const bufferBar = b.querySelector(".buffer-bar")!;
    const progressBar = b.querySelector(".progress-bar")!;
    const status = b.querySelector(".status")!;
    const play = b.querySelector(".play")!;
    const pause = b.querySelector(".pause")!;

    function updateBuffer() {
      var duration = audio.duration;
      if (duration > 0) {
        for (var i = 0; i < audio.buffered.length; i++) {
          if (
            audio.buffered.start(audio.buffered.length - 1 - i) <
            audio.currentTime
          ) {
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
    } else {
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
