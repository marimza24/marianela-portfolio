// VIDEOS

const videos = [
  "A0DOnZBaeew",
  "1_ttidViLvo",
  "Oe3F9LMyWNg",
  "t577JMNsdhM"
];

let currentVideo = 0;

function nextVideo() {
  currentVideo++;

  if (currentVideo >= videos.length) {
    currentVideo = 0;
  }

  document.getElementById("videoFrame").src =
    "https://www.youtube.com/embed/" + videos[currentVideo];
}

function previousVideo() {
  currentVideo--;

  if (currentVideo < 0) {
    currentVideo = videos.length - 1;
  }

  document.getElementById("videoFrame").src =
    "https://www.youtube.com/embed/" + videos[currentVideo];
}


// KOREA.NET

const articles = [
  {
    image: "series motivacionales.jpeg",
    title: "4 series coreanas que te motivan a luchar por tus sueños",
    link: "https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=197035"
  },
  {
    image: "los 90.png",
    title: "Volviendo a los años 90",
    link: "https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=225686"
  },
  {
    image: "comida coreana.png",
    title: "Comida saludable, comida coreana",
    link: "https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=193436"
  },
  {
    image: "danyang.png",
    title: "En el corazón de Corea: Danyang",
    link: "https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=187808"
  },
  {
    image: "uleungdo.png",
    title: "Ulleungdo: una misteriosa isla en el Mar del Este",
    link: "https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=211684"
  },
  {
    image: "dramas histori.png",
    title: "Una mirada diferente para disfrutar dramas históricos",
    link: "https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=186084"
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
  currentArticle++;

  if (currentArticle >= articles.length) {
    currentArticle = 0;
  }

  updateArticle();
}

function previousArticle() {
  currentArticle--;

  if (currentArticle < 0) {
    currentArticle = articles.length - 1;
  }

  updateArticle();
}

updateArticle();
