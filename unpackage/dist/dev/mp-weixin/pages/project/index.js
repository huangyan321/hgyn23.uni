"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_mock_index = require("../../utils/mock/index.js");
require("../../utils/mock/archives.js");
require("../../utils/mock/postlist.js");
require("../../utils/mock/category.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const dataList = common_vendor.ref([]);
    async function load() {
      const res = await utils_mock_index.getMock("archives");
      dataList.value = res.data.records;
    }
    common_vendor.onLoad(load);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !dataList.value.length
      }, !dataList.value.length ? {} : {});
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-47879d53"], ["__file", "C:/Users/16045/Desktop/code/my-project/hgyn23.uni/pages/project/index.vue"]]);
wx.createPage(MiniProgramPage);
