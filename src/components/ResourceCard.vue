<!--
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2021-03-01 13:23:59
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-03-02 14:20:58
-->
<template>
  <div class="resource-card" @click="handleClick(data)">
    <div class="cover">
      <div v-lazy:background-image="data.imgUrl" class="image" />
    </div>
    <p class="title">{{ data.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    handleClick() {
      this.$emit('click', this.data);
    }
  }
};
</script>

<style lang="scss" scoped>
.resource-card {
  padding-bottom: 10px;
  cursor: pointer;
  transition: .3s;

  &:hover {
    transform: translate3d(0, -10px, 0);
  }

  .cover {
    // @include box-shadow;
    .image {
      height: 0;
      padding-bottom: 140%;
      border-radius: 4px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
  }

  .title {
    // @include omit;
    padding: 5px 0;
    font-size: 14px;
    line-height: 1.6;
    color: #333;
  }
}
</style>
