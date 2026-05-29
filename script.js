// VIDEOS

const videos = [
  "A0DOnZBaeew",
  "1_ttidViLvo",
  "Oe3F9LMyWNg",
  "t577JMNsdhM"
];

let currentVideo = 0;

function showVideo() {
  const frame = document.getElementById("videoFrame");

  if (frame) {
    frame.src = `https://www.youtube.com/embed/${videos[currentVideo]}`;
  }
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


// KOREA.NET

const articles = [
  {
    image: "series motivacionales.jpeg",
    title: "4 series coreanas que te motivan a luchar por tus sueños",
    link: "https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=197035"
  },
  {
    image: "los 90.png",
    title: "4 series coreanas que te harán viajar a los años 90",
    link: "https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=225686"
  },
  {
    image: "comida coreana.png",
    title: "Comida coreana: tradición, sabor y cultura",
    link: "https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=211684"
  },
  {
    image: "danyang.png",
    title: "Danyang",
    link: "https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=186084"
  },
  {
    image: "uleungdo.png",
    title: "Ulleungdo",
    link: "https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=187808"
  },
  {
    image: "dramas histori.png",
    title: "Dramas históricos coreanos",
    link: "https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=193436"
  }
];

let currentArticle = 0;

function showArticle() {
  const image = document.getElementById("koreaFrame");
  const title = document.getElementById("koreaTitle");
  const link = document.getElementById("koreaLink");

  if (image && title && link) {
    image.src = articles[currentArticle].image;
    title.textContent = articles[currentArticle].title;
    link.href = articles[currentArticle].link;
  }
}

function nextArticle() {
  currentArticle++;

  if (currentArticle >= articles.length) {
    currentArticle = 0;
  }

  showArticle();
}

function previousArticle() {
  currentArticle--;

  if (currentArticle < 0) {
    currentArticle = articles.length - 1;
  }

  showArticle();
}
