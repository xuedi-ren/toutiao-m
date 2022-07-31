<template>
  <div>
    <van-nav-bar class="page-nav-bar" title="账号登录" left-arrow @click-left="onClickLeft"/>
    <van-form @submit="onSubmit" class="login">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
      />
      <div class="btn-login">
        <van-button color="#00b678" block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <router-link to="/login/zhuce" class="aa">还没有账号， 去注册~</router-link>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  data() {
    return {
      username: '',
      password: '',
      reg1: /^[A-Za-z0-9]{5,12}$/,
      reg2: /^[A-Za-z0-9]{5,12}$/,
    }
  },
  methods: {
    async onSubmit() {
      try {
        if (this.username.length === 0 || this.password.length === 0) {
          return this.$toast('账号密码不能为空')
        }
        if (!this.reg1.test(this.username)) {
          return this.$toast('账号格式为5到8位的字母和数字')
        }
        if (!this.reg2.test(this.password)) {
          return this.$toast('密码格式为5到12位的字母和数字')
        }
        const { data: { body } } = await login(this.username, this.password)
        const res = await login(this.username, this.password)
        console.log(body)
        if (res.data.status === 400) {
          return this.$toast.fail('登录失败， 账号或密码错误')
        }
        this.$store.commit('HAOKE_TOKEN', body)
        this.$router.push('/layout/my')
        this.$toast('登录成功')
      } catch (err) {
        console.log(err)
      }
    },
    onClickLeft() {
      this.$router.back()
    }
  },
}
</script>

<style scoped lang="less">
.aa {
  display: block;
  font-size: 14px;
  color: #666;
  text-align: center;
}
:deep(.login) {
  .btn-login {
    padding: 30px 15px;
  }
}
.van-cell {
  height: 60px;
  line-height: 50px;
}
</style>
