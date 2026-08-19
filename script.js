// ========================================
// VIDEOS
// ========================================

const videos = [
  "A0DOnZBaeew",
  "1_ttidViLvo",
  "Oe3F9LMyWNg",
  "t577JMNsdhM"
];

let currentVideo = 0;

function updateVideo() {
  const videoFrame = document.getElementById("videoFrame");

  if (!videoFrame) {
    return;
  }

  videoFrame.src =
    "https://www.youtube.com/embed/" + videos[currentVideo];
}

function nextVideo() {
  currentVideo++;

  if (currentVideo >= videos.length) {
    currentVideo = 0;
  }

  updateVideo();
}

function previousVideo() {
  currentVideo--;

  if (currentVideo < 0) {
    currentVideo = videos.length - 1;
  }

  updateVideo();
}


// ========================================
// KOREA.NET
// ========================================

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
  const koreaFrame = document.getElementById("koreaFrame");
  const koreaTitle = document.getElementById("koreaTitle");
  const koreaLink = document.getElementById("koreaLink");

  if (!koreaFrame || !koreaTitle || !koreaLink) {
    return;
  }

  koreaFrame.src = articles[currentArticle].image;
  koreaTitle.textContent = articles[currentArticle].title;
  koreaLink.href = articles[currentArticle].link;
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


// ========================================
// GOOGLE ANALYTICS
// ========================================

function trackEvent(eventName, parameters = {}) {
  if (typeof gtag !== "function") {
    return;
  }

  gtag("event", eventName, parameters);
}


// ========================================
// INITIALIZATION + CLICK TRACKING
// ========================================

document.addEventListener("DOMContentLoaded", function () {

  // Initialize first Korea.net article and its correct link
  updateArticle();

  const trackedElements =
    document.querySelectorAll("[data-event]");

  trackedElements.forEach(function (element) {

    element.addEventListener("click", function () {

      const eventName = element.dataset.event;

      const parameters = {
        link_text: element.innerText.trim(),
        page_language: document.documentElement.lang
      };

      if (eventName === "click_koreanet") {
        parameters.article_title =
          articles[currentArticle].title;

        parameters.article_url =
          articles[currentArticle].link;
      }

      if (element.tagName === "A" && element.href) {
        parameters.link_url = element.href;
      }

      trackEvent(eventName, parameters);
    });

  });

});
