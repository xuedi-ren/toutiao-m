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
          北
        </div>
        <div>
          <span>楼层:</span>
          {{ detailObj.floor }}
        </div>
        <div>
          <span>类型:</span>
          普通住宅
        </div>
      </div>
    </div>
    <div class="configuration">
      <div class="supporting">房屋配套</div>
      <div class="Specific-configuration">
        <div>
          <span class="iconfont icon-wash"></span>
          <p>{{ detailObj.supporting[0] }}</p>
        </div>
        <div>
          <span class="iconfont icon-air"></span>
          <p>{{ detailObj.supporting[1] }}</p>
        </div>
      </div>
    </div>
    <div class="summary">
      <div class="supporting">房屋概括</div>
      <div class="contacts">
        <div class="user-img">
          <img src="~@/assets/imgs/avatar.png" alt="" />
        </div>
        <div class="user-info">
          <p>王女士</p>
          <span> <i class="iconfont icon-auth"></i>已认证房主 </span>
        </div>
        <div class="info">
          <span>发消息</span>
        </div>
      </div>
      <div class="text">
        {{ detailObj.description }}
      </div>
    </div>
    <!-- ! 底部导航 -->
    <div class="nav-bar">
      <van-grid direction="horizontal" :column-num="3">
        <van-grid-item text="收藏">
          <template #icon>
            <van-icon
              name="star"
              v-if="isShow"
              @click="delCollect"
              class="star-icon"
            />
            <van-icon name="star" v-else @click="addCollect" />
          </template>
        </van-grid-item>
        <van-grid-item text="在线咨询" />
        <van-grid-item text="电话预约" class="template" />
      </van-grid>
    </div>
  </div>
</template>

<script>
import {
  getdetailList as getdetailListAPI,
  getIsCollect as getIsCollectAPI,
  delCollect as delCollectAPI,
  addCollect as addCollectAPI
} from '@/api/collectList'
export default {
  data() {
    return {
      detailObj: {},
      isshow: true
    }
  },
  created() {
    this.getdetailList()
    this.getIsCollect()
  },
  computed: {
    isShow() {
      return this.isshow
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async getdetailList() {
      const { data } = await getdetailListAPI(this.$route.query.id)
      this.detailObj = data.body
      console.log(data.body)
    },
    // 查看是否收藏
    async getIsCollect() {
      const { data } = await getIsCollectAPI(this.$route.query.id)
      console.log(data)
      this.isshow = data.body.isFavorite
    },
    // 删除收藏
    async delCollect() {
      this.$toast.loading({
        message: '取消收藏中...',
        forbidClick: true
      })
      try {
        const { data } = await delCollectAPI(this.$route.query.id)
        console.log(data)
        this.isshow = !this.isshow
        this.$toast.success('取消收藏成功')
      } catch (error) {
        this.$toast.fail('取消收藏失败')
      }
    },
    // 添加收藏
    async addCollect() {
      this.$toast.loading({
        message: '添加收藏中...',
        forbidClick: true
      })
      try {
        const { data } = await addCollectAPI(this.$route.query.id)
        console.log(data)
        this.isshow = !this.isshow
        this.$toast.success('添加收藏成功')
      } catch (error) {
        this.$toast.fail('添加收藏失败')
      }
    }
  }
}
</script>

<style scoped lang="less">
body .collectList {
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
  min-height: 176px;
  padding: 0 10px;
  margin: 10px 0;
  background-color: #fff;
  .supporting {
    height: 52px;
    font-size: 15px;
    color: #333;
    line-height: 52px;
    font-weight: 600;
    border-bottom: 1px solid #cecece;
    margin-bottom: 10px;
  }
  .contacts {
    display: flex;
    height: 62px;
    flex-wrap: wrap;
    margin-bottom: 10px;
    .user-img {
      width: 52px;
      height: 52px;
      margin: 10px 13px 0 0;
      img {
        display: block;
        width: 100%;
      }
    }
    .user-info {
      height: 52px;
      line-height: 42px;
      p {
        font-size: 14px;
        height: 21px;
      }
      span {
        display: block;
        font-size: 12px;
        color: #fa5741;
        height: 24px;
        i {
          font-size: 16px;
        }
      }
    }
    .info {
      flex: 60%;
      height: 62px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 15px;
      span {
        display: block;
        width: 74px;
        height: 29px;
        border: 1px solid #33be85;
        color: #33be85;
        text-align: center;
        line-height: 29px;
        border-radius: 5px;
      }
    }
  }
  .text {
    min-height: 40px;
    padding: 10px 0;
    font-size: 14px;
    color: #333;
  }
}
.nav-bar {
  height: 50px;
  position: sticky;
  bottom: 0;
  :deep(.star-icon) {
    &.van-icon {
      color: #ff4a17;
    }
  }
  :deep(.van-grid-item__content) {
    height: 50px;
    border-top: 1px solid #cecece;
    border-right: 1px solid #cecece;
  }
  :deep(.van-grid-item__text) {
    font-size: 17px;
    color: #999;
    margin-left: 6px;
  }
  .template {
    :deep(.van-grid-item__content) {
      background-color: #00b97c;
    }
    :deep(.van-grid-item__text) {
      color: #fff;
    }
  }
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
