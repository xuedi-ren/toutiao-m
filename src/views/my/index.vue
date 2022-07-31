<template>
  <div>
    <div>
      <!-- ?背景图 已登录 -->
      <div class="img-bg" v-if="isShow">
        <img src="~@/assets/imgs/avatar.png" alt="" />
      </div>
      <!-- !背景图 未登录 -->
      <div class="img-bg" v-else>
        <img src="~@/assets/imgs/bg.png" alt="" />
      </div>
      <!-- ?登录框 已登录-->
      <div class="box2" v-if="isShow">
        <div class="login2">
          <van-image
            width="80"
            height="80"
            fit="cover"
            round
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            class="avatar"
          />
          <span class="text2">大麻哈_3535</span>
          <button class="login-btn2" @click="outLogin">
            <span>退出</span>
          </button>
          <div class="editor">
            <span>编辑个人资料</span>
            <i class="iconfont icon-arrow"></i>
          </div>
        </div>
      </div>
      <!-- !登录框 未登录-->
      <div class="box1" v-else>
        <div class="login">
          <van-image
            width="80"
            height="80"
            fit="cover"
            round
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            class="avatar"
          />
          <span class="text">游客</span>
          <button class="login-btn" @click="goLogin">
            <span>去登陆</span>
          </button>
        </div>
      </div>
      <!-- !我的资料 -->
      <van-grid :column-num="3" class="gride">
        <van-grid-item text="我的收藏">
          <template #icon>
            <span class="iconfont icon-coll"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="我的收藏">
          <template #icon>
            <span class="iconfont icon-ind"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="我的收藏">
          <template #icon>
            <span class="iconfont icon-record"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="我的收藏">
          <template #icon>
            <span class="iconfont icon-identity"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="我的收藏">
          <template #icon>
            <span class="iconfont icon-myinfo"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="我的收藏">
          <template #icon>
            <span class="iconfont icon-cust"></span>
          </template>
        </van-grid-item>
      </van-grid>
      <!-- !底部图片 -->
      <div class="foot-img">
        <img src="~@/assets/imgs/join.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goLogin() {
      this.$router.push('/login')
    },
    outLogin() {
      this.$dialog
        .confirm({
          title: '退出登录',
          message: '弹窗确认要退出吗'
        })
        .then(() => {
          this.$store.commit('HAOKE_TOKEN', {})
        })
        .catch(() => {
          // on cancel
        })
    }
  },
  computed: {
    isShow() {
      return !!this.$store.state.TOKEN.token
    }
  }
}
</script>

<style scoped lang="less">
.img-bg {
  width: 100%;
  height: 191px;
  img {
    display: block;
    width: 100%;
  }
}
// 未登录
.box1 {
  height: 165px;
}
.login {
  position: fixed;
  top: 135px;
  left: 30px;
  height: 165px;
  width: 84%;
  box-shadow: 0 0 10px 3px #ddd;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 110px;
  .avatar {
    border: 8px solid #f5f5f5;
    margin-top: -40px;
  }
  .text {
    font-size: 15px;
    color: #333;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .login-btn {
    width: 80px;
    height: 35px;
    border-radius: 5px;
    background-color: #00b97c;
    border: 2px solid #00b97c;
    span {
      font-size: 15px;
      color: #fff;
    }
  }
}
//已登录
.box2 {
  height: 210px;
}
.login2 {
  position: absolute;
  top: 170px;
  left: 30px;
  height: 210px;
  width: 84%;
  box-shadow: 0 0 10px 3px #ddd;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 170px;
  .avatar {
    border: 8px solid #f5f5f5;
    margin-top: -40px;
  }
  .text2 {
    font-size: 13px;
    color: #333;
    margin-top: 15px;
    margin-bottom: 10px;
  }
  .login-btn2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54px;
    height: 20px;
    border-radius: 15px;
    background-color: #00b97c;
    border: 2px solid #00b97c;
    span {
      font-size: 13px;
      color: #fff;
    }
  }
  .editor {
    margin-top: 22px;
    font-size: 12px;
    color: #999;
    i {
      font-size: 12px;
    }
  }
}
:deep(.van-hairline--top::after) {
  border: none;
}
.gride {
  :deep(.van-grid-item__content::after) {
    border: none;
  }
  span.iconfont {
    font-size: 20px;
  }
  :deep(.van-grid-item__text) {
    font-size: 13px;
    color: #333;
  }
}
:deep(.van-grid-item__content) {
  padding: 20px 8px;
}
.foot-img {
  margin-top: 10px;
  height: 85px;
  padding: 0 15px;
  img {
    display: block;
    height: 100%;
  }
}
</style>
