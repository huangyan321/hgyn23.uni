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
  __name: "PostPageItem",
  props: {
    postItem: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a;
      return {
        a: common_vendor.t(((_a = _ctx.postItem) == null ? void 0 : _a.title) || ""),
        b: common_vendor.p({
          type: "fire-filled",
          color: "rgb(248,113,113)"
        }),
        c: common_vendor.t(_ctx.postItem.description)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8c254e9b"], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/hgyn23.mp/components/PostPage/PostPageItem.vue"]]);
wx.createComponent(Component);
