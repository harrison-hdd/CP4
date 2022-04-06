<template>
  <div>
    <div id="login-prompt" v-if="!this.$root.$data.isLoggedIn">
      <p>You are not logged in yet. Please log in to browse.</p>
    </div>
    <div v-if="this.$root.$data.isLoggedIn">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">APOD</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto"></ul>
          <label id="search-box-lable" for="search-box"
            >Pick a date between 06/16/1995 and today</label
          >
          <form class="form-inline my-2 my-lg-0">
            <input
              type="date"
              id="search-box"
              class="form-control mr-sm-2"
              name="selector"
              min="1995-06-16"
              placeholder="Search"
              aria-label="Search"
              v-bind:value="this.$root.$data.currentDate"
              v-bind:max="this.$props.maxDate"
            />
            <button
              id="search-button"
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              @click="updateDate"
            >
              Explore!
            </button>
          </form>
        </div>
      </nav>
      <div id="result">
        <h3 id="result-header">
          Astronomy image of {{ this.$root.$data.currentDate }}
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
"use strict";
import axios from "axios";
export default {
  name: "ImageBrowser",
  created() {
    this.setup();
  },
  props: {
    maxDate: String,
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
    setup() {
      let now = new Date();
      let dd = String(now.getDate()).padStart(2, "0");
      let mm = String(now.getMonth() + 1).padStart(2, "0"); //January is 0!
      let yyyy = now.getFullYear();
      let today = `${yyyy}-${mm}-${dd}`;

      // eslint-disable-next-line vue/no-mutating-props
      if (this.$root.$data.currentDate === "") {
        this.$root.$data.currentDate = today;
      }
      this.$props.maxDate = today;

      this.fetchMedia();
    },
    updateDate(event) {
      event.preventDefault();
      let selectedDate = document.getElementById("search-box").value;
      this.$root.$data.currentDate = selectedDate;
      this.fetchMedia();
    },
    fetchMedia() {
      let selectedDate = this.$root.$data.currentDate;
      const URL = `https://api.nasa.gov/planetary/apod?api_key=${this.$data.apiKey}&date=${selectedDate}`;
      fetch(URL)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.$props.mediaType = json.media_type;
          this.$props.mediaTitle = json.title;
          this.$props.mediaURL = json.url;
          this.$props.explanation = json.explanation;
        });
    },
    async save() {
      try {
        this.$root.$data.currentFavorites.push(this.$root.$data.currentDate);
        await axios.put("/api/images/save", {
          username: this.$root.$data.currentUser,
          newImageDate: this.$root.$data.currentDate,
        });
      } catch (e) {
        console.log(e);
      }
    },
    async unsave() {
      try {
        //delete from database
        await axios.put("/api/images/unsave", {
          username: this.$root.$data.currentUser,
          toBeRemoved: this.$root.$data.currentDate,
        });

        //delete from memory
        let index = this.$root.$data.currentFavorites.findIndex(
          //not to be confused with indexOf(). This was one source of bug
          (date) => date === this.$root.$data.currentDate
        );
        console.log(`index = ${index}`);
        if (index !== -1) {
          this.$root.$data.currentFavorites.splice(index, 1);
        }
      } catch (e) {
        console.log(e);
      }
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

.navbar {
  border-bottom: 6px gray double;
  position: fixed !important;
  top: 77px !important;
  width: 100% !important;
}

.navbar-brand {
  font-size: 30px !important;
}

#save-button,
#unsave-button {
  float: right;
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

#login-prompt {
  margin-top: 125px;
}
</style>
