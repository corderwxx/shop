<template>
  <div id="app">
      <!-- <login></login> -->
      <!-- 注意注意 一定要注意 这里先用个路由占位符 可以跳转不同的页面 -->
    <router-view></router-view>
  </div>
</template>

<script>

// import Login from './views/Login'
export default {
  name: 'App',
  components: {
    //   Login,
  }
}
</script>

<style>

</style>
