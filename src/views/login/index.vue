<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- /导航栏 -->

    <!-- 登录表单 -->
    <van-form @submit="onSubmit" ref="loginForm">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="userFormRules.mobile"
        type="number"
        maxlength="11"
      >
        <i slot="left-icon" class="toutiao toutiao-shouji"></i>
      </van-field>
      <van-field
        type="number"
        maxlength="6"
        :rules="userFormRules.code"
        v-model="user.code"
        name="code"
        placeholder="请输入验证码"
      >
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
        <template #button>
          <van-count-down
            v-if="isShow"
            :time="1000 * 5"
            format="ss s"
            @finish="isShow = false"
          />
          <van-button
            v-else
            native-type="button"
            class="send-code-btn"
            round
            size="mini"
            type="default"
            @click="SendSms"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <!-- /登录表单 -->
  </div>
</template>
<script>
import { login, sendms} from "../../api/user";
export default {
  name: "LoginIndex",
  data() {
    return {
      isShow: false,
      user: {
        mobile: "",
        code: "",
      },
      //  表单校验
      userFormRules: {
        mobile: [
          {
            required: true,
            message: "手机号不能为空",
          },
          {
            pattern: /^1[3|5|7|8|9]\d{9}$/,
            message: "手机号格式错误",
          },
        ],
        code: [
          {
            required: true,
            message: "验证码不能为空",
          },
          {
            pattern: /^\d{6}$/,
            message: "验证码格式错误",
          },
        ],
      },
    };
  },
  methods: {
    async onSubmit() {
      // 1 获取表单数据
      const user = this.user;

      // 提交表单请求
      this.$toast.loading({
        message: "登录中...",
        forbidClick: true,
        duration: 0,
      });
      try {
        const { data } = await login(user);
        this.$store.commit('setUser', data.data)
        this.$toast.success({
          message: "登录成功",
          forbidClick: true,
        });
        console.log(res);
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail("登录失败， 手机号或验证码错误");
        } else {
          this.$toast.fail("登录失败， 请稍后再试");
        }
      }
    },
    async SendSms() {
      // 验证手机号
      try {
        await this.$refs.loginForm.validate("mobile");
      } catch (err) {
        return console.log("验证失败", err);
      }
      // 2. 验证通过，显示倒计时
      this.isShow = true;
      // 3. 请求发送验证码
      try {
        await sendms(this.user.mobile)
        this.$toast('发送成功')
      } catch (err) {
        if (err.response.status === 429) {
          this.$toast('发送太频繁了，请稍后重试')
        } else {
          this.$toast('发送失败，请稍后重试')
        }
      }
    },
  },
};
</script>
<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 0.4625rem;
  }

  .send-sms-btn {
    height: 0.6rem;
    line-height: 0.575rem;
    background-color: #ededed;
    font-size: 0.275rem;
    color: #666;
  }

  .login-btn-wrap {
    padding: 0.6625rem 0.4125rem;

    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>
