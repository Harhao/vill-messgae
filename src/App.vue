<template>
  <div id="app">
    <demo/>
  </div>
</template>

<script>
import demo from "./example/demo";

export default {
  name: "App",
  components: {
    demo
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}
</style>
