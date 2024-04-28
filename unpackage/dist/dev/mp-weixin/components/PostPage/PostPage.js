"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "PostPage",
  props: {
    tabId: {}
  },
  setup(__props, { expose: __expose }) {
    const dataList = common_vendor.ref([]);
    function loadData() {
      console.log("loadData");
    }
    __expose({ loadData, dataList });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(_ctx.tabId)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/16045/Desktop/code/my-project/hgyn23.uni/components/PostPage/PostPage.vue"]]);
wx.createComponent(Component);
