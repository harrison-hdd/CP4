"use strict";
let apiKey = "5NqF6jh9w3uVhB9rwEeUJfSIwBgcavPvzYEO7lH3";
managePage();

function managePage() {
  setup();
  const today = document.getElementById("search-box").value;
  fetchAPI(today);
  document
    .getElementById("search-button")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const selectedDate = document.getElementById("search-box").value;
      fetchAPI(selectedDate);
    });
}

function setup() {
  let now = new Date();
  let dd = String(now.getDate()).padStart(2, "0");
  let mm = String(now.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = now.getFullYear();
  let today = `${yyyy}-${mm}-${dd}`;

  let maxDateAttr = document.createAttribute("max");
  let valueAttr = document.createAttribute("value");
  maxDateAttr.value = today;
  valueAttr.value = today;
  document.getElementById("search-box").setAttributeNode(maxDateAttr);
  document.getElementById("search-box").setAttributeNode(valueAttr);
}

function fetchAPI(selectedDate) {
  document.getElementById("result").innerHTML = "";
  let resultHeader = document.createElement("h3");
  resultHeader.id = "result-header";
  document.getElementById("result").appendChild(resultHeader);

  let mediaTitle = document.createElement("h4");
  mediaTitle.id = "media-title";
  document.getElementById("result").appendChild(mediaTitle);

  let resultContainer = document.createElement("div");
  resultContainer.id = "result-container";
  document.getElementById("result").appendChild(resultContainer);

  const URL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${selectedDate}`;

  fetch(URL)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      resultHeader.innerText = `Astronomy ${json.media_type} for ${selectedDate}`;

      let mediaContainer = document.createElement("div");
      mediaContainer.id = "media-container";
      mediaTitle.innerText = json.title;

      let mediaDiv = document.createElement("div");
      mediaContainer.appendChild(mediaDiv);

      if (json.media_type === "image") {
        mediaDiv.id = "image";
        let image = document.createElement("img");
        let imgLink = document.createAttribute("src");
        imgLink.value = json.url;
        image.setAttributeNode(imgLink);
        mediaDiv.appendChild(image);
      } else if (json.media_type === "video") {
        mediaDiv.id = "video";
        let video = document.createElement("iframe");
        let videoLink = document.createAttribute("src");

        videoLink.value = json.url;
        video.setAttributeNode(videoLink);
        mediaDiv.appendChild(video);
      }
      document.getElementById("result-container").appendChild(mediaContainer);

      let explanationContainer = document.createElement("div");
      explanationContainer.id = "explanation-container";
      let explanation = document.createElement("p");
      explanation.textContent = json.explanation;
      explanationContainer.appendChild(explanation);
      document
        .getElementById("result-container")
        .appendChild(explanationContainer);
    });
}
