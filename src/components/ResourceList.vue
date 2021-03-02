<!--
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2021-03-01 13:23:50
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-03-01 14:38:41
-->
<template>
  <div class="resource-list">
    <el-row :gutter="20">
      <el-col v-for="(item, index) in data" :key="index" :span="4">
        <resource-card :data="item" v-on="$listeners" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ResourceCard from './ResourceCard';
export default {
  components: {
    ResourceCard
  },

  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.resource-list {
  padding: 0 20px;
}
</style>
