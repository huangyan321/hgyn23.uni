"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
require("../../utils/request/index.js");
require("../../utils/request/config.js");
require("../../js_sdk/luch-request/luch-request/core/Request.js");
require("../../js_sdk/luch-request/luch-request/core/dispatchRequest.js");
require("../../js_sdk/luch-request/luch-request/adapters/index.js");
require("../../js_sdk/luch-request/luch-request/helpers/buildURL.js");
require("../../js_sdk/luch-request/luch-request/utils.js");
require("../../js_sdk/luch-request/luch-request/core/buildFullPath.js");
require("../../js_sdk/luch-request/luch-request/helpers/isAbsoluteURL.js");
require("../../js_sdk/luch-request/luch-request/helpers/combineURLs.js");
require("../../js_sdk/luch-request/luch-request/core/settle.js");
require("../../js_sdk/luch-request/luch-request/core/InterceptorManager.js");
require("../../js_sdk/luch-request/luch-request/core/mergeConfig.js");
require("../../js_sdk/luch-request/luch-request/core/defaults.js");
require("../../js_sdk/luch-request/luch-request/utils/clone.js");
if (!Array) {
  const _easycom_NavBar2 = common_vendor.resolveComponent("NavBar");
  const _easycom_TabBar2 = common_vendor.resolveComponent("TabBar");
  (_easycom_NavBar2 + _easycom_TabBar2)();
}
const _easycom_NavBar = () => "../../components/NavBar/NavBar.js";
const _easycom_TabBar = () => "../../components/TabBar/TabBar.js";
if (!Math) {
  (_easycom_NavBar + _easycom_TabBar)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const tagList = common_vendor.ref([]);
    common_vendor.onLoad(async () => {
      const res = await api_index.getPosts();
      tagList.value = res.data.records;
    });
    const title = common_vendor.ref("title");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["tag-list"]: tagList.value
        }),
        b: common_vendor.t(title.value)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-db5b8b6c"], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/hgyn23.mp/pages/posts/index.vue"]]);
wx.createPage(MiniProgramPage);
