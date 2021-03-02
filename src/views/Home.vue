<!--
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2021-02-26 15:10:53
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-03-02 14:42:50
-->
<template>
  <div>
    <ul class="home-wrapper">
      <li v-for="(item, index) in homeData" :key="index" class="group">
        <el-divider contentPosition="left">{{ titles[index] }}</el-divider>
        <resource-list :data="item" @click="handleClick" />
      </li>
    </ul>
  </div>
</template>

<script>
import ResourceList from '@/components/ResourceList';
export default {
  components: {
    ResourceList
  },
  
  data() {
    return {
      titles: ['电影', '电视剧', '综艺', '动漫']
    };
  },

  computed: {
    // 从 store 的 state 对象中的获取 homeData。
    homeData() {
      return this.$store.state.homeData;
    }
  },

  mounted() {
    this.$store.dispatch('fetchHomeData');
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
    },

    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },

    handleSelect() {

    }
  }
};
</script>

<style lang="scss" scoped>
.home-wrapper {
  .group {
  }
}
</style>
