<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group>
      <el-breadcrumb-item
        v-for="(item, index) in levelList"
        :key="index"
      >
        <span class="item-breadcrumb">{{item}}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "Hamburger",
  data() {
    return {
      levelList: [1, 2, 3],
    };
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleClick() {
      this.$emit("toggleClick");
    },
  },
};
</script>

<style lang="less" scoped>
.app-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .item-breadcrumb {
    color: #eee;
    cursor: text;
  }
}
</style>
