<script setup lang="ts">
import { ref } from 'vue';
import { t } from '../lang/index';
import { showToast } from 'vant';
import { useRouter } from "vue-router";
const router = useRouter();

const betTabs = [
  { text: t('所有盘口'), value: 'a' },
  { text: t('让球'), value: 'b' },
  { text: t('进球'), value: 'c' },
  { text: t('上半场'), value: 'd' },
  { text: t('角球'), value: 'e' },
  { text: t('分钟'), value: 'f' }
]

// const loading = ref(false);
const activeTab = ref('bet');
const betActiveTab = ref('a');

const handleClick = () => {
  showToast('點擊')
}

// const onRefresh = () => {
//   setTimeout(() => {
//     loading.value = false;
//   }, 1000)
// }

function onClickLeft() {
  router.back();
}

</script>

<template>
  <div id="sport-detail">
    <van-nav-bar left-arrow @click-left="onClickLeft">
      <template #left>
        <img src="@/assets/icons/arrow-left.svg">
      </template>
      <template #title>
        <div @click="handleClick" class="header-btn">
          <van-space :size="5">
            <span>{{ t('英格蘭超級聯賽') }}</span>
            <img src="@/assets/icons/select-arrow-down.svg">
          </van-space>
        </div>
      </template>
      <template #right>
        <img src="@/assets/icons/orders.svg">
      </template>
    </van-nav-bar>

    <section class="game-live">
      <van-row justify="center" class="score">
        <van-space :size="20">
          <div>{{ t('第25轮 20-02') }}</div>
        </van-space>
      </van-row>
  
      <van-row justify="center" class="team" gutter="20">
        <van-col span="10" class="text-right">{{ t('埃弗顿') }}</van-col>
        <van-col span="4">04:00</van-col>
        <van-col span="10" class="text-left">{{ t('水晶宫') }}</van-col>
      </van-row>
    </section>
    <!--比賽H5動畫-->
    <div class="game-h5">
      <img src="@/assets/images/sport-detail-game-h5.png" height="79">
    </div>
    <!--曲線圖片-->
    <div>
      
    </div>
    <van-tabs v-model:active="activeTab" line-width="0" animated lazy-render>
      <!--投注-->
      <van-tab name="bet" title-class="tab-item">
        <template #title>
          <div>{{ t('投注') }}</div>
        </template>
        <!--投注tab頁，抽comp-->
        <div>
          <!--盘口Tab-->
          <van-tabs v-model:active="betActiveTab" line-width="0" shrink lazy-render class="bet-sub-tabs">
            <van-tab disabled>
              <template #title>
                <img src="@/assets/icons/collpase-all.svg">
              </template>
            </van-tab>
            <van-tab
              v-for="(betTab, index) in betTabs"
              :key="betTab.value"
              title-class="sub-tab-item"
            >
              <template #title>
                <div>{{ t(betTab.text) }}</div>
              </template>
              <div v-if="betTab.value === 'a'">{{ t('所有盤口') }}</div>
            </van-tab>
          </van-tabs>
        </div>
      </van-tab>

      <!--聊天-->
      <van-tab name="chat" title-class="tab-item">
        <template #title>
          <div>{{ t('聊天') }}</div>
        </template>
        <div>B</div>
      </van-tab>

      <!--主播-->
      <van-tab name="anchor" title-class="tab-item">
        <template #title>
          <div>{{ t('主播') }}</div>
        </template>
        <div>C</div>
      </van-tab>

      <!--預測-->
      <van-tab name="predict" title-class="tab-item">
        <template #title>
          <div>{{ t('預測') }}</div>
        </template>
        <div>D</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped lang="scss">
#sport-detail {
  height: 100dvh;
  background: #ffffff;
}
.game-live {
  padding-top: 30px;
}
.score, .team {
  color: rgb(51, 51, 51);
}
.score {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5.5px;
}
.team {
  margin-bottom: 20px;

  > div {
    font-size: 14px;
  }

  > span {
    font-size: 13px;
  }
}

.van-tab {
  &.tab-item .van-tab__text > div,
  &.sub-tab-item .van-tab__text > div {
    font-size: 14px;
    height: 30px;
    width: 80px;
    border-radius: 100px;
    color: rgb(51, 51, 51);
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &--active.tab-item .van-tab__text > div,
  &--active.sub-tab-item .van-tab__text > div {
    background: rgb(12, 24, 108);
    color: #ffffff;
  }

  &.sub-tab-item .van-tab__text > div {
    width: fit-content;
    padding: 10px;
  }
}

.header-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 138px;
  height: 26px;
  font-weight: normal;
  border-radius: 4px;
  box-shadow: 0px 2px 6px 0px rgba(106, 106, 106, 0.18);
  font-size: 15px;
  margin: 3px;
  color: rgb(35, 38, 47);
}

</style>