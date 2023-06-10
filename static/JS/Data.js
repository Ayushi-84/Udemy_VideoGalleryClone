document.addEventListener('loadedmetadata', function () {
  const video = document.getElementById('video');
document.getElementById('videoTime').innerHTML=secondsToHms(video.duration);
}, true);

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
const sound = `<svg
aria-label="Mute"
role="img"
focusable="false"
class="icon icon-medium"
>
<use
  xlink:href="#icon-volume-on"
></use>
</svg>`;
const mute = `<svg
aria-label="Mute"
role="img"
focusable="false"
class="icon icon-medium"
>
<use
  xlink:href="#icon-volume-off"
></use>
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

const expandedHor=` <svg
aria-label="Expanded view"
role="img"
focusable="false"
class="icon icon-medium"
>
<use
  xlink:href="#icon-expand-horizontal"
></use>
</svg>`

const collapseHor=` <svg
aria-label="Expanded view"
role="img"
focusable="false"
class="icon icon-medium"
>
<use
  xlink:href="#icon-collapse-horizontal"
></use>
</svg>`

const playButton = document.querySelector('#playButton');
const playpause = document.getElementById('playPause');
const fullScreenContent = document.getElementById('fullScreenContent');
const rewind = document.querySelector('#rewind');
const forward = document.querySelector('#forward');
const video = document.getElementById('video');
const timeline = document.querySelector('.timeline');
const soundButton = document.querySelector('#soundButton');
const fullscreenButton = document.querySelector('#fullscreenButton');
const videoContainer = document.querySelector('.videoPlayer1');
const popper = document.getElementById("popperContentD");
const setting = document.getElementById("setting");
var isFullScreen = false;

playButton.addEventListener('click', function () {
  if(popper.classList.contains("popper"))
  {
    popper.classList.remove("popper");
  }
  if(setting.classList.contains("popper"))
  {
    setting.classList.remove("popper");
  }
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
  if(popper.classList.contains("popper"))
  {
    popper.classList.remove("popper");
  }
  if(setting.classList.contains("popper"))
  {
    setting.classList.remove("popper");
  }
  event.preventDefault();
              
  vid_currentTime = video.currentTime;
  video.currentTime = vid_currentTime - 5;
})
forward.addEventListener('click', function (event) {
  if(popper.classList.contains("popper"))
  {
    popper.classList.remove("popper");
  }
  if(setting.classList.contains("popper"))
  {
    setting.classList.remove("popper");
  }
  event.preventDefault();
              
  vid_currentTime = video.currentTime;
              video.currentTime = vid_currentTime + 5;
})

video.onended = function () {
  playButton.innerHTML = play;
}

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
  if(setting.classList.contains("popper"))
  {
    setting.classList.remove("popper");
  }
   if(popper.classList.contains("popper"))
  {
    popper.classList.remove("popper");
  }
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

function playbackRate(){
  if(setting.classList.contains("popper"))
  {
    setting.classList.remove("popper");
  }
  if(popper.classList.contains("popper"))
  {
    popper.classList.remove("popper");
  }
  else
 { popper.classList.add("popper");
}
}
function settings(){
  if(popper.classList.contains("popper"))
  {
    popper.classList.remove("popper");
  }
  if(setting.classList.contains("popper"))
  {
    setting.classList.remove("popper");
  }
  else
 { setting.classList.add("popper");
}
}

function playBackRateChanger(item){
  video.playbackRate = item;
  var i=0.5;
  popper.classList.remove("popper");
  document.getElementById('playBackRateContent').innerHTML=item+'x';
  const data=document.getElementById(`${item}`);
  const checked=data.getAttribute("aria-checked");
   if (checked === "true") {
    data.setAttribute("aria-checked", "false");
  } else {
    data.setAttribute("aria-checked", "true");
  }
  while(i<=2){
    if(i!=item)
    {
      const data=document.getElementById(`${i}`);
        data.setAttribute("aria-checked", "false");  
    }
    i=i+0.25;
  }
}

function autoplay(){
 
  video.autoplay;
  if(setting.classList.contains("popper"))
  {
    setting.classList.remove("popper");
  }
}

function expandedView(){
  var exp=document.getElementById('ExpandedView')
  var item=document.getElementById('columnContainer')
  var expo=document.getElementById('expandedHorizontal')
  var data=document.getElementById('index0');
  var content=document.getElementById('sidebarContent').outerHTML;
  var savContent=document.getElementById('tabs--1-content-0')
  if(item.classList.contains("no-sidebar"))
  {
    item.classList.remove("no-sidebar");
    savContent.innerHTML='';
    document.getElementById('sidebarColumn').style.width="25%";
    exp.innerHTML='Expanded View';
    expo.innerHTML=expandedHor;
    data.style.display='none';
    savContent.innerHTML='';
    tabNav(1);
  }
  else
  {
    data.style.display='block';
    savContent.innerHTML=content;
    tabNav(0);
    item.classList.add('no-sidebar');
    document.getElementById('sidebarColumn').style.width="0%";
    exp.innerHTML='Collapse View';
    expo.innerHTML=collapseHor;
  }
  
}

function playVideo(item){
if(item==1)
{
  video.src='./static/videos/video1.mp4'
}
if(item==2)
{
  video.src='./static/videos/video2.mp4';
}
if(item==3)
{
  video.src='./static/videos/video3.mp4'
}
if(item==4)
{
  video.src='./static/videos/video4.mp4'
}
if(item==5)
{
  video.src='./static/videos/video5.mp4'
}
if(item==6)
{
  video.src='./static/videos/video6.mp4'
}
}

function tabNav(item){
  var i;
  var name=document.getElementById('columnContainer')
  if(name.classList.contains("no-sidebar"))
  { 
    for(i=0;i<5;i++)
    {
    if(i!=item)
    {
      var val=`tab${i}`;
      var valId=`index${i}`;
      var con=`tabs--1-content-${i}`;
      var conData=document.getElementById(con);
    var d=document.getElementById(val);
    var dId=document.getElementById(valId);
    d.classList.remove('tabModuleActive');
    conData.classList.remove('tabModuleActive');
    dId.classList.remove('tabModuleActive');
    d.setAttribute("aria-selected", "false");  
    }
    }
  }
  else
  {
    for(i=1;i<5;i++)
    {
    if(i!=item)
    {
      var val=`tab${i}`;
      var valId=`index${i}`;
      var con=`tabs--1-content-${i}`;
      var conData=document.getElementById(con);
    var d=document.getElementById(val);
    var dId=document.getElementById(valId);
    d.classList.remove('tabModuleActive');
    conData.classList.remove('tabModuleActive');
    dId.classList.remove('tabModuleActive');
    d.setAttribute("aria-selected", "false");  
    }
    }
  }

  var value=`tab${item}`;
  var valueId=`index${item}`;
  var content=`tabs--1-content-${item}`
  var contentData=document.getElementById(content);
var data=document.getElementById(value);
var dataId=document.getElementById(valueId);
data.classList.add('tabModuleActive');
contentData.classList.add('tabModuleActive');
dataId.classList.add('tabModuleActive');
data.setAttribute("aria-selected", "true"); 

}