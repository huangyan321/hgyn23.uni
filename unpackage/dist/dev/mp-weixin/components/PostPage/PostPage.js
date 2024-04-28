"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  PostPageItem();
}
const PostPageItem = () => "./PostPageItem.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "PostPage",
  props: {
    tabId: {}
  },
  setup(__props, { expose: __expose }) {
    const dataList = common_vendor.ref([{ id: 1, content: "这是一篇文章" }]);
    function loadData() {
      console.log("loadData");
    }
    function goDetail(item) {
    }
    function loadMore() {
    }
    common_vendor.ref(false);
    __expose({ loadData, dataList });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(dataList.value, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => goDetail(), item.id),
            b: "a92be00f-0-" + i0,
            c: common_vendor.p({
              ["post-item"]: item
            }),
            d: item.id
          };
        }),
        b: common_vendor.o(($event) => loadMore())
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a92be00f"], ["__file", "C:/Users/16045/Desktop/code/my-project/hgyn23.uni/components/PostPage/PostPage.vue"]]);
wx.createComponent(Component);
