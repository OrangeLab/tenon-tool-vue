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
  return template + script + style
}

// tenonProgram(`
// <!-- @format -->

// <template>
//     <div class="rule-list">
//         <ul>
//             <li>
//                 <header>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_User_jXXg', {app_name: this.appName})}}</header>
//                 <p>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_deduction_JRtY', {app_name: this.appName})}}</p>
//             </li>
//             <li>
//                 <header>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_Conditions_NhYA', {app_name: this.appName})}}</header>
//                 <p>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_User_OPpo', {app_name: this.appName})}}</p>
//                 <ul>
//                     <li>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Call_the_jNCs', {app_name: this.appName})}}</li>
//                     <li>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_User_JFZq', {app_name: this.appName})}}</li>
//                     <li>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_fqPZ', {app_name: this.appName})}}</li>
//                     <li>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Payment_Coupon_ifGs', {app_name: this.appName})}}</li>
//                     <li>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Order_not_ZhCd', {app_name: this.appName})}}</li>
//                 </ul>
//             </li>
//             <li>
//                 <header>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_a_vNCw', {app_name: this.appName})}}</header>
//                 <p>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_Order_qdyp', {app_name: this.appName})}}</p>
//             </li>
//             <template v-if="locationCountry !== 'JP'">
//             <li>
//                 <header>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_a_PqFd', {app_name: this.appName})}}</header>
//                 <!-- 产品确认每个国家都一样 -->
//                 <p>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_The_sum_rsyy', {app_name: this.appName, coupon_count: 4})}}</p>
//             </li>
//             </template>
//             <li>
//                 <header>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Change_coupon_Jekr', {app_name: this.appName})}}</header>
//                 <p>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Amount_coupon_GsdB', {app_name: this.appName})}}</p>
//             </li>
//             <li>
//                 <header>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Account_Coupon_ELCD', {app_name: this.appName})}}</header>
//                 <p>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Account_Coupon_mVZg', {app_name: this.appName})}}</p>
//             </li>
//             <li>
//                 <header>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_valid_cseI', {app_name: this.appName})}}</header>
//                 <p>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Validity_period_lChK', {app_name: this.appName})}}</p>
//             </li>
//             <li>
//                 <header>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_Trip_Pwlh', {app_name: this.appName})}}</header>
//                 <p>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_Order_lRoU', {app_name: this.appName})}}</p>
//             </li>
//             <li>
//                 <header>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_Status_mFAA', {app_name: this.appName})}}</header>
//                 <p>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_payment_order_PVaP', {app_name: this.appName})}}</p>
//             </li>
//             <li>
//                 <header>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_solution_KFix', {app_name: this.appName})}}</header>
//                 <p>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_solution_cause_rKls', {app_name: this.appName})}}</p>
//                 <ul>
//                     <li>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Use_consistent_XCoD', {app_name: this.appName})}}</li>
//                     <li>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_signal_network_PHAI', {app_name: this.appName})}}</li>
//                     <li>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Version_user_uPHN', {app_name: this.appName})}}</li>
//                 </ul>
//             </li>
//             <li>
//                 <header>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Tips_CRoe', {app_name: this.appName})}}</header>
//                 <ul>
//                     <li>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Coupon_User_YooP', {app_name: this.appName})}}</li>
//                     <li>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Page_version_vNaT', {app_name: this.appName})}}</li>
//                     <li>{{$t('Global_Rider_add_coupon_rules_introduction_in_pax_app_Help_menu_yeXI', {app_name: this.appName})}}</li>
//                 </ul>
//             </li>
//         </ul>
//     </div>
// </template>

// <script>
// import {urlQuery} from '../../common/js/url';
// import executeFusionFn from '../../common/js/fusion';

// const appFromName = urlQuery.appName || 'DIDI';

// export default {
//   data() {
//     return {
//       appName: appFromName,
//       locationCountry: urlQuery.location_country || 'US',
//     };
//   },
//   created() {
//     executeFusionFn(function () {
//       const FusionStreamModule = (window.Fusion && window.Fusion.loadModule && window.Fusion.loadModule('GulfstreamModule')) || undefined;

//       FusionStreamModule && FusionStreamModule.setTopRightBtn && FusionStreamModule.setTopRightBtn({txt: ''});
//     })
//   },
//   mounted() {

//   },
//   methods: {}
// };
// </script>

// <style lang="stylus">
//     @import '../../common/css/common.styl';
//     .rule-list
//         ul {
//             padding-bottom 40px
//             box-sizing border-box

//             >li {
//                 padding 0 16px
//                 box-sizing border-box
//                 header, p {
//                     display block
//                     font-size 14px
//                     color #000
//                     margin-top 20px
//                  }
//                  p {
//                      color #666
//                      margin-top 6px
//                      line-height 16px
//                  }

//                  ul {
//                      > li {
//                          margin-top 6px
//                          padding 0
//                          font-size 14px
//                          color #666
//                          line-height 16px
//                      }
//                  }
//             }
//         }
// </style>

// `)
