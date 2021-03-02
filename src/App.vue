<!--
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2021-02-26 13:22:10
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-03-02 14:12:46
-->
<template>
  <div id="app">
    <web-header />
    <div class="web-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import WebHeader from '@/components/WebHeader';
export default {
  components: {
    WebHeader
  }
};
</script>

<style lang="scss">
.web-container {
  padding-top: 60px;
}
</style>
