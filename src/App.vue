<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div id="app">
    <mockList></mockList>
  </div>
</template>

<script>
  import mockList from "./components/Mock.vue"

  export default {
    name: 'app',
    components: {
      mockList
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 10px;
    span {
      position: relative;
      display: block;
      margin: 30px auto;
      width: 300px;
      .fa-icon {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-57%);
      }

      input[type="search"] {
        width: 100%;
        padding: 5px 10px 5px 30px;
        border: 2px solid #56433d;
        -webkit-appearance: none;
        &:focus {
          outline-color: #F9C941;
          &::-webkit-search-cancel-button {
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
