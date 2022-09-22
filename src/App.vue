<template>
  <div>导航栏 | 
  <router-link to="/">one</router-link> | 
  <router-link to="/xxx">two</router-link></div>
  <hr/>
  <router-view />
</template>

<script>


export default {
  name: 'App',
  
}
</script>
