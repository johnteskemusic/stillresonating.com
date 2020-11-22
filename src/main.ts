import player from "./player";

window.onload = function () {
  document.querySelectorAll(".sr-audio").forEach((el) => {
    player("audio", el);
  });
  document.querySelectorAll(".sr-video").forEach((el) => {
    player("video", el);
  });
};
