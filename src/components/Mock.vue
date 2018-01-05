<template>
    <div>
        <span><icon name="search"></icon><input type="search" v-model="name"></span>
        <table>
            <tr>
                <th>name</th>
                <th>currency</th>
                <th>location</th>
                <th>id</th>
            </tr>
            <tr v-for="list in mockList">
                <td> {{ list.name }} </td>
                <td> {{ list.currency }} </td>
                <td> {{ list.location }} </td>
                <td> {{ list.id }} </td>
            </tr>
            <tr>
                <th>Итого:</th>
                <td> {{ total }} </td>
            </tr>
        </table>
    </div>
</template>

<script>
  import store from "./../store/index.js"
  import { mapGetters } from "vuex"
  import _ from 'lodash'
  import Icon from 'vue-awesome/components/Icon'

  export default {
    data () {
      return {
        name: ''
      }
    },
    components: {
      Icon
    },
    watch: {
      name: function () {
        this.search()
      }
    },
    methods: {
      search: _.debounce(
      function () {
        this.$store.dispatch('find', this.name)
      },
      500
    )},
    name: 'mockList',
    computed: mapGetters({
      mockList: 'getMockList',
      total: 'getTotal'
    }),
    mounted () {
      this.$store.dispatch('find', '')
    }
  }
</script>

<style lang="scss">
    table {
        width: 100%;
        border: 2px solid #000;
        tr {
            th {
                padding: 10px 20px;
                background: #56433D;
                color: #F9C941;
                border-right: 2px solid;
                font-size: 0.9em;
            }

            td {
                padding: 5px 10px;
                border: 1px solid #56433D;
            }
        }
    }
</style>
