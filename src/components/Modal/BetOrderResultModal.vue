<script setup lang="ts">
import { useBetCartStore } from '@/stores/betCart';
import { useGlobalModalStore } from '@/stores/globalModal';
import { onMounted } from 'vue';

const betCartStore = useBetCartStore();
const globalModalStore = useGlobalModalStore();

onMounted(() => {
  console.log('success modal mounted')
})

const onConfirmButtonClick = () => {
  globalModalStore.hide();
}

</script>

<template>
  <div id="bet-order-success-modal">
    <div class="header">
      <div class="title">
        {{ $t('已提交') }}
      </div>
      <div class="warning">
        <span>{{ $t('失敗') }}</span>
        <span>1</span>
        <span>{{ $t('筆') }}</span>
      </div>
    </div>
    <div class="content">
      <div class="content-header">
        <!--模擬情況，接上api要調整-->
        <div
          class="left"
          :class="[{
            'bg-success': betCartStore.items.length === 2,
            'bg-error': betCartStore.items.length === 3
          }]"
        >
          <!--v-if只是模擬情況，接上api要調整-->
          <template v-if="betCartStore.items.length === 2">
            <SvgIcon name="check-circle" color="#8BAF35" />
            {{ $t('投注成功') }}
          </template>
          <template v-else>
            <SvgIcon name="x-circle" color="#CB0202" />
            {{ $t('投注失敗') }}
          </template>
        </div>
        <div class="right">
          <div class="bet-order-count">
            <span>{{ $t('共')}}</span>
            <span class="number">1</span>
            <span>{{ $t('筆') }}</span>
          </div>
          <div class="bet-order-win-amount">
            <span>{{ $t('可赢') }}</span>
            <span class="number">2.02</span>
          </div>
        </div>
      </div>
      <div class="item-list">
        <!--注單資訊-->
        <div class="bet-item">
          <div class="title">
            <div class="left">
              <img src="@/assets/images/betOrderModal/soccer.png" width="22" height="22" />
              <span>{{ $t('早盤') }}</span>
              <span>07-03 01:45</span>
            </div>
            <!--模擬情況，接上api要調整-->
            <div
              class="status"
              :class="[{
                'text-success': betCartStore.items.length === 2,
                'text-error': betCartStore.items.length === 3,
              }]"
            >
              <!--v-if只是模擬情況，接上api要調整-->
              <template v-if="betCartStore.items.length === 2">
                <SvgIcon name="check-circle-outline" color="#8BAF35" />
                <span>{{ $t('已确认') }}</span>
              </template>
              <template v-else>
                <SvgIcon name="x-circle-outline" color="rgb(51, 51, 51)" />
                <span>{{ $t('已取消') }}</span>
              </template>
            </div>
          </div>
          <div class="detail">
            <div class="row">
              <div class="text-primary">{{ $t('让球') }}</div>
              <div>{{ $t('欧洲盘') }}</div>
            </div>
            <div class="row">
              <div class="text-primary">{{ $t('里斯本竞技') }} {{ $t('VS') }} {{ $t('亚特兰大') }}</div>
              <div></div>
            </div>
            <div class="row">
              <div class="text-primary">{{ $t('亚特兰大') }} +0/0.5 @2.01</div>
              <div></div>
            </div>
            <div class="row">
              <div class="flex gap-2 items-center">
                <span>{{ $t('投注') }}</span>
                <img src="@/assets/images/currency/USDT.png" class="h-[15px]" />
                <span class="text-primary text-bold">2</span>
              </div>
              <div></div>
            </div>
            <div class="row">
              <!--v-if只是模擬情況，接上api要調整-->
              <template v-if="betCartStore.items.length === 2">
                <div class="flex gap-2 items-center">
                  <span class="text-secondary">{{ $t('可赢') }}</span>
                  <img src="@/assets/images/currency/USDT.png" class="h-[15px]" />
                  <span class="text-secondary text-bold">2.02</span>
                </div>
                <div class="time text-secondary">
                  06-03 13:21
                </div>
              </template>
              <template v-else>
                <div class="flex gap-2 items-center">
                  <span class="text-secondary">{{ $t('取消：余额不足，请前往存款') }}</span>
                </div>
                <div class="time text-secondary">
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="content-footer">
        <div class="button" @click="onConfirmButtonClick">{{ $t('確定') }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  #bet-order-success-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 44px;
      width: 100vw;
      max-width: 355px;
      background-color: rgb(12, 24, 108);
      border-radius: 20px 20px 0 0;
      color: white;
      font-weight: bold;
      font-size: 16px;
      padding: 0 10px;

      .title {
      }

      .warning {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border-radius: 100px;
        font-size: 12px;
        font-weight: bold;
        line-height: 20px;
        height: 24px;
        gap: 3px;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      min-height: 277px;
      width: 100vw;
      max-width: 355px;
      position: relative;

      &::before {
        background-color: rgb(12, 24, 108);
        height: 20px;
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 0;
        content: '';
      }

      .content-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 14px;
        background: rgb(245, 245, 245);
        border-radius: 20px 20px 0 0;
        height: 50px;
        z-index: 1;

        .left {
          display: flex;
          align-items: center;
          color: white;
          gap: 2px;
          padding: 5px 6px;
          line-height: 20px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 500;

          &.bg-success {
            background: rgb(139, 175, 53);
          }
          &.bg-error {
            background: rgb(203, 2, 2);
          }
        }

        .right {
          display: flex;
          flex-direction: column;
          font-weight: 500;
          font-size: 12px;
          color: rgb(153, 153, 153);

          > div {
            display: flex;
            flex-direction: row;
            gap: 5px;
            justify-content: flex-end;
          }

          .number {
            color: rgb(12, 24, 108);
          }
        }
      }

      .item-list {
        display: flex;
        flex-direction: column;
        padding: 12px 14px 0 14px;
        // min-height: 200px;
        max-height: 500px;
        overflow-y: scroll;
        background: white;

        .bet-item {
          display: flex;
          flex-direction: column;

          .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 13px;

            .left {
              display: flex;
              flex-direction: row;
              gap: 9px;
              font-weight: bold;
              color: rgb(51, 51, 51);
            }

            .status {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0 6px;
              height: 24px;
              gap: 2px;
              border: 1px solid rgb(223, 223, 223);
              border-radius: 6px;
              font-size: 12px;
              font-weight: 500;

              &.text-success {
                color: rgb(139, 175, 53);
              }

              &.text-error {
                color: rgb(51, 51, 51);
              }
            }
          }

          .detail {
            display: flex;
            flex-direction: column;
            gap: 1px;
            padding-left: 31px;

            .row {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              font-size: 12px;
              line-height: 20px;
              letter-spacing: -0.24px;

              .text-primary {
                color: rgb(51, 51, 51);
              }
              .text-secondary {
                color: rgb(153, 153, 153);
              }
              .text-bold {
                font-weight: bold;
              }
            }
          }
        }
      }

      .content-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        padding: 12px;
        border-radius: 0 0 20px 20px;

        .button {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          background-color: rgb(12, 24, 108);
          color: white;
          font-size: 16px;
          height: 44px;
        }
      }

      .background-overlay {
        background-color: rgb(12, 24, 108);
        height: 20px;
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 0;
      }


    }
  }
</style>