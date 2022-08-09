<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @input="onSearch"
        @cancel="onCancel"
      />
    </form>
    <van-cell
      v-for="(obj, index) in communityLists"
      :key="index"
      :title="obj.communityName"
      @click="detailFn(index)"
    />
  </div>
</template>

<script>
import { getcommunityName } from '@/api/rent'
export default {
  data() {
    return {
      value: '',
      id: 'AREA|a6649a11-be98-b150',
      communityLists: []
    }
  },
  methods: {
    async onSearch() {
      const { data } = await getcommunityName(this.value, this.id)
      console.log(data)
      this.communityLists = data.body
    },
    onCancel() {
      this.$router.back()
    },
    detailFn(index) {
      this.$store.commit(
        'COMMUNITY_NAME',
        this.communityLists[index].communityName
      )
      this.$router.go(-1)
    }
  },
}
</script>

<style scoped lang="less">
#root,
.App,
body,
html {
  background-color: #fff !important;
}
:deep(.van-search) {
  background-color: #f5f6f5;
}
:deep(.van-search .van-cell) {
  background-color: #fff;
}
</style>
