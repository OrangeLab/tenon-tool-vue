<template>
  <view class="rule-list">
    <view>
      <view>
        <header>
          {{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_User_jXXg',
              { app_name: this.appName }
            )
          }}
        </header>
        <view>{{
          $t(
            'Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_deduction_JRtY',
            { app_name: this.appName }
          )
        }}</view>
      </view>
      <view>
        <header>
          {{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_Conditions_NhYA',
              { app_name: this.appName }
            )
          }}
        </header>
        <view>{{
          $t(
            'Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_User_OPpo',
            { app_name: this.appName }
          )
        }}</view>
        <view>
          <view>{{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Call_the_jNCs',
              { app_name: this.appName }
            )
          }}</view>
          <view>{{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_User_JFZq',
              { app_name: this.appName }
            )
          }}</view>
          <view>{{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_fqPZ',
              { app_name: this.appName }
            )
          }}</view>
          <view>{{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Payment_Coupon_ifGs',
              { app_name: this.appName }
            )
          }}</view>
          <view>{{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Order_not_ZhCd',
              { app_name: this.appName }
            )
          }}</view>
        </view>
      </view>
      <view>
        <header>
          {{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_a_vNCw',
              { app_name: this.appName }
            )
          }}
        </header>
        <view>{{
          $t(
            'Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_Order_qdyp',
            { app_name: this.appName }
          )
        }}</view>
      </view>
      <template v-if="locationCountry !== 'JP'">
        <view>
          <header>
            {{
              $t(
                'Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_a_PqFd',
                { app_name: this.appName }
              )
            }}
          </header>

          <!--  产品确认每个国家都一样  -->
          <view>{{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_The_sum_rsyy',
              { app_name: this.appName, coupon_count: 4 }
            )
          }}</view>
        </view>
      </template>
      <view>
        <header>
          {{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Change_coupon_Jekr',
              { app_name: this.appName }
            )
          }}
        </header>
        <view>{{
          $t(
            'Global_Rider_add_coupon_rules_introduction_in_pax_app_Amount_coupon_GsdB',
            { app_name: this.appName }
          )
        }}</view>
      </view>
      <view>
        <header>
          {{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Account_Coupon_ELCD',
              { app_name: this.appName }
            )
          }}
        </header>
        <view>{{
          $t(
            'Global_Rider_add_coupon_rules_introduction_in_pax_app_Account_Coupon_mVZg',
            { app_name: this.appName }
          )
        }}</view>
      </view>
      <view>
        <header>
          {{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_valid_cseI',
              { app_name: this.appName }
            )
          }}
        </header>
        <view>{{
          $t(
            'Global_Rider_add_coupon_rules_introduction_in_pax_app_Validity_period_lChK',
            { app_name: this.appName }
          )
        }}</view>
      </view>
      <view>
        <header>
          {{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_Trip_Pwlh',
              { app_name: this.appName }
            )
          }}
        </header>
        <view>{{
          $t(
            'Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_Order_lRoU',
            { app_name: this.appName }
          )
        }}</view>
      </view>
      <view>
        <header>
          {{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_Status_mFAA',
              { app_name: this.appName }
            )
          }}
        </header>
        <view>{{
          $t(
            'Global_Rider_add_coupon_rules_introduction_in_pax_app_payment_order_PVaP',
            { app_name: this.appName }
          )
        }}</view>
      </view>
      <view>
        <header>
          {{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_solution_KFix',
              { app_name: this.appName }
            )
          }}
        </header>
        <view>{{
          $t(
            'Global_Rider_add_coupon_rules_introduction_in_pax_app_solution_cause_rKls',
            { app_name: this.appName }
          )
        }}</view>
        <view>
          <view>{{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Use_consistent_XCoD',
              { app_name: this.appName }
            )
          }}</view>
          <view>{{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_signal_network_PHAI',
              { app_name: this.appName }
            )
          }}</view>
          <view>{{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Version_user_uPHN',
              { app_name: this.appName }
            )
          }}</view>
        </view>
      </view>
      <view>
        <header>
          {{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Tips_CRoe',
              { app_name: this.appName }
            )
          }}
        </header>
        <view>
          <view>{{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_User_YooP',
              { app_name: this.appName }
            )
          }}</view>
          <view>{{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Page_version_vNaT',
              { app_name: this.appName }
            )
          }}</view>
          <view>{{
            $t(
              'Global_Rider_add_coupon_rules_introduction_in_pax_app_Help_menu_yeXI',
              { app_name: this.appName }
            )
          }}</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import { urlQuery } from '../../common/js/url'
import executeFusionFn from '../../common/js/fusion'

const appFromName = urlQuery.appName || 'DIDI'

export default {
  data() {
    return {
      appName: appFromName,
      locationCountry: urlQuery.location_country || 'US',
    }
  },
  created() {
    executeFusionFn(function () {
      const FusionStreamModule =
        (window.Fusion &&
          window.Fusion.loadModule &&
          window.Fusion.loadModule('GulfstreamModule')) ||
        undefined

      FusionStreamModule &&
        FusionStreamModule.setTopRightBtn &&
        FusionStreamModule.setTopRightBtn({ txt: '' })
    })
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="stylus">
@import '../../common/css/common.styl';
.rule-list
    ul {
        padding-bottom 40px
        box-sizing border-box

        >li {
            padding 0 16px
            box-sizing border-box
            header, p {
                display block
                font-size 14px
                color #000
                margin-top 20px
             }
             p {
                 color #666
                 margin-top 6px
                 line-height 16px
             }

             ul {
                 > li {
                     margin-top 6px
                     padding 0
                     font-size 14px
                     color #666
                     line-height 16px
                 }
             }
        }
    }
</style>
