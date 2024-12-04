<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import menus from './menu'
import { getListResponse } from '@/mock/getList';
import { getList } from '@/api/match'
import { showToast } from 'vant';

const gamesType = [
  'mic',
  'football',
  'basketball',
  'tennis',
  'baseball',
  'poker',
  'game7',
  'game8',
  'game9',
];

const games = (window as any).games
const pageSize = ref(5) // 每页显示的游戏数量
const activeNames = ref(['1']);
const activeNames2 = ref(['1']);
const show = ref(false);
const onInput = (value: any) => showToast(value);
const onDelete = () => showToast('Delete');
// const value = ref('');

function getImageUrl(index: number) {
  return new URL(`../assets/images/icons/tabbar/tab${index + 1}.svg`, import.meta.url).href;
}
function getGameImageUrl(game: string) {
  return new URL(`../assets/images/icons/game/${game}.png`, import.meta.url).href;
}
const fetchData = async (): Promise<any> => {
  const payload = {
    'current': 1,
    'languageType': 'CMN',
    'orderBy': 0,
    'isPC': false,
    'type': 1
  }
  await getList({ data: payload }).then(res => {
    console.log('getList', res)
  })
}

const pages = computed(() => {
  const pageCount = Math.ceil(gamesType.length / pageSize.value);
  const pages = [];
  for (let i = 0; i < pageCount; i++) {
    pages.push(gamesType.slice(i * pageSize.value, (i + 1) * pageSize.value));
  }
  return pages;
});

const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};

onMounted(() => {
  fetchData()
})

// console.log(games)
</script>

<template>
  <div id="home">
    <van-pull-refresh
      v-model="loading"
      :success-text="$t('刷新成功')"
      @refresh="onRefresh"
    >
      <section>
        <div class="card">
          <div class="flex justify-between">
            <img src="../assets/images/logo.png" class="logo" alt="">
            <div class="flex">
              <router-link to="/login">
                <van-button type="primary" class="login-btn">{{ $t('登录') }}</van-button>
              </router-link>
              <router-link to="/register">
                <van-button type="primary" class="register-btn">{{ $t('注册') }}</van-button>
              </router-link>
            </div>
          </div>
          <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item v-for="(page, index) in pages" :key="index">
              <div class="flex justify-between">
                <div v-for="game in page" :key="game">
                  <img class="game" :src="getGameImageUrl(game)" />
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </section>

      <section>
        <van-swipe class="my-swipe" indicator-color="white" :width="270">
          <van-swipe-item v-for="(game, index) in games" :key="index">
            <div class="card mx-3" style="border-radius: 6px; padding: 8px; font-size: 11px">
              <div class="grid grid-cols-3 gap-4">
                <div class="flex justify-between items-center flex-col">
                  <div style="font-size: 11px">{{ game.date }}</div>
                  <div><img class="w-9" :src="getGameImageUrl('baseball')" alt=""></div>
                  <div>{{ game.a }}</div>
                </div>
                <div class="flex justify-between items-center flex-col">
                  <div style="font-size: 11px">{{ game.title }}</div>
                  <div class="text-black text-xl font-bold">VS</div>
                  <div>{{ game.type }}</div>
                </div>
                <div class="flex justify-between items-center flex-col">
                  <div style="font-size: 11px">75</div>
                  <div><img class="w-9" :src="getGameImageUrl('basketball')" alt=""></div>
                  <div>{{ game.b }}</div>
                </div>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </section>

      <section>
        <div class="px-3 mb-3">
          <img src="../assets/images/banner.png" alt="">
        </div>
      </section>

      <section>
        <div>
          <van-collapse v-model="activeNames" v-for="(item, index) in getListResponse.data.records" :key="index" class="mb-3">
            <van-collapse-item :name="index">
              <template #title>
                <div class="flex items-center">
                  <img src="../assets/images/icons/football.svg" alt="">
                  <span class="mx-2 text-xl font-bold">{{ $t('足球') }}</span>
                  <img src="../assets/images/icons/double-top.svg" alt="">
                </div>
              </template>
              
              <div class="flex justify-between mb-5">
                <div class="flex">
                  <img src="../assets/images/icons/favorite.svg" alt="">
                  <div class="ml-3">{{ item.bt }}</div>
                </div>
                <router-link to="/sport-detail">
                  <div>
                    75
                  </div>
                </router-link>
              </div>

              <div class="flex justify-between items-center mt-2 text-black" v-for="(ts, index2) in item.ts" :key="index2">
                <div>{{ ts.na }}</div>
                <div class="flex">
                  <div class="card-sm mr-2 font-bold" v-for="(item, index) in 3" :key="index" @click="show = true">
                    <div class="text-sm" style="color: rgb(12, 24, 108)">
                      -0.5/1
                    </div>
                    <div style="color: #000">
                      2.05
                    </div>
                  </div>
                </div>
              </div>
            </van-collapse-item>
          </van-collapse>

          <van-collapse v-model="activeNames2">
            <van-collapse-item name="1">
              <template #title>
                <div class="flex items-center">
                  <img src="../assets/images/icons/basketball.svg" alt="">
                  <span class="mx-2 text-xl font-bold">{{ $t('篮球') }}</span>
                  <img src="../assets/images/icons/double-top.svg" alt="">
                </div>
              </template>
              
              <div class="flex justify-between mb-5">
                <div class="flex">
                  <img src="../assets/images/icons/favorite.svg" alt="">
                  <div class="ml-3">21-02 04:00</div>
                </div>
                <div>
                  75
                </div>
              </div>

              <div class="flex justify-between items-center text-black">
                <div>{{ $t('谢菲尔德联') }}</div>
                <div class="flex">
                  <div class="card-sm mr-2 font-bold" v-for="(item, index) in 3" :key="index" >
                    <div class="text-sm" style="color: rgb(12, 24, 108)">
                      -0.5/1
                    </div>
                    <div style="color: #000">
                      2.05
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-between items-center mt-2 text-black">
                <div>{{ $t('布莱顿') }}</div>
                <div class="flex">
                  <div class="card-sm mr-2 font-bold" v-for="(item, index) in 3" :key="index" >
                    <div class="text-sm" style="color: rgb(12, 24, 108)">
                      -0.5/1
                    </div>
                    <div style="color: #000">
                      2.05
                    </div>
                  </div>
                </div>
              </div>
            </van-collapse-item>
          </van-collapse>

          <!-- 更多足球赛事 > -->
        </div>
        
      </section>
    </van-pull-refresh>

    <van-tabbar route>
      <van-tabbar-item v-for="(menu, index) in menus" :key="index" :to="menu.value">
        <img :src="getImageUrl(index)" alt="">
        <div class="mt-1 text-xs">{{ $t(`${menu.title}`) }}</div>
      </van-tabbar-item>
    </van-tabbar>

    <van-popup
      v-model:show="show"
      round
      position="bottom"
    >
      <div class="top">
        <div class="title">
          {{ $t('单注投注') }}
        </div>
        <div>
          <van-button round type="primary">
            <van-icon name="delete-o" />
          </van-button>
        </div>
      </div>
      <div class="bottom">
        <div class="card">
          <div class="content">
            <div>足球 进球:大/小</div>
            <van-number-keyboard
              :show="show"
              theme="custom"
              extra-key="."
              :close-button-text="$t('完成')"
              @blur="show = false"
              @input="onInput"
              @delete="onDelete"
            />
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 20px;
  padding: 16px 24px;
  margin-bottom: 8px;
  box-shadow: 0px 2px 6px rgba(255, 255, 255, 0.18);
  // height: 500px;
}

.logo {
  width: 29%;
  height: 100%;
}

.login-btn {
  color: rgb(12, 24, 108) !important;
  background: #fff !important;
  margin-right: 8px !important;
}

.game {
  width: 60px;
  height: 60px;
}

.van-button {
  width: 72px;
  height: 30px !important;
  font-size: 12px !important;
}

.van-cell {
  border-radius: 20px 20px 0 0;
}

.van-popup--bottom {
  height: 85%;
  background: rgb(12, 24, 108);
}

.top {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    color: #fff;
    font-weight: bold;
  }

  .van-button {
    width: 48px;
    height: 30px !important;
    font-size: 12px !important;
    border-radius: 20px !important;
    margin: 0 !important;
    background: rgba(255, 255, 255, 0.1) !important;
  }
}
</style>
