const videos = [
  "A0DOnZBaeew",
  "1_ttidViLvo",
  "Oe3F9LMyWNg",
  "t577JMNsdhM"
];

let currentVideo = 0;

function showVideo() {
  const frame = document.getElementById("videoFrame");
  frame.src = `https://www.youtube.com/embed/${videos[currentVideo]}`;
}

function nextVideo() {
  currentVideo++;

  if (currentVideo >= videos.length) {
    currentVideo = 0;
  }

  showVideo();
}

function previousVideo() {
  currentVideo--;

  if (currentVideo < 0) {
    currentVideo = videos.length - 1;
  }

  showVideo();
}
