<template>
  <div>
    <input v-model="newItem" v-on:keyup.enter="addNew" placeholder="enter to list items">
    <ul>

      <li v-for="item in items"
          v-bind:class="{finished:item.isFinished}" class="noPoint"
          v-on:click="toggleFinish(item)">
        {{ item.label }}
      </li>
    </ul>

  </div>
</template>

<script>
  import Store from './../store'
  import store from "../store";

   export default {
    name: "resume",
    data() {
      return {
        msg: 'Learning',

        items: Store.fetch(),
        newItem:''
      }
    },
     watch: {
      items:{
        handler:function (items) {
          Store.save(items)
          },
        deep:true
      }
     },
    methods: {
      toggleFinish: function (item) {
        item.isFinished = !item.isFinished;
        },
        addNew:function () {
        this.items.push({
          label:this.newItem,
          isFinished:false
        })
        this.newItem='';
        Store.save()
        }
    }
  }
</script>

<style scoped>
  .finished {
    text-decoration: underline;
   }
  .noPoint {
     list-style: none;
  }
</style>
