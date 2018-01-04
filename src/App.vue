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
        top:50%;
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
                -webkit-appearance: none;
                width: 17px;
                height: 10px;
                background: url('https://www.google.com.ua/search?biw=1366&bih=638&tbm=isch&sa=1&ei=PYROWv3UIsL4kwWXuIT4Cg&q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0+%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA%D0%B0+%D0%B4%D0%BB%D1%8F+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0+%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%BE%D0%B2&oq=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0+%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA%D0%B0+%D0%B4%D0%BB%D1%8F+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0+%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%BE%D0%B2&gs_l=psy-ab.3...12152.15528.0.15846.12.12.0.0.0.0.191.1687.0j12.12.0....0...1c.1.64.psy-ab..0.0.0....0.SBig_It_DY8#imgrc=4C8vyBdBXSKEhM:');
                margin-right: 2px;
                cursor: pointer;
            }
        }
    }
}
}
</style>
