"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "NavBar",
  setup(__props) {
    const statusHeight = common_vendor.ref(40);
    const marginRight = common_vendor.ref(0);
    function initStatusBarHeight() {
      const systemInfo = common_vendor.index.getSystemInfoSync();
      statusHeight.value = systemInfo.statusBarHeight ? systemInfo.statusBarHeight * 2 : 20;
      const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
      marginRight.value = menuButtonInfo.width * 2;
      statusHeight.value = menuButtonInfo.top * 2;
    }
    function goSearchPage() {
      common_vendor.index.navigateTo({
        url: "/pages/search/index"
      });
    }
    common_vendor.onLoad(() => {
      initStatusBarHeight();
    });
    return (_ctx, _cache) => {
      return {
        a: statusHeight.value + "rpx",
        b: common_vendor.p({
          type: "search",
          color: "#999"
        }),
        c: common_vendor.o(goSearchPage),
        d: marginRight.value + "rpx",
        e: 80 + statusHeight.value + "rpx"
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9367190c"], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/hgyn23.mp/components/NavBar/NavBar.vue"]]);
wx.createComponent(Component);
