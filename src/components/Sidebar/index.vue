<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="opened"
      :width="variable.sideBarWidth"
    >
      <sidebar-item></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "@/components/SidebarItem";
import variable from "@/styles/variable.less";
export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(["opened"]),
    variable() {
      return variable;
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>

</style>
