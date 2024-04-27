"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "TabBar",
  props: {
    tagList: { default: () => [] }
  },
  setup(__props) {
    const tabIndex = common_vendor.ref(0);
    function handleTabItemClick(item, index) {
      tabIndex.value = index;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(_ctx.tagList, (tag, index, i0) => {
          return {
            a: common_vendor.t(tag.name),
            b: index === tabIndex.value ? 1 : "",
            c: tag,
            d: common_vendor.o(($event) => handleTabItemClick(tag, index), tag)
          };
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/hgyn23.mp/components/TabBar/TabBar.vue"]]);
wx.createComponent(Component);
