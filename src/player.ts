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

export default function player(tag: "audio" | "video", el) {
  // TODO error if any of these are null
  const media = el.querySelector(tag)!;
  const bufferBar: HTMLElement = el.querySelector(".buffer-bar"); // TODO with this typed, can it not be null? or is that included?
  const progressBar = el.querySelector(".progress-bar")!;
  const status = el.querySelector(".status")!;
  const play = el.querySelector(".play")!;
  const pause = el.querySelector(".pause")!;

  function setStatus(msg: string) {
    status.innerHTML = msg;
  }

  function setTime() {
    setStatus(
      `${formatTime(Math.floor(media.currentTime))} / ${formatTime(
        Math.round(media.duration)
      )}`
    );
  }

  function updateBuffer() {
    const { duration } = media;
    if (duration > 0) {
      for (let i = 0; i < media.buffered.length; i++) {
        if (
          media.buffered.start(media.buffered.length - 1 - i) <
          media.currentTime
        ) {
          bufferBar.style.width = formatPercent(
            media.buffered.end(media.buffered.length - 1 - i) / duration
          );
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
  } else {
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
