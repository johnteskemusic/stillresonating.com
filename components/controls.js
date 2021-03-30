module.exports = function controls(url) {
  return `<div class="custom-controls">
  <div class="progress">
    <div class="bar buffer-bar"></div>
    <div class="bar progress-bar"></div>
  </div>
  <div class="controls">
    <span class="status">0:00 / -:--</span>
    <button class="play" disabled>play</button>
    <button class="pause" disabled>pause</button>
    <a href="${url}">download</a>
  </div>
</div>`;
};
