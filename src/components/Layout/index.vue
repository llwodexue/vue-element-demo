<template>
  <div class="app-wrapper">
    <div class="side-wrapper" :style="{ width: variable.sideBarWidth }">
      <sidebar></sidebar>
    </div>
    <div class="header-wrapper">
      <hamburger
        class="hamburger-container"
        :isActive="opened"
        @toggleClick="toggleSideBar"
      ></hamburger>
      <breadcrumb class="breadcrumb-container"></breadcrumb>
      <div class="right-menu">
        <el-dropdown trigger="click">
          <span class="avatar-wrapper">
            <span v-text="name"></span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>返回首页</el-dropdown-item>
            </router-link>
            <a href="javascript:;">
              <el-dropdown-item>修改密码</el-dropdown-item>
            </a>
            <a href="javascript:;">
              <el-dropdown-item>退出登录</el-dropdown-item>
            </a>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "@/store/store-types";
import Hamburger from "@/components/Hamburger";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import variable from "@/styles/variable.less";

export default {
  name: "Layout",
  components: {
    Hamburger,
    Breadcrumb,
    Sidebar,
  },
  data() {
    return {
      name: "admin",
    };
  },
  computed: {
    ...mapGetters(["opened"]),
    variable() {
      return variable;
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch(types.TOGGLE_SIDEBAR);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/variable.less";

.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
}

.header-wrapper {
  height: 50px;
  width: 100%;
  transition: width 0.3s;
  overflow: hidden;
  background: @themeColor;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    height: 100%;
    line-height: 46px;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    margin-right: 30px;
    line-height: 50px;
    color: #fff;
    &:focus {
      outline: none;
    }

    .avatar-wrapper {
      span {
        color: #fff;
      }
      i {
        color: #fff;
      }
    }

    .user-dropdown {
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
