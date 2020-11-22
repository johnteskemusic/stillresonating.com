/** @param n: normalized */
function formatPercent(n: number): string {
  return n * 100 + "%";
}

/** @param t: time in seconds */
function formatTime(t: number): string {
  const m = Math.floor(t / 60);
  const s = ("00" + (t % 60)).slice(-2);
  return `${m}:${s}`;
}

export default function audio() {
  const audioBlocks = document.querySelectorAll(".sr-audio");

  audioBlocks.forEach((b) => {
    // TODO error if any of these are null
    const audio = b.querySelector("audio")!;
    const bufferBar: HTMLElement = b.querySelector(".buffer-bar"); // TODO with this typed, can it not be null? or is that included?
    const progressBar = b.querySelector(".progress-bar")!;
    const status = b.querySelector(".status")!;
    const play = b.querySelector(".play")!;
    const pause = b.querySelector(".pause")!;

    function setStatus(msg: string) {
      status.innerHTML = msg;
    }

    function setTime() {
      setStatus(
        `${formatTime(Math.floor(audio.currentTime))} / ${formatTime(
          Math.round(audio.duration)
        )}`
      );
    }

    function updateBuffer() {
      const { duration } = audio;
      if (duration > 0) {
        for (let i = 0; i < audio.buffered.length; i++) {
          if (
            audio.buffered.start(audio.buffered.length - 1 - i) <
            audio.currentTime
          ) {
            bufferBar.style.width = formatPercent(
              audio.buffered.end(audio.buffered.length - 1 - i) / duration
            );
            break;
          }
        }
      }
    }

    audio.addEventListener("progress", updateBuffer);

    function displayControls() {
      play.disabled = false;
      pause.disabled = false;
      if (audio.duration > 0) {
        setTime();
      }
    }

    // check that the media is ready before displaying the controls
    if (audio.paused) {
      displayControls();
    } else {
      audio.addEventListener("canplay", function () {
        displayControls();
      });
    }

    play.addEventListener("click", function () {
      audio.play();
      play.style.display = "none";
      pause.style.display = "block";
    });

    pause.addEventListener("click", function () {
      audio.pause();
      play.style.display = "block";
      pause.style.display = "none";
    });

    audio.addEventListener("timeupdate", function () {
      progressBar.style.width = formatPercent(
        audio.currentTime / audio.duration
      );
      setTime();
    });
  });
}
