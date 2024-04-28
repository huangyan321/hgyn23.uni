"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "PostPageItem",
  props: {
    postItem: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(_ctx.postItem.content)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8c254e9b"], ["__file", "C:/Users/16045/Desktop/code/my-project/hgyn23.uni/components/PostPage/PostPageItem.vue"]]);
wx.createComponent(Component);
