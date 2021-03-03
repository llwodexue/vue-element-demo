<template>
  <div id="app">
    <el-card class="cardBox">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
        <h1 class="title">Login Form</h1>
        <el-form-item prop="account">
          <el-input
            class="inp"
            ref="account"
            v-model="loginForm.account"
            placeholder="请输入用户名/手机号/邮箱"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            class="inp"
            ref="password"
            v-model="loginForm.password"
            show-password
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-button type="primary" class="submit" @click="handleLogin"
          >登录</el-button
        >
      </el-form>
    </el-card>
    <footer class="footerBox">
      <span>雪飞 © 2021</span>
    </footer>
  </div>
</template>

<script>
import md5 from "blueimp-md5";
import { handleUserLogin } from "./api/login";
export default {
  data() {
    const checkAccount = (rule, value, callback) => {
      let argArr = [
        /^((\w{1,20})|([\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}))$/,
        /^1[3-9]\d{9}$/,
        /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
      ];
      let flag = argArr.some((item) => item.test(this.loginForm.account));
      if (!flag) {
        this.$message.error("系统提示：请输入合法的用户名或密码！");
      } else {
        callback();
      }
    };
    const checkPassword = (rule, value, callback) => {
      let flag = /^\w{1,16}$/.test(this.loginForm.password);
      if (!flag) {
        this.$message.error("系统提示：请输入合法的用户名或密码！");
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        account: "admin",
        password: "",
      },
      loginRules: {
        account: [{ reuqired: true, trigger: "blur", validator: checkAccount }],
        password: [
          { reuqired: true, trigger: "blur", validator: checkPassword },
        ],
      },
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          handleUserLogin({
            account: this.loginForm.account,
            password: md5(this.loginForm.password),
          })
            .then(() => {
              this.$alert("登陆成功，即将跳转到首页！", "系统提示", {
                callback: () => {
                  location.href = location.origin;
                },
              });
            })
            .catch(() => {
              this.$message("用户名和密码不匹配，请核对后再试！", "系统提示");
            });
        }
      });
    },
  },
  mounted() {
    if (this.loginForm.account === "") {
      this.$refs.account.focus();
    } else if (this.loginForm.password === "") {
      this.$refs.password.focus();
    }
  },
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  overflow: hidden;
}

body {
  background: url("./assets/login_bg.jpg") repeat-x;
}

.footerBox {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  line-height: 50px;
  text-align: center;
  color: #999;
}

.cardBox {
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  box-sizing: border-box;
}

.cardBox .title {
  font-size: 30px;
  text-align: center;
  font-weight: normal;
}

.cardBox .inp {
  margin-bottom: 20px;
}

.cardBox .submit {
  width: 100%;
}
</style>
