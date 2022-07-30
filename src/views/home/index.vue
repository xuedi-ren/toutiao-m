<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(obj, index) in list" :key="index">
        <img :src="`http://liufusong.top:8080${obj.imgSrc}`" class="img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 租房bannr -->
    <van-row class="row" type="flex" justify="space-around">
      <van-col span="3.5">
        <div class="pic">
          <img src="@/assets/下载 (1).png" alt="" />
        </div>
        整租
      </van-col>
      <van-col span="3.5">
        <div class="pic">
          <img src="@/assets/下载 (2).png" alt="" />
        </div>
        合租
      </van-col>
      <van-col span="3.5">
        <div class="pic">
          <img src="@/assets/下载 (3).png" alt="" />
        </div>
        地图找房
      </van-col>
      <van-col span="3.5">
        <div class="pic">
          <img src="@/assets/下载.png" alt="" />
        </div>
        去出租
      </van-col>
    </van-row>
    <!-- 租房小组 -->
    <div class="rentHouse">
      <!-- 顶部导航 -->
      <div class="navbar">
        <h3>租房小组</h3>
        <router-link to="/login" class="aa">更多</router-link>
      </div>
      <!-- 下部主体 -->
      <van-grid
        :column-num="2"
        class="grid"
        :gutter="10"
        direction="horizontal"
      >
        <van-grid-item class="grid-item" v-for="obj in list2" :key="obj.id">
          <div class="pic">
            <img :src="`http://liufusong.top:8080${obj.imgSrc}`" alt="" />
          </div>
          <span>
            <p>{{ obj.title }}</p>
            <p>{{ obj.desc }}</p>
          </span>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 搜素框 -->
    <van-search
      placeholder="请输入搜索关键词"
      class="inp"
      label="深圳"
    /> 
    <i class="toutiao toutiao-shouji"></i>
  </div>
</template>

<script>
import { rollImg, rentHouse } from '@/api/my'

export default {
  data() {
    return {
      list: [],
      list2: []
    }
  },
  async created() {
    try {
      const res = await rollImg()
      this.list = res.data.body
    } catch (err) {
      console.log(err)
    }
    try {
      const res2 = await rentHouse()
      this.list2 = res2.data.body
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped lang="less">
.toutiao-shouji {
  font-size: 25px;
  color: #fff;
  position: fixed;
  bottom: 613px;
  left: 340px;
}
.van-search {
  width: 335px;
  position: fixed;
  bottom: 600px;
  left: 10px;
  background-color: transparent;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 10px;
  text-align: center;
  .img {
    width: 100% !important;
    height: auto;
  }
}
.search-icon {
  font-size: 16px;
  line-height: inherit;
}
.row {
  padding: 10px;
  text-align: center;
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
  background-color: #fff !important;
  .pic {
    width: 60px !important;
    height: 60px !important;
    margin-bottom: 10px;
    img {
      display: block;
      width: 100%;
    }
  }
}
.rentHouse {
  // height: 200px;
  padding: 10px !important;
  background-color: #f6f5f6;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    h3 {
      margin: 0;
      margin-left: 10px;
      margin-top: 5px;
      font-size: 15px;
      color: #333;
    }
    .aa {
      margin-top: 5px;
      color: #787d82;
      font-size: 14px;
    }
  }
}
.grid {
  padding-left: 0 !important;
  .grid-item {
    border-radius: 10px !important;
    .pic {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      margin-right: 10px;
      img {
        display: block;
        width: 100%;
      }
    }
    span p {
      margin: 0 !important;
      font-size: 14px;
      color: #333;
    }
  }
}
</style>
