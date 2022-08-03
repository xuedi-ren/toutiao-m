<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" class="nav-house">
      <template #title>
        <van-search placeholder="请输入小区或地址" class="inp" label="深圳">
          <template #label> 深圳 <i class="iconfont icon-arrow"></i> </template>
        </van-search>
        <i class="iconfont icon-map"></i>
      </template>
    </van-nav-bar>
    <van-dropdown-menu active-color="#21b97a">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
      <van-dropdown-item v-model="value4" :options="option4" />
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 'a',
      value3: 2,
      value4: 5,
      option1: [
        { text: '区域', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '方式', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ],
      option3: [
        { text: '租金', value: 2 },
        { text: '新款商品', value: 3 },
        { text: '活动商品', value: 4 }
      ],
      option4: [
        { text: '筛选', value: 5 },
        { text: '新款商品', value: 6 },
        { text: '活动商品', value: 7 }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.nav-house {
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
.icon-map {
  font-size: 25px;
  color: #fff;
  position: fixed;
  bottom: 633px;
  left: 340px;
}
.van-search {
  width: 305px;
  position: fixed;
  bottom: 617px;
  left: 35px;
  background-color: transparent;
  :deep(.van-icon) {
    color: #9c9fa1;
  }
}
.icon-arrow {
  font-size: 12px;
}
:deep(.van-search__label) {
  margin-right: 15px;
}
</style>
