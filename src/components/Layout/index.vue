<template>
  <div class="wrapper">
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
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "@/store/store-types";
import Hamburger from "@/components/Hamburger";
import Breadcrumb from "@/components/Breadcrumb";

export default {
  name: "Layout",
  components: {
    Hamburger,
    Breadcrumb,
  },
  data() {
    return {
      name: "admin",
      isCollapse: true,
    };
  },
  created() {},
  computed: {
    ...mapGetters(["opened"]),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch(types.TOGGLE_SIDEBAR);
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  height: 50px;
  overflow: hidden;
  background: #3a3d42;
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
