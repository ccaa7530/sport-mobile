<script lang="ts" setup></script>

<template>
  <div class="no-data">
    <div class="inner-box">
      <span class="title">NO DATA</span>
      <span class="sub-title">暂无数据</span>
      <div class="split-line"></div>
    </div>
    <span class="description">暂时没有数据可以访问</span>
  </div>
</template>

<style scoped lang="scss">
  .no-data {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .inner-box {
      background-image: url('./assets/bg.png');
      background-size: 100% 100%;
      width: 190px;
      height: 106px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .title {
        color: #2d3748;
        font-weight: 900;
        font-size: 24px;
      }
      .sub-title {
        font-size: 16px;
        line-height: 24px;
        color: #131a3e;
        margin: 8px 0;
      }
      .split-line {
        width: 78px;
        height: 8px;
        background: #4c6fff;
        border-radius: 1px;
      }
    }
    .description {
      font-size: 14px;
      line-height: 22px;
      color: #2d3748;
      margin-top: 10px;
    }
  }
</style>
