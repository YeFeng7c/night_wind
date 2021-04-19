<template>
  <div class="home">
    <div class="logo">
      <!-- <img src="../assets/logo.png" /> -->
     <span><h2>夜の風</h2></span>
      </div>
      <div class="nav">
        <el-menu
          mode="horizontal"
          active-text-color="forestgreen"
          background-color="rgb(188, 228, 221)"

        >
          <el-menu-item index="/" @click="goTo('/')">首页</el-menu-item>
          <el-menu-item index="/Message" @click="goTo('/Message')">留言</el-menu-item>
          <el-menu-item index="/About" @click="goTo('/About')">关于</el-menu-item>
          <el-menu-item index="sg" ><a href="/sg/sg.html" target="_blank">看你骨骼惊奇，来算一卦</a></el-menu-item>
        </el-menu>
      </div>
    <router-view />
  </div>
</template>

<script>

export default {
  data() {
    return {

    };
  },
  methods: {
    goTo(path){
      this.$router.replace(path)
    }

  },
  mounted() {

  },

};
</script>

<style scoped>

.nav {
  margin-bottom: 10px;
}
.el-menu-item {
  position: relative;
  margin-left: 15%;
  font-size: 18px;
  font-weight: bold;
  color: rgb(34, 56, 56);
}

/* span{
  font-size: 24px;
  font-weight: bold;
}

img{

}

.logo{

} */
</style>
