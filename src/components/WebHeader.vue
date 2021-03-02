<!--
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2021-03-01 14:49:34
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-03-01 17:49:21
-->
<template>
  <div class="web-header">
    <search-bar @search="handleSearch" />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar';
export default {
  components: {
    SearchBar
  },

  methods: {
    handleSearch(keyword) {
      this.$router.push({
        name: 'List',
        query: { keyword }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.web-header {
  padding: 0 10px;
  height: 60px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>
