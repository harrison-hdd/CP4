<template>
  <div>
    <div id="login-prompt" v-if="!this.$root.$data.isLoggedIn">
      <p>You are not logged in yet. Please log in to browse.</p>
    </div>
    <div v-if="this.$root.$data.isLoggedIn">
      <div id="saved-images-page" v-show="!dateWasSelected">
        <p>These are the dates of your favorite images</p>
        <ol id="saved-items">
          <li v-for="(date, i) in currentFavorites" :key="i" id="saved-item">
            <button @click.prevent="fetchMedia(date)">
              {{ date }}
            </button>
            <button v-on:click.prevent="unsave(date, i)">Unsave</button>
          </li>
        </ol>
      </div>
      <div id="result" v-show="dateWasSelected">
        <h3 id="result-header">
          Astronomy image of {{ this.$root.$data.currentDate }}
          <button id="back-button" @click.prevent="goBack">&lt;Back</button>
          <button id="save-button" v-show="!isSaved" @click.prevent="save">
            Save
          </button>
          <button id="unsave-button" v-show="isSaved" @click.prevent="unsave">
            Unsave
          </button>
        </h3>
        <h4 id="media-title">{{ mediaTitle }}</h4>
        <div id="result-container">
          <div id="media-container">
            <div id="image" v-show="mediaType === 'image'">
              <img v-bind:src="mediaURL" />
            </div>
            <div id="video" v-show="mediaType === 'video'">
              <iframe v-bind:src="mediaURL"></iframe>
            </div>
          </div>
          <div id="explanation-container">
            <p>
              {{ explanation }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SavedImagesComponent",
  created() {
    () => {
      this.$props.dateWasSelected = false;
    };
  },
  props: {
    currentFavorites: Array,
    dateWasSelected: Boolean,
    mediaType: String,
    mediaTitle: String,
    mediaURL: String,
    explanation: String,
  },
  data: function () {
    return {
      apiKey: "5NqF6jh9w3uVhB9rwEeUJfSIwBgcavPvzYEO7lH3",
    };
  },
  methods: {
    async unsave(date, index) {
      try {
        //delete from database
        await axios.put("/api/images/unsave", {
          username: this.$root.$data.currentUser,
          toBeRemoved: date,
        });

        this.$props.currentFavorites.splice(index, 1);
      } catch (e) {
        console.log(e);
      }
    },
    fetchMedia(selectedDate) {
      const URL = `https://api.nasa.gov/planetary/apod?api_key=${this.$data.apiKey}&date=${selectedDate}`;
      fetch(URL)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.$props.dateWasSelected = true;
          this.$props.mediaType = json.media_type;
          this.$props.mediaTitle = json.title;
          this.$props.mediaURL = json.url;
          this.$props.explanation = json.explanation;
        });
    },
    goBack() {
      this.$props.dateWasSelected = false;
    },
  },
  computed: {
    isSaved() {
      return (
        this.$root.$data.currentFavorites.find(
          (date) => date === this.$root.$data.currentDate
        ) !== undefined
      );
    },
  },
};
</script>

<style scoped>
* {
  font-family: monospace !important;
  color: #4f4f4f;
}
#login-prompt,
#saved-images-page {
  margin-top: 125px;
}
#saved-items {
  /*get rid of bullet points*/
  list-style-type: none;
}

#result {
  margin: 90px 0 200px 0;
}

input,
label {
  margin: 0.4rem 0;
}
#search-box-lable {
  display: inline-block;
  font-size: 1rem;
}

#media-container,
#explanation-container {
  justify-content: center;
  margin: 50px 30px;
}
#image,
#video {
  display: flex;
  justify-content: center;
}
#image > img {
  width: 100%;
}

#explanation-container > p {
  font-size: 2em;
}
#save-button,
#unsave-button {
  float: right;
}

#result-header {
  font-weight: bold;
  font-size: 2.75em;
  margin: 160px 30px 20px 30px;
}
#media-title {
  color: gray;
  font-weight: bold;
  font-size: 2.75em;
  margin: 0 50px;
}

#video {
  position: relative;
  padding-bottom: 56.25%; /* 16:9, which is 56.25% of width */
  height: 0;
}

#video > iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
@media only screen and (max-width: 999px) {
  #search-button {
    width: 100%;
  }
  #media-container {
    margin: 10px;
  }
}

@media only screen and (min-width: 1200px) {
  /*#result-container{*/
  /*    display: flex;*/
  /*}*/
  #media-container {
    float: left;
    width: 65%;
    margin: 30px;
  }
  #search-box-lable {
    margin: 0 15px;
  }
  #explanation-container {
    margin: 0 30px 100px 30px;
  }
}
</style>
