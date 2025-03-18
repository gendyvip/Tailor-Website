

var numInp = document.getElementById("numInp");

function up() {
  numInp.stepUp(10);
  console.log(typeof numInp.valueAsNumber);

}

function down() {
  numInp.stepDown(10)
}

// ================================

var rangeInp = document.getElementById("rangeInp");
var span = document.getElementById("rangeVal");

rangeInp.addEventListener("input", function () {
  // console.log(rangeInp.value);
  span.textContent = rangeInp.value

})

// ===================================


var audio = document.querySelector("audio");

var volumeInp = document.getElementById("volumeInp");
var timeInp = document.getElementById("timeInp");

var speedSelect = document.getElementById("speed")

function playAud() {
  audio.play()
}

function pauseAud() {
  audio.pause();
}
function stopAud() {
  audio.load();
  audio.pause()
}
function muteAud() {
  // toggle
  audio.muted = !audio.muted;
}

function test() {
  console.log(audio.volume);

}

volumeInp.addEventListener("input", function () {
  audio.volume = volumeInp.value;
})

timeInp.addEventListener("input", function () {
  audio.currentTime = timeInp.value;
})

audio.addEventListener("timeupdate", function () {
  timeInp.value = audio.currentTime
})


window.onload = function () {
  timeInp.max = audio.duration
}



speedSelect.addEventListener("change", function () {
  audio.playbackRate = speedSelect.value;
})