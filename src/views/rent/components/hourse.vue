<template>
  <div>
    <van-picker
      show-toolbar
      :columns="columns"
      @confirm="onConfirm"
      @cancel="$emit('close')"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: ['一室', '二室', '三室', '四室', '四室＋']
    }
  },
  methods: {
    onConfirm(value, index) {
      this.$emit('updatehouse', value)
    },
  }
}
</script>

<style></style>
