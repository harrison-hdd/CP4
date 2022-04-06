<template>
  <SavedImagesComponent
    :currentFavorites="currentFavorites"
  ></SavedImagesComponent>
</template>

<script>
import SavedImagesComponent from "@/components/SavedImagesComponent";
export default {
  name: "SavedImagesView",
  components: {
    SavedImagesComponent,
  },
  computed: {
    currentFavorites() {
      return this.$root.$data.currentFavorites;
    },
  },
};
</script>

<style scoped></style>
