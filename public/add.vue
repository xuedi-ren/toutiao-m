<template>
  <div>
    <van-nav-bar
      title="发布房源"
      left-arrow
      @click-left="onClickLeft"
      class="collectList"
    />
    <van-cell title="房源信息" class="cell-title" />
    <van-cell title="小区名称" is-link @click="$router.push('/rent/search')"> 请输入小区名称 </van-cell>
    <van-cell-group>
      <van-field v-model="value1" label="租金" placeholder="请输入租金/月">
        <template #right-icon> ￥/月 </template>
      </van-field>
      <van-field v-model="value2" label="建筑面积" placeholder="请输入建筑面积">
        <template #right-icon> ㎡ </template>
      </van-field>
    </van-cell-group>
    <van-cell title="户型" is-link> 请选择 </van-cell>
    <van-cell title="所在楼层" is-link> 请选择 </van-cell>
    <van-cell title="朝向" is-link label="房屋标题" class="cell-direction">
      请选择
    </van-cell>
    <van-cell-group>
      <van-field
        v-model="value3"
        placeholder="请输入标题（例如：整租 小区名 2室 5000元)"
      />
    </van-cell-group>
    <van-cell title="房屋图像" />
    <van-cell class="cell-house">
      <template #title>
        <van-uploader v-model="fileList" multiple class="cell-img" />
      </template>
    </van-cell>
    <van-cell title="房屋配置" />
    <van-grid :column-num="5" class="grid-cell">
      <van-grid-item
        v-for="value in 10"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <van-cell title="房屋描述" />
    <van-field
  v-model="value4"
  rows="2"
  autosize
  type="textarea"
  placeholder="请输入描述"
  show-word-limit
  class="textarea"
/>
<div class="btn">
  <button class="btn1">取消</button>
  <button class="btn2">提交</button>
</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      fileList: [
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      ]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
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
:deep(.cell-title) {
  &.van-cell {
    color: #21b97a;
    font-size: 15px;
  }
}
:deep(.van-field__label) {
  color: #323233;
}
.cell-direction {
  :deep(.van-cell__label) {
    color: #323233;
    margin-top: 25px;
    font-size: 14px;
  }
}
:deep(.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after) {
  border-width: 0;
}
:deep(.cell-house) {
  &.van-cell::after {
    border-bottom: none;
  }
}
:deep(.van-hairline--top::after) {
  border-top-width: 0;
}
:deep(.van-grid-item__content::after) {
  border-width: 0;
}
.grid-cell {
  margin-bottom: 20px;
}
.textarea {
  margin-bottom: 25px;
}
.btn {
  width: 100%;
  height: 45px;
  position: sticky;
  bottom: 0;
  button {
    width: 50%;
    height: 45px;
    background-color: #fff;
    border: 1px solid #fff;
    font-size: 15px;
  }
  .btn1 {
    color: #21b97a;
  }
  .btn2 {
    color: #fff;
    background-color: #00b97c;
    border: 1px solid #00b97c;
  }
}
</style>
