<template>
  <div class="my-container">
    <div class="userInfo header" v-if="user">
      <div class="base_info">
        <div class="left">
          <van-image
            class="avatar"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            round
            fit="cover"
          />
          <span class="text">前端大麻哈</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <div class="data">
        <div class="data-item">
          <span class="count">66</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">66</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">66</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">66</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>
    <div class="header not-login" v-else>
      <div class="login-btn">
        <img class="mobile-img" src="~@/assets/mobile.png" alt="" />
        <span class="text" @click="$router.push({ path: '/login' })"
          >登录 / 注册</span
        >
      </div>
    </div>
    <!-- 宫格 -->
    <van-grid :column-num="2" class="grid-nav" clickable>
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao toutiao-shoucang"></i>
        <span slot="text" class="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao toutiao-lishi"></i>
        <span slot="text" class="text">历史</span>
      </van-grid-item>
    </van-grid>
    <van-cell title="消息通知" is-link />
    <van-cell title="小智同学" is-link />
    <van-cell
      title="退出登录"
      class="logout-cell"
      v-if="user"
      @click="onLogout"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    onLogout() {
      this.$dialog.confirm({
        title: "确认退出吗?",
      })
        .then(() => {
          this.$store.commit('setUser', null)
        })
        .catch(() => {
          console.log('取消执行这里')
        });
    },
  },
};
</script>

<style scoped lang="less">
.my-container {
  .header {
    height: 4.5125rem;
    background: url(../../assets/banner.png);
    background-size: cover;
  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .mobile-img {
        width: 1.65rem;
        height: 1.65rem;
        margin-bottom: 0.1875rem;
      }
      .text {
        font-size: 0.35rem;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .userInfo {
    .base_info {
      height: 2.8875rem;
      // background-color: skyblue;
      padding: 0.95rem 0.4rem 0.2875rem;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          width: 1.65rem;
          height: 1.65rem;
          border: 0.0375rem solid #fff;
          margin-right: 0.275rem;
        }
        .text {
          font-size: 0.375rem;
          color: #fff;
        }
      }
    }
    .data {
      height: 1.6875rem;
      // background-color: aquamarine;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .data-item {
        display: flex;
        flex-direction: column;
        color: #fff;
        .count {
          font-size: 0.43rem;
          margin-bottom: 0.09rem;
        }
        .text {
          font-size: 0.2875rem;
        }
      }
    }
  }
  .grid-nav {
    .grid-item {
      height: 1.7625rem;
      i.toutiao {
        font-size: 0.5625rem;
      }
      .toutiao-shoucang {
        color: #eb5253;
      }
      .toutiao-lishi {
        color: #ff9d1d;
      }
      span.text {
        font-size: 0.35rem;
      }
    }
  }
  .logout-cell {
    text-align: center;
    color: #d86262;
    font-size: 0.375rem;
    height: 1.3rem;
    margin: 0.125rem 0;
  }
}
</style>
