const play = ` <svg
aria-label="Play"
role="img"
focusable="false"
class="icon icon-medium"
>
<use
  xlink:href="#icon-play-arrow"
></use>
</svg>`;
const pause = ` <svg
aria-label="Pause"
role="img"
focusable="false"
class="icon icon-medium"
>
<use
  xlink:href="#icon-pause"
></use>
</svg>`;
const sound = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
</svg>`;
const mute = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
</svg>`;

const expand=` <svg
aria-label="Expanded view"
role="img"
focusable="false"
class="icon icon-medium"
>
<use
  xlink:href="#icon-expand-diagonal"
></use>
</svg>`;

const collapse=` <svg
aria-label="Collapse view"
role="img"
focusable="false"
class="icon icon-medium"
>
<use
  xlink:href="#icon-collapse-diagonal"
></use>
</svg>`

const playButton = document.querySelector('#playButton');
const playpause = document.getElementById('playPause');
const fullScreenContent = document.getElementById('fullScreenContent');
console.log(fullScreenContent)
const rewind = document.querySelector('#rewind');
const forward = document.querySelector('#forward');
const video = document.getElementById('video');
const timeline = document.querySelector('.timeline');
const soundButton = document.querySelector('.sound-button');
const fullscreenButton = document.querySelector('#fullscreenButton');
const videoContainer = document.querySelector('.videoPlayer1');
var isFullScreen = false;

playButton.addEventListener('click', function () {
  if (video.paused) {
    video.play();
    videoContainer.classList.add('playing');
    playButton.innerHTML = pause;
    playpause.innerHTML="Pause"
  } else {
    video.pause();
    videoContainer.classList.remove('playing');
    playButton.innerHTML = play;
    playpause.innerHTML="Play"
  }
})
rewind.addEventListener('click', function (event) {
  event.preventDefault();
              
  vid_currentTime = video.currentTime;
  video.currentTime = vid_currentTime - 5;
})
forward.addEventListener('click', function (event) {
  event.preventDefault();
              
  vid_currentTime = video.currentTime;
              video.currentTime = vid_currentTime + 5;
})

video.onended = function () {
  playButton.innerHTML = play;
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('currentTime').innerHTML=secondsToHms(video.currentTime);
  document.getElementById('videoTime').innerHTML=secondsToHms(video.duration);
  console.log(video.duration)
}, false);

video.ontimeupdate = function () {
  const percentagePosition = (100*video.currentTime) / video.duration;
  timeline.style.backgroundSize = `${percentagePosition}% 100%`;
  timeline.value = percentagePosition;
  document.getElementById('currentTime').innerHTML=secondsToHms(video.currentTime);
}

function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h + ":";
  var mDisplay = m + ":";
  var sDisplay = s;

  return hDisplay + mDisplay + sDisplay;
}

timeline.addEventListener('change', function () {
  const time = (timeline.value * video.duration) / 100;
  video.currentTime = time;
});

soundButton.addEventListener('click', function () {
  video.muted = !video.muted;
  soundButton.innerHTML = video.muted ? mute : sound;
});

 function fullscreen() {
  if (!isFullScreen) {
    if (video.requestFullscreen) {
   document.getElementById('videoViewer').requestFullscreen();
   fullscreenButton.innerHTML=collapse;
   fullScreenContent.innerHTML="Exit Full Screen";
   isFullScreen=true;
  } else if (video.webkitRequestFullscreen) { /* Safari */
  document.getElementById('videoViewer').webkitRequestFullscreen();
  fullscreenButton.innerHTML=collapse;
  fullScreenContent.innerHTML="Exit Full Screen"
  isFullScreen=true;
  } else if (video.msRequestFullscreen) { /* IE11 */
  document.getElementById('videoViewer').msRequestFullscreen();
  fullscreenButton.innerHTML=collapse;
  fullScreenContent.innerHTML="Exit Full Screen"
  isFullScreen=true;
  }
  } else {
    console.log(document.exitFullscreen)
    if (document.exitFullscreen) {
    document.exitFullscreen();
    fullScreenContent.innerHTML="Full Screen";
    fullscreenButton.innerHTML=expand;
    isFullScreen=false;
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
    fullScreenContent.innerHTML="Full Screen";
    fullscreenButton.innerHTML=expand;
    isFullScreen=false;
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
    fullScreenContent.innerHTML="Full Screen";
    fullscreenButton.innerHTML=expand;
    isFullScreen=false;
  }
  }
}