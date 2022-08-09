<template>
  <div id="app">
    <inbox-screen />
  </div>
</template>

<script>
import InboxScreen from "./components/InboxScreen.vue";

export default {
  name: "App",
  components: { InboxScreen },
};
</script>

<style>
@import "./index.css";
</style>
