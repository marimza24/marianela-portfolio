// VIDEOS

const videos = [
  "https://www.youtube.com/embed/A0DOnZBaeew",
  "https://www.youtube.com/embed/TU_SEGUNDO_VIDEO",
  "https://www.youtube.com/embed/TU_TERCER_VIDEO"
];

let currentVideo = 0;

function nextVideo() {
  currentVideo = (currentVideo + 1) % videos.length;
  document.getElementById("videoFrame").src =
    videos[currentVideo];
}

function previousVideo() {
  currentVideo =
    (currentVideo - 1 + videos.length) %
    videos.length;

  document.getElementById("videoFrame").src =
    videos[currentVideo];
}


// KOREA.NET

const articles = [

{
image: "series motivacionales.jpeg",
title:
"4 series coreanas que te motivan a luchar por tus sueños",
link:
"https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=225686"
},

{
image: "comida coreana.png",
title:
"Gastronomía coreana",
link:
"https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=211684"
},

{
image: "los 90.png",
title:
"Corea y los años 90",
link:
"https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=193436"
},

{
image: "danyang.png",
title:
"Danyang",
link:
"https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=186084"
},

{
image: "uleungdo.png",
title:
"Ulleungdo",
link:
"https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=187808"
},

{
image: "dramas histori.png",
title:
"Dramas históricos",
link:
"https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=197035"
}

];

let currentArticle = 0;

function updateArticle() {

document.getElementById("koreaFrame").src =
  articles[currentArticle].image;

document.getElementById("koreaTitle").textContent =
  articles[currentArticle].title;

document.getElementById("koreaLink").href =
  articles[currentArticle].link;
}

function nextArticle() {
currentArticle =
(currentArticle + 1) %
articles.length;

updateArticle();
}

function previousArticle() {
currentArticle =
(currentArticle - 1 + articles.length) %
articles.length;

updateArticle();
}
