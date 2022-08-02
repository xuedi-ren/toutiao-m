<template>
  <div>
    <van-nav-bar
      title="收藏列表"
      left-arrow
      @click-left="onClickLeft"
      class="collectList"
    />
    <div v-for="(obj, index) in collectLists" :key="index" class="collLis" @click="detailFn(obj.houseCode)">
      <div class="collectImg">
        <img :src="`http://liufusong.top:8080${obj.houseImg}`" alt="" />
      </div>

      <div class="collectText">
        <h3>{{ obj.title }}</h3>
        <p class="p1">{{ obj.desc }}</p>
        <p class="p2">{{ obj.tags[0] }}</p>
        <span>{{ obj.price }} <i>元/月</i> </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getcollectList } from '@/api/collectList'
export default {
  data() {
    return {
      collectLists: []
    }
  },
  created() {
    this.collectList()
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async collectList() {
      const { data } = await getcollectList()
      this.collectLists = data.body
      console.log(data.body)
    },
    detailFn() {
      
    }
  }
}
</script>

<style scoped lang="less">
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
.collLis {
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  padding: 15px 0;
  .collectImg {
    width: 106px;
    height: 80px;
    margin-right: 12px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .collectText {
    h3 {
      width: 257px;
      font-size: 15px;
      color: #394043;
      margin: 0;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 4px;
    }
    .p1 {
      font-size: 12px;
      color: #afb2b3;
      margin-bottom: 4px;
    }
    .p2 {
      width: 46px;
      height: 20ox;
      background-color: #dff5f8;
      color: #39becd;
      font-size: 12px;
      margin-bottom: 4px;
      text-align: center;
      border-radius: 3px;
    }
    span {
      font-size: 16px;
      font-weight: 700;
      color: #fa5741;
      i {
        font-size: 12px;
        font-weight: normal;
      }
    }
  }
}
</style>
