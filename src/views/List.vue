<!--
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2021-02-26 15:10:47
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-03-02 14:33:44
-->
<template>
  <div class="list-wrapper">
    <resource-list :data="searchList" @click="handleClick" />
  </div>
</template>

<script>
import ResourceList from '@/components/ResourceList';
export default {
  components: {
    ResourceList
  },

  computed: {
    // 从 store 的 state 对象中的获取 searchList。
    searchList() {
      return this.$store.state.searchList;
    }
  },

  mounted() {
    this.$store.dispatch('fetchSearchList', this.$route.query.keyword);
  },

  methods: {
    handleClick(item) {
      this.$router.push({
        name: 'Details',
        query: {
          type: item.cateId,
          onlyStr: item.onlyStr
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  padding-top: 20px;
}
</style>
