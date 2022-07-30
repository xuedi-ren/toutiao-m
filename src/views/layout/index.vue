<template>
  <div>
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/layout/home" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/house" icon="search"
        >找房</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/information" icon="home-o"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/my" icon="search"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { rollImg } from '@/api/my'
export default {
  data() {
    return {
      value: '',
      list: []
    }
  },
  async created() {
    try {
      const res = await rollImg()
      this.list = res.data.body
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style></style>
