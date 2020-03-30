<template>
<div>
   <el-button type="info" @click="goBack">退出</el-button>
</div>
  
</template>

<script>
export default {
    methods: {
        goBack() {
            window.sessionStorage.clear();
            this.$router.replace('/login')
        }
    }
}
</script>

<style lang="less" scoped>

</style>