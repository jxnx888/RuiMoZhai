<template>
  <div>
    <h1>{{msg}}</h1>
    <input v-model="newItem" v-on:keyup.enter="addNew" placeholder="enter to list items">
    <ul>

      <li v-for="(item, index) in items"
          :key="index"
          v-bind:class="{finished:item.isFinished}" class="noPoint"
          v-on:click="toggleFinish(item)"
          @click="remove(item)"
          @delete="remove"
          :content1="content1"
          :index="index"
      >

        {{ item.label }}
      </li>




      <!--<li v-for="(item, index) of items" :key="index"  class="noPoint">{{item}}</li>-->
      <li v-for="item of items" class="noPoint"

     >{{item}}</li>

    </ul>



    <div @click="handleClick" :title="title">{{content}}</div>

  <!--<div v-on:click="handleClick" v-bind:title="title">{{content}}</div>-->
    姓：<input v-model="firstName" class="input"/>
    名：<input v-model="lastName" class="input"/>

    <div>{{fullName}}</div>
    <div>{{count}}</div>
  </div>
</template>

<script>
  import Store from './../store'

   export default {
    name: "resume",
     props: ['content1', 'index'],
    data() {
      return {
        msg: 'Learning \n resume.vue',

        items: Store.fetch(),
        newItem:'',
        content: 'click here to change content',
        title: 'this is a change function',
        firstName: '',
        lastName: '',
        count: 0
      }
    },
     computed: {
      fullName:function () {
        return this.firstName + ' ' + this.lastName

      }
     },
     watch: {
      items:{
        handler:function (items) {
          Store.save(items)
          },
        deep:true
      },
       fullName:function () {
         this.count ++
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
        });
        this.newItem='';
        Store.save()
        },
      handleClick:function () {
        // alert(123);
        this.content="oye~ it has been changed"
      },
      remove:function ( ) {
        // alert(this.index)
        this.$emit('delete',this.index)
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
  .input {
    width: 20%;
    text-align: center;
  }
</style>
