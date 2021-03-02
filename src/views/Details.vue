<!--
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2021-02-26 15:10:53
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-03-02 14:33:23
-->
<template>
  <div>
    {{ details }}
  </div>
</template>

<script>
export default {
  computed: {
    // 从 store 的 state 对象中的获取 details
    details() {
      return this.$store.state.details;
    }
  },

  mounted() {
    this.$store.dispatch('fetchDetails', this.$route.query);
  },
};
</script>

<style lang="scss" scoped>

</style>
