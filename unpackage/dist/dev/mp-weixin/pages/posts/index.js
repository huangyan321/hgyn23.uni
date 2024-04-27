"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("title");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/hgyn23.mp/pages/posts/index.vue"]]);
wx.createPage(MiniProgramPage);
