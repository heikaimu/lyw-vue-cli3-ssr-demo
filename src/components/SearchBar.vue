<!--
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2021-03-01 13:55:29
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-03-02 14:25:14
-->
<template>
  <div class="search-wrapper">
    <el-autocomplete
      v-model="keyword"
      class="inline-input"
      :fetchSuggestions="querySearch"
      placeholder="请输入内容"
      @select="handleSelect"
    >
      <el-button slot="append" icon="el-icon-search" @click="handleSearch" />
    </el-autocomplete>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: ''
    };
  },

  computed: {
    // 从 store 的 state 对象中的获取 hotKeywords
    hotKeywords() {
      return this.$store.state.hotKeywords;
    }
  },

  mounted() {
    this.$store.dispatch('fetchHotKeywords');
  },

  methods: {
    handleSearch() {
      this.$emit('search', this.keyword);
    },

    handleSelect() {
      this.$emit('search', this.keyword);
    },

    querySearch(queryString, cb) {
      const restaurants = this.hotKeywords.map(keyword => ({
        value: keyword,
        label: keyword
      }));
      cb(restaurants);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
