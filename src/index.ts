import { parse } from '@vue/compiler-sfc'
import generate from './template/generate'
import tenonScriptTransform from './script'
import tenonStylesTransform from './styles'
import tenonTemplateTransform from './template'

// vueToTenon 解析
function vueToTenon(vueString: string) {
  // 1. 编译ast
  let descriptor = parse(vueString).descriptor
  // 2. script 处理
  let script = tenonScriptTransform(descriptor.script)
  // 3. style 处理
  let style = tenonStylesTransform(descriptor.styles)
  // 4. template 处理
  let template = tenonTemplateTransform(descriptor.template)
  return { template, script, style }
}
export { vueToTenon }

/**
 *template 模板编译器
 *
 * @export
 * @param {string} vueString
 * @return {*}  {string}
 */
export default function tenonProgram(vueString: string): string {
  let { template, script, style } = vueToTenon(vueString)
  console.log(template + script + style)
  return template + script + style
}

tenonProgram(`
<template>
  <div class="pay-history" :style="{display: showPage}">
    <template v-if="recordsList.length">
      <cube-scroll
        ref="scroll"
        :data="recordsList"
        @pulling-up="onScrollPullingUp"
        :options="options"
      >
        <ul>
          <li v-for="(item, index) in recordsList" :key="index">
            <!-- 货币改造添加，后端后端接口稳定后可以删除兜底 v-else -->
            <p v-if="item.amountSplit && item.amountSplit.length === 4">
              <span>{{ item.title }}</span>
              <span v-if="item.isIncode == 1">+{{ item.amountSplit[3] }}</span>
              <span class="low" v-else>-{{ item.amountSplit[3] }}</span>
            </p>
            <p v-else>
              <span>{{ item.title }}</span>
              <span v-if="item.isIncode == 1">+{{ item.amount }}</span>
              <span class="low" v-else>-{{ item.amount }}</span>
            </p>
            <p>{{ item.subTitle }}</p>
            <p>{{ item.createTime }}</p>
          </li>
        </ul>
      </cube-scroll>
    </template>

    <div :class="['empty', showEmpty ? 'show' : '']" v-else>
      <div class="empty-bg"></div>
      <p>{{ $t('empty') }}</p>
    </div>
  </div>
</template>

<script>
  import * as localApi from '../../api/index.js';
  import _get from '../../lib/lodash-es/get';
  import {urlQuery} from '../../common/js/url';
  import executeOmegaFn from '../../common/js/omega';

  export default {
    data() {
      return {
        recordsList: [],
        currency: '',
        padgeIndex: 0,
        showEmpty: false,
        hasNext: true,
        showPage: 'none',
        token: '',
        // 是否发送了请求 false 没有发送  true 已发送
        alreadyReq: false,
        pageSize: 20,
        options: {
          scrollbar: false,
          pullUpLoad: true
        }
      };
    },
    created() {
      const {currency = '', token = ''} = urlQuery;

      this.showLoadingToast();

      this.token = token;

      if (currency) {
        this.currency = currency;
      }
    },
    watch: {},
    computed: {
      historyList: function () {
        return this.recordsList.filter(item => {
          return item.title && item.subTitle;
        });
      }
    },
    mounted() {
      executeOmegaFn();

      if (this.token) {
        this.alreadyReq || this.getRecordList();
      } else {
        this.noReacrdList();
      }
    },
    methods: {
      showLoadingToast() {
        this.loadingToast = this.$createToast({
          txt: '',
          time: 0,
          type: 'loading'
        });

        this.loadingToast.show();
      },
      onScrollPullingUp: function () {
        if (!this.hasNext) {
          this.options.pullUpLoad = {txt: {noMore: 'no more data'}};
          this.$refs.scroll.forceUpdate();
          return;
        }

        this.padgeIndex += this.pageSize;

        this.alreadyReq || this.getRecordList();
      },
      noReacrdList: function () {
        this.showEmpty = true;
        this.recordsList = [];
      },
      getRecordList: function () {
        this.alreadyReq = true;

        localApi
          .recordHistory({
            token: this.token,
            startId: this.padgeIndex || 0,
            pageSize: this.pageSize || 20,
            currency: this.currency
          })
          .then(resp => {
            this.alreadyReq = false;
            this.loadingToast.hide();
            this.showPage = 'block';

            const res = resp || {};

            if (res.errno !== 0) {
              this.noReacrdList();
              return;
            }

            this.recordsList = this.recordsList.concat(
              _get(res, 'data.records', [])
            );

            if (this.recordsList.length === 0) {
              this.noReacrdList();
            }

            this.hasNext = _get(res, 'data.hasNext', false);
          })
          .catch(err => {
            this.alreadyReq = false;
          });
      }
    }
  };
</script>

<style lang="stylus">
  @import '../../common/css/common.styl';
  .pay-history
      position relative
      width 100%
      height 100%
      color #ccc
      font-size 14px


      ul
          padding 0 18px
          box-sizing border-box
          background-color #fff
          li
              border-bottom 1px solid #e8e8e8b5
              padding 15px 0 8px
              box-sizing border-box
              p
                  font-size 10px
                  color #333

                  .low
                      color #333 !important

                  span
                      &:last-child
                          float right
                          color #24c26d


                  &:first-child
                      font-size 16px
                      margin-bottom 5px
                      min-height 16px

                  &:last-child
                      margin-top 5px
                      font-size 10px
                      color #999
                      min-height 10px
      .empty
          display none
          .empty-bg
              width 126px
              height 126px
              background url(../../common/img/empty.png) no-repeat center center;
              background-size @width @width
              margin 100px auto 0

          p
              color #666
              font-size 16px
              text-align center
      .show
          display: block
</style>


`)
