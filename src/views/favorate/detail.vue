<template>
  <div>
    <van-nav-bar
      :title="detailObj.community"
      left-arrow
      @click-left="onClickLeft"
      class="collectList"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in detailObj.houseImg" :key="index">
        <img :src="`http://liufusong.top:8080${item}`" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="house-info">
      <div class="house-title">
        <h3>{{ detailObj.title }}</h3>
        <p class="p1">{{ detailObj.tags[0] }}</p>
      </div>
      <div class="house-detail">
        <van-grid :column-num="3" class="grid-item">
          <van-grid-item>
            <template #text> 租金 </template>
            <template #icon>
              <span>{{ detailObj.price }} <i>/月</i> </span>
            </template>
          </van-grid-item>
          <van-grid-item>
            <template #text> 房型 </template>
            <template #icon>
              <span>{{ detailObj.roomType }}</span>
            </template>
          </van-grid-item>
          <van-grid-item>
            <template #text> 面积 </template>
            <template #icon>
              <span>{{ detailObj.size }}平米</span>
            </template>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="house-describe">
        <div>
          <span>装修:</span>
          精装
        </div>
        <div>
          <span>朝向:</span>
          {{detailObj.oriented[0]}}
        </div>
        <div>
          <span>楼层:</span>
          {{detailObj.floor}}
        </div>
        <div>
          <span>类型:</span>
          普通住宅
        </div>
      </div>
    </div>
    <div class="configuration">
      <div class="supporting">
        房屋配套
      </div>
      <div class="Specific-configuration">
        <div>
          <span class="iconfont icon-wash"></span>
          <p>{{detailObj.supporting[0]}}</p>
        </div>
        <div>
          <span class="iconfont icon-air"></span>
          <p>{{detailObj.supporting[1]}}</p>
        </div>
      </div>
    </div>
    <div class="summary">
    </div>
  </div>
</template>

<script>
import { getdetailList as getdetailListAPI } from '@/api/collectList'
export default {
  data() {
    return {
      detailObj: {}
    }
  },
  created() {
    this.getdetailList()
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async getdetailList() {
      const { data } = await getdetailListAPI(this.$route.query.id)
      this.detailObj = data.body
      console.log(data.body)
    }
  }
}
</script>

<style scoped lang="less">
body
.collectList {
  background-color: #00b97c;
}
:deep(.van-nav-bar__title) {
  font-size: 18px;
  color: #fff;
}
:deep(.van-nav-bar__arrow) {
  font-size: 16px;
  color: #fff;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #f6f5f6;
  height: 250px;
}
.house-info {
  margin-bottom: 10px;
  padding: 15px;
  height: 267px;
  background-color: #fff;
  .house-title {
    border-bottom: 1px solid #cecece;
    h3 {
      font-size: 16px;
      color: #333;
      font-weight: normal;
      margin: 16px 0;
    }
    .p1 {
      width: 46px;
      height: 20px;
      background-color: #e1f5f8;
      font-size: 12px;
      text-align: center;
      color: #39becd;
      border-radius: 4px;
      margin-bottom: 15px;
    }
  }
  .house-detail {
    padding: 15px 0;
    border-bottom: 1px solid #cecece;
    margin-bottom: 15px;
    .grid-item {
      font-size: 14px;
      color: #999;
      span {
        display: block;
        height: 26px;
        font-size: 18px;
        color: #fa5741;
        font-weight: 700;
        margin-bottom: 3px;
        i {
          font-weight: normal;
          font-size: 12px;
        }
      }
    }
  }
  .house-describe {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    div {
      flex: 48%;
      font-size: 13px;
      color: #333;
      height: 26px;
      span {
        color: #999;
        margin-right: 12px;
      }
    }
  }
}
.configuration {
  height: 130px;
  padding: 0 10px;
  background-color: #fff;
  .supporting {
    height: 48px;
    font-size: 15px;
    color: #333;
    line-height: 48px;
    border-bottom: 1px solid #cecece;
    margin-bottom: 10px;
    font-weight: 600;
  }
  .Specific-configuration {
    display: flex;
    div {
      width: 71px;
      height: 51px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
      span {
        font-size: 23px;
        margin-bottom: 10px;
      }
      p {
        font-size: 14px;
        color: #333;
      }
    }
  }
}
.summary {
  height: 266px;
  padding: 0 10px;
  margin: 10px 0;
  background-color: #fff;
}
:deep(.van-hairline--top::after) {
  border: none;
}
:deep(.van-grid-item__content::after) {
  border-width: 0;
}
:deep(.van-grid-item__content) {
  padding: 0;
}
</style>
